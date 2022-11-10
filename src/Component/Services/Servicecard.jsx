import React from 'react'
import Card from 'react-bootstrap/Card';
import style from './Services.module.css'



function Servicecard({ title, description }) {
    return (
        <div>
            <Card className={style.servicecard}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className={style.text1}>{description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Servicecard