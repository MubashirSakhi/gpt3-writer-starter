import axios from "axios";
import { Configuration, OpenAIApi } from 'openai';
import pitchPrompts from './pitch';
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const suggestion = async (req, res) => {
    let baseCompletion;
    if (req.body.additionalNotes !== undefined) {
         baseCompletion = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${pitchPrompts.type[req.body.type]}${req.body.time}${req.body.additionalNotes}`,
            temperature: 0.8,
            max_tokens: 250,
        });
    }
    else{
         baseCompletion = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${pitchPrompts.type[req.body.type]}${pitchPrompts.type[req.body.time]}`,
            temperature: 0.8,
            max_tokens: 250,
        });
    }


    const basePromptOutput = baseCompletion.data.choices.pop();
    if (baseCompletion.status == 200) {
        res.status(200).json({ pitch: basePromptOutput });
    }
    else{
        res.status(basePromptCompletion.status).json({error:"something went wrong"});
      } 

    // Send over the Prompt #2's output to our UI instead of Prompt #1's.
    
};

export default suggestion;