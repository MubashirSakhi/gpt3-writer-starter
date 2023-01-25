import { useEffect, useState } from 'react';
//import {baseImage} from 'constants';
import Head from 'next/head';
import Image from 'next/image';
import pptxgen from "pptxgenjs";
let pptx = new pptxgen();
import Presentation from './presentation';
import Investors from './investors';
import Slides from './slides';
import * as ga from '../lib/ga';
import Header from './components/Header';
import { useSession } from 'next-auth/react';
import Editor from './components/editor';
import Samples from './samples';
// import { HYPERLINK_SVG, LOGO_STARLABS, SVG_BASE64, UNITE_PNG, UNICORN } from "../components/media";
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [pitchOutput, setPitchOutput] = useState('');
  const [slideArray, setslideArray] = useState([]);
  const [celebrity, setCelebrity] = useState("");
  const [investors, setInvestors] = useState([]);
  const [vertical, setVertical] = useState("");
  const [error, setError] = useState(null);
  const { data: session, status } = useSession()

  const callGenerateEndpoint = async () => {
    try {
      setError(null);
      setIsGenerating(true);
      ga.event({
        action: "generate_slides",
        params: {
          user_prompt: userInput
        }
      })
      console.log("Calling OpenAI...")
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput, celebId: celebrity }),
      });

      const data = await response.json();
      // if (response.status === 503) {
      //   console.log('Model still loading...');
      //   return;
      // }
      const { slides, pitch, verticalOutput } = data;
      const investors = await fetch('/api/airtable', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setVertical(verticalOutput);
      const investorsData = await investors.json();
      console.log("investors: " + investorsData);
      const investorsMapping = investorsData.investorsDb.map((x) => {
        return x.fields;
      });
      setInvestors(investorsMapping);
      console.log("OpenAI replied...", slides.text)

      setApiOutput(slides.join("\n"));
      setPitchOutput(pitch);

      setslideArray(slides);

      // if (slideArray.length <= 1) {
      //   setslideArray([]);
      //   setslideArray(slides.text.split(/([0-9].)|([0-9]:)/));
      // }
      setIsGenerating(false);
      //generatePresentation();
    }
    catch (err) {
      setError(err);
      setIsGenerating(false);

    }


  }
  const celebrityMapping = [
    "Samuel Jackson",
    "Kevin Hart",
    "Scarlett Johansson",
    "Steve Jobs",
    "Bill Gates"
  ]

  // useEffect(()=> {

  // }, apiOutput)

  const handleCelebrityChange = (event) => {
    setCelebrity(event.target.value);
  }
  const downloadSlides = () => {
    console.log("Slide length: " + slideArray.length);
    for (let i = 0; i < slideArray.length; i++) {
      let slide = pptx.addSlide();
      slide.addText("Introduction", { x: 0.2, y: 0.2, w: 5, h: 1, margin: 4, fontSize: 32, bold: true, fontFace: "Poppins", align: "top" });
      slide.addText(slideArray[i], { x: 0.2, y: 1, w: 5, h: 4, margin: 4, fontSize: 18, fontFace: "Poppins", align: "top" });
      //slide.addImage({ x: 5, y: 0, w: 5, h: 5.6, data: UNITE_PNG,sizing:{type:"cover"} });
      slide.background = { data: UNICORN, transparency: 50 }; // image: base64 data
      //slide.addImage = { path: "https://i.pinimg.com/564x/23/d0/fa/23d0fa002b5bbfa8ad82f1d174031554.jpg", x: 1, y: 2 }; // image: url
      //slide.addImage({ path: "img1.png", x: 1, y: 2 })

    }//end of for loop
    pptx.writeFile({ fileName: "Startup-Pitch.pptx" });

  }

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  }
  return (
    <>
      <Header />
      {/* {session && <div> */}
      <div>
        <div>
          <Head>
            <title>Pitch Wise</title>
          </Head>
          <div className="cover-div"></div>
          <div className="logo"></div>
          <div className={celebrity == "" ? "root" : `root ${celebrityMapping[celebrity].split(' ')[0]}`}>
          <div className={celebrity == "" ? "celeb-selection" : "celeb-selection dynamic"}>
            {celebrity == "" && <h1>Pitch Generator</h1>}
            <div>
              <label>Choose a celebrity:</label>
              <select value={celebrity} onChange={handleCelebrityChange} name="celebrities" id="celebrities">
                <option value=""></option>
                <option value="0">Samuel L. Jackson</option>
                <option value="1">Kevin Hart</option>
                <option value="2">Scarlett Johansson</option>
                <option value="3">Steve Jobs</option>
                <option value="4">Bill Gates</option>

              </select>
            </div>

          </div>
          {
            celebrity != "" && <div className="container">

              <div className="header">
                <div className="header-title">
                  <h1>Startup Guru, {celebrityMapping[celebrity]}</h1>
                </div>
                <div className="header-subtitle">
                  <h2>How would {celebrityMapping[celebrity]} Pitch your Startup Idea</h2>
                </div>
              </div>

              {/* Add this code here*/}
              <div className="prompt-container">
                <textarea
                  className="prompt-box"
                  placeholder="Type in your startup idea. Add Details to it"
                  value={userInput}
                  onChange={onUserChangedText}
                />;
                {/* New code I added here */}
                <div className="prompt-buttons">
                  <a
                    className={isGenerating ? 'generate-button loading' : 'generate-button'}
                    onClick={callGenerateEndpoint}
                  >
                    <div className="generate">
                      {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
                    </div>
                  </a>
                </div>
                {/* New code I added here */}
               
              </div>

            </div>
          }
          </div>
          
          {/* {apiOutput && <Presentation idea={pitchOutput} slides={slideArray} />} */}
          {apiOutput && (
            <div className="contianer">
              <Container>
                <Row>
                  <Col xs={{span:6,offset:3}}>
                    <div className="output-header-container">
                      <div className="output-header">
                        <h3>Pitch</h3>
                      </div>
                    </div>
                    <div className="output-content">
                      <p>{pitchOutput}</p>
                    </div>
                  </Col>
                </Row>
              </Container>

            </div>
          )}
          {apiOutput && <Samples userInput={userInput} idea={pitchOutput} slides={slideArray} />}
          {apiOutput && <Investors investors={investors}></Investors>}
          {/* {apiOutput && <Slides userInput={userInput} idea={pitchOutput} slides={slideArray} ></Slides>} */}
          {/* <Editor/> */}

          {apiOutput && <div className='feedbackForm'>
            <Container>
              <Row>
                <Col md={{span:6,offset:3}}>
                  <p>Pitchwise is free while in beta. All we ask is that you share your feedback with us so that we can build an amazing product for you. </p>
                  <a className='generate-button' href="https://tally.so/r/mKpr2g">Share Feedback</a>
                </Col>
              </Row>
            </Container>
            
          </div>}
          <div className='footer'>
            <Container>
              <Row>
                <Col md={6} className="copyright">
                © Pitchwise. All rights reserved.
                </Col>
                <Col md={6} className="social-links">
                <a href="https://www.instagram.com/pitchwiseai/">Instagram</a> | <a href="https://twitter.com/pitchwiseai">Twitter</a> | <a href="linkedin.com">Linkedin</a> 
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      {/* </div>} */}
    </>
  );
};

export default Home;
