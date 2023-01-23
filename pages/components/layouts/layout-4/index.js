import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Classes from './layout-4.module.css';
const Layout4 = (props) => {
    
    const [backgroundImage, setBackgroundImage] = useState("/unicorn.png");
    //console.log("image: " + props.image);
    return (
        < Container className={Classes.container} >
            <div className={Classes.shadow}></div>
            <Row className={[Classes.row, Classes.layoutImage].join(" ")} style={{backgroundImage: `url(${props.image})`}}>
                <Col md={{span:8, offset:2}} className={Classes.column}>
                    <div style={{fontFamily:props.slideFont}} className={Classes.content}>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                </Col>
                
            </Row>
        </Container >)
}

export default Layout4;