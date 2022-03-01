import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';

import Nav from '../Nav';
import Mainboard from '../Mainboard';
import { lightTheme, darkTheme } from '../../styles/muiThemes';
import './App.scss';

function App() {
  const { isLoading } = useAuth0();
  const [isLight, setIsLight] = useState(true);

  if (isLoading) return <div>Loading...</div>;

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Nav setIsLight={setIsLight} isLight={isLight} />
      <Mainboard theme={isLight} />
    </ThemeProvider>
  );
}

export default App;
