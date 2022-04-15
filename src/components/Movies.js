import React from 'react';
import styled from 'styled-components';
import {selectMovies} from '../features/movie/moviesSlice';
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Movies({title}) {
    const movies = useSelector(selectMovies);

    let settings = {
        dots:false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        arrows:true     
    }


  return (
    <Container>
    <h3>{title}</h3>
    <Content >
    <Carousel {...settings}>
    {movies && movies.map((movie)=>{
        return(
        <Wrap key={movie.id}>
<Link to={`/detail/${movie.id}`}>
<img src={movie.cardImg} /> 
</Link>
   

    </Wrap>
    )
    })
    }

    

</Carousel>
    </Content>

    </Container>
  )
}

export default Movies

const Container = styled.div`

`

const Carousel = styled(Slider)`

.slickslide{

}
.slick-list{
    overflow: visible;  
}

.slick-next.slick-disabled:before,
.slick-prev.slick-disabled:before {
  display: none;
}
button {
    z-index: 1
}
`

const Content = styled.div`
display:grid;
grid-gap:25px;
grid-template-columns: repeat(1, minmax(0, 1fr));
`

const Wrap = styled.div`
padding:10px;
cursor:pointer;
border-radius: 10px;
overflow:hidden;
border: 4px solid transparent;


img{
    width:100%;
    height: 100%;
    object-fit:cover;
    box-shadow: rgb(0 0 0 / 90%) 0px 16px 10px -10px;
    border-radius: 5px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover{
        transform: scale(1.02);
        outline: 4px solid rgba(249,249,249, 0.9); 
        box-shadow: rgb(0 0 0 / 90%) 0px 30px 20px -10px;
    }
}

`