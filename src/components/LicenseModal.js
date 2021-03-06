import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 240,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function LicenseModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      <Modal
        aria-labelledby="license-modal-title"
        aria-describedby="license-modal-description"
        open={props.open}
        onClose={props.onClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="license-modal-title">ライセンス</h2>
          <p id="license-modal-description">
            <a href="https://origamijapan.net/jp/envelope-temp/" rel="noopener noreferrer" target="_blank">折り紙JAPAN</a>
          </p>
        </div>
      </Modal>
    </div>
  );
}