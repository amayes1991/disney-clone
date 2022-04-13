import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import {db } from '../firebase';
import{collection, onSnapshot} from "firebase/firestore" 
import {useDispatch} from "react-redux";
import {setMovies} from "../features/movie/moviesSlice";

function Home() {

    const dispatch = useDispatch();

    const moviesRef = collection(db, "movies");

    useEffect(() =>{
        onSnapshot(moviesRef, snapshot =>{
  
            let tempMovies = snapshot.docs.map((doc) =>{
         
                return {id:doc.id, ...doc.data()}
            })
         
            dispatch(setMovies(tempMovies), {type: "movies" })
        })
    }, [])


  return (
    <Container>



    <ImgSlider />


    <Viewers />

    <Movies title = "Recommended For You"/>
    <Movies title = "New to Disney+"/>
    <Movies title = "Trending"/>
    </Container>
  )
}

export default Home

const Container = styled.main`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
background: url("/images/home-background.png") center center / cover no-repeat fixed;
overflow-x: hidden;

&:before{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;

    content:"";
    position: abosolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}
`

