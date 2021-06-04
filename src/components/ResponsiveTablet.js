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
import Acerca from './AcercaRespTabl';
import Resumen from './ResumRespTabl';
import Portfolio from './PortRespTabl';
import Contacto from './ContRespTabl';
import Footer from './FooterTablet';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  appbar: {
    backgroundColor: '#222',
    position: 'fixed',
  },
  botones: {
    color: 'white',
  },
}));

export default function ScrollableTabsButtonAuto() {
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
          
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
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
      <TabPanel value={value} index={0}>
        <Acerca />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Resumen />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Portfolio />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Contacto />
      </TabPanel>
      </SwipeableViews>
      <Footer />
    </div>
    </ThemeProvider>
  );
}
