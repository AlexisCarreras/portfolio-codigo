import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles ({
    boton: {
        paddingRight: '2rem',
        paddingLeft: '2rem',
        padding: '0.4rem',
        color: 'white',
        backgroundColor: '#FF714A',
        '&:hover': {
            backgroundColor: '#C15121',
        },
    },
});

export default function AlertDialog() {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" className={classes.boton} onClick={handleClickOpen}>
        Leer Más
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Comida Fácil"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            App para poder realizar pedidos online que consta de un registro de usuarios e inicio de sesión. Galería. Un Menú donde podrás tener las categorías que crea necesarias el dueño y un navegador para recorrerlas. <br /> 
            Además de poder mandar msj automaticamente por Whatsapp cuando finalice el pedido.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
