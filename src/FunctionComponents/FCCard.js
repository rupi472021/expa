import React from 'react'
import { Button, CardColumns, Card } from 'react-bootstrap';


export default function FCCard(props) {
    return (
        <div>
        
                <Card bg="info" style={{borderRadius:'40px',marginLeft:'20px',marginRight:'20px'}}>
                    <Card.Img style={{marginLeft:'118px',marginTop:'20px',width: '37%',height:'120px', borderRadius: 35, borderWidth: 5}}  variant="top" src="http://suindependent.com/wp-content/uploads/2018/01/Winter-Jamboree-3.jpg" />
                    <Card.Body>
                        <Card.Title style={{fontWeight:'bold',fontSize:'30px'}}>{props.name}</Card.Title>
                        <Card.Text >
                        Where ? {props.area}<br></br> 
                        At {props.date} On {props.time}<br></br> 
                        With {props.participants} Partners 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="success">MORE</Button><br></br>
                        <small >Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                
        </div>
    )
}
