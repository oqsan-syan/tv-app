import { ThemeProvider } from '@mui/material';
import theme from 'styles/theme';

import MainContent from 'components/MainContent';
import Container from 'components/Container';
import Menu from 'components/Menu';

import './index.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Menu />
        <MainContent />
      </Container>
    </ThemeProvider>
  );
}

export default App;
