import { FC, useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import { selectMovieState } from 'store/slices/moviesSlice';

import TrendingCarousel from './TrendingCarousel';

import { Title } from './style';

const TrendingNowSection: FC = () => {
  const { trendingNowData } = useSelector(selectMovieState);
  const [lastClickedMovieId, setLastClickedMovieId] = useState<string | null>(null);
  const maxVideosCount = 50;

  const sortedVideos = useMemo(() => {
    const dateSortedVideos = [...trendingNowData].sort(
      (a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime(),
    );

    // If there's a last clicked movie, put it first
    if (lastClickedMovieId) {
      const lastClickedMovie = dateSortedVideos.find(
        (video) => video.Id === lastClickedMovieId,
      );

      if (lastClickedMovie) {
        // Remove the last clicked movie from its current position
        const videosWithoutLastClicked = dateSortedVideos.filter(
          (video) => video.Id !== lastClickedMovieId,
        );

        // Put the last clicked movie first, then the rest
        return [
          lastClickedMovie,
          ...videosWithoutLastClicked.slice(0, maxVideosCount - 1),
        ];
      }
    }

    // If no last clicked movie or it's not found, return the first 50
    return dateSortedVideos.slice(0, maxVideosCount);
  }, [trendingNowData, lastClickedMovieId, maxVideosCount]);

  useEffect(() => {
    const storedId = sessionStorage.getItem('lastClickedMovieId');
    if (storedId) {
      setLastClickedMovieId(storedId);
    }
  }, []);

  return (
    <Box mt={4}>
      <Title>Trending Now</Title>
      <TrendingCarousel trendingVideos={sortedVideos} />
    </Box>
  );
};

export default TrendingNowSection;
