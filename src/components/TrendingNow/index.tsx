import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import { selectMovieState } from 'store/slices/moviesSlice';

import TrendingCarousel from './TrendingCarousel';

import { Title } from './style';

const TrendingNowSection: React.FC = () => {
  const { trendingNowData } = useSelector(selectMovieState);
  const [lastClickedMovieId, setLastClickedMovieId] = useState<string | null>(null);
  const maxVideosCount = 50;

  const returnSortedVideos = () => {
    const sortedVideos = [...trendingNowData].sort(
      (a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime(),
    );

    if (lastClickedMovieId) {
      const lastClickedMovieIndex = sortedVideos.findIndex(
        (video) => video.Id === lastClickedMovieId,
      );

      return [
        ...sortedVideos.slice(lastClickedMovieIndex, Math.min(sortedVideos.length, maxVideosCount)),
        ...sortedVideos.slice(0, lastClickedMovieIndex),
      ];
    } else {
      return sortedVideos.slice(0, Math.min(sortedVideos.length, maxVideosCount));
    }
  };

  useEffect(() => {
    const storedId = sessionStorage.getItem('lastClickedMovieId');
    setLastClickedMovieId(storedId);
  }, []);

  return (
    <Box mt={4}>
      <Title>Trending Now</Title>
      <TrendingCarousel trendingVideos={returnSortedVideos()} />
    </Box>
  );
};

export default TrendingNowSection;
