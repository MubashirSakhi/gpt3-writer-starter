import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `Write a startup pitch in the style of Samuel L. Jackson for the idea below. Keeping in mind the idea is pitch to pre seed investor to raise first round of money for the startup.
Idea:
`;
const generateAction = async (req, res) => {
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.8,
    max_tokens: 250,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  // I build Prompt #2.
  const secondPrompt = 
  `
  Take the pitch and idea of the startup below and generate slides for mission, pain points, revenue model. Make it feel like a story. Don't just list the points. Go deep into each one. Explain why. Include Samuel Jackson's dialogue in the last slide.

  Idea: ${req.body.userInput}

  pitch: ${basePromptOutput.text}

  Slides:
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
  
  // Get the output
  const secondPromptOutput = secondPromptCompletion.data.choices.pop();

  // Send over the Prompt #2's output to our UI instead of Prompt #1's.
  res.status(200).json({ slides: secondPromptOutput, pitch: basePromptOutput.text });
};

export default generateAction;