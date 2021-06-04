import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Foto from '../img/foto.jpg';
import Acerca from './Acerca';
import Resumen from './Resumen';
import Portfolio from './Portfolio';
import Contacto from './Contacto';
import Hidden from '@material-ui/core/Hidden';
import ResponsiveTablet from './ResponsiveTablet';
import ResponsiveCel from './ResponsiveCel';

const useStyles = makeStyles ({
    root: {
        // height: '100vh',
        // width: '40vh',
    },
    menu: {
        // height: '100vh',
        // width: '30vh',
        height: '36.1rem',
        width: '10.8rem',
        backgroundColor: '#222',
        position: 'fixed',
    },
    foto: {
        // height: '15vh',
        // margin: '15%',
        height: '5rem',
        marginTop: '2rem',
        marginLeft: '2.6rem',
        marginBottom: '2rem',
    },
    completo: {
        color: 'white',
    },
    nombre: {
        lineHeight: 0,
        paddingBottom: '0.5rem',
    },
    botones: {
        marginTop: '2rem',
    },
    btn: {
        width: '100%',
        
        color: '#E2E2E2',
        textTransform: 'none',
        borderTop: '1.5px solid #333',
        borderBottom: '1.5px solid #333',
        borderColor: '#333',
        '&:hover': {
            backgroundColor: '#333',
            borderRight: '4px solid #FF714A',
        }
    },
    link: {
        color: '#999',
    },
    iconos: {
        padding: 0,
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-around',
    },
    linkedin: {
        // marginLeft: '3rem',
        color: '#999',
        '&:hover': {
            color: '#DBD9D9',
        }
    },
    wsp: {
        // marginLeft: '2.4rem',
        color: '#999',
        '&:hover': {
            color: '#DBD9D9',
        }
    },
    git: {
        // marginRight: '2rem',
        color: '#999',
        '&:hover': {
            color: '#DBD9D9',
        }
    },
    footer: {
        marginTop: '1.2rem',
        marginLeft: '1.5rem',
        width: '70%',
        color: '#BDBDBD',
    },
    separacion: {
        height: '100vh',
        // width: '2.5vh',
        width: '0.9rem',
        marginLeft: '10.8rem',
        backgroundColor: 'black',
        position: 'fixed',
    },
});

const Menu = () => {
    const classes = useStyles();

    function getLinkWhastapp() {
        var url =
          "https://api.whatsapp.com/send?phone=" +
          "541121936289" +
          "&text=" +
          encodeURIComponent("Hola Alexis, te quería consultar sobre tu perfil de FrontEnd Developer: ");
    
        return window.open(url);
      }

    return (
        <div>
        <Router>
        {/* En éste hiden solo ocultamos a XS y SM que son los tamaños menores, entonces solo se visualiza para pantallas de pc MD y LG */}
        <Hidden only={['xs', 'sm']}>
        <section className={classes.root}>
            <div className={classes.menu}>
                <img src={Foto} className={classes.foto} alt="Foto" />
                <div className={classes.completo}>
                    <Typography variant="h6" className={classes.nombre} align="center">
                        Alexis 
                    </Typography>
                    <Typography variant="h6" align="center" >
                        Carreras 
                    </Typography>
                </div>
                <div className={classes.botones}>
                <Link to="/Portfolio/" style={{ textDecoration: 'none' }}>
                    <Button className={classes.btn}>
                        <Typography variant="subtitle1" gutterBottom>
                            Acerca de mí
                        </Typography>
                    </Button>
                </Link>
                <Link to="/Portfolio/resumen" style={{ textDecoration: 'none' }}>
                    <Button className={classes.btn}>
                        <Typography variant="subtitle1" gutterBottom>
                            Resumen
                        </Typography>
                    </Button>
                </Link>
                <Link to="/Portfolio/portfolio" style={{ textDecoration: 'none' }}>
                    <Button className={classes.btn}>
                        <Typography variant="subtitle1" gutterBottom>
                            Portfolio
                        </Typography>
                    </Button>
                </Link>
                <Link to="/Portfolio/contacto" style={{ textDecoration: 'none' }}>
                    <Button className={classes.btn}>
                        <Typography variant="subtitle1" gutterBottom>
                            Contacto
                        </Typography>
                    </Button>
                </Link>
                </div>
                <div className={classes.iconos}>
                    <a href="https://www.linkedin.com/in/alexis-carreras/" target="_blank" rel="noopener noreferrer">
                        <IconButton aria-label="linked in icon">
                            <LinkedInIcon className={classes.linkedin} fontSize="large"/>
                        </IconButton>
                    </a>
                        <IconButton onClick={() => getLinkWhastapp()} aria-label="whatsapp">
                            <WhatsAppIcon className={classes.wsp} fontSize="large"/>
                        </IconButton>
                    <a href="https://github.com/AlexisCarreras" target="_blank" rel="noopener noreferrer">
                        <IconButton aria-label="git hub icon">
                            <GitHubIcon className={classes.git} fontSize="large"/>
                        </IconButton>
                    </a>
                </div>
                <div className={classes.footer}>
                    <Typography variant="caption" display="block" align="center" gutterBottom>
                        © 2021 Todos los derechos reservados
                    </Typography>
                </div>
            </div>
            <div className={classes.separacion}></div>
            <div>
            <Switch>
                <Route exact path="/Portfolio/" component={Acerca}/> 
                <Route exact path="/Portfolio/resumen" component={Resumen}/> 
                <Route exact path="/Portfolio/portfolio" component={Portfolio}/>
                <Route exact path="/Portfolio/contacto" component={Contacto}/>
            </Switch>
            </div>
        </section>
        </Hidden>

        <Hidden only={['xs', 'md', 'lg', 'xl']}>
            <ResponsiveTablet/>
        </Hidden>
        <Hidden only={['sm', 'md', 'lg', 'xl']}>
            <ResponsiveCel/>
        </Hidden>
        </Router>
        </div>
    );
};

export default Menu;