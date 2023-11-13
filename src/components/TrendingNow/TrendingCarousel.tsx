import { FC } from 'react';
import { useDispatch } from 'react-redux';
import Slider, { Settings } from 'react-slick';

import { Movie } from 'types';

import { selectMovie, setPlayVideo } from 'store/slices/moviesSlice';
import { getImagePath } from 'utils/imageUtils';

import { CarouselItem } from './style';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings: Settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 8,
  draggable: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface TrendingCarouselProps {
  trendingVideos: Movie[];
}

const TrendingCarousel: FC<TrendingCarouselProps> = ({ trendingVideos }) => {
  const dispatch = useDispatch();

  const handleSelectMovie = (movie: Movie) => {
    dispatch(selectMovie(movie));

    setTimeout(() => {
      dispatch(setPlayVideo());
    }, 2000);

    sessionStorage.setItem('lastClickedMovieId', movie.Id);
  };

  return (
    <Slider {...settings}>
      {trendingVideos.map((movie: Movie) => (
        <CarouselItem key={movie.Id} onClick={() => handleSelectMovie(movie)}>
          <img src={getImagePath(movie.CoverImage)} alt={movie.Title} />
        </CarouselItem>
      ))}
    </Slider>
  );
};

export default TrendingCarousel;
