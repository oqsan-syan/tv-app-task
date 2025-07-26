import { Box, styled } from '@mui/material';

export const CustomContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100vw',
  height: '100vh',
  background: `${theme.palette.primary.main} 0% 0% no-repeat padding-box`,
  opacity: 1,

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    overflow: 'auto',
    height: 'auto',
    minHeight: '100vh',
  },
}));
