import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      contrastText: '#000',
      main: '#6f967e'
    },
    secondary: {
      contrastText: '#FFF',
      main: '#007c77'
    }
  }
});

export default lightTheme;
