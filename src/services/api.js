import axios from 'axios';
import { selectDataArray } from '../utils/selectData';
import { selectDataFromIds } from '../utils/selectData';
export const apiUrl = 'https://hacker-news.firebaseio.com/v0/item/2921983.json';

// export const apiUrlItem = {`apiUrl`};
// is this something that routes can help with?

export const getData = async () => { // for first two
    const response = await axios.get(apiUrl).then(({data}) => data && selectDataArray(data)); // get just select data
    // const response = await axios.get(apiUrl).then(({data}) => data); //get all
    // console.log(response);
    return response;
}

// put single ids into get data to get list of stories
export const getStoryData = async id => {
    const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/2921983.json`).then(({data}) => data && selectDataArray(data)); // get items from one id
    console.log(response);
    return response;
}



export const bananaClick = () => {
        // setbanana('banana');
        console.log('banana clicked');
    }





//get ids 

export const storyData = async () => {
    const storyResponse = await axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json`)
    .then(({data}) => data); // why is data wrapped like that?
    console.log(`story response ${storyResponse}`)
    return storyResponse;
}

// put all ids INTO GETTING TITLES
export const getStoryDataFromIds = async id => {
    const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(({data}) => data && selectDataFromIds(data)); // get items from news array - removing selectData function jsut returns more data - really no need for it
    console.log(response);
    return response;
}