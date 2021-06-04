import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import Button from '@material-ui/core/Button';

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

const useStyles = makeStyles ({
    arriba: {
        height: '30rem',
        backgroundColor: '#333',
        paddingTop: '3rem',
    },
    abajo: {
        height: '28rem',
        backgroundColor: '#222',
    },
    contacto: {
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
        marginLeft: '16.9rem',
    },
    linea: {
        paddingRight: '10rem',
    },
    contenedores: {
        marginTop: '3.2rem',
        marginBottom: '4.8rem',
    },
    contenedor: {
        display: 'flex',
        height: '3rem',
        width: '30rem',
        marginBottom: '1.5rem',
        marginLeft: '9rem',
        backgroundColor: '#444',
        border: '1px solid #777',
        boxShadow: '10px 5px 5px black',
    },
    datos: {
        margin: 'auto',
        color: '#D2D2D2',
    },
    iconos: {
        margin: '0.4rem',
        color: '#D2D2D2',
    },
    subtitulo: {
        marginLeft: '3rem',
        paddingTop: '2.5rem',
        marginBottom: '1rem',
        color: 'white',
        textDecoration: 'underline #ff714a',
    },
    form: {
        marginTop: '2.5rem',
        display: 'flex',
        justifyContent: 'center',
        width: '60%',
        margin: 'auto',
    },
    col: {
        width: '90%',
        marginLeft: '0.5rem',
    },
    text:{
        borderRadius: '20px',
        marginBottom: '0.2rem',
        color: 'secondary',
        backgroundColor: '#E2E2E2',
    },
    msj: {
        marginTop: '0.9rem',
        borderRadius: '20px',
        color: 'secondary',
        backgroundColor: '#E2E2E2',
    },
    cont: {
        marginTop: '1rem',
        marginLeft: '12rem',
        marginRight: '11.6rem',
    },
    submit: {
        paddingTop: '0.7rem',
        paddingBottom: '0.7rem',
        color: 'white',
        borderRadius: '15px',
    },
});

const Contacto = () => {
    const classes = useStyles();

    const [dato, setDato] = useState({
        nombre: '',
        email: '',
        asunto: '',
        consulta: '',
    });

    function handleChange(e){
        setDato({
            ...dato,
            [e.target.name]:e.target.value
        })
    }

    return (
        <section >
        <section className={classes.arriba}>
            <article className={classes.contacto}>
                <Typography variant="h5" className={classes.titulo} gutterBottom>
                    <strong>Contacto</strong>
                </Typography>
                <hr color="#9D9D9D" className={classes.linea}></hr>
                <Typography variant="subtitle1" className={classes.puesto} gutterBottom>
                    Datos de contacto
                </Typography>
            </article>
            <article className={classes.contenedores}>
                <div className={classes.contenedor}>
                    <PhoneIcon fontSize="large" className={classes.iconos} />
                    <Typography variant="h6" className={classes.datos} gutterBottom>
                        11 21936289 
                    </Typography>
                </div>
                <div className={classes.contenedor}>
                    <MailIcon fontSize="large" className={classes.iconos} />
                    <Typography variant="h6" className={classes.datos} gutterBottom>
                        alexiscarreras@hotmail.com
                    </Typography>
                </div>
                <div className={classes.contenedor}>
                    <RoomIcon fontSize="large" className={classes.iconos} />
                    <Typography variant="h6" className={classes.datos} gutterBottom>
                        Merlo, Buenos Aires. Argentina
                    </Typography>
                </div>
                <div className={classes.contenedor}>
                    <CheckCircleIcon fontSize="large" className={classes.iconos} />
                    <Typography variant="h6" className={classes.datos} gutterBottom>
                        Disponibilidad
                    </Typography>
                </div>
            </article>
            </section>
            <section className={classes.abajo}>
            <article className={classes.formulario}>
            <ThemeProvider theme={theme}>
                <div>
                    <Typography variant="h5" className={classes.subtitulo} gutterBottom>
                        <strong>Dejame tu consulta:</strong>
                    </Typography>
                </div>
                <form className={classes.contenedorForm}  action="https://formspree.io/f/xdopyjya" method="POST" noValidate>
                <article className={classes.form}>
                    <div className={classes.col}>
                    <TextField 
                        className={classes.text}
                        value={dato.nombre}
                        onChange={handleChange}
                        variant="filled"
                        margin="normal"
                        required
                        id="nombre"
                        label="Nombre Completo"
                        name="nombre"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                            ),
                        }}
                    />
                    <TextField 
                        className={classes.text}
                        value={dato.email}
                        onChange={handleChange}
                        variant="filled"
                        margin="normal"
                        required
                        id="email"
                        label="Email"
                        name="email"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <MailIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    <TextField 
                        className={classes.text}
                        value={dato.asunto}
                        onChange={handleChange}
                        variant="filled"
                        margin="normal"
                        required
                        id="asunto"
                        label="Asunto"
                        name="asunto"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <WorkIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    </div>
                    <div className={classes.col}>
                    <TextField
                        className={classes.msj}
                        id="consulta"
                        name="Consulta"
                        label="Consulta"
                        multiline
                        required
                        rows={9}
                        fullWidth
                        variant="filled"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <MessageIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    </div>
                </article>
                <article className={classes.cont}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        >
                        Enviar
                    </Button>
                </article>
                </form>
            </ThemeProvider>
            </article>
            </section>          
        </section>
    );
};

export default Contacto;