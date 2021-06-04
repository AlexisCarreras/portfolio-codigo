import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LineaTiempo from './LineaTiempo';
import Cv from '../doc/carreras.pdf';

const useStyles = makeStyles ({
    root: {
        height: '69.5rem',
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
        marginLeft: '46.5rem',
    },
    linea: {
        paddingRight: '10rem',
    },
    educacion: {
        marginTop: '2.5rem',
        marginBottom: '2.5rem',
        color: 'white',
        textDecoration: 'underline #ff714a',
    },
    tiempo: {
        marginRight: '20rem',
    },
    descargar: {
        marginLeft: '36rem',
        marginTop: '2.5rem',
        paddingTop: '0.7rem',
        paddingBottom: '0.7rem',
        color: 'white',
        backgroundColor: '#FF714A',
        '&:hover': {
            backgroundColor: '#C15121',
        },
    },
});

const Resumen = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <article className={classes.resumen}>
                <Typography variant="h4" className={classes.titulo} gutterBottom>
                    <strong>Resumen</strong>
                </Typography>
                <hr color="#9D9D9D" className={classes.linea}></hr>
                <Typography variant="subtitle1" className={classes.puesto} gutterBottom>
                    Front-End Developer
                </Typography>
                <Typography variant="h5" className={classes.educacion} gutterBottom>
                    <strong>Educación:</strong>
                </Typography>
            </article>
            <article className={classes.tiempo}>
                <LineaTiempo />
            </article>
            <article>
                <a href={Cv} download="Alexis Carreras (CV Desarrollo)" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button className={classes.descargar} variant="outlined">Descargar CV</Button>
                </a>
            </article>
        </section>
    );
};

export default Resumen;