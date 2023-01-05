import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';


const Investors = (props) => {
    const [investors, setInvestors] = useState([]);
    useEffect(() => {
        setInvestors(props.investors);
    })
    return (
        
            <Container>
                <Row className="rowWidth">
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1 style={{color: "white", fontFamily:"Poppins"}}>Investors you can pitch to</h1>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Investor Name</th>
                                    <th>VC Website</th>
                                    <th>Fund Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {investors.map((x, index) => {
                                    return (
                                        <tr key={index}>
                                            <td> {index + 1}</td>
                                            <td> {x["Investor Name"]}</td>
                                            <td> <Link href={x["Website (if available)"]}>{x["Website (if available)"]}</Link></td>
                                            <td> {x["FundType"]}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        
    );
}
export default Investors;