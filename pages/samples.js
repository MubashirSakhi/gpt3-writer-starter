import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Carousel from 'react-bootstrap/Carousel';
import Classes from './samples.module.css';
import Layouts from './components/layouts';
import Form from 'react-bootstrap/Form';
import { UNICORN } from "../components/media";
import generatePresentation  from "../components/generatePresentation";

const dummyData = [
    {
        title: 'Introduction',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        layout: 1,
    },
    {
        title: 'Problem',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        layout: 3,
        image: UNICORN
    },
    {
        title: 'Solution',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        layout: 4,
        image: UNICORN

    },
    {
        title: 'Product',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        layout: 2,
        image: UNICORN
    },
    {
        title: 'Market Competition',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        layout: 5,
        image:UNICORN
    },
    {
        title: 'Revenue Model',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        layout: 5,
        image: UNICORN
    }

]
const fontStyles = [
    "Manrope",
    "Changa",
    "Sen",
    "Montserrat",
    "Sofia Sans",
    "Open Sans",
    "Poppins",
    "Oswald",
    "Roboto Mono",
    "Raleway",
    "Sofia Sans Condensed"
]
const Samples = (props) => {
    const [slides, setSlides] = useState([]);
    const [active, setActive] = useState(0);
    const [activeLayout, setActiveLayout] = useState(1);
    const [isImageGenerating, setImageGenerating] = useState(false);
    const [isRephrasing, setIsRephrasing] = useState(false);
    const [imagePrompt, setImagePrompt] = useState("");
    const [slideFont, setSlideFont] = useState("Sen");
    const [fontList, setFontList] = useState([]);
    useEffect(() => {
        // setSlides(dummyData);
        const initialArray = [];
        initialArray.push({
            title: 'Introduction',
            description: props.idea,
            layout: 1,
            image: UNICORN
        })
        initialArray.push({
            title: 'Problem',
            description: props.slides[0],
            layout: 1,
            image: UNICORN
        })
        initialArray.push({
            title: 'Solution',
            description: props.slides[1],
            layout: 3,
            image: UNICORN
        })
        initialArray.push({
            title: 'Product',
            description: props.slides[2],
            layout: 4,
            image: UNICORN
        })
        initialArray.push({
            title: 'Market Competition',
            description: props.slides[3],
            layout: 3,
            image: UNICORN
        })
        initialArray.push({
            title: 'Revenue',
            description: props.slides[4],
            layout: 5,
            image: UNICORN
        })
        initialArray.push({
            title: 'Thanks',
            description: props.slides[5],
            layout: 4,
            image: UNICORN
        })
        setSlides(initialArray);
        setFontList(fontStyles);

    }, [props.slides])
    const changeLayout = (selectedLayout) => {
        setActiveLayout(selectedLayout);
        const tempSlides = slides.map((s, i) => {
            if (i == active) {
                return { ...s, layout: selectedLayout }
            }
            else {
                return s;
            }
        })
        setSlides(tempSlides);
    }
    const handleSelect = (selectedIndex) => {
        setActive(selectedIndex);

    }
    const rephrase = async () => {
        setIsRephrasing(true);
        let slideText = slides[active].description;
        const rephraseSlide = await fetch('/api/rephrase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput: props.userInput, slideText: slideText }),
        });
        const data = await rephraseSlide.json();
        const rephrasedData = data.rephrased;
        console.log(rephrasedData);
        const tempSlides = slides.map((s, i) => {
            if (i == active) {
                return { ...s, description: rephrasedData }
            }
            else {
                return s;
            }
        })
        setSlides(tempSlides);
        setIsRephrasing(false);
    }
    const generateImg = async () => {
        try{
            setImageGenerating(true);
            const changeImage = await fetch('/api/slides', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: imagePrompt }),
            });
            const data = await changeImage.json();
            const base64Image = data.generatedImage.base64;
            const generatedImage = `data:image/png;base64,${base64Image}`;
            const tempSlides = slides.map((s, i) => {
                if (i == active) {
                    return { ...s, image: generatedImage }
                }
                else {
                    return s;
                }
            })
            setSlides(tempSlides);
            setImageGenerating(false);
        }
        catch(err){
            console.log("error: " + err);
            setImageGenerating(false);
        }
       
    }
    const handlePromptChange = (event) => {
        setImagePrompt(event.target.value);
    }
    const selectFont = (fontStyle) => {
        setSlideFont(fontStyle);
    }
    const onSelectFont = (e) => {
        console.log("wtf: " + e.target.value);
        setSlideFont(e.target.value)
    }
    const downloadSlides = ()=> {
        generatePresentation(slides,slideFont);
    }
    if (slides.length > 0) {
        return (<Container>
            <Row className={Classes.carouselRow}>
                <Col md={2} className={Classes.layoutSelector}>
                    <h4 className={Classes.heading}>Select Layouts</h4>
                    <div className={activeLayout == 1 ? Classes.activeLayout : ''} onClick={() => changeLayout(1)} style={{ backgroundImage: `url('/layouts/layout1.png')` }}>
                        <h5 className="align-middle">Basic</h5>
                    </div>
                    <div className={activeLayout == 2 ? Classes.activeLayout : ''} onClick={() => changeLayout(2)} style={{ backgroundImage: `url('/layouts/layout2.png')` }}>
                        <h5>Basic Center</h5>
                    </div>
                    <div className={activeLayout == 3 ? Classes.activeLayout : ''} onClick={() => changeLayout(3)} style={{ backgroundImage: `url('/layouts/layout3.png')` }}>
                        <h5>Two Column</h5>
                    </div>
                    <div className={activeLayout == 4 ? Classes.activeLayout : ''} onClick={() => changeLayout(4)} style={{ backgroundImage: `url('/layouts/layout4.png')` }}>
                        <h5>Background Center</h5>
                    </div>
                    <div className={activeLayout == 5 ? Classes.activeLayout : ''} onClick={() => changeLayout(5)} style={{ backgroundImage: `url('/layouts/layout5.png')` }}>
                        <h5>Background Left</h5>
                    </div>
                </Col>
                <Col md={10}>
                    <Row className={[Classes.generateBox, Classes.rephraseBox].join(" ")}>
                        {/* <Col md={3} className={Classes.fontDropDown}>
                            <div>
                                <DropdownButton id="dropdown-basic-button" title="Slide Font" className={Classes.dropdown}>
                                    {fontList.map((x, i) => {
                                        return <Dropdown.Item as="button" onClick={() => selectFont(x)} >{x}</Dropdown.Item>
                                    })}
                                </DropdownButton>
                            </div>
                        </Col> */}
                        <Col md={6} className={Classes.fontSelector}>
                            <Form.Select aria-label="Default select example" onChange={onSelectFont}>
                                {fontList.map((x,i)=>{
                                   return <option key={i} value={x}>{x}</option>
                                })}
                            </Form.Select>
                        </Col>
                        <Col md={6}>
                            <div >
                                <div className="prompt-buttons">

                                    <a className={isRephrasing ? 'generate-button loading' : 'generate-button'} onClick={rephrase}>
                                        {isRephrasing ? <span className="loader"></span> : "Rephrase Text of this Slide"}
                                    </a>
                                    <a className='generate-button' onClick={downloadSlides}>
                                        Download Slides
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>


                    <Carousel className={Classes.carousel} interval="10000000" onSelect={handleSelect}>
                        {slides.map((slide, index) => {
                            return (
                                <Carousel.Item key={index} className={Classes.carouselItem}>
                                    <Layouts slideFont={slideFont} layout={slide.layout} title={slide.title} description={slide.description} image={slide.image} />
                                </Carousel.Item>
                            )
                        })}

                    </Carousel>
                </Col>
            </Row>
            <Row className={Classes.generateRow}>
                <Col md={{ span: 8, offset: 2 }}>
                    <div className={Classes.generateBox}>
                        {/* {active !== 0 && <div className="prompt-buttons">
    
                                <a className={isRephrasing ? 'generate-button loading' : 'generate-button'} onClick={rephrase}>
                                    {isRephrasing ? <span className="loader"></span> : "Rephrase Text of this Slide"}
                                </a>
                            </div>} */}
                        {slides[active].layout !== 1 && slides[active].layout !== 2 && <div>
                            <input type="text" placeholder="Type prompt to generate new image for this slide" onChange={handlePromptChange} />
                            <div className="prompt-buttons">
                                <a className={isImageGenerating ? 'generate-button loading' : 'generate-button'} onClick={generateImg}>
                                    {isImageGenerating ? <span className="loader"></span> : "Generate"}
                                </a>

                            </div>
                        </div>}
                    </div>
                </Col>
            </Row>
        </Container>)
    }
    else {
        return <></>;
    }




}

export default Samples;