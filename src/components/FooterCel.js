import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#ff714a',
    },
    secondary: {
      // This is green.A700 as hex.
      main: grey[50],
    },
  },
});

const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor: '#111',
    height: '3.8rem',
  },
  btn: {
    color: '#DBD9D9',
  },
  icono: {
    color: '#999',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function getLinkWhastapp() {
    var url =
      "https://api.whatsapp.com/send?phone=" +
      "541121936289" +
      "&text=" +
      encodeURIComponent("Hola Alexis, te quería consultar sobre tu perfil de FrontEnd Developer: ");

    return window.open(url);
  }

  return (
    <ThemeProvider theme={theme}>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <a href="https://www.linkedin.com/in/alexis-carreras/" target="_blank" rel="noopener noreferrer">
        <BottomNavigationAction className={classes.btn} label="Linkedin" icon={<LinkedInIcon className={classes.icono}/>} />
      </a>
        <BottomNavigationAction className={classes.btn} onClick={() => getLinkWhastapp()} icon={<WhatsAppIcon className={classes.icono}/>} />
      <a href="https://github.com/AlexisCarreras" target="_blank" rel="noopener noreferrer">
        <BottomNavigationAction className={classes.btn} label="GitHub" icon={<GitHubIcon className={classes.icono}/>} />
      </a>
    </BottomNavigation>
    </ThemeProvider>
  );
}
