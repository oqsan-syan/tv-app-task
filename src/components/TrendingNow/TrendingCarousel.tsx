import { FC, useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme, useMediaQuery } from '@mui/material';

import { Movie } from 'types';

import { selectMovie, setPlayVideo } from 'store/slices/moviesSlice';
import { getImagePath } from 'utils/imageUtils';

import { CarouselItem, CarouselContainer, CarouselWrapper, CarouselTrack } from './style';

interface TrendingCarouselProps {
  trendingVideos: Movie[];
}

const TrendingCarousel: FC<TrendingCarouselProps> = ({ trendingVideos }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mouseStart, setMouseStart] = useState<number | null>(null);
  const [mouseEnd, setMouseEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Responsive breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.down('lg'));

  // Determine items to show based on screen size
  const getItemsToShow = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    if (isDesktop) return 3;
    return 8;
  };

  const itemsToShow = getItemsToShow();
  const itemsToScroll = Math.min(itemsToShow, 4);
  const maxIndex = Math.max(0, trendingVideos.length - itemsToShow);

  // Minimum distance for swipe/drag
  const minSwipeDistance = 50;

  useEffect(() => {
    const updateItemWidth = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const newItemWidth = (containerWidth - (itemsToShow - 1) * 16) / itemsToShow; // 16px gap between items
        setItemWidth(newItemWidth);
      }
    };

    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    return () => window.removeEventListener('resize', updateItemWidth);
  }, [itemsToShow]);

  // Reset current index when screen size changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsToShow]);

  const handleSelectMovie = (movie: Movie) => {
    // Don't select movie if we're dragging
    if (isDragging) return;

    dispatch(selectMovie(movie));

    setTimeout(() => {
      dispatch(setPlayVideo());
    }, 2000);

    sessionStorage.setItem('lastClickedMovieId', movie.Id);
  };

  const handleKeyDown = (event: React.KeyboardEvent, movie: Movie) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSelectMovie(movie);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - itemsToScroll));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + itemsToScroll));
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < maxIndex) {
      goToNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      goToPrevious();
    }
  };

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setMouseEnd(null);
    setMouseStart(e.clientX);
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!mouseStart) return;
    setMouseEnd(e.clientX);

    // Set dragging flag if mouse has moved significantly
    const distance = Math.abs(mouseStart - e.clientX);
    if (distance > 10) {
      setIsDragging(true);
    }
  };

  const onMouseUp = () => {
    if (!mouseStart || !mouseEnd) {
      setMouseStart(null);
      setIsDragging(false);
      return;
    }

    const distance = mouseStart - mouseEnd;
    const isLeftDrag = distance > minSwipeDistance;
    const isRightDrag = distance < -minSwipeDistance;

    if (isLeftDrag && currentIndex < maxIndex) {
      goToNext();
    }
    if (isRightDrag && currentIndex > 0) {
      goToPrevious();
    }

    setMouseStart(null);
    setMouseEnd(null);

    setTimeout(() => setIsDragging(false), 100);
  };

  const onWheel = (e: React.WheelEvent) => {
    const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey;

    if (isHorizontalScroll) {
      const delta = e.deltaX || e.deltaY;

      if (delta > 0 && currentIndex < maxIndex) {
        goToNext();
      } else if (delta < 0 && currentIndex > 0) {
        goToPrevious();
      }
    }
  };

  const translateX = currentIndex * (itemWidth + 16);

  return (
    <CarouselContainer>
      <CarouselWrapper
        ref={carouselRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={() => {
          setMouseStart(null);
          setMouseEnd(null);
          setTimeout(() => setIsDragging(false), 100);
        }}
        onWheel={onWheel}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <CarouselTrack
          ref={trackRef}
          style={{
            transform: `translateX(-${translateX}px)`,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          {trendingVideos.map((movie: Movie) => (
            <CarouselItem
              key={movie.Id}
              onClick={() => handleSelectMovie(movie)}
              onKeyDown={(e) => handleKeyDown(e, movie)}
              tabIndex={0}
              role="button"
              aria-label={`Select ${movie.Title}`}
              style={{ width: `${itemWidth}px`, flexShrink: 0 }}
            >
              <img
                src={getImagePath(movie.CoverImage)}
                alt={`${movie.Title} cover`}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px'
                }}
              />
            </CarouselItem>
          ))}
        </CarouselTrack>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default TrendingCarousel;
