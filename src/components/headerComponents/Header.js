import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import { Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Header(props) {
    return (
        <>
            <Title title="Spacestagram"/>
            <Subtitle subtitle={props.subtitle} />
            <Nav justify variant="pills">
                <Nav.Item>
                   <Button as={Link} to="/" variant="outline-secondary" >Home</Button>
                </Nav.Item>
                <Nav.Item>
                <Button as={Link} to="/mylikeimages" variant="outline-secondary" >My liked pictures</Button>
                </Nav.Item>
            </Nav>
            <br></br>
        </>
    )
}
