import { useEffect, useState } from 'react';
import Image from 'next/image';
import PresenationClass from './presentation.module.css';
import Carousel from 'react-bootstrap/Carousel';

const Presentation = (props) => {

  if (props.slides !== undefined) {
    return (
      <div id="root" className={PresenationClass.visibility}>
        <div className="yIDCqA">
          <main className="AZM3kA">
            <div className="FC-dLA">
              <div className="AfX35A">
                <Carousel controls="true">
                  <Carousel.Item>
                    <div className="_01iTiA">
                      <div className="Q7u4fQ" style={{ height: '100vh' }}>
                        <div className="XLi5Rw" style={{ backgroundColor: 'rgb(255, 255, 255)', transform: 'translateY(0px)' }}>
                          <div className="yLoq6A" style={{ backgroundImage: 'url("https://media-private.canva.com/ct7SU/MAFWFKct7SU/1/s2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20221229%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221229T071902Z&X-Amz-Expires=23759&X-Amz-Signature=55c21694fe80b2ac6b64b20c00ef34654f87c8045cbc8cc6a7754a42f866267f&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2029%20Dec%202022%2013%3A55%3A01%20GMT")', opacity: '0.23' }}>
                          </div>
                        </div>
                      </div>
                      <div className="RIzmGA">
                        <div className="H9ohzQ" style={{ width: '759.111px', height: '427px' }}>
                          <div className="cHoknQ">
                            <div className="PcD3hg" style={{ width: '759.111px', height: '427px' }}>
                              <div className="vQ7xvw">
                                <div className="RpZ9dQ" style={{ width: '759.111px', height: '427px' }} lang="en">
                                  <div className="vkewZQ">
                                    <div className="X0udsg" />
                                  </div>
                                  <div style={{ position: 'absolute', top: '42.7px', left: '42.7px', width: '673.711px', height: '341.6px' }}>
                                  </div>
                                  <div className="x8lFvQ Jj59_g" style={{ width: '511.32px', height: '441.595px', transform: 'translate(399.168px, -135.403px) rotate(-61.4679deg)' }}>
                                    <div className="LnihSA">
                                      <div className="X0udsg">
                                        <div className="OQp0jg">
                                          <div className="xcfBCw J6cDAg">
                                            <div className="DvXlvQ" style={{ width: '511.32px', height: '441.595px', transform: 'translate(0px) rotate(0deg)' }}>
                                              <div className="Xv5OvA"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" version={1.0} viewBox="-12.9 -8.6 378.5 327.8" zoomAndPan="magnify" style={{ fill: 'rgb(0, 0, 0)' }} role="img" aria-label="Simple Gradient Rounded Triangle Shape">
                                                <linearGradient gradientTransform="matrix(1 0 0 -1 0 322)" gradientUnits="userSpaceOnUse" id="__id14_s1uqprecj" x1="-.003" x2="352.703" xlinkActuate="onLoad" xlinkShow="other" xlinkType="simple" xmlnsXlink="http://www.w3.org/1999/xlink" y1="162.424" y2="162.424">
                                                  <stop offset=".002" style={{ stopColor: 'rgb(62, 22, 255)' }}>
                                                  </stop>
                                                  <stop offset=".997" style={{ stopColor: 'rgb(15, 195, 207)' }}>
                                                  </stop>
                                                </linearGradient>
                                                <path d="M131.64,25.81L6.99,241.71c-19.87,34.42,4.97,77.44,44.71,77.44H301c39.74,0,64.58-43.02,44.71-77.44 L221.07,25.81C201.19-8.6,151.52-8.6,131.64,25.81z" style={{ fill: 'url("#__id14_s1uqprecj")' }}>
                                                </path>
                                              </svg></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="x8lFvQ Jj59_g" style={{ width: '341.132px', height: '294.614px', transform: 'translate(362.943px, 287.727px) rotate(120.227deg)' }}>
                                    <div className="LnihSA">
                                      <div className="X0udsg">
                                        <div className="OQp0jg">
                                          <div className="xcfBCw J6cDAg">
                                            <div className="DvXlvQ" style={{ width: '341.132px', height: '294.614px', transform: 'translate(0px) rotate(0deg)' }}>
                                              <div className="Xv5OvA"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" version={1.0} viewBox="-12.9 -8.6 378.5 327.8" zoomAndPan="magnify" style={{ fill: 'rgb(0, 0, 0)' }} role="img" aria-label="Simple Gradient Rounded Triangle Shape">
                                                <linearGradient gradientTransform="matrix(1 0 0 -1 0 322)" gradientUnits="userSpaceOnUse" id="__id15_s7rs55wt5" x1="-.003" x2="352.703" xlinkActuate="onLoad" xlinkShow="other" xlinkType="simple" xmlnsXlink="http://www.w3.org/1999/xlink" y1="162.424" y2="162.424">
                                                  <stop offset=".002" style={{ stopColor: 'rgb(62, 22, 255)' }}>
                                                  </stop>
                                                  <stop offset=".997" style={{ stopColor: 'rgb(15, 195, 207)' }}>
                                                  </stop>
                                                </linearGradient>
                                                <path d="M131.64,25.81L6.99,241.71c-19.87,34.42,4.97,77.44,44.71,77.44H301c39.74,0,64.58-43.02,44.71-77.44 L221.07,25.81C201.19-8.6,151.52-8.6,131.64,25.81z" style={{ fill: 'url("#__id15_s7rs55wt5")' }}>
                                                </path>
                                              </svg></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="x8lFvQ Jj59_g" style={{ width: '290.66px', height: '85.3889px', transform: 'translate(60.5435px, 60.5435px)' }}>
                                    <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '735.16px', height: '215.972px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                      <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -18.0141px)' }} lang="en">
                                        <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '180.141px', color: 'rgb(18, 2, 2)', lineHeight: '252px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 700, fontStyle: 'normal', color: 'rgb(18, 2, 2)', textDecoration: 'none' }}>Startup</span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="x8lFvQ Jj59_g" style={{ width: '290.66px', height: '63.6826px', transform: 'translate(60.5435px, 145.932px)' }}>
                                    <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '735.16px', height: '161.071px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                      <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -13.4646px)' }} lang="en">
                                        <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '134.646px', color: 'rgb(62, 22, 255)', lineHeight: '188px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 400, fontStyle: 'normal', color: 'rgb(62, 22, 255)', textDecoration: 'none' }}>Pitch
                                          Deck</span></p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="x8lFvQ Jj59_g" style={{ width: '259.82px', height: '67.0548px', transform: 'translate(60.5435px, 299.402px)' }}>
                                    <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '657.155px', height: '169.6px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                      <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -3.2px)' }} lang="en">
                                        <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '24px', color: 'rgb(18, 2, 2)', lineHeight: '44px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg vZU7QQ RVfbug"><span className="S1PPyQ" style={{ fontWeight: 400, fontStyle: 'normal', color: 'rgb(18, 2, 2)', textDecoration: 'none' }}></span></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="A3Zm_A _8ocrBw" style={{ width: '759.111px', height: '427px', margin: '0px' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="_01iTiA">
                      <div className="XLi5Rw" style={{ backgroundColor: 'rgb(255, 255, 255)', height: '100vh' }} />
                      <div className="afGC1g">
                        <div className="RIzmGA">
                          <div className="H9ohzQ" style={{ width: '759.111px', height: '427px' }}>
                            <div className="cHoknQ">
                              <div className="PcD3hg" style={{ width: '759.111px', height: '427px' }}>
                                <div className="vQ7xvw">
                                  <div className="RpZ9dQ" style={{ width: '759.111px', height: '427px' }} lang="en">
                                    <div className="vkewZQ">
                                      <div className="X0udsg" />
                                    </div>
                                    <div style={{ position: 'absolute', top: '42.7px', left: '42.7px', width: '673.711px', height: '341.6px' }}>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '370.634px', height: '427px', transform: 'translate(388.477px)' }}>
                                      <div className="MZbaSw" style={{ gridTemplate: '"a" 1fr / 1fr', gap: '3.9537px' }}>
                                        <div className="a4q1xw" style={{ gridArea: 'a', width: '370.634px', height: '427px' }}>
                                          <div className="X0udsg">
                                            <div className="OQp0jg">
                                              <div className="xcfBCw J6cDAg">
                                                <div className="DvXlvQ" style={{ width: '370.634px', height: '524.791px', transform: 'translate(0px, -48.8956px) rotate(0deg)' }}>
                                                  <img className="T96P6A" crossOrigin="anonymous" src="https://media-public.canva.com/MADQ48WrPrg/1/screen_2x.jpg" draggable="false" alt="A Building of White" style={{ objectFit: 'fill' }} /></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div style={{ transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                      <div className="x8lFvQ Jj59_g" style={{ width: '982.566px', height: '540px', transform: 'translate(5.68434e-14px, 540px)' }}>
                                        <div className="_9empsQ" style={{ width: '194.087px', height: '106.667px', marginLeft: '0px', marginTop: '0px', transform: 'scale(5.0625)' }}>
                                          <div className="WbgzZA _682gpw" style={{ clipPath: 'path("M 0 0 L 194.087 0 L 194.087 106.667 L 0 106.667 L 0 0")', background: 'rgb(0, 0, 0)', touchAction: 'pan-x pan-y pinch-zoom' }}>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div style={{ transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                      <div className="x8lFvQ Jj59_g" style={{ width: '937.434px', height: '108px', transform: 'translate(982.566px)' }}>
                                        <div className="_9empsQ" style={{ width: '185.172px', height: '21.3333px', marginLeft: '0px', marginTop: '0px', transform: 'scale(5.0625)' }}>
                                          <div className="WbgzZA _682gpw" style={{ clipPath: 'path("M 0 0 L 185.172 0 L 185.172 21.3333 L 0 21.3333 L 0 0")', background: 'rgb(0, 0, 0)', touchAction: 'pan-x pan-y pinch-zoom' }}>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '210.408px', height: '38.24px', transform: 'translate(60.5435px, 249.718px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '532.179px', height: '96.7195px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -8.13333px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '81.3333px', color: 'rgb(255, 255, 255)', lineHeight: '113px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 700, fontStyle: 'normal', color: 'rgb(255, 255, 255)', textDecoration: 'none' }}>Introduction</span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '180.495px', height: '119.929px', transform: 'translate(60.5435px, 60.5435px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '456.52px', height: '303.333px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -25.3333px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '253.333px', color: 'rgb(62, 22, 255)', lineHeight: '354px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 700, fontStyle: 'normal', color: 'rgb(62, 22, 255)', textDecoration: 'none' }}>01</span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '258.188px', height: '67.0438px', transform: 'translate(60.5435px, 299.402px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '653.029px', height: '169.572px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -3.2px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '24px', color: 'rgb(255, 255, 255)', lineHeight: '44px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 400, fontStyle: 'normal', color: 'rgb(255, 255, 255)', textDecoration: 'none' }}>{props.slides[0]}</span></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="A3Zm_A _8ocrBw" style={{ width: '759.111px', height: '427px', margin: '0px' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="_01iTiA">
                      <div className="XLi5Rw" style={{ backgroundColor: 'rgb(255, 255, 255)', height: '100vh' }} />
                      <div className="afGC1g">
                        <div className="RIzmGA">
                          <div className="H9ohzQ" style={{ width: '759.111px', height: '427px' }}>
                            <div className="cHoknQ">
                              <div className="PcD3hg" style={{ width: '759.111px', height: '427px' }}>
                                <div className="vQ7xvw">
                                  <div className="RpZ9dQ" style={{ width: '759.111px', height: '427px' }} lang="en">
                                    <div className="vkewZQ">
                                      <div className="X0udsg" />
                                    </div>
                                    <div style={{ position: 'absolute', top: '42.7px', left: '42.7px', width: '673.711px', height: '341.6px' }}>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '210.408px', height: '38.2455px', transform: 'translate(388.477px, 255.46px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '532.179px', height: '96.7333px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -8.13333px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '81.3333px', color: 'rgb(0, 0, 0)', lineHeight: '113px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 700, fontStyle: 'normal', color: 'rgb(0, 0, 0)', textDecoration: 'none' }}>Problem</span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '250.067px', height: '84.4511px', transform: 'translate(388.477px, 304.477px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '632.487px', height: '213.6px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -3.2px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '24px', color: 'rgb(0, 0, 0)', lineHeight: '44px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 400, fontStyle: 'normal', color: 'rgb(0, 0, 0)', textDecoration: 'none' }}>{props.slides[1]}</span></p>
                                        </div>
                                      </div>
                                    </div>
                                    <div style={{ transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                      <div className="x8lFvQ Jj59_g" style={{ width: '1001.84px', height: '540px', transform: 'translate(918.162px)' }}>
                                        <div className="_9empsQ" style={{ width: '197.894px', height: '106.667px', marginLeft: '0px', marginTop: '0px', transform: 'scale(5.0625)' }}>
                                          <div className="WbgzZA _682gpw" style={{ clipPath: 'path("M 0 0 L 197.894 0 L 197.894 106.667 L 0 106.667 L 0 0")', background: 'rgb(62, 22, 255)', touchAction: 'pan-x pan-y pinch-zoom' }}>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '370.634px', height: '427px', transform: 'translate(0px)' }}>
                                      <div className="MZbaSw" style={{ gridTemplate: '"a" 1fr / 1fr', gap: '3.9537px' }}>
                                        <div className="a4q1xw" style={{ gridArea: 'a', width: '370.634px', height: '427px' }}>
                                          <div className="X0udsg">
                                            <div className="OQp0jg">
                                              <div className="xcfBCw J6cDAg">
                                                <div className="DvXlvQ" style={{ width: '611.091px', height: '427px', transform: 'translate(-162.164px, -5.68434e-14px) rotate(0deg)' }}>
                                                  <img className="T96P6A" crossOrigin="anonymous" src="https://media-public.canva.com/kcQAY/MAD7HtkcQAY/1/s3.jpg" draggable="false" alt="Sad mature businessman thinking about problems in living room" style={{ objectFit: 'fill' }} /></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div style={{ transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                      <div className="x8lFvQ Jj59_g" style={{ width: '937.434px', height: '108px', transform: 'translate(0px, 972px)' }}>
                                        <div className="_9empsQ" style={{ width: '185.172px', height: '21.3333px', marginLeft: '0px', marginTop: '0px', transform: 'scale(5.0625)' }}>
                                          <div className="WbgzZA _682gpw" style={{ clipPath: 'path("M 0 0 L 185.172 0 L 185.172 21.3333 L 0 21.3333 L 0 0")', background: 'rgb(62, 22, 255)', touchAction: 'pan-x pan-y pinch-zoom' }}>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '180.495px', height: '119.929px', transform: 'translate(388.477px, 60.5435px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '456.52px', height: '303.333px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -25.3333px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '253.333px', color: 'rgb(255, 255, 255)', lineHeight: '354px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 700, fontStyle: 'normal', color: 'rgb(255, 255, 255)', textDecoration: 'none' }}>02</span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="A3Zm_A _8ocrBw" style={{ width: '759.111px', height: '427px', margin: '0px' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="_01iTiA">
                      <div className="XLi5Rw" style={{ backgroundColor: 'rgb(255, 255, 255)', height: '100vh' }} />
                      <div className="afGC1g">
                        <div className="RIzmGA">
                          <div className="H9ohzQ" style={{ width: '759.111px', height: '427px' }}>
                            <div className="cHoknQ">
                              <div className="PcD3hg" style={{ width: '759.111px', height: '427px' }}>
                                <div className="vQ7xvw">
                                  <div className="RpZ9dQ" style={{ width: '759.111px', height: '427px' }} lang="en">
                                    <div className="vkewZQ">
                                      <div className="X0udsg" />
                                    </div>
                                    <div style={{ position: 'absolute', top: '42.7px', left: '42.7px', width: '673.711px', height: '341.6px' }}>
                                    </div>
                                    <div style={{ transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                      <div className="x8lFvQ Jj59_g" style={{ width: '1920px', height: '453.153px', transform: 'translate(1.13687e-13px, 518.847px)' }}>
                                        <div className="_9empsQ" style={{ width: '379.259px', height: '89.5117px', marginLeft: '0px', marginTop: '0px', transform: 'scale(5.0625)' }}>
                                          <div className="WbgzZA _682gpw" style={{ clipPath: 'path("M 0 0 L 379.259 0 L 379.259 89.5117 L 0 89.5117 L 0 0")', background: 'rgb(62, 22, 255)', touchAction: 'pan-x pan-y pinch-zoom' }}>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '158.044px', height: '38.2455px', transform: 'translate(388.477px, 60.5435px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '399.736px', height: '96.7333px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -8.13333px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '81.3333px', color: 'rgb(18, 2, 2)', lineHeight: '113px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 700, fontStyle: 'normal', color: 'rgb(18, 2, 2)', textDecoration: 'none' }}>Solution</span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '252.56px', height: '84.4511px', transform: 'translate(388.477px, 109.56px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '638.794px', height: '213.6px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -3.2px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '24px', color: 'rgb(18, 2, 2)', lineHeight: '44px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 400, fontStyle: 'normal', color: 'rgb(18, 2, 2)', textDecoration: 'none' }}>{props.slides[2]}</span></p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '180.495px', height: '119.929px', transform: 'translate(60.5435px, 60.5435px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '456.52px', height: '303.333px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -25.3333px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '253.333px', color: 'rgb(62, 22, 255)', lineHeight: '354px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 700, fontStyle: 'normal', color: 'rgb(62, 22, 255)', textDecoration: 'none' }}>03</span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '119.898px', height: '1.58148px', transform: 'translate(309.894px, 119.702px) rotate(90deg)' }}>
                                      <div className="_2ZkLdw" style={{ transform: 'scale(0.39537)' }}><svg className="urh_lA" style={{ stroke: 'rgb(0, 0, 0)', fill: 'rgb(0, 0, 0)' }}>
                                        <g>
                                          <g className="_682gpw" style={{ touchAction: 'pan-x pan-y pinch-zoom' }}>
                                            <path d="M0,1.9999999999997726L303.2549013989159,1.9999999999997726" strokeLinecap="butt" strokeWidth={4} fill="none" pointerEvents="auto">
                                            </path>
                                          </g>
                                        </g>
                                      </svg></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="A3Zm_A _8ocrBw" style={{ width: '759.111px', height: '427px', margin: '0px' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="_01iTiA">
                      <div className="XLi5Rw" style={{ backgroundColor: 'rgb(255, 255, 255)', height: '100vh' }} />
                      <div className="afGC1g">
                        <div className="RIzmGA">
                          <div className="H9ohzQ" style={{ width: '759.111px', height: '427px' }}>
                            <div className="cHoknQ">
                              <div className="PcD3hg" style={{ width: '759.111px', height: '427px' }}>
                                <div className="vQ7xvw">
                                  <div className="RpZ9dQ" style={{ width: '759.111px', height: '427px' }} lang="en">
                                    <div className="vkewZQ">
                                      <div className="X0udsg" />
                                    </div>
                                    <div style={{ position: 'absolute', top: '42.7px', left: '42.7px', width: '673.711px', height: '341.6px' }}>
                                    </div>
                                    <div style={{ transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                      <div className="x8lFvQ Jj59_g" style={{ width: '998.476px', height: '1080px', transform: 'translate(866.081px)' }}>
                                        <div className="_9empsQ" style={{ width: '197.23px', height: '213.333px', marginLeft: '0px', marginTop: '0px', transform: 'scale(5.0625)' }}>
                                          <div className="WbgzZA _682gpw" style={{ clipPath: 'path("M 0 0 L 197.23 0 L 197.23 213.333 L 0 213.333 L 0 0")', background: 'rgb(0, 0, 0)', touchAction: 'pan-x pan-y pinch-zoom' }}>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div style={{ transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                      <div className="x8lFvQ Jj59_g" style={{ width: '998.476px', height: '483.273px', transform: 'translate(866.081px, 1.13687e-13px)' }}>
                                        <div className="_9empsQ" style={{ width: '197.23px', height: '95.4612px', marginLeft: '0px', marginTop: '0px', transform: 'scale(5.0625)' }}>
                                          <div className="WbgzZA _682gpw" style={{ clipPath: 'path("M 0 0 L 197.23 0 L 197.23 95.4612 L 0 95.4612 L 0 0")', background: 'rgb(33, 0, 196)', touchAction: 'pan-x pan-y pinch-zoom' }}>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '242.254px', height: '1.97685px', transform: 'translate(60.5435px, 215.675px) rotate(90deg)' }}>
                                      <div className="_2ZkLdw" style={{ transform: 'scale(0.39537)' }}><svg className="urh_lA" style={{ stroke: 'rgb(0, 0, 0)', fill: 'rgb(0, 0, 0)' }}>
                                        <g>
                                          <g className="_682gpw" style={{ touchAction: 'pan-x pan-y pinch-zoom' }}>
                                            <path d="M0,2.5L612.7278556936776,2.5" strokeLinecap="butt" strokeWidth={5} fill="none" pointerEvents="auto">
                                            </path>
                                          </g>
                                        </g>
                                      </svg></div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '242.254px', height: '1.97685px', transform: 'translate(60.5435px, 211.523px)' }}>
                                      <div className="_2ZkLdw" style={{ transform: 'scale(0.39537)' }}><svg className="urh_lA" style={{ stroke: 'rgb(0, 0, 0)', fill: 'rgb(0, 0, 0)' }}>
                                        <g>
                                          <g className="_682gpw" style={{ touchAction: 'pan-x pan-y pinch-zoom' }}>
                                            <path d="M0,2.5L612.7278556936775,2.5" strokeLinecap="butt" strokeWidth={5} fill="none" pointerEvents="auto">
                                            </path>
                                          </g>
                                        </g>
                                      </svg></div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '68.0397px', height: '56.9833px', transform: 'translate(84.307px, 127.966px)' }}>
                                      <div className="LnihSA">
                                        <div className="X0udsg">
                                          <div className="OQp0jg">
                                            <div className="xcfBCw J6cDAg">
                                              <div className="DvXlvQ" style={{ width: '68.0397px', height: '56.9833px', transform: 'translate(0px) rotate(0deg)' }}>
                                                <img src="/icon0.png" className="dgFMsw" alt="Abstract Geometric Logo" draggable="false" width={800} height={670} /></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '56.0573px', height: '56.9833px', transform: 'translate(219.698px, 127.966px)' }}>
                                      <div className="LnihSA">
                                        <div className="X0udsg">
                                          <div className="OQp0jg">
                                            <div className="xcfBCw J6cDAg">
                                              <div className="DvXlvQ" style={{ width: '56.0573px', height: '56.9833px', transform: 'translate(0px) rotate(0deg)' }}>
                                                <img src="/icon1.png" className="dgFMsw" alt="Abstract Geometric Outline" draggable="false" width={787} height={800} /></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '68.0397px', height: '54.6869px', transform: 'translate(84.307px, 254.956px)' }}>
                                      <div className="LnihSA">
                                        <div className="X0udsg">
                                          <div className="OQp0jg">
                                            <div className="xcfBCw J6cDAg">
                                              <div className="DvXlvQ" style={{ width: '68.0397px', height: '54.6869px', transform: 'translate(0px) rotate(0deg)' }}>
                                                <img src="/icon2.png" className="dgFMsw" alt="Abstract Logo Design" draggable="false" width={800} height={643} /></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '56.0573px', height: '56.0573px', transform: 'translate(219.698px, 256.908px)' }}>
                                      <div className="LnihSA">
                                        <div className="X0udsg">
                                          <div className="OQp0jg">
                                            <div className="xcfBCw J6cDAg">
                                              <div className="DvXlvQ" style={{ width: '56.0573px', height: '56.0573px', transform: 'translate(0px) rotate(0deg)' }}>
                                                <img src="/icon3.png" className="dgFMsw" alt="Circle Line Art" draggable="false" width={800} height={800} /></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '233.824px', height: '82.9224px', transform: 'translate(388.477px, 213.5px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '591.406px', height: '209.733px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -8.13333px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '81.3333px', color: 'rgb(255, 255, 255)', lineHeight: '113px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 700, fontStyle: 'normal', color: 'rgb(255, 255, 255)', textDecoration: 'none' }}>Market
                                            Competition</span></p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '310.09px', height: '67.0548px', transform: 'translate(388.477px, 312.965px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '784.303px', height: '169.6px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -3.2px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '24px', color: 'rgb(255, 255, 255)', lineHeight: '44px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg vZU7QQ RVfbug"><span className="S1PPyQ" style={{ fontWeight: 400, fontStyle: 'normal', color: 'rgb(255, 255, 255)', textDecoration: 'none' }}>{props.slides[3]}</span></p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '172.01px', height: '119.926px', transform: 'translate(388.477px, 60.3282px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '435.059px', height: '303.326px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -25.3333px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '253.333px', color: 'rgb(255, 255, 255)', lineHeight: '354px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 700, fontStyle: 'normal', color: 'rgb(255, 255, 255)', textDecoration: 'none' }}>04</span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div style={{ transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                      <div className="x8lFvQ Jj59_g" style={{ width: '108px', height: '1080px', transform: 'translate(-1.42109e-14px, 1.13687e-13px)' }}>
                                        <div className="_9empsQ" style={{ width: '21.3333px', height: '213.333px', marginLeft: '0px', marginTop: '0px', transform: 'scale(5.0625)' }}>
                                          <div className="WbgzZA _682gpw" style={{ clipPath: 'path("M 0 0 L 21.3333 0 L 21.3333 213.333 L 0 213.333 L 0 0")', background: 'rgb(33, 0, 196)', touchAction: 'pan-x pan-y pinch-zoom' }}>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="A3Zm_A _8ocrBw" style={{ width: '759.111px', height: '427px', margin: '0px' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="_01iTiA">
                      <div className="XLi5Rw" style={{ backgroundColor: 'rgb(255, 255, 255)', height: '100vh' }} />
                      <div className="afGC1g">
                        <div className="RIzmGA">
                          <div className="H9ohzQ" style={{ width: '759.111px', height: '427px' }}>
                            <div className="cHoknQ">
                              <div className="PcD3hg" style={{ width: '759.111px', height: '427px' }}>
                                <div className="vQ7xvw">
                                  <div className="RpZ9dQ" style={{ width: '759.111px', height: '427px' }} lang="en">
                                    <div className="vkewZQ">
                                      <div className="X0udsg" />
                                    </div>
                                    <div style={{ position: 'absolute', top: '42.7px', left: '42.7px', width: '673.711px', height: '341.6px' }}>
                                    </div>
                                    <div style={{ transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                      <div className="x8lFvQ Jj59_g" style={{ width: '1920px', height: '453.153px', transform: 'translate(0px, 518.847px)' }}>
                                        <div className="_9empsQ" style={{ width: '379.259px', height: '89.5117px', marginLeft: '0px', marginTop: '0px', transform: 'scale(5.0625)' }}>
                                          <div className="WbgzZA _682gpw" style={{ clipPath: 'path("M 0 0 L 379.259 0 L 379.259 89.5117 L 0 89.5117 L 0 0")', background: 'rgb(62, 22, 255)', touchAction: 'pan-x pan-y pinch-zoom' }}>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '119.898px', height: '1.58148px', transform: 'translate(309.894px, 299.313px) rotate(90deg)' }}>
                                      <div className="_2ZkLdw" style={{ transform: 'scale(0.39537)' }}><svg className="urh_lA" style={{ stroke: 'rgb(255, 255, 255)', fill: 'rgb(255, 255, 255)' }}>
                                        <g>
                                          <g className="_682gpw" style={{ touchAction: 'pan-x pan-y pinch-zoom' }}>
                                            <path d="M5.684341886080802e-14,1.9999999999997726L303.25490139891593,1.9999999999997726" strokeLinecap="butt" strokeWidth={4} fill="none" pointerEvents="auto">
                                            </path>
                                          </g>
                                        </g>
                                      </svg></div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '775.064px', height: '205.137px', transform: 'translate(-7.97663px)', opacity: '0.91' }}>
                                      <div className="LnihSA">
                                        <div className="X0udsg">
                                          <div className="OQp0jg">
                                            <div className="xcfBCw J6cDAg">
                                              <div className="DvXlvQ" style={{ width: '775.064px', height: '516.871px', transform: 'translate(-5.68434e-14px, -151.346px) rotate(0deg)' }}>
                                                <img className="T96P6A" crossOrigin="anonymous" src="https://media-public.canva.com/MADGx9dqdxU/4/screen_2x.jpg" draggable="false" alt="Shallow Focus Photography of Coins" style={{ objectFit: 'fill' }} /></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '262.585px', height: '38.2455px', transform: 'translate(388.477px, 240.155px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '664.149px', height: '96.7333px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -8.13333px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '81.3333px', color: 'rgb(255, 255, 255)', lineHeight: '113px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 700, fontStyle: 'normal', color: 'rgb(255, 255, 255)', textDecoration: 'none' }}>Revenue
                                            Model</span></p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '252.56px', height: '67.0301px', transform: 'translate(388.477px, 289.171px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '638.794px', height: '169.538px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -3.2px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '24px', color: 'rgb(255, 255, 255)', lineHeight: '44px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 400, fontStyle: 'normal', color: 'rgb(255, 255, 255)', textDecoration: 'none' }}>{props.slides[4]}</span></p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="x8lFvQ Jj59_g" style={{ width: '180.495px', height: '119.929px', transform: 'translate(60.5435px, 246.527px)' }}>
                                      <div className="nLlVEw Op_PdA _c0ZTA" style={{ writingMode: 'horizontal-tb', width: '456.52px', height: '303.333px', transform: 'scale(0.39537)', transformOrigin: '0px 0px 0px' }}>
                                        <div className="_3stTEQ imh8lg IPnEEQ" style={{ transform: 'translate(0px, -25.3333px)' }} lang="en">
                                          <p style={{ fontFamily: '"Poppins", "_fb_", "auto"', fontSize: '253.333px', color: 'rgb(255, 255, 255)', lineHeight: '354px', letterSpacing: '0em', paraSpacing: 0, textTransform: 'none', headIndent: 0, numericListMarker: 'none', listStyleType: 'none' }} className="ok-Wdg UPenfA RVfbug"><span className="S1PPyQ" style={{ fontWeight: 700, fontStyle: 'normal', color: 'rgb(255, 255, 255)', textDecoration: 'none' }}>05</span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="A3Zm_A _8ocrBw" style={{ width: '759.111px', height: '427px', margin: '0px' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>






              </div>
            </div>
          </main>
        </div>
      </div>

    );
  }
  else {
    return <div></div>
  }


}
export default Presentation;

