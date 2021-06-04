import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import CertificadoScrum from './CertificadoScrum';
import CertificadoCom from './CertificadoCom';
import CertificadoDig from './CertificadoDig';

const useStyles = makeStyles ({
    año: {
        // textAlign: 'center',
        color: 'white',
    },
    instituto: {
        // textAlign: 'center',
        color: '#C6C6C6',
        marginBottom: '2rem',
    },
    dot: {
        borderColor: '#ff714a',
    },
    descripcionScrum: {
      color: '#C6C6C6',
      marginBottom: '2rem',
    },
    descripcion: {
        color: '#C6C6C6',
    },
    descripcionbaja: {
        color: '#C6C6C6',
        marginBottom: '2rem',
    },
});

export default function OppositeContentTimeline() {
    const classes = useStyles();

  return (
    <React.Fragment>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h6" className={classes.año} gutterBottom>
                2020
            </Typography>
            <Typography variant="body2" className={classes.instituto} gutterBottom>
            Universidad <br/> Nacional del <br/> Oeste
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} variant="outlined"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className={classes.año} gutterBottom>
                Licenciatura en Informática
            </Typography>
            <Typography variant="body2" className={classes.descripcion} gutterBottom>
                Cursando 1er año de la carrera.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h6" className={classes.año} gutterBottom>
              Scrum Fundamentals Certified
            </Typography>
            <Typography variant="body2" className={classes.descripcionScrum} gutterBottom>
            Descripción de Ágil, Manifiesto Ágil, Principios del Manifiesto Ágil.<br/>
            Introducción a Scrum (Principios, Aspectos y Procesos).<br/>
            Scrum vs. Gestión Tradicional de Proyectos.
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} variant="outlined"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Typography variant="h6" className={classes.año} gutterBottom>
                2021
            </Typography>
            <Typography variant="body2" className={classes.instituto} gutterBottom>
              SCRUMstudy 
            </Typography>
            <CertificadoScrum/>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <Typography variant="h6" className={classes.año} gutterBottom>
                2020
            </Typography>
            <Typography variant="body2" className={classes.instituto} gutterBottom>
                Comunidad IT
            </Typography>
            <CertificadoCom />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} variant="outlined"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Typography variant="h6" className={classes.año} gutterBottom>
                Desarrollo FullStack en React
            </Typography>
            <Typography variant="body2" className={classes.descripcionbaja} gutterBottom>
            Desarrollo de aplicaciones web en React. Duración: 3 meses <br/>
            Proyecto Final: Aplicación funcional de pedidos de comida.<br/>
            Tecnologías vistas: HTML5, CSS3, Javascript, React, React Router, Material UI, consumo de API, Firebase, Git, GitHub, Scrum, Kanban.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <Typography variant="h6" className={classes.año} gutterBottom>
                Desarrollo FullStack con .NET
            </Typography>
            <Typography variant="body2" className={classes.descripcion} gutterBottom>
            Duración: 4 meses.<br/>
            Proyecto Final: ABM.<br/>
            Tecnologías vistas: HTML5, CSS3, Javascript, C#, POO, SQL,  .NET, Windows Forms, ASP.NET, Bootstrap. 
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} variant="outlined"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Typography variant="h6" className={classes.año} gutterBottom>
                2020
            </Typography>
            <Typography variant="body2" className={classes.instituto} gutterBottom>
                Digit@lers <br/> (Telecom y <br/> Educación IT)
            </Typography>
            <CertificadoDig/>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}

