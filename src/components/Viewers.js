import React from 'react'
import styled from 'styled-components';
import HoverVideoPlayer from 'react-hover-video-player';


function Viewers() {

  return (
    <Container>
    <Shadow>
<Box>
<HoverVideoPlayer videoSrc="/videos/1564674844-disney.mp4"
sizingMode="overlay"
videoId="hover-video"
 hoverOverlayWrapperClassName="hover-overlay-wrapper"
 videoClassName='video'
hoverOverlayWrapperStyle={{
  }}
pausedOverlayWrapperStyle={{
    background: 'linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42))',
    borderRadius: '5px',
  }}
pausedOverlay={
    <img src="/images/viewers-disney.png" 
    />
}
 />
</Box>
</Shadow>
    <Shadow>
<Box>
<HoverVideoPlayer videoSrc="/videos/1564676714-pixar.mp4"
sizingMode="overlay"
videoClassName='video'
hoverOverlayWrapperStyle={{
  }}
pausedOverlayWrapperStyle={{
    background: 'linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42))',
    borderRadius: '5px'
    
  }}
pausedOverlay={
    <img src="/images/viewers-pixar.png" 
    />
}
 />
</Box>
</Shadow>
    <Shadow>
<Box>
<HoverVideoPlayer videoSrc="/videos/1564676115-marvel.mp4"
sizingMode="overlay"
videoClassName='video'
hoverOverlayWrapperStyle={{
  }}
pausedOverlayWrapperStyle={{
    background: 'linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42))',
    borderRadius: '5px'
    
  }}
pausedOverlay={
    <img src="/images/viewers-marvel.png" 
    />
}
 />
</Box>
</Shadow>
    <Shadow>
<Box>
<HoverVideoPlayer videoSrc="/videos/1608229455-star-wars.mp4"
sizingMode="overlay"
videoClassName='video'
hoverOverlayWrapperStyle={{
  }}
pausedOverlayWrapperStyle={{
    background: 'linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42))',
    borderRadius: '5px'
    
  }}
pausedOverlay={
    <img src="/images/viewers-starwars.png" 
    />
}
 />
</Box>
</Shadow>
    <Shadow>
<Box>
<HoverVideoPlayer videoSrc="/videos/1564676296-national-geographic.mp4"
sizingMode="overlay"
videoClassName='video'
hoverOverlayWrapperStyle={{
  }}
pausedOverlayWrapperStyle={{
    background: 'linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42))',
    borderRadius: '5px'
    
  }}
pausedOverlay={
    <img src="/images/viewers-national.png" 
    />
}
 />
</Box>
</Shadow>

    </Container>
  )
}

export default Viewers

const Container = styled.div`
margin-top: 30px;
display: grid;
padding: 30px 0px 26px;
grid-gap: 25px;
grid-template-columns: repeat(5,minmax(0, 1fr));
margin-left: 20px;
`
const Shadow = styled.div`
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
height: 95%;
max-height: 300px;


&:hover{
    box-shadow: rgb(0 0 0 / 69%) 10px 26px 60px -10px, rgb(0 0 0 / 90%) 0px 20px 30px -10px;

}
`
const Box = styled.div`
   outline: 3px solid rgba(249,249,249, 0.1);
   border-radius: 5px;
   overflow:hidden;
   width:100%;
   height 100%;
   max-height: 300px;
.hover-overlay-wrapper{
    display:unset !important;
}
.hover-video{
    display:unset !important;
}
img{
    width:100% ;
    height:100% ;
    border-radius: 5px;
    object-fit: cover;
}
.video{
    height: 100% ;
    width:100% ;
    border-radius: 5px;
    object-fit: cover;
}
&:hover{
        outline: 3px solid rgba(249,249,249, 0.9);
        transform: scale(1.09);

    }

`

const Wrap = styled.div`
border: 3px solid rgba(249,249,249, 0.1);
border-radius: 10px;
cursor:pointer;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;



img{
    width:100%;
    height: 100%;
    object-fit: cover;
}

&:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgb(249,249,249, 0.8);
}
`
