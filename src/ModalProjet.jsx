import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import './ModalProjet.scss';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#007ea7',
    border: '5px solid #00171f',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({id, texte}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={`${classes.paper} lightbox`}>
      <img className="imgModal" src={'images-projets/' + id + '.gif'} alt=""/>
      <p id="simple-modal-description" className="texteProjet"> {texte} </p>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Plus info
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}