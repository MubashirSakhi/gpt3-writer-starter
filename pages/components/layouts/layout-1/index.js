import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Classes from './layout-1.module.css';
const Layout1 = (props) => {
    return (
        < Container className={Classes.container} >
            <Row className={Classes.row}>
                <Col md={12} className={Classes.column}>
                    <div style={{fontFamily:props.slideFont}} className={Classes.content}>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                </Col>
            </Row>
        </Container >)
}

export default Layout1;