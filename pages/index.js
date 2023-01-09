import { useEffect, useState } from 'react';
//import {baseImage} from 'constants';
import Head from 'next/head';
import Image from 'next/image';
import pptxgen from "pptxgenjs";
let pptx = new pptxgen();
import Presentation from './presentation';
import Investors from './investors';
import Slides from './slides';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [pitchOutput, setPitchOutput] = useState('');
  const [slideArray, setslideArray] = useState([]);
  const [celebrity, setCelebrity] = useState("");
  const [investors, setInvestors] = useState([]);
  const [vertical, setVertical] = useState("");
  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput, celebId: celebrity }),
    });

    const data = await response.json();
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
    const investorsMapping = investorsData.investorsDb.map((x)=> {
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
  const celebrityMapping = [
    "Samuel Jackson",
    "Kevin Hart",
    "Scarlett Johansson"
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
      slide.addText(slideArray[i], { x: 0, y: 0.8, w: 10, h: 4, fontSize: 24, fill: { color: "F1F1F1" }, align: "center" });
      slide.addImage = { path: "https://i.pinimg.com/564x/23/d0/fa/23d0fa002b5bbfa8ad82f1d174031554.jpg", x: 1, y: 2 }; // image: url
      //slide.addImage({ path: "img1.png", x: 1, y: 2 })

    }//end of for loop
    pptx.writeFile({ fileName: "Startup-Pitch.pptx" });

  }
  const downloadInsta = () => {
    console.log("make Insta Video");
  }
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  }
  return (
    <div>    
    <div className={celebrity == "" ? "root" : `root ${celebrityMapping[celebrity].split(' ')[0]}`}>
      <Head>
        <title>Pitch Wise</title>
      </Head>
      <div className="cover-div"></div>
      <div className="celeb-selection">
        {celebrity == "" && <h1>Pitch Generator</h1>}
        <div>
          <label>Choose a celebrity:</label>
          <select value={celebrity} onChange={handleCelebrityChange} name="celebrities" id="celebrities">
            <option value=""></option>
            <option value="0">Samuel L. Jackson</option>
            <option value="1">Kevin Hart</option>
            <option value="2">Scarlett Johansson</option>

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
                  {/* <a
                    className='generate-button'
                    onClick={downloadInsta}
                  >
                    <div className="generate">
                      <p>Download Insta Story</p>
                    </div>
                  </a> */}
                </div>

              </div>
            )}
          </div>

        </div>
      }
      {apiOutput && <Presentation idea={pitchOutput} slides={slideArray} />}
      {apiOutput && <Investors investors={investors}></Investors>}
      <Slides></Slides>
    </div>
    
    </div>
  );
};

export default Home;
