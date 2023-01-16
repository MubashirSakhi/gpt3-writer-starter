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

    useEffect(() => {
        setSlides(dummyData);
    })
    const changeLayout = (index,selectedLayout) => {
        const tempSlide = slides.map((s, i) => {
            if (i == active) {
                return {...s, layout: selectedLayout}
            }
            else{
                return s;
            }
        })
    }
    const handleSelect = (selectedIndex) => {
        setActive(selectedIndex);
        setSlides()
    }
    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
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
        </Container>

    )
}

export default Samples;