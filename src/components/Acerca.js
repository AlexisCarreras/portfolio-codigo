import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Pc from '../img/pc.jpg';
import Html from '../img/html.png';
import Css from '../img/css.png';
import Javascript from '../img/javascript.png';
import Reactt from '../img/react.png';
import Material from '../img/material.png';
import C from '../img/c-sharp.png';
import Asp from '../img/asp.png';
import Bootstrap from '../img/bootstrap.png';
import Firebase from '../img/firebase.png';
import Sql from '../img/sql.png';
import Cv from '../doc/carreras.pdf';

const useStyles = makeStyles ({
    presentacion: {
        height: '36.1rem',
        width: '67.2rem',
        backgroundColor: '#333',
        marginLeft: '11.7rem',
        display: 'flex',
    },
    img: {
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
    },
    texto: {
        marginTop: '3rem',
        marginRight: '8rem',
        marginLeft: '4rem',
        color: 'white',
    },
    front: {
        color: '#9D9D9D'
    },
    name: {
        marginBottom: '2.5rem',
    },
    descripcion: {
        color: '#E1E1E1',
    },
    descargar: {
        marginTop: '2.5rem',
        paddingTop: '0.7rem',
        paddingBottom: '0.7rem',
        color: 'white',
        backgroundColor: '#FF714A',
        '&:hover': {
            backgroundColor: '#C15121',
        },
    },
    tecnologias: {
        height: '29rem',
        width: '67.2rem',
        backgroundColor: '#222',
        marginLeft: '11.7rem',
    },
    title: {
        marginTop: '1rem',
        color: 'white',
        marginRight: '50rem',
    },
    linea: {
        marginBottom: '3.5rem',
    },
    iconos: {
        marginTop: '2.5rem',
        marginRight: '12rem',
        marginLeft: '12rem',
    },
    primeros: {
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-around',
    },
    segundos: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'space-around',
    },
    terceros: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'space-around',
    },
    subti: {
        paddingTop: '2rem',
        marginLeft: '5rem',
        paddingRight: '6.2rem',
    },
    box: {
        paddingTop: '1rem',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        backgroundColor: '#555',
        borderRadius: '2.5rem',
        '&:hover': {
            backgroundColor: '#444',
            // display: 'inline-block',
            // borderBottom: '0.1px solid #FF714A',
        },
    },
    icono: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '4rem',
        // '&:hover': {
        //     backgroundColor: '#333',
        // },
    },
    nombre: {
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        userSelect: 'none',
    },
});

const Acerca = () => {
    const classes = useStyles();

    return (
        <section>
            <article className={classes.presentacion}>
                <div>
                    <img src={Pc} className={classes.img} alt="Pc" />
                </div>
                <div className={classes.texto}>
                    <Typography variant="subtitle1" className={classes.front} gutterBottom>
                        Front-End Developer
                    </Typography>
                    <hr color="#9D9D9D"></hr>
                    <Typography variant="h4" className={classes.name} gutterBottom>
                         <strong>Alexis Carreras</strong>
                    </Typography>
                    <Typography variant="body2" className={classes.descripcion} gutterBottom>
                        Hola, mi nombre es Alexis y tengo 24 años. Soy estudiante de 1er año de la carrera <strong>Licenciatura en Informática</strong> en la Universidad Nacional del Oeste. 
                    </Typography>
                    <Typography variant="body2" className={classes.descripcion} gutterBottom>
                        A fines del 2020 me gradué en los cursos: <strong>"React Developer"</strong> en Comunidad IT y <strong>"Full Stack Developer .NET"</strong> en Digit@allers (Telecom y Educación IT).
                    </Typography>
                    <Typography variant="body2" className={classes.descripcion} gutterBottom>
                        Cuento con mucho entusiasmo en crecer profesionalmente en el ámbito del desarrollo web y mi área de interés es el <strong>FrontEnd</strong>. Quiero poner en práctica mis habilidades, aprender nuevas día a día y así poder capitalizar mis conocimientos.
                    </Typography>
                    <a href={Cv} download="Alexis Carreras (CV Desarrollo)" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button className={classes.descargar} variant="outlined">Descargar CV</Button>
                    </a>
                </div>
            </article>
            <article className={classes.tecnologias}>
                <div className={classes.subti}>
                    <Typography variant="h4" className={classes.title} gutterBottom>
                        <strong>Tecnologías</strong>
                    </Typography>
                    <hr color="#9D9D9D" className={classes.linea}></hr>
                </div>
                <section className={classes.iconos}>
                    <div className={classes.primeros}>
                    <article className={classes.box}>
                        <img src={Html}  className={classes.icono} alt="Html" />
                        <Typography variant="subtitle1" className={classes.nombre} gutterBottom>
                            HTML
                        </Typography>
                    </article>
                    <article className={classes.box}>
                        <img src={Css} className={classes.icono} alt="Css" />
                        <Typography variant="subtitle1" className={classes.nombre} gutterBottom>
                            CSS
                        </Typography>
                    </article>
                    <article className={classes.box}>
                        <img src={Javascript} className={classes.icono} alt="Javascript" />
                        <Typography variant="subtitle1" className={classes.nombre} gutterBottom>
                            Javascript
                        </Typography>
                    </article>
                    <article className={classes.box}>
                        <img src={Reactt} className={classes.icono} alt="React" />
                        <Typography variant="subtitle1" className={classes.nombre} gutterBottom>
                            React
                        </Typography>
                    </article>
                    <article className={classes.box}>
                        <img src={Material} className={classes.icono} alt="Material" />
                        <Typography variant="subtitle1" className={classes.nombre} gutterBottom>
                            Material UI
                        </Typography>
                    </article>
                    </div>

                    <div className={classes.separador}> </div>

                    <div className={classes.segundos}> 
                    <article className={classes.box}>
                        <img src={C} className={classes.icono} alt="C" />
                        <Typography variant="subtitle1" className={classes.nombre} gutterBottom>
                            C Sharp
                        </Typography>
                    </article>
                    
                    <article className={classes.box}>
                        <img src={Asp} className={classes.icono} alt="Asp" />
                        <Typography variant="subtitle1" className={classes.nombre} gutterBottom>
                            ASP .NET
                        </Typography>
                    </article>
                    
                    <article className={classes.box}>
                        <img src={Bootstrap} className={classes.icono} alt="Bootstrap" />
                        <Typography variant="subtitle1" className={classes.nombre} gutterBottom>
                            Bootstrap
                        </Typography>
                    </article>
                    <article className={classes.box}>
                        <img src={Firebase} className={classes.icono} alt="Firebase" />
                        <Typography variant="subtitle1" className={classes.nombre} gutterBottom>
                            Firebase
                        </Typography>
                    </article>
                    <article className={classes.box}>
                        <img src={Sql} className={classes.icono} alt="Sql" />
                        <Typography variant="subtitle1" className={classes.nombre} gutterBottom>
                            SQL
                        </Typography>
                    </article>
                    </div>
                </section>
            </article>
        </section>
    );
};

export default Acerca;