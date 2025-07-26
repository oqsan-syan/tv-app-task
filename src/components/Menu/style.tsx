import {
  Avatar,
  Box,
  BoxProps,
  Grid,
  GridProps,
  IconButton,
  IconButtonProps,
  Typography,
  TypographyProps,
  styled,
} from '@mui/material';

interface MenuIconButtonProps extends IconButtonProps {
  active?: boolean;
}

interface MenuItemTextProps extends TypographyProps {
  active?: boolean;
}

interface MenuItemContainerProps extends BoxProps {
  active?: boolean;
}

interface MainMenuProps extends GridProps {
  isHovered?: boolean;
}

interface MenuExpandedContainrProps extends BoxProps {
  isHovered?: boolean;
}

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#040404',
  height: '100%',
  position: 'relative',
  zIndex: 10,

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px',
    position: 'static',
  },
}));

export const MainMenu = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'isHovered',
})<MainMenuProps>(({ isHovered, theme }) => ({
  width: '136px',
  paddingTop: '192px',
  paddingLeft: '34px',
  paddingRight: '20px',
  backgroundColor: 'rgb(4, 4, 4)',
  opacity: isHovered ? 0 : 1,
  transform: isHovered ? 'translateX(-100%)' : 'translateX(0)',
  transition: 'all 0.5s ease-out',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,

  [theme.breakpoints.down('lg')]: {
    width: '100px',
    paddingLeft: '20px',
    paddingRight: '10px',
  },

  [theme.breakpoints.down('md')]: {
    width: 'auto',
    height: 'auto',
    padding: '0',
    position: 'static',
    transform: 'none',
    opacity: 1,
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    overflow: 'auto',
  },
}));

export const MenuIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<MenuIconButtonProps>(({ active, theme }) => ({
  width: '82px',
  height: '82px',
  borderRadius: '41px',
  backgroundColor: `${active ? 'rgba(59, 72, 109, 0.56)' : 'inherit'}`,
  img: {
    width: '30px',
    filter: active ? 'brightness(1.2)' : 'brightness(1)',
  },
  ':hover': {
    backgroundColor: 'rgba(59, 72, 109, 0.8)',
    img: {
      filter: 'brightness(1.2)',
    },
  },
  transition: 'all 0.2s ease-out',

  [theme.breakpoints.down('lg')]: {
    width: '60px',
    height: '60px',
    borderRadius: '30px',
    img: {
      width: '24px',
    },
  },

  [theme.breakpoints.down('md')]: {
    width: '50px',
    height: '50px',
    borderRadius: '25px',
    minWidth: '50px',
    img: {
      width: '20px',
    },
  },
}));

export const ExpandedMenuIconButton = styled(IconButton)<MenuIconButtonProps>(({ theme }) => ({
  width: '82px',
  height: '72px',
  borderRadius: '41px',
  img: {
    width: '30px',
  },
  ':hover': {
    backgroundColor: 'inherit',
  },

  [theme.breakpoints.down('lg')]: {
    width: '60px',
    height: '50px',
    img: {
      width: '24px',
    },
  },
}));

export const MenuItemText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'active',
})<MenuItemTextProps>(({ theme, active }) => ({
  font: active ? 'normal normal bold 36px/43px Tajawal' : 'normal normal normal 36px/43px Tajawal',
  color: theme.palette.text.primary,
  marginTop: '8px',

  [theme.breakpoints.down('lg')]: {
    fontSize: '28px',
    lineHeight: '34px',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '30px',
  },
}));

export const UserName = styled(Typography)(({ theme }) => ({
  font: 'normal normal bold 32px/30px Tajawal',
  letterSpacing: '-0.32px',
  color: theme.palette.text.primary,
  marginTop: '8px',

  [theme.breakpoints.down('lg')]: {
    fontSize: '28px',
    lineHeight: '26px',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '22px',
  },
}));

export const MenuItemContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<MenuItemContainerProps>(({ theme, active }) => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  width: '312px',
  height: '72px',
  background: active ? theme.palette.secondary.main : 'inherit',
  borderRadius: '12px',
  ':hover': {
    background: theme.palette.secondary.main,
    opacity: '0.8',
  },
  transition: 'all 0.2s ease-out',

  [theme.breakpoints.down('lg')]: {
    width: '280px',
    height: '60px',
    gap: '15px',
  },

  [theme.breakpoints.down('md')]: {
    width: '250px',
    height: '50px',
    gap: '10px',
  },
}));

export const AdditionalMenuContainer = styled(Box)(({ theme }) => ({
  paddingLeft: '22px',
  h6: {
    cursor: 'pointer',
    transition: 'all 0.2s ease-out',
    ':hover': {
      textDecoration: 'underline',
      color: '#FFFFFF',
      transform: 'translateX(4px)',
    },
  },

  [theme.breakpoints.down('lg')]: {
    paddingLeft: '15px',
  },

  [theme.breakpoints.down('md')]: {
    paddingLeft: '10px',
    display: 'none',
  },
}));

export const CustomAvatar = styled(Avatar)(({ theme }) => ({
  width: '82px',
  height: '82px',
  transition: 'all 0.2s ease-out',
  ':hover': {
    transform: 'scale(1.05)',
  },

  [theme.breakpoints.down('lg')]: {
    width: '60px',
    height: '60px',
  },

  [theme.breakpoints.down('md')]: {
    width: '50px',
    height: '50px',
  },
}));

export const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '20px',
  marginBottom: '50px',

  [theme.breakpoints.down('lg')]: {
    columnGap: '15px',
    marginBottom: '30px',
  },

  [theme.breakpoints.down('md')]: {
    columnGap: '10px',
    marginBottom: '0',
  },
}));

export const MenuExpandedContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isHovered',
})<MenuExpandedContainrProps>(
  ({ theme, isHovered }) => ({
    width: '470px',
    height: '100%',
    padding: '60px 120px 65px 38px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'linear-gradient(to right, rgba(4, 4, 4, 0.95) 0%, rgba(4, 4, 4, 0.85) 70%, rgba(4, 4, 4, 0.3) 90%, transparent 100%)',
    backdropFilter: 'blur(8px)',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: isHovered ? 1 : 0,
    transform: `translateX(${isHovered ? 0 : '-100%'})`,
    transition: 'all 0.5s ease-out',
    zIndex: 2,
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      width: '50px',
      height: '100%',
      background: 'linear-gradient(to right, transparent 0%, rgba(4, 4, 4, 0.1) 100%)',
      filter: 'blur(30px)',
      pointerEvents: 'none',
    },

    [theme.breakpoints.down('lg')]: {
      width: '470px',
      padding: '40px 120px 45px 25px',
      '&::after': {
        width: '40px',
        filter: 'blur(12px)',
      },
    },

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }),
);
