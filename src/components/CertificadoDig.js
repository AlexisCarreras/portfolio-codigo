import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Digitalers from '../img/digitalers.png';

const useStyles = makeStyles ({
    fondo: {
      backgroundColor: '#444',
      color: '#eaeaea',
    },
    digitalers: {
        width: '30rem',
    },
    boton: {
        textTransform: 'none',
        color: 'white',
        border: '1px solid #C15121',
        backgroundColor: '#222',
        '&:hover': {
            backgroundColor: '#C15121',
        },
    },
    cerrar: {
      color: '#ce653b',
      textTransform: 'none',
      '&:hover': {
        color: '#ff714a',
    },
  },
});

export default function ResponsiveDialog() {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" className={classes.boton} onClick={handleClickOpen}>
        Ver Certificado
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className={classes.fondo}>{"Desarrollo FullStack con .NET"}</DialogTitle>
        <DialogContent className={classes.fondo}>
            <img src={Digitalers} className={classes.digitalers} alt="Digitalers" />
        </DialogContent>
        <DialogActions className={classes.fondo}>
          <Button onClick={handleClose} color="primary" className={classes.cerrar} autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
