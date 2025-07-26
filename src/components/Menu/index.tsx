import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import { menuItems } from 'constants/menuItems';
import { selectIsHovered, toggleMenu, setMenuOpen, setMenuClosed } from 'store/slices/moviesSlice';

import MenuExpanded from './MenuExpanded';

import { Container, MainMenu, MenuIconButton } from './style';

const Menu: FC = () => {
  const dispatch = useDispatch();
  const isHovered = useSelector(selectIsHovered);

  const handleMouseEnter = useCallback(() => {
    dispatch(setMenuOpen());
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTimeout(() => {
      dispatch(setMenuClosed());
    }, 100);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      dispatch(toggleMenu());
    }
  }, []);

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="navigation"
      aria-label="Main navigation menu"
    >
      <MenuExpanded isHovered={isHovered} />
      <MainMenu container isHovered={isHovered}>
        {menuItems.map((item, index) => {
          const props = { active: item.active };
          return (
            <Grid key={index}>
              <MenuIconButton
                {...props}
                aria-label={item.title}
                role="menuitem"
              >
                <img src={item.icon} alt={`${item.title} icon`} />
              </MenuIconButton>
            </Grid>
          );
        })}
      </MainMenu>
    </Container>
  );
};

export default Menu;
