import { useSelector, useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';

import { Typography, CircularProgress } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import { selectMovieState, selectPlayVideo, setPlayVideo, setPauseVideo } from 'store/slices/moviesSlice';

import { getImagePath } from 'utils/imageUtils';
import { formatMovieDuration } from 'utils/formatDuration';

import {
  ButtonsContainer,
  Content,
  Description,
  MainVideoContainer,
  MoreInfoButton,
  PlayButton,
  VideoOverlay,
  VideoErrorContainer,
} from './style';

const MainFeaturedVideo: React.FC = () => {
  const dispatch = useDispatch();
  const { featuredData } = useSelector(selectMovieState);
  const playVideo = useSelector(selectPlayVideo);
  const [isLoading, setIsLoading] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handlePlayClick = useCallback(() => {
    if (videoError) {
      setVideoError(false);
      setIsVideoLoaded(false);
    }

    setIsLoading(true);

    // Simulate loading delay before starting video
    setTimeout(() => {
      setIsLoading(false);
      dispatch(setPlayVideo());
    }, 1000);
  }, [videoError]);

  const handlePauseClick = useCallback(() => {
    dispatch(setPauseVideo());
  }, []);

  const handleVideoError = useCallback(() => {
    setVideoError(true);
    setIsLoading(false);
    setIsVideoLoaded(false);
  }, []);

  const handleVideoLoad = useCallback(() => {
    setIsLoading(false);
    setIsVideoLoaded(true);
    setVideoError(false);
  }, []);

  const showVideo = playVideo && featuredData.VideoUrl && !videoError && isVideoLoaded;

  return (
    <MainVideoContainer url={featuredData.CoverImage}>
      {showVideo && (
        <VideoOverlay>
          <video
            autoPlay
            muted
            loop
            className='wrapper-video'
            onError={handleVideoError}
            onLoadedData={handleVideoLoad}
            aria-label={`Playing ${featuredData.Title}`}
          >
            <source src={featuredData.VideoUrl} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </VideoOverlay>
      )}

      {videoError && (
        <VideoErrorContainer>
          <Typography variant="h6" color="error" gutterBottom>
            Unable to load video
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Please try again or continue with the cover image
          </Typography>
        </VideoErrorContainer>
      )}

      <Content>
        <Typography variant='h6' component="h2">
          {featuredData.Category}
        </Typography>
        <img
          src={getImagePath(featuredData.TitleImage)}
          alt={`${featuredData.Title} title`}
          loading="lazy"
        />
        <Description>
          {featuredData.ReleaseYear}
          {'  '}
          {featuredData.MpaRating}
          {'  '}
          {formatMovieDuration(+featuredData.Duration)}
        </Description>
        <Description>{featuredData.Description}</Description>
        <ButtonsContainer>
          <PlayButton
            onClick={playVideo ? handlePauseClick : handlePlayClick}
            disabled={isLoading}
            aria-label={playVideo ? `Pause ${featuredData.Title}` : `Play ${featuredData.Title}`}
          >
            {isLoading ? (
              <CircularProgress size={36} color="inherit" />
            ) : playVideo ? (
              <PauseIcon />
            ) : (
              <PlayArrowIcon />
            )}
            <Typography>
              {isLoading ? 'Loading...' : playVideo ? 'Pause' : 'Play'}
            </Typography>
          </PlayButton>
          <MoreInfoButton aria-label={`More information about ${featuredData.Title}`}>
            <Typography>More Info</Typography>
          </MoreInfoButton>
        </ButtonsContainer>
      </Content>
    </MainVideoContainer>
  );
};

export default MainFeaturedVideo;
