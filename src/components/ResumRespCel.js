import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LineaTiempo from './LineaRespCel';
import Cv from '../doc/carreras.pdf';

const useStyles = makeStyles ({
    root: {
        height: '82rem',
        backgroundColor: '#222',
        paddingTop: '3rem',
    },
    resumen: {
        paddingTop: '2rem',
        marginLeft: '3rem',
        marginRight: '3rem',
    },
    titulo: {
        color: 'white',
        marginRight: '50rem',
    },
    puesto: {
        color: '#9D9D9D',
        marginLeft: '15.9rem',
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
        paddingRight: '3rem',
    },
    descargar: {
        marginLeft: '17rem',
        marginTop: '1rem',
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
                <Typography variant="h5" className={classes.titulo} gutterBottom>
                    <strong>Resumen</strong>
                </Typography>
                <hr color="#9D9D9D" className={classes.linea}></hr>
                <Typography variant="subtitle1" className={classes.puesto} gutterBottom>
                    Front-End Developer
                </Typography>
                <Typography variant="h6" className={classes.educacion} gutterBottom>
                    <strong>Educación:</strong>
                </Typography>
            </article>
            <article className={classes.tiempo}>
                <LineaTiempo />
            </article>
            <article>
                <a href={Cv} download="Alexis_Carreras(CV Desarrollo)"  target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button className={classes.descargar} variant="outlined">Descargar CV</Button>
                </a>
            </article>
        </section>
    );
};

export default Resumen;