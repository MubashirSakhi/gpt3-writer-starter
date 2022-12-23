import { useState } from 'react';
//import {baseImage} from 'constants';
import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import pptxgen from "pptxgenjs";
let pptx = new pptxgen();


const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [pitchOutput, setPitchOutput] = useState('');
  const [slideArray, setslideArray] = useState([]);
  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { slides, pitch } = data;
    console.log("OpenAI replied...", slides.text)

    setApiOutput(`${slides.text}`);
    setPitchOutput(pitch);
    setslideArray(slides.text.split(/Slide [0-9]/));
    setIsGenerating(false);
    //generatePresentation();

  }

  const generatePresentation = () => {
    console.log("SLide length: " + slideArray.length);
    for (let i = 0; i < slideArray.length; i++) {
      let slide = pptx.addSlide();
      slide.addText(slideArray[i], { x: 0, y: 2.5, w: 10, fontSize: 24, fill: { color: "F1F1F1" }, align: "center" });
      slide.addImage = { path: "https://i.pinimg.com/564x/23/d0/fa/23d0fa002b5bbfa8ad82f1d174031554.jpg" }; // image: url


    }//end of for loop
    pptx.writeFile({ fileName: "Startup-Pitch.pptx" });
  }
  const downloadSlides = ()=> {
    console.log("Slide length: " + slideArray.length);
    for (let i = 0; i < slideArray.length; i++) {
      let slide = pptx.addSlide();
      slide.addText(slideArray[i], { x: 0, y: 2.5, w: 10, fontSize: 24, fill: { color: "F1F1F1" }, align: "center" });
      //slide.addImage = { path: "https://i.pinimg.com/564x/23/d0/fa/23d0fa002b5bbfa8ad82f1d174031554.jpg" }; // image: url


    }//end of for loop
    pptx.writeFile({ fileName: "Startup-Pitch.pptx" });
    
  }
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  }
  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="cover-div"></div>
      <div className="container">

        <div className="header">
          <div className="header-title">
            <h1>Startup Guru, Samuel Jackson</h1>
          </div>
          <div className="header-subtitle">
            <h2>Let us create a startup pitch</h2>
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
          {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Pitch</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{pitchOutput}</p>
              </div>
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Slides</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
              <div className="prompt-buttons">
            <a
              className='generate-button'
              onClick={downloadSlides}
            >
              <div className="generate">
                <p>Download Slides</p>
              </div>
            </a>
          </div>
              
            </div>
          )}
        </div>
      </div>

      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
