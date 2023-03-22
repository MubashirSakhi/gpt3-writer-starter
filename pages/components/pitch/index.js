import { use, useEffect, useState } from "react";
import { Container, Row, Col, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import Classes from './pitch.module.css';

const Pitch = (props) => {
    const [pitch, setPitch] = useState("");
    const [isGeneratingPitch, setIsGeneratingPitch] = useState(false);
    const [typeOfPitch, setTypeOfPitch] = useState("elevator");
    const [timeLength,setTimeLength] = useState("one");
    const [additionalNotes, setAdditionalNotes] = useState("");
    const [isFetching, setIsFetching] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [pitchError, setPitchError] = useState(null);
    useEffect(() => {
        setPitch(props.pitch);
        setUserInput(props.userInput);
    }, []);

    const typeOfPitches =
        [
            ["elevator","Elevator Pitch"],
           ["formal", "Formal Pitch"],
            ["speed", "Speed Dating Pitch"],
            ["cold","Cold email"],
            ["sales", "Sales Pitch"],
        ];
    const timeLengths = [
        ["one", "One Minute"],
        ["two", "Two Minutes"],
        ["three", "Three Minutes"]
    ];
    const generatePitch = async() => {
        try{
            setIsFetching(true);
            let pitchBody;
            if(additionalNotes==""){
                pitchBody = JSON.stringify({
                    timeLength: timeLength,
                    typeOfPitch: typeOfPitch,
                    idea:userInput,
                    pitch:pitch,
                    
                })
            }
            else{
                pitchBody = JSON.stringify({
                    additionalNotes:additionalNotes,
                    timeLength: timeLength,
                    typeOfPitch: typeOfPitch,
                    pitch:pitch,
                    idea:userInput
                })
            }
            
            const pitchApi = await fetch('/api/pitch',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: pitchBody
            })
            const pitchData = await pitchApi.json();
            setPitch(pitchData.pitch);
            setIsFetching(false);
            
        }
        catch(error){
            console.log("PitchError: " + error.message);
            setIsFetching(false);
            setPitchError(error.message);
        }
    }
    const onPitchTypeChange = (e) => {
        setTypeOfPitch(e.target.value);
    }
    const onTimeLengthChange = (e) => {
        setTimeLength(e.target.value);
    }
    const onAdditionalNotesChange = (e) => {
        setAdditionalNotes(e.target.value)
    }
    const onSubmit = ()=>{
        generatePitch();
    }
    return (
        <Container>
            <Row>
            <Col md={4} lg={3}>
                <div className={Classes.PitchDiv}>
                    <h3 className={Classes.PitchHeading}>Pitch Filter</h3>
                    <Form>
                        <Form.Group>
                            <Form.Label>Type of Pitch</Form.Label>
                            <Form.Select aria-label="Type of Pitch" onChange={onPitchTypeChange}>
                                {typeOfPitches.map((x, i) => {
                                    return <option key={i} value={x[0]}>{x[1]}</option>
                                })}
                            </Form.Select>
                        </Form.Group>


                        <Form.Group>
                            <Form.Label>Time Length of Pitch</Form.Label>
                            <Form.Select aria-label="Select Time Length" onChange={onTimeLengthChange}>
                                {/* <option value="">Select Fund Type</option> */}
                                {timeLengths.map((x, i) => {
                                    return <option key={i} value={x[0]}>{x[1]}</option>
                                })}
                            </Form.Select>
                        </Form.Group>


                        <Form.Group>
                            <Form.Label>Additional Notes</Form.Label>
                            <textarea className={Classes.AdditionalNotes} placeholder="Type in your additional notes" value={additionalNotes} onChange={onAdditionalNotesChange}/>
                        </Form.Group>
                        <div className={["prompt-buttons", Classes.formButton].join(" ")}>

                            <a className={isFetching ? 'generate-button loading' : 'generate-button'} onClick={onSubmit}>
                                {isFetching ? <span className="loader"></span> : "Regenerate"}
                            </a>
                        </div>
                        {pitchError && <label className={Classes.PitchError}>pitchError</label>}
                    </Form>
                </div>
            </Col>
            <Col  md={8} lg={{ span: 8, offset: 1 }}>
            <div className="output-header-container">
                      <div  id="pitchbox" className="output-header">
                        <h3>Pitch</h3>
                      </div>
                    </div>
                    <div className="output-content">
                      <p>{pitch}</p>
                    </div>
            </Col>
            </Row>
        </Container>
    )
}
export default Pitch;