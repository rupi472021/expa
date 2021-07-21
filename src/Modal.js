import './modal.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import { ImCancelCircle } from 'react-icons/im';

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(green[400]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);

const ColorButton1 = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(red[400]),
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[700],
        },
    },
}))(Button);


const Modal = ({ handleClose, show, name, email, img, handleACCEPT, handleDENIED }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} >
            <section className="modal-main">
                <div>
                    <ImCancelCircle onClick={handleClose} style={{ width: '15%', height: '10%', marginLeft: 200, marginTop: 20 }} />
                </div>
                <div style={{ marginTop: -35 }}>
                    <img src={img} style={{ width: '45%', height: '40%', borderRadius: 250, borderWidth: 2, borderStyle: 'solid' }} /><br></br><br></br>
                    <h5>User Name: {name}</h5>
                    <h5>User Email: {email}</h5>
                    <h5>Match Percent: 50%</h5>
                    <ColorButton onClick={handleACCEPT} variant="contained" color="primary" > ACCEPT </ColorButton>{' '}
                    <ColorButton1 onClick={handleDENIED} variant="contained" color="primary" > DENIED </ColorButton1>{' '}
                </div>
            </section>
        </div>
    );
};

export default Modal;