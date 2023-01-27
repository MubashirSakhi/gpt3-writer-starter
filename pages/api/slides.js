import axios from "axios";

//const dreambooth_base = "https://api.stability.ai/v1alpha/generation/stable-diffusion-512-v2-0/text-to-image"
const dreambooth_base = "https://api.stability.ai/v1alpha/generation/stable-diffusion-v1-5/text-to-image"
const slides = async (req, res) => {
  let aesthetic = "cyberpunk";
  if(req.body.aesthetic !== undefined && req.body.aesthetic !== null){
    aesthetic = req.body.aesthetic;
  }
  const slideImage = await axios({
    method: 'post',
    url: dreambooth_base,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": process.env.DREAMBOOTH_API_KEY
    },
    data: {
      "cfg_scale": 20,
      "clip_guidance_preset": "FAST_BLUE",
      "height": 512,
      "width": 512,
      "samples": 1,
      "sampler":"K_DPM_2_ANCESTRAL",
      "steps": 30,
      "text_prompts": [
        {
          "text": req.body.text,
          "weight": 1,

        },
        {
          "text": `Aesthetic, ${aesthetic}`,
           "weight": 0.9
      },
        {
          "text": "Centered.",
           "weight": 0.8
      },
      {
          "text": "Ultra Detailed.",
           "weight": 0.9
      },
      {
          "text": "words",
           "weight": -1.0
      }


      ]
    }
  });
  if (slideImage.status == 200) {
    res.status(200).json({ generatedImage: slideImage.data.artifacts[0] });
  }
  else if (slideImage.status === 503) {
    const json = await slideImage.json();
    res.status(503).json(json);
  } else {
    const json = await slideImage.json();
    res.status(slideImage.status).json({ error: slideImage.statusText });
  }
};
export default slides;