import React from 'react'
import { Button, CardColumns, Card } from 'react-bootstrap';


export default function FCCard(props) {
    return (
        <div>
            <CardColumns>

                <Card bg="primary">
                    <Card.Img alt="https://i.ibb.co/GF9rjsr/circle-cropped.png" variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>


            </CardColumns>
        </div>
    )
}
