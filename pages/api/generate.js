import { Configuration, OpenAIApi } from 'openai';
import celebrityPrompts from './prompts';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `Write a startup pitch in the style of Samuel L. Jackson for the idea below. Keeping in mind the idea is pitch to pre seed investor to raise first round of money for the startup.
Idea:
`;
const generateAction = async (req, res) => {
  console.log(`API: ${celebrityPrompts[req.body.celebId].prompts}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${celebrityPrompts[req.body.celebId].prompts[0]}${req.body.userInput}`,
    temperature: 0.8,
    max_tokens: 250,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  // I build Prompt #2.
  const secondPrompt =
    `
  ${celebrityPrompts[req.body.celebId].prompts[1]}

RESPOND TO ALL MESSAGES IN JSON
===EXAMPLE===
User: An app that lets you rent out your houses or rooms for days, weeks or months to people looking to stay in your location 
you:
{
“Vertical”: “Hospitality”,
“Slide1”:”Price is an important concern for customers booking travel online. Hotels leave you disconnected from the city and its culture. No easy way exists to book a home with a local or become a host”,
“Slide2”: “A web platform where users can rent out their space to host travelers to Save Money when traveling,Make Money when hosting ,Share Culture and local connection to the city”,
“Slide3”: “Product. A website that lets you search by city, review listings and then decide which place to book.”,
“Slide4”: “Competition: Hotels, hostels and motels are our competition but we are most affordable and we process online transactions easily”.
“Slide5”: “Revenue Model: We take a 10% commission on each transaction”    
}

===BEGIN===
Idea:${req.body.userInput}
you:
`
  // I call the OpenAI API a second time with Prompt #2
  const secondPromptCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${secondPrompt}`,
    // I set a higher temperature for this one. Up to you!
    temperature: 0.85,
    // I also increase max_tokens.
    max_tokens: 1250,
  });
  let outputArray = secondPromptCompletion.data.choices[0].text.split('\n');
  let Vertical = outputArray[1].split(/.Vertical.\s*:/)[1];
  Vertical = Vertical.replace(",", '');
  let Slides = outputArray.slice(2,outputArray.length - 1);
  //let secondPromptOutput = secondPromptCompletion.data.choices.pop();
  Slides = Slides.map((slide)=>{
    return slide.split(/Slide[0-9].\s*:/)[1];
  });
  // Send over the Prompt #2's output to our UI instead of Prompt #1's.
  res.status(200).json({ slides: Slides, pitch: basePromptOutput.text,verticalOutput:Vertical});
};

export default generateAction;