import axios from "axios";
const pitchAirTableUrl = "https://api.airtable.com/v0/appedwFL33qeN8Rwt/tblPc8BEPULiAmAd5?maxRecords=20&fields%5B%5D=FundStage&fields%5B%5D=Investor+Name&fields%5B%5D=FundType&fields%5B%5D=Website+(if+available)&filterByFormula=SEARCH('Pre-Seed', ARRAYJOIN(FundStage))";

const airtablefilter = async (req, res) => {
    const airtableUrl = `https://api.airtable.com/v0/appedwFL33qeN8Rwt/tblPc8BEPULiAmAd5?maxRecords=20&fields%5B%5D=FundStage&fields%5B%5D=Investor+Name&fields%5B%5D=FundType&fields%5B%5D=Website+(if+available)&fields%5B%5D=FundFocus&filterByFormula=AND(SEARCH("${req.body.fundFocus}",ARRAYJOIN(FundFocus)),SEARCH("${req.body.fundStage}", ARRAYJOIN(FundStage)),{FundType}="${req.body.fundType}")`;
  const investors = await axios.get(airtableUrl,{
    headers: {
        'Content-Type': 'application/json',
        Authorization:
        `Bearer ${process.env.AIRTABLE_API_KEY}`
      }
  });
  console.log("I: " +investors.data.records);
  if(investors.data.records.length <= 0){
    console.log("call airtable without fund focus")
  }
   
  // Send over the Prompt #2's output to our UI instead of Prompt #1's.
  res.status(200).json({ investorsDb:investors.data.records });
};

export default airtablefilter;