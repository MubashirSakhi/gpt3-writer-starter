import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Classes from './samples.module.css';
import Layouts from './components/layouts';
const dummyData = [
    {
        title: 'Introduction',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        layout: 1
    },
    {
        title: 'Problem',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        layout: 3,
        image: '/unicorn.png'
    },
    {
        title: 'Solution',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        layout: 4,

    },
    {
        title: 'Product',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        layout: 2,
        image: '/unicorn.png'
    },
    {
        title: 'Market Competition',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        layout: 5,
        image: '/unicorn.png'
    },
    {
        title: 'Revenue Model',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        layout: 5,
        image: '/unicorn.png'
    }

]
const Samples = (props) => {
    const [slides, setSlides] = useState([]);
    const [active, setActive] = useState(0);
    const [activeLayout, setActiveLayout] = useState(1);
    const [isImageGenerating, setImageGenerating] = useState(false);
    const [isRephrasing, setIsRephrasing] = useState(false);
    const [imagePrompt, setImagePrompt] = useState("");

    useEffect(() => {
        // setSlides(dummyData);
        const initialArray = [];
        initialArray.push({
            title: 'Introduction',
            description: props.idea,
            layout: 1,
            image: '/unicorn.png'
        })
        initialArray.push({
            title: 'Problem',
            description: props.slides[0],
            layout: 1,
            image: '/unicorn.png'
        })
        initialArray.push({
            title: 'Solution',
            description: props.slides[1],
            layout: 3,
            image: '/unicorn.png'
        })
        initialArray.push({
            title: 'Product',
            description: props.slides[2],
            layout: 4,
            image: '/unicorn.png'
        })
        initialArray.push({
            title: 'Market Competition',
            description: props.slides[3],
            layout: 3,
            image: '/unicorn.png'
        })
        initialArray.push({
            title: 'Revenue',
            description: props.slides[4],
            layout: 5,
            image: '/unicorn.png'
        })
        initialArray.push({
            title: 'Thanks',
            description: props.slides[5],
            layout: 4,
            image: '/kevin.png'
        })
        setSlides(initialArray);
    }, [])
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
    const handlePromptChange = (event) => {
        setImagePrompt(event.target.value);
    }
    return (
        <Container>
            <Row>
                <Col md={2} className={Classes.layoutSelector}>
                    <h3 className={Classes.heading}>Select Layouts</h3>
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
                    <div className={[Classes.generateBox,Classes.rephraseBox].join(" ")}>
                        <div className="prompt-buttons">

                            <a className={isRephrasing ? 'generate-button loading' : 'generate-button'} onClick={rephrase}>
                                {isRephrasing ? <span className="loader"></span> : "Rephrase Text of this Slide"}
                            </a>
                        </div>
                    </div>

                    <Carousel className={Classes.carousel} interval="10000000" onSelect={handleSelect}>
                        {slides.map((slide, index) => {
                            return (
                                <Carousel.Item key={index} className={Classes.carouselItem}>
                                    <Layouts layout={slide.layout} title={slide.title} description={slide.description} image={slide.image} />
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
        </Container>

    )
}

export default Samples;