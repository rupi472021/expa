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
import addNotification from 'react-push-notification';
import firebase from '../firebase';

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

    const classes = useStyles();

    async function firebaseNotification() {

        var headers = {
            "Authorization": "key=AAAA0zw3Jk0:APA91bFQ-pTU1AITIoyAShNxSl8naD667ilNfyXDlqEwLFjXcLiBxG6psIHEz7Xyo_ksJgvwAKHRpdYUzRb_THciRuGIyOYSCNEDXvbkqHh9-H0uAhCQpvopg2Y65e_tOrb8tTTcDVpc",
            "Content-Type": "application/json",
        };

        // Modified
        var payload = {
            "notification": {
                "title": "CWMS",
                "body": "from google apps scritpt"
            },
            "to": "cGYfww4gwdBs5zz__4yq5P:APA91bF5GNfoYUn-SjMIgUGfrV8iKoiv7MlhumohqlPaChhsa0k77QYHMNP0fo8SwfNH2lZkSNt0GUIQIZCRcY6UfZojWYS5BEDhk6-h7bOkAErPNDOnK6CeVa_GuUtERXkJV0F9AaU2"
        }

        // Modified
        var options = {
            method: "POST",
            contentType: "application/json",
            headers: headers,
            payload: JSON.stringify(payload) // <--- Modified
        }

        var response = await fetch("https://fcm.googleapis.com/fcm/send", options);
        console.log(response);
    }


    return (
        <div>
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
