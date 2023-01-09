import { Configuration, OpenAIApi } from 'openai';
import celebrityPrompts from './prompts';
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


const rephrase = async (req, res) => {
    const promptText = `Rephrase keeping this idea as a reference
Idea:${req.body.idea}
Phrase: ${req.body.slideText}
`;
    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: promptText,
        temperature: 0.8,
        max_tokens: 250,
    });
    const basePromptOutput = baseCompletion.data.choices.pop();
    return res.status(200).json({rephrased:basePromptOutput.text})
}

export default rephrase;