const pitchPrompts = [
    {
        "additionalNotes": `The user has provided some additional notes to regenerate the pitch, generate with reference to the provided notes`,
        "type": {
            "informal": `Rephrase the pitch you generated below for idea entered by the user. 
            The pitch needs to be informal.`,


            "formal": `Rephrase the pitch you generated below for idea entered by the user. 
            The pitch needs to be formal.`,


            "elevator": `Rephrase the pitch you generated below for idea entered by the user. 
            The pitch needs to be an elevetor pitch.`,


            "speed": `Rephrase the pitch you generated below for idea entered by the user. 
            The pitch is for speed dating and should be able to start a conversation.`,


            "cold": `Rephrase the pitch you generated below for idea entered by the user. 
            The pitch needs to be a cold email.`,


            "sales": `Rephrase the pitch you generated below for idea entered by the user. 
            The pitch needs to be a sales pitch. The user is trying to make a sale to a perspective client.`

        },
        "time": {
            "one": `The pitch needs to be one minute long, should cover three things. What are you building, examples of the use case and the progress.`,
            "two": `The pitch needs to be two minutes long, should cover three things. What are you building, examples of the use case and the progress.`,
            "three": `The pitch needs to be three minutes long, should cover three things. What are you building, examples of the use case and the progress.`,
            "five": `The pitch needs to be three minutes long, should cover three things. What are you building, examples of the use case and the progress.`
        }
    }
];
export default pitchPrompts;