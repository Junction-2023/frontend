import { ThemeProvider } from 'styled-components';
import Router from './router/Router';
import theme from './style/theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
