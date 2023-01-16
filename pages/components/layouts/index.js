import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Layout1 from './layout-1';
import Layout2 from './layout-2';
import Layout3 from './layout-3';
import Layout4 from './layout-4';
import Layout5 from "./layout-5";

const Layout = (props) => {

    switch (props.layout) {
        case 1:
            return <Layout1 {...props}/>
            break;
        case 2:
            return <Layout2 {...props}/>
            break;
        case 3:
            return <Layout3 {...props}/>
            break;
        case 4:
            return <Layout4 {...props}/>
            break;
        case 5:
            return <Layout5 {...props}/>
            break;
        default:
            return <Layout1 {...props}/>
    }

}

export default Layout;