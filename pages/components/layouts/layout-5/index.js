import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Classes from './layout-5.module.css';
const Layout5 = (props) => {
    const [backgroundImage, setBackgroundImage] = useState("/unicorn.png");
    return (
        < Container className={Classes.container} >
            <div className={Classes.shadow}></div>
            <Row className={[Classes.row,Classes.layoutImage].join(" ")} style={{backgroundImage: `url(${props.image || '/unicorn.png'})`}}>
                <Col md={8} className={Classes.column} >
                    <div style={{fontFamily:props.slideFont}} className={Classes.content} >
                        <h1>{props.title}</h1>
                        <div className={Classes.gap}></div>
                        {props.description && <p className={props.description.length > 700 ? Classes.pitch : ""}>{props.description}</p>}
                    </div>
                </Col>
                
            </Row>
        </Container >)
}

export default Layout5;