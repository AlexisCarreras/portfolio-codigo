import React from 'react';
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Comida1 from '../img/comida1.jpg';
import Clima from '../img/clima.PNG';

const useStyles = makeStyles ({
    root: {
        height: '38rem',
        width: '67.2rem',
        backgroundColor: '#222',
        marginLeft: '11.7rem',
    },  
    resumen: {
        paddingTop: '2rem',
        marginLeft: '5rem',
        paddingRight: '6.2rem',
    },
    titulo: {
        color: 'white',
        marginRight: '50rem',
    },
    puesto: {
        color: '#9D9D9D',
        marginLeft: '50.3rem',
    },
    linea: {
        paddingRight: '10rem',
    },
    appbar: {
        marginTop: '1rem',
        marginRight: '6.2rem',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    btn: {
        color: 'white',
        backgroundColor: '#333',
        '&:hover': {
            backgroundColor: '#C15121',
        },
        border: '1px solid #FF714A',
        textTransform: 'none',
    },
    contenedor: {
        marginTop: '4rem',
        display: 'flex',
        justifyContent: 'center',
    },
    contentComida: {
        width: '25rem',
        height: '20rem',
        marginRight: '2rem',
        borderRadius: '1rem',
        backgroundColor: '#666',
        border: '0.1px solid #000',
    },
    titleComida: {
        textAlign: 'center',
        marginTop: '0.7rem',
        color: 'white',
    },
    textComida: {
        textAlign: 'center',
        color: 'white',
        marginTop: '0.6rem',
    },
    comidaImg: {
        width: '25rem',
    },
   
});

const Portfolio = () => {
    const classes = useStyles();

    return (
        <Router>
        <section className={classes.root}>
            <article className={classes.resumen}>
                <Typography variant="h4" className={classes.titulo} gutterBottom>
                    <strong>Portfolio</strong>
                </Typography>
                <hr color="#9D9D9D" className={classes.linea}></hr>
                <Typography variant="subtitle1" className={classes.puesto} gutterBottom>
                    Mis trabajos
                </Typography>
            </article>
            <article className={classes.contenedor}>
            <a href="https://alexiscarreras.github.io/comida-facil/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="contentComida">
                    <Typography variant="h6" className={classes.titleComida} gutterBottom>
                        <strong>Comida Fácil</strong>
                    </Typography>
                    <div className="img">
                        <img src={Comida1} className={classes.comidaImg} alt="Comida1" />
                    </div>
                    {/* <hr color="#9D9D9D" className={classes.separador}></hr> */}
                    <Typography variant="body1" className={classes.textComida} gutterBottom>
                        App web de pedidos de comidas
                    </Typography>
                    <Typography variant="body2" className={classes.textComida} gutterBottom>
                        <strong>Tecnologías utilizadas:</strong> React - Material UI - Firebase
                    </Typography>
                </div>
            </a>
            <a href="https://alexiscarreras.github.io/WeatherApp/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="contentClima">
                <Typography variant="h6" className={classes.titleComida} gutterBottom>
                        <strong>WeatherApp</strong>
                    </Typography>
                    <div className="img">
                        <img src={Clima} className={classes.comidaImg} alt="Clima" />
                    </div>
                    {/* <hr color="#9D9D9D" className={classes.separador}></hr> */}
                    <Typography variant="body1" className={classes.textComida} gutterBottom>
                        App web para obtener el clima.
                    </Typography>
                    <Typography variant="body2" className={classes.textComida} gutterBottom>
                        <strong>Tecnologías utilizadas:</strong> React - Material UI - <br/>API: Open Weather Map
                    </Typography>
                </div>
            </a>
            </article>
        </section>
        </Router>
    );
};

export default Portfolio;