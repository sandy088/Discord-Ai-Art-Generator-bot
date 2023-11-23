import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
// interface ArtData {
//     message: string,
//     output: string[]
// }
const generateArt = async (prompt: string) => {
    const data = {
        prompt: prompt,
    }
    try {
        let artData: string = "Some error occurred while generating art"

        await axios.post(`${process.env.AI_ART_BASE_URL}/api/v1/generate`, data, {
            headers: {
                'Authorization': `Bearer ${process.env.AI_ART_TOKEN}`,
                'Content-Type': 'application/json',
                // Add other headers if needed
            },
            // Add other options like data, params, etc. if needed
        }).then((response)=>{
            artData = response.data.output[0];
        }).catch((error)=>{
            console.log(error)
        });

        return artData;
    } catch (error) {
        console.log("This error occurred while generating art", error)
        return {
            error: "Some error occurred while generating art"
        }
    }
}


export {generateArt}