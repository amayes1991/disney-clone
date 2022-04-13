import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import {db} from '../firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

import DetailInfo from './DetailInfo';
import {Link} from "react-router-dom";

function Detail2() {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(()=>{

        const docRef = doc(db, "movies", id);
        getDoc(docRef).then((doc)=>{
            if(doc.exists){
             setMovie(doc.data());
            }else{
     
            }
         })
    }, [])



    const {backgroundImg, titleImg, desc, subtitle, genre} = movie;
console.log(backgroundImg)

  return (
    <Container>
        <Background>
            <img src={backgroundImg} />
        </Background>
        <ImageTitle>
            <img src={titleImg} />
        </ImageTitle>
        <Subsection>
        <SubTitle>
    {subtitle}
</SubTitle>
<Genre>
{genre}
</Genre>
</Subsection>

        <Controls>
        <PlayButton>
        <img src="/images/play-icon-black.png" />
        <span>PLAY</span>

        </PlayButton>
        <TrailerButton>
        <img src="/images/play-icon-white.png" />
        <span>Trailer</span>
        </TrailerButton>
        <AddButton>
        <span>+</span>
        </AddButton>
        <GroupWatchButton>
<img src="/images/group-icon.png" />
        </GroupWatchButton>

        </Controls>

<Descriptions>
{desc}
</Descriptions>

<DetailInfo />

    </Container>
  )
} 

export default Detail2

const Container = styled.div`
min-height: calc(100vh -70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`
const Genre = styled.div`
font-size: 13px;
margin-bottom: 20px;

`

const Subsection = styled.div`
`

const Background = styled.div`
position: fixed;
top:0;
left: 0;
bottom: 0;
right: 0;
z-index:-1;
opacity: 0.8;

img{
    width:100%;
    transform: scaleY(1);
    object-fit: cover;
    ${'' /* outline: 40px solid rgba(100,100,100, .1);  */}
    box-shadow: 0 0 8px 8px #040714;
}
`
const ImageTitle = styled.div`
${'' /* opacity: .5; */}
height: 20vh;
min-height: 170px;
width: 20vh;
min-width: 200px;
margin-top: 60px;

img{
    width:100%;
    height: 100%;
    object-fit: contain
}
`

const Controls = styled.div`
display:flex;
align-items:center;
`

const PlayButton = styled.button`
border-radius: 4px;
padding: 0 24px;
margin-right: 22px;
font-size: 15px;
display:flex;
align-items: center;
height: 56px;
background: rgb(249,249,249);
letter-spacing: 1.8px;
cursor:pointer;
border:none;

&:hover{
    background: rgb(198,198,198)
}
`

const TrailerButton = styled(PlayButton)`
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: rgb(249,249,249);
text-transform: uppercase;


`

const AddButton = styled.button`
margin-right:16px;
width:44px;
height: 44px;
display:flex;
align-items: center;
justify-content: center;
border-radius:50%;
border: 2px solid white;
background-color: rgba(0,0,0,0.6);
cursor: pointer;
span{
    font-size: 30px;
    color:white;
}

&:hover{
    background: rgb(198,198,198);
    color:white;
    span{
    font-size: 30px;
    color:black;
}
}
`

const GroupWatchButton = styled(AddButton)`
background: rgb(0,0,0)
`

const SubTitle = styled.div`
color:rgb(249,249,249);
font-size: 13px;
min-height:20px;
margin-top: 26px;
margin-bottom: 5px;
`

const Descriptions = styled.div`
line-height: 1.4;
font-size:20px;
margin-top: 16px;
color: (249,249,249);
max-width: 760px;
`