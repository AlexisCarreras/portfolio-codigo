import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/styles';
import Acerca from './AcercaRespCel';
import Resumen from './ResumRespCel';
import Portfolio from './PortRespCel';
import Contacto from './ContRespCel';
import Footer from './FooterCel';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  appbar: {
    backgroundColor: '#222',
    position: 'fixed',
  },
  botones: {
    color: 'white',
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static" color="default">
        <Tabs
          className={classes.botones}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Acerca de mí" {...a11yProps(0)} />
          <Tab label="Resumen" {...a11yProps(1)} />
          <Tab label="Portfolio" {...a11yProps(2)} />
          <Tab label="Contacto" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <Acerca />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Resumen />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Portfolio />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Contacto />
        </TabPanel>
      </SwipeableViews>
      <Footer />
    </div>
    </ThemeProvider>
  );
}
