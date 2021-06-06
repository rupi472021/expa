import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(orange[400]),
        backgroundColor: orange[500],
        '&:hover': {
            backgroundColor: orange[700],
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginLeft: 15,
        borderRadius: '50px',
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    media: {
        height: 140,
    },
    button: {
        marginLeft: 100
    },
    margin: {
        margin: theme.spacing(1),
        marginLeft: 100
    },
}));

export default function MediaCard(props) {

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const classes = useStyles();

    async function firebaseNotification() {

        setOpen(true);

        let apiUrl = 'https://fcm.googleapis.com/fcm/send';

        // Modified
        var payload = {

            "notification": {
                "title": "Join Trip Request",
                "body": "Hi, someone want to join your trip!"
            },
            //"to": "dgqauZkWN73p1jcqain40b:APA91bFDw6KkJil-u7pv94swTafEtw0KhZHOR1ioInxTvruIA4pYlumFse3orF1C8VUZnXbiE62h7m_0nGnyoFL7oUZrLqWOHVDESWjWPuFmOtrLCihmagbEF0hoWAEjOvKOcjNLk0Uj"
        }

        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: new Headers({
                "Authorization": "key=AAAA0zw3Jk0:APA91bFQ-pTU1AITIoyAShNxSl8naD667ilNfyXDlqEwLFjXcLiBxG6psIHEz7Xyo_ksJgvwAKHRpdYUzRb_THciRuGIyOYSCNEDXvbkqHh9-H0uAhCQpvopg2Y65e_tOrb8tTTcDVpc",
                'Content-type': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
            })
        })
            .then(res => {
                console.log('res=', res);
                return res.json()
            })
            .then(
                (result) => {
                    console.log("fetch POST= ", result);
                },
                (error) => {
                    console.log("err post=", error);
                });
    }


    return (
        <div>
            <Snackbar
                style={{ marginBottom: 600 }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="The request was sent to the trip admin"
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image="http://suindependent.com/wp-content/uploads/2018/01/Winter-Jamboree-3.jpg" title="Contemplative Reptile" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2"> Trip Name: {props.name} </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Area: {props.area}<br></br>
                        Vehicle Type: {props.vehicle}<br></br>
                        At: {props.date} On {props.time}<br></br>
                        With: {props.participants} Partners
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <ColorButton onClick={firebaseNotification} variant="contained" color="primary" className={classes.margin}> Ask to join! </ColorButton>
                    {/* <Button className={classes.button} size="large" color="primary"> Ask to join! </Button> */}
                </CardActions>
            </Card><br></br>
        </div>
    );
}
