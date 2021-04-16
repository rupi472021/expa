import React from 'react'
import { Button, CardColumns, Card } from 'react-bootstrap';


export default function FCCard(props) {
    return (
        <div>
        
                <Card bg="primary">
                    {/* <Card.Img  variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                        <Card.Title style={{fontWeight:'bold',fontSize:'30px'}}>{props.name}</Card.Title>
                        <Card.Text >
                        Where ? {props.area}<br></br> 
                        At {props.date} On {props.time}<br></br> 
                        With {props.participants} Partners                    
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small >Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                
        </div>
    )
}
