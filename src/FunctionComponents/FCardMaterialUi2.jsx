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
import { Switch, Route, withRouter } from 'react-router-dom';

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
        marginLeft: 1
    },
    margin: {
        margin: theme.spacing(1),
        marginLeft: 130
    },
}));

function MediaCard2(props) {
    const classes = useStyles();

    function test() {

        const index = props.adminTrip.findIndex(item => item.Name === props.name)

        console.log(props.adminTrip)
        console.log(props.adminTrip[index].Admin_email)

        localStorage.setItem('trip_name', props.name)
        localStorage.setItem('admin_email', props.adminTrip[index].Admin_email)

        //window.location.href = "http://localhost:3000/trip_page?" + props.name

        props.history.push('/trip_page?' + props.name);

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
                    <ColorButton variant="contained" color="primary" className={classes.margin} onClick={test} > View  </ColorButton>
                    {/* <Button className={classes.button} size="large" color="primary"> Ask to join! </Button> */}
                </CardActions>
            </Card><br></br>
        </div>
    );
}

export default withRouter(MediaCard2);