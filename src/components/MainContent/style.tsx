import { Box, BoxProps, styled } from '@mui/material';

interface WrapperProps extends BoxProps {
  isHovered: boolean;
}

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  paddingLeft: '20px',
  position: 'relative',
  marginLeft: '156px',

  [theme.breakpoints.down('lg')]: {
    marginLeft: '120px',
    paddingLeft: '15px',
  },

  [theme.breakpoints.down('md')]: {
    marginLeft: '0',
    paddingLeft: '10px',
    paddingRight: '10px',
  },

  [theme.breakpoints.down('sm')]: {
    paddingLeft: '5px',
    paddingRight: '5px',
  },
}));

export const Wrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isHovered',
})<WrapperProps>(({ isHovered }) => ({
  content: '""',
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100vh',
  background: 'rgb(4, 4, 4)',
  opacity: isHovered ? 0.5 : 0,
  zIndex: 2,
  transition: 'all 0.5s ease-in',
}));
