import React from 'react'
import { Button, Card } from 'react-bootstrap';

export default function FCSearchCard(props) {
    return (
        <div>
            <Card bg="info" style={{ marginLeft: '20px', marginRight: '20px', borderRadius: '40px' }}>
                <Card.Img style={{ marginLeft: '118px', marginTop: '20px', width: '37%', height: '120px', borderRadius: 35, borderWidth: 5 }} variant="top" src="http://suindependent.com/wp-content/uploads/2018/01/Winter-Jamboree-3.jpg" />
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold', fontSize: '30px' }}>{props.name}</Card.Title>
                    <Card.Text >
                        Area: {props.area}<br></br>
                        Vehicle Type: {props.vehicle}<br></br>
                        At: {props.date} On {props.time}<br></br>
                        With: {props.participants} Partners
                        </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="success" onClick={() => alert("the request was send to trip's admin")}>ASK TO JOIN</Button><br></br>
                </Card.Footer>
            </Card>
        </div>
    )
}
