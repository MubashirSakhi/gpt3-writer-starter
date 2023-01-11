import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import Classes from './slides.module.css';

const Slides = (props) => {
    const [introductionText, setIntroductionText] = useState("");
    const [introductionImage, setIntroductionImage] = useState("https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg");

    const [problemText, setProblemText] = useState("");
    const [problemImage, setProblemImage] = useState("https://media-public.canva.com/kcQAY/MAD7HtkcQAY/1/s3.jpg");

    const [solutionText, setSolutionText] = useState("");
    const [solutionImage, setSolutionImage] = useState("");

    const [competitionText, setCompetitionText] = useState("");
    const [competitionImage, setCompetitionImage] = useState("https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg");

    const [productText, setProductText] = useState("");
    const [productImage, setProductImage] = useState("");

    const [revenueText, setRevenueText] = useState("");
    const [revenueImage, setRevenueImage] = useState("https://media-public.canva.com/MADGx9dqdxU/4/screen_2x.jpg");

    const [thanksText, setThanksText] = useState("");
    const [thanksImage, setThanksImage] = useState("https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg");
    const [active, setActive] = useState(0);
    const [imageText, setImageText] = useState("");
    const [isImageGenerating, setImageGenerating] = useState(false);
    const [isRephrasing, setIsRephrasing] = useState(false);
    const [imagePrompt, setImagePrompt] = useState("");

    const handlePromptChange = (event) => {
        setImagePrompt(event.target.value);
    }
    const generateImg = async () => {
        let slideIndex = active;
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
        const generatedImage = `data:image/png;base64,${base64Image}`
        switch (slideIndex) {
            case 1:
                setIntroductionImage(generatedImage);
                break;
            case 2:
                setProblemImage(generatedImage);
                break;
            case 3:
                setSolutionImage(generatedImage);
                break;
            // case 4:
            //     setProductImage(generatedImage);
            //     break;
            case 4:
                setCompetitionImage(generatedImage);
                break;
            case 5:
                setRevenueImage(generatedImage);
                break;
            case 6:
                setThanksImage(generatedImage);
                break;
            default:
                console.log(generatedImage)
        }
        setImageGenerating(false);
    }
    const rephrase = async () => {
        let slideIndex = active;
        setIsRephrasing(true);
        let slideText = "";
        switch (slideIndex) {
            case 1:
                slideText = introductionText;
                break;
            case 2:
                slideText = problemText;
                break;
            case 3:
                slideText = solutionText;
                break;
            // case 4:
            //     slideText = productText;
            //     break;
            case 4:
                slideText = competitionText;
                break;
            case 5:
                slideText = revenueText;
                break;
            case 6:
                slideText = thanksText
                break;
            default:
                console.log("slide Text")
        }
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
        switch (slideIndex) {
            case 1:
                setIntroductionText(rephrasedData);
                break;
            case 2:
                setProblemText(rephrasedData);
                break;
            case 3:
                setSolutionText(rephrasedData);
                break;
            // case 4:
            //     setProductText(rephrasedData);
            //     break;
            case 4:
                setCompetitionText((prev) => rephrasedData);
                break;
            case 5:
                setRevenueText(rephrasedData);
                break;
            case 6:
                setThanksText(rephrasedData);
                break;
            default:
                console.log(rephrasedData)
        }
        setIsRephrasing(false);


    }
    const handleSelect = (selectedIndex, e) => {
        setActive(selectedIndex);
    };
    useEffect(() => {
        setIntroductionText(props.idea);
        setProblemText(props.slides[0]);
        setSolutionText(props.slides[1]);
        setProductText(props.slides[2]);
        setCompetitionText(props.slides[3]);
        setRevenueText(props.slides[4]);
        setThanksText(props.slides[5]);
    }, [])
    return (
        <>
            <Carousel className={Classes.carousel} interval="10000000" onSelect={handleSelect}>
                <Carousel.Item className={Classes.carouselItem}>
                    <Container className={Classes.slide1}>
                        <Row className={Classes.row}>
                            <Col md={6}>
                                <div className={Classes.upper}>
                                    <h1>Startup</h1>
                                    <h2>Pitch Deck</h2>
                                </div>
                                <div className={Classes.down}>

                                </div>
                            </Col>
                            <Col md={6}>

                            </Col>
                        </Row>


                    </Container>
                </Carousel.Item>
                <Carousel.Item className={Classes.carouselItem}>
                    <Container className={Classes.slide2}>
                        <Row className={Classes.row}>
                            <Col md={6}>
                                <div className={[Classes.numbering, Classes.upper].join(" ")}>
                                    <h1>01</h1>
                                </div>
                                <div className={Classes.down}>
                                    <h3>Introduction</h3>
                                    <p>{introductionText}</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <img className="img-fluid" src={introductionImage}></img>
                            </Col>
                        </Row>

                    </Container>
                </Carousel.Item>
                <Carousel.Item className={Classes.carouselItem}>
                    <Container className={Classes.slide3}>
                        <Row>
                            <Col md={6}>
                                <img className="img-fluid" src={problemImage}></img>
                            </Col>
                            <Col md={6}>
                                <div className={Classes.numbering}>
                                    <h1>02</h1>
                                </div>
                                <div>
                                    <h3>Problem</h3>
                                    <p>{problemText}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item className={Classes.carouselItem}>
                    <Container className={Classes.slide4}>
                        <Row>
                            <Col md={6}>
                                <div className={Classes.numbering}>
                                    <h1 >03</h1>
                                </div>
                            </Col>
                            <Col md={6}>

                                <div>
                                    <h3>Solution</h3>
                                    <p>{solutionText}</p>
                                </div>
                                <div>
                                    <h3>Problem</h3>
                                    <p>{productText}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>

                        </Row>
                    </Container>
                </Carousel.Item >
                <Carousel.Item className={Classes.carouselItem}>
                    <Container className={Classes.slide5} >
                        <Row>
                            <Col md={6} className="MarketImages">

                                <img className="img-fluid" src={competitionImage}></img>

                            </Col>
                            <Col md={6}>
                                <div className={Classes.numbering}>
                                    <h1 >04</h1>
                                </div>
                                <div>
                                    <h3>Market Competition</h3>
                                    <p>{competitionText}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item className={Classes.carouselItem}>
                    <Container className={Classes.slide6}>
                        
                        <Row>
                            <Col md={6}>
                            <img className="img-fluid" src={revenueImage}></img>
                            </Col>
                            <Col md={6}>
                                <div className={Classes.numbering}>
                                    <h1  >05</h1>
                                </div>
                                <div>
                                    <h3>Revenue Model</h3>
                                    <p>{revenueText}</p>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </Carousel.Item>
                <Carousel.Item className={Classes.carouselItem}>
                    <Container className={Classes.slide7}>
                        <Row>
                            <Col md={6}>
                            <img className="img-fluid" src={thanksImage}></img>
                            </Col>
                            <Col md={6}>
                                <div>
                                    <h1>Thank You</h1>
                                    <h2>For Listening</h2>
                                </div>
                                <div>
                                    <p>{thanksText}</p>
                                </div>

                            </Col>
                        </Row>

                    </Container>
                </Carousel.Item>
            </Carousel>
            <Container>
                <Row className={Classes.row}>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className={Classes.generateBox}>
                            {active !== 0 && <div className="prompt-buttons">

                                <a className={isRephrasing ? 'generate-button loading' : 'generate-button'} onClick={rephrase}>
                                    {isRephrasing ? <span className="loader"></span> : "Rephrase Text of this Slide"}
                                </a>
                            </div>}
                            {active !== 0 && active !== 3 && <div>
                                <input type="text" placeholder="Type prompt to generate new image for this slide" onChange={handlePromptChange} />
                                <div className="prompt-buttons">
                                    <a className={isImageGenerating ? 'generate-button loading' : 'generate-button'} onClick={generateImg}>
                                    {isImageGenerating ? <span className="loader"></span> :"Generate"}
                                    </a>

                                </div>
                            </div>}
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Slides;