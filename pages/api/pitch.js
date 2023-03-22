import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { requestToBodyStream } from "next/dist/server/body-streams";
import { Configuration, OpenAIApi } from 'openai';
//import pitchPrompts from '../../prompts/pitch';
import  pitchPrompts  from "./pitchPrompts";
const pitchBody = pitchPrompts;
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const pitch = async (req, res) => {
    try {
        let max_tokens = 250;
        let baseCompletion;
        if(req.body.timeLength == 'one'){
            max_tokens = 150;
        }
        else if( req.body.timeLength == "two"){
            max_tokens = 250;
        }
        else if( req.body.timeLength == 'three'){
            max_tokens = 450;
        }
        
        console.log("shit: " + pitchBody)
        if (req.body.additionalNotes !== undefined) {
            baseCompletion = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: `${pitchBody.type[req.body.typeOfPitch]}${pitchBody.time[req.body.timeLength]}
                ${req.body.additionalNotes}
                pitch:${req.body.pitch}
                idea:${req.body.idea}`,
                temperature: 0.8,
                max_tokens: max_tokens,
            });
        }
        else {
            let shitPitch = pitchPrompts.type['elevator'];
            console.log("shit Pitch: " + shitPitch);
            let pitchString = `${pitchBody.type[req.body.typeOfPitch]}${pitchBody.time[req.body.timeLength]}
            pitch:${req.body.pitch}
            idea:${req.body.idea}`;
            baseCompletion = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: pitchString,
                temperature: 0.8,
                max_tokens: max_tokens,
            });
        }


        const basePromptOutput = baseCompletion.da5ta.choices.pop();
        if (baseCompletion.status == 200) {
            res.status(200).json({ pitch: basePromptOutput.text });
        }
        else {
            res.status(basePromptCompletion.status).json({ error: "something went wrong" });
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: "something went wrong" });
    }
    

    // Send over the Prompt #2's output to our UI instead of Prompt #1's.
    
};

export default pitch;