import pptxgen from "pptxgenjs";


const generatePresentation = (slides, slideFont) => {
    let pptx = new pptxgen();
    for (let i = 0; i < slides.length; i++) {
        let slide = pptx.addSlide();
        switch (slides[i].layout) {
            case 1: {
                slide.addText(slides[i].title, { x: 0.2, y: 0.2, w: 8, h: 0.6, margin: 4, fontSize: 32, bold: true, fontFace: slideFont, valign: "top", align: "left",color:"868686"});
                slide.addText(slides[i].description, { x: 0.2, y: 1, w: 8, h: 4, margin: 1, fontSize: 18, fontFace: slideFont, valign: "top", align: "left"  });
                break;
            }
            case 2: {
                slide.addText(slides[i].title, { x: 1, y: 1, w: 8, h: 0.6, margin: 1, fontSize: 32, bold: true, fontFace: slideFont, valign: "top", align: "center",color:"868686" });
                slide.addText(slides[i].description, { x: 1, y: 1.5, w: 8, h: 4, fontSize: 18, fontFace: slideFont, valign: "top", align: "center" });
                
                break;
            }
            case 3: {
                slide.addText(slides[i].title, { x: 0.2, y: 0.2, w: 4.5, h: 1, margin: 4, fontSize: 32, bold: true, fontFace: slideFont, valign: "top", align: "left", color:"868686"  });
                slide.addText(slides[i].description, { x: 0.2, y: 1, w: 4.5, h: 4, margin: 1, fontSize: 18, fontFace: slideFont, valign: "top", align: "left" });
                slide.addImage({ x: 5, y: 0, w: 5, h: 5.626, data: slides[i].image, sizing: { type: "cover" } });
                break;
            }
            case 4: {
                slide.addImage({ x: 0, y: 0, w: 10, h: 10, data: slides[i].image, transparency:50, sizing: { type: "crop",w:10,h:5.625,x:0,y:1 } });
                slide.addText(slides[i].title, { x: 1, y: 1, w: 8, h: 1, margin: 1, fontSize: 32, bold: true, fontFace: slideFont, valign: "top", align: "center", color:"FFFFFF" });
                slide.addText(slides[i].description, { x: 1, y: 2, w: 8, h: 4, margin: 4, fontSize: 18, fontFace: slideFont, valign: "top", align: "center", color:"FFFFFF" });
                //slide.background = { data: slides[i].image, transparency: 50 }; // image: base64 data
                break;
            }
            case 5: {
                slide.addImage({ x: 0, y: 0, w: 10, h: 10, data: slides[i].image, transparency:50, sizing: { type: "crop",w:10,h:5.625,x:0,y:1 } });
                slide.addText(slides[i].title, { x: 0.2, y: 0.2, w: 8, h: 1, margin: 4, fontSize: 32, bold: true, fontFace: slideFont, valign: "top", align: "left",color:"FFFFFF" });
                slide.addText(slides[i].description, { x: 0.2, y: 1, w: 8, h: 4, margin: 1, fontSize: 18, fontFace: slideFont, valign: "top", align: "left",color:"FFFFFF" });
               // slide.background = { data: slides[i].image, transparency: 50 }; // image: base64 data
                break;
            }
            default: {

                slide.addText(slides[i].title, { x: 0.2, y: 0.2, w: 5, h: 1, margin: 4, fontSize: 32, bold: true, fontFace: slideFont, valign: "top", align: "center" });
                slide.addText(slides[i].description, { x: 0.2, y: 1, w: 5, h: 4, margin: 4, fontSize: 18, fontFace: slideFont, valign: "top", align: "center" });
                break;

            }

                slide.addText(slides[i].title, { x: 0.2, y: 0.2, w: 5, h: 1, margin: 4, fontSize: 32, bold: true, fontFace: "Poppins", align: "top" });
                slide.addText(slides[i].description, { x: 0.2, y: 1, w: 5, h: 4, margin: 4, fontSize: 18, fontFace: "Poppins", align: "top" });
                //slide.addImage({ x: 5, y: 0, w: 5, h: 5.6, data: UNITE_PNG,sizing:{type:"cover"} });
                slide.background = { data: UNICORN, transparency: 50 }; // image: base64 data
            
        }
    }//end of for loop
    pptx.writeFile({ fileName: "Startup-Pitch.pptx" });
}
export default generatePresentation;