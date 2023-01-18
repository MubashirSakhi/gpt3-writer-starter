import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Classes from './investors.module.css';
import { Form, Button } from "react-bootstrap";


const Investors = (props) => {
    const [investors, setInvestors] = useState([]);
    const [fundType, setFundType] = useState("Venture Fund");
    const [fundFocus, setFundFocus] = useState("Software");
    const [fundStage, setFundStage] = useState("Pre-Seed");
    const [isFetching, setIsFetching] = useState(false);
    const [fundTypeList, setFundTypeList] = useState([
        "Venture Fund",
        "Corporate VC",
        "Accelerator",
        "Family Office",
        "Angel Network",
        "Angel Investor"
    ])
    const [fundStageList, setFundStageList] = useState([
        "Pre-Seed",
        "Seed",
        "Series A",
        "Series B",
        "Series C",
        "Series D"
    ])
    const [fundFocusList, setFundFocusList] = useState([
        "Software",
        "Cybersecurity",
        "Healthcare",
        "Big Data & Analytics",
        "ClimateTech & CleanTech",
        "Developer Tools",
        "GovTech",
        "PropTech",
        "FinTech",
        "EdTech",
        "Apps",
        "Food and Beverage",
        "Marketing (MarTech)",
        "Mobile",
        "RestaurantTech",
        "BioTech",
        "Cryptocurrency / Blockchain",
        "Entertainment & Media",
        "Sports",
        "Artificial Intelligence & Machine Learning (AI/ML)",
        "InsurTech",
        "Hospitality",
        "SaaS",
        "Travel",
        "Consumer",
        "Information Technology",
        "E-Sports (Gaming)",
        "Professional Services",
        "Hardware",
        "Manufacturing",
        "Consulting",
        "Parenting",
        "E-Commerce",
        "Impact Investing",
        "Enterprise",
        "Logistics",
        "Privacy",
        "Transportation",
        "Energy",
        "Industrials",
        "IoT (Internet of Things)",
        "Life Science",
        "Infrastructure",
        "Communications Infrastructure",
        "Productivity Tools",
        "CloudTech",
        "Advanced Materials",
        "Sales Automation",
        "Medical Device",
        "Collaboration",
        "Marketplace",
        "SpaceTech",
        "Telecommunications (TMT)",
        "Consumer Electronics",
        "AgTech (FarmTech)",
        "Robotics",
        "Creator Economy",
        "Cannabis",
        "Supply Chain Tech",
        "Elder Care",
        "Service Industry",
        "Health & Wellness",
        "HR Tech",
        "CRM",
        "B2B",
        "Micro-Mobility",
        "Advertising (AdTech)",
        "Augmented & Virtual Reality (AR/VR)",
        "AudioTech",
        "B2C",
        "Beauty",
        "Black / African American Founded",
        "Cloud Security",
        "Construction Tech",
        "CPG",
        "Consumer Internet",
        "Wearables & Quantified Self",
        "Customer Service",
        "D2C",
        "DeepTech",
        "Events",
        "FemTech",
        "Future of Work",
        "Internet",
        "Legal Tech",
        "Meeting Software",
        "Network Security",
        "Neuroscience",
        "Oil & Gas",
        "PaaS (Platforms)",
        "PetTech",
        "Pharmaceuticals",
        "Recruiting",
        "RetailTech",
        "Ridesharing",
        "Sharing Economy",
        "Social Media",
        "Sustainability",
        "Women-Founded",
        "Fashion",
        "Computer",
        "Delivery",
        "Community",
        "PoS (Point of Sale)",
        "Quality Assurance",
        "Consumer Goods",
        "Emerging Markets",
        "Market Research",
        "Risk Management",
        "Outdoors",
        "CMS",
        "Nanotechnology",
        "AssistiveTech",
        "Simulation",
        "FoodTech",
        "DeathTech"
    ])
    useEffect(() => {
        setInvestors(props.investors);
    },[])
    const onFundTypeChange = (e) => {
        setFundType(e.target.value);
    }
    const onFundFocusChange = (e) => {
        setFundFocus(e.target.value);
    }
    const onFundStageChange = (e) => {
        setFundStage(e.target.value);
    }
    const onSubmit = async () => {
        try {
            setIsFetching(true);
            const investors = await fetch('/api/airtablefilter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fundFocus: fundFocus,
                    fundStage: fundStage,
                    fundType: fundType
                })
            })
            const investorsData = await investors.json();
            const investorsMapping = investorsData.investorsDb.map((x) => {
                return x.fields;
            });
            setInvestors(investorsMapping);
            setIsFetching(false);
        }
        catch (err){
            console.log("error: " + err);
            setIsFetching(false);
        }
       
    }
    return (

        <Container>
            <Row className="rowWidth">
                <Col md={3}>
                    <div className={Classes.selectorDiv}>
                        <h3>Investor Filter</h3>
                        <Form>
                            <Form.Group>
                                <Form.Label>Fund Focus</Form.Label>
                                <Form.Select aria-label="Select Fund Focus" onChange={onFundFocusChange}>
                                    {fundFocusList.map((x, i) => {
                                        return <option key={i} value={x}>{x}</option>
                                    })}
                                </Form.Select>
                            </Form.Group>


                            <Form.Group>
                                <Form.Label>Fund Type</Form.Label>
                                <Form.Select aria-label="Select Fund Type" onChange={onFundTypeChange}>
                                    {/* <option value="">Select Fund Type</option> */}
                                    {fundTypeList.map((x, i) => {
                                        return <option key={i} value={x}>{x}</option>
                                    })}
                                </Form.Select>
                            </Form.Group>


                            <Form.Group>
                                <Form.Label>Fund Stage</Form.Label>
                                <Form.Select aria-label="Select Fund Stage" onChange={onFundStageChange}>
                                    {fundStageList.map((x, i) => {
                                        return <option key={i} value={x}>{x}</option>
                                    })}
                                </Form.Select>
                            </Form.Group>
                            <div className={["prompt-buttons", Classes.formButton].join(" ")}>

                                <a className={isFetching ? 'generate-button loading' : 'generate-button'} onClick={onSubmit}>
                                    {isFetching ? <span className="loader"></span> : "Search"}
                                </a>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col md={{ span: 8, offset: 1 }}>
                    <h1 style={{ color: "white", fontFamily: "Poppins" }}>Investors you can pitch to</h1>
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