import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Classes from './layout-3.module.css';
const Layout3 = (props) => {
    const [backgroundImage, setBackgroundImage] = useState("/unicorn.png");
    return (
        < Container className={Classes.container} >
            <Row className={Classes.row}>
                <Col md={6} className={Classes.column}>
                    <div style={{fontFamily:props.slideFont}} className={Classes.content}>
                        <h1>{props.title}</h1>
                        {props.description && <p className={props.description.length > 700 ? Classes.pitch : ""}>{props.description}</p>}
                    </div>
                </Col>
                <Col md={6} className={Classes.layoutImage} style={{backgroundImage: `url(${props.image || '/unicorn.png'})`}}>
                    
                </Col>
            </Row>
        </Container >)
}

export default Layout3;