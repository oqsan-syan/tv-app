import { useSelector } from 'react-redux';

import { Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { selectMovieState, selectPlayVideo } from 'store/slices/moviesSlice';

import { getImagePath } from 'utils/imageUtils';
import { formatMovieDuration } from 'utils/formatDuration';

import {
  ButtonsContainer,
  Content,
  Description,
  MainVideoContainer,
  MoreInfoButton,
  PlayButton,
} from './style';

const MainFeaturedVideo: React.FC = () => {
  const { featuredData } = useSelector(selectMovieState);
  const playVideo = useSelector(selectPlayVideo);

  return (
    <MainVideoContainer url={featuredData.CoverImage}>
      {playVideo && (
        <video autoPlay muted loop className='wrapper-video'>
          <source src={featuredData.VideoUrl} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}

      <Content>
        <Typography variant='h6'>{featuredData.Category}</Typography>
        <img src={getImagePath(featuredData.TitleImage)} alt={featuredData.Title} />
        <Description>
          {featuredData.ReleaseYear}
          {'  '}
          {featuredData.MpaRating}
          {'  '}
          {formatMovieDuration(+featuredData.Duration)}
        </Description>
        <Description>{featuredData.Description}</Description>
        <ButtonsContainer>
          <PlayButton>
            <PlayArrowIcon />
            <Typography>Play</Typography>
          </PlayButton>
          <MoreInfoButton>
            <Typography>More Info</Typography>
          </MoreInfoButton>
        </ButtonsContainer>
      </Content>
    </MainVideoContainer>
  );
};

export default MainFeaturedVideo;
