import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectIsHovered } from 'store/slices/moviesSlice';

import MainFeaturedVideo from 'components/MainFeaturedVideo';
import TrendingNowSection from 'components/TrendingNow';

import { Container, Wrapper } from './style';

const MainContent: FC = () => {
  const isHovered = useSelector(selectIsHovered);

  return (
    <Container>
      <MainFeaturedVideo />
      <TrendingNowSection />
      {isHovered && <Wrapper isHovered={isHovered} />}
    </Container>
  );
};
export default MainContent;
