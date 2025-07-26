import { Box, Typography, styled } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 500,
  lineHeight: '38px',
  color: theme.palette.text.primary,
  marginBottom: '15px',

  [theme.breakpoints.down('lg')]: {
    fontSize: '28px',
    lineHeight: '34px',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '30px',
    marginBottom: '12px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    lineHeight: '26px',
    marginBottom: '10px',
  },
}));

export const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    overflow: 'hidden',
  },
}));

export const CarouselWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  overflow: 'hidden',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',

  [theme.breakpoints.down('lg')]: {
    padding: '0 30px',
  },

  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '0 10px',
  },
}));

export const CarouselTrack = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '16px',
  width: 'fit-content',

  [theme.breakpoints.down('lg')]: {
    gap: '12px',
  },

  [theme.breakpoints.down('md')]: {
    gap: '8px',
  },

  [theme.breakpoints.down('sm')]: {
    gap: '6px',
  },
}));

export const CarouselItem = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  borderRadius: '8px',
  overflow: 'hidden',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  flexShrink: 0,
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '&:focus': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px',
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px',
  },
  img: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '8px',
    pointerEvents: 'none',
    maxWidth: '200px',
  },

  [theme.breakpoints.down('lg')]: {
    img: {
      maxWidth: '160px',
    },
  },

  [theme.breakpoints.down('md')]: {
    img: {
      maxWidth: '120px',
    },
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },

  [theme.breakpoints.down('sm')]: {
    img: {
      maxWidth: '100px',
    },
  },
}));