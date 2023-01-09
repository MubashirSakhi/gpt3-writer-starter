import axios from "axios";

const dreambooth_base = "https://api.stability.ai/v1alpha/generation/stable-diffusion-512-v2-0/text-to-image"

const slides = async (req,res)=> {
    const slideImage = await axios({
        method: 'post',
        url: dreambooth_base,
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": process.env.DREAMBOOTH_API_KEY
        },
        data:{
            "cfg_scale": 7,
            "clip_guidance_preset": "FAST_BLUE",
            "height": 512,
            "width": 512,
            "samples": 1,
            "steps": 50,
            "text_prompts": [
              {
                "text": req.body.text,
                "weight": 1
              }]
            }
      });
      if(slideImage.data){
        if(slideImage.data.artifacts.length > 0){
          const base64Image = btoa(
            new Uint8Array(artifact.getBinary()).reduce(
              (data, byte) => data + String.fromCodePoint(byte),
              ""
            )
          );
        }
      }
      console.log(slideImage.data);
      res.status(200).json({generatedImage:slideImage.data});
};
export default slides;