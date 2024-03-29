import axios from 'axios'

const fetchData = async(url)=>{
    try {
        const res = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log("Error occured while fetching data\n",error);

    }
}

export default fetchData