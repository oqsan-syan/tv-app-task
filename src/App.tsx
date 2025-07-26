import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';

import MainContent from 'components/MainContent';
import Container from 'components/Container';
import Menu from 'components/Menu';
import ErrorBoundary from 'components/ErrorBoundary';

import './index.css';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Container>
          <Menu />
          <MainContent />
        </Container>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
