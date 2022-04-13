import React, {useState, useEffect} from 'react';
import {auth, provider} from '../firebase'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

function Header() {


    useEffect(()=>{
     onAuthStateChanged(auth, (user)=>{
           if(user){
            setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
            setIsLoggedIn(true)
            navagate('/home')
           } 
        })

    },[])
    const navagate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [userLogin, setUserLogin] = useState({
        name: null,
        email: null,
        photo: null
    });

    const [userSightout, setUserSignout] = useState({
        name: null,
        email: null,
        photo: null

    })

    const signIn = () =>{
        signInWithPopup(auth, provider).then((result) =>{
            const user = result.user;

            console.log(user)
            setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
            setIsLoggedIn(true)
            navagate('/home')
        })
        
    }

    const signOut = () =>{
        auth.signOut().then(() =>{
            setUserSignout()
            navagate('/')
        })
        setIsLoggedIn(false)
    }

    console.log(userLogin)
  return (
    <Nav>
    <Logo src="/images/logo.svg" />
    { !isLoggedIn ?
   ( <LoginContainer>
    <Login onClick={signIn}>Login</Login>
    </LoginContainer>)
  :
    <>
    <NavMenu>
    <a href='/home'><img src = "/images/home-icon.svg" /> <span>HOME</span></a>
    <a><img src = "/images/search-icon.svg" /> <span>SEARCH</span></a>
    <a><img src = "/images/watchlist-icon.svg" /> <span>WATCHLIST</span></a>
    <a><img src = "/images/original-icon.svg" /> <span>ORIGINALS</span></a>
    <a><img src = "/images/movie-icon.svg" /> <span>MOVIES</span></a>
    <a><img src = "/images/series-icon.svg" /> <span>SERIES</span></a>

    </NavMenu>
    <UserImg onClick={signOut} src="/images/preson.jpg" />
    </>
    }

    </Nav>
  )
}

export default Header

const Nav = styled.nav`
height: 70px;
${'' /* background-color: #090613; */}
display: flex;
align-items: center;
padding: 0 36px;
overflow-x: hidden;
`

const Logo = styled.img`
width: 80px;
`

const NavMenu = styled.div`
display: flex;
flex: 1;
margin-left: 20px;
align-items: center;

a{
    display:flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: white;

    img{
        height: 20px;
    }
    span{
        font-size: 13px;
        letter-spacing: 1.42px;
        display: flex;
        flex-direction: column;
        position: relative;

        &:after{
            content: "";
            height: 2px;
            background: white;
            position:absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity:0;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform-origin: left center;

        }
    }
    &:hover {
        span:after {
            transform: scaleX(1);
            opacity:1;
        }
    }
}
`
const UserImg = styled.img`
height: 48px;
width: 48px;
border-radius: 50%;
cursor: pointer;
`

const Login = styled.div`
border: 1px solid #f9f9f9;
padding: 8px 16px;
border-radius: 4px;
letter-spacing: 1.5px;
text-transform: uppercase;
background-color: rgba(0,0,0,0.6);
transition:all 0.2s ease 0s;
cursor:pointer;

&:hover{
    background-color:#f9f9f9;
    color: #000;
    border-color: transparent;
}
`

const LoginContainer = styled.div`
flex:1;
display:flex;
justify-content: flex-end;
`