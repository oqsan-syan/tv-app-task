import { Box, BoxProps, Button, Typography, styled } from '@mui/material';
import { getImagePath } from 'utils/imageUtils';

interface MainVideoContainerProps extends BoxProps {
  url: string;
}

export const MainVideoContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'url',
})<MainVideoContainerProps>(({ url, theme }) => ({
  width: '100%',
  height: '67vh',
  backgroundImage: `
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("${getImagePath(url)}")
  `,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'contain',
  backgroundAttachment: 'scroll',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#1a1a1a',

  [theme.breakpoints.down('lg')]: {
    height: '50vh',
    backgroundSize: 'cover',
  },

  [theme.breakpoints.down('md')]: {
    height: '40vh',
    minHeight: '300px',
  },

  [theme.breakpoints.down('sm')]: {
    height: '35vh',
    minHeight: '250px',
  },
}));

export const VideoOverlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  '& .wrapper-video': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export const VideoErrorContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  maxWidth: '400px',

  [theme.breakpoints.down('md')]: {
    maxWidth: '300px',
    padding: theme.spacing(2),
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  zIndex: 2,
  padding: '0 40px',
  maxWidth: '600px',
  img: {
    marginBottom: '16px',
    maxWidth: '300px',
    height: 'auto',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
    maxWidth: '500px',
    img: {
      maxWidth: '250px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 15px',
    maxWidth: '100%',
    img: {
      maxWidth: '200px',
    },
  },
}));

export const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '18px',
  marginTop: '32px',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '12px',
    marginTop: '20px',
  },

  [theme.breakpoints.down('sm')]: {
    gap: '10px',
    marginTop: '15px',
  },
}));

export const PlayButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '240px',
  height: '72px',
  borderRadius: '40px',
  backgroundColor: theme.palette.text.primary,
  color: '#0C0C0C',
  fontSize: '32px',
  fontWeight: 'bold',
  lineHeight: '30px',
  letterSpacing: '-0.32px',
  textTransform: 'capitalize',
  transition: 'opacity 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.text.primary,
    opacity: 0.7,
  },
  '&:disabled': {
    backgroundColor: theme.palette.text.primary,
    color: '#0C0C0C',
    opacity: 0.8,
  },
  '& .MuiCircularProgress-root': {
    marginRight: '12px',
    color: '#0C0C0C',
  },
  '& svg': {
    fontSize: '40px',
    marginRight: '12px',
  },
  '& .MuiTypography-root': {
    fontSize: '32px',
    fontWeight: 'bold',
    lineHeight: '30px',
    letterSpacing: '-0.32px',
    textTransform: 'capitalize',
  },

  [theme.breakpoints.down('lg')]: {
    width: '200px',
    height: '60px',
    fontSize: '28px',
    '& svg': {
      fontSize: '32px',
      marginRight: '10px',
    },
    '& .MuiTypography-root': {
      fontSize: '28px',
    },
  },

  [theme.breakpoints.down('md')]: {
    width: '180px',
    height: '50px',
    fontSize: '24px',
    borderRadius: '25px',
    '& svg': {
      fontSize: '28px',
      marginRight: '8px',
    },
    '& .MuiTypography-root': {
      fontSize: '24px',
    },
  },

  [theme.breakpoints.down('sm')]: {
    width: '160px',
    height: '45px',
    fontSize: '20px',
    '& svg': {
      fontSize: '24px',
      marginRight: '6px',
    },
    '& .MuiTypography-root': {
      fontSize: '20px',
    },
  },
}));

export const MoreInfoButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '240px',
  height: '72px',
  borderRadius: '40px',
  background: 'linear-gradient(128deg, #2727F5 0%, #001671 100%)',
  color: theme.palette.text.primary,
  fontSize: '32px',
  fontWeight: 'bold',
  lineHeight: '30px',
  letterSpacing: '-0.32px',
  textTransform: 'capitalize',
  transition: 'opacity 0.2s ease-in-out',
  '&:hover': {
    background: 'linear-gradient(128deg, #2727F5 0%, #001671 100%)',
    opacity: 0.7,
  },
  '& svg': {
    fontSize: '40px',
    marginRight: '12px',
  },
  '& .MuiTypography-root': {
    fontSize: '32px',
    fontWeight: 'bold',
    lineHeight: '30px',
    letterSpacing: '-0.32px',
    textTransform: 'capitalize',
  },

  [theme.breakpoints.down('lg')]: {
    width: '200px',
    height: '60px',
    fontSize: '28px',
    '& svg': {
      fontSize: '32px',
      marginRight: '10px',
    },
    '& .MuiTypography-root': {
      fontSize: '28px',
    },
  },

  [theme.breakpoints.down('md')]: {
    width: '180px',
    height: '50px',
    fontSize: '24px',
    borderRadius: '25px',
    '& svg': {
      fontSize: '28px',
      marginRight: '8px',
    },
    '& .MuiTypography-root': {
      fontSize: '24px',
    },
  },

  [theme.breakpoints.down('sm')]: {
    width: '160px',
    height: '45px',
    fontSize: '20px',
    '& svg': {
      fontSize: '24px',
      marginRight: '6px',
    },
    '& .MuiTypography-root': {
      fontSize: '20px',
    },
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontWeight: 'medium',
  fontSize: '32px',
  lineHeight: '38px',
  color: theme.palette.text.primary,
  marginBottom: '16px',

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
