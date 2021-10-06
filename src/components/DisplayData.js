// import React from "react";
import React, { useEffect, useState } from "react";
import { storyData } from "../services/api";
import { getData } from "../services/api";
import { getStoryData } from "../services/api";
import { getStoryDataFromIds } from "../services/api";
import { bananaClick } from "../services/api";

// GETTING IDS FROM AN ARRAY
// how would we add infinite scroll? 
// would either do a set number of posts, when pageOffset = bottom then we n+n the number of posts - also need a scroll event listener and a pause action script help make it smoother

export const DisplayData = () => {
    const [ids, setIds] = useState([]);
    const [stories, setStories] = useState([]);
    const [banana, setBanana] = useState('Funky');

    // watches for changes and sets page name always to ${banana}
    useEffect(() => {
        document.title = `this pages name is ${banana}`
    })

    useEffect(() => {
        storyData().then(data => setIds(data)); // array of ids return
    }, []) 

    useEffect(() => {
        getStoryData().then(data => setStories(data)); // array of ids return
    }, []) 


    return (
        <>
            {/* handles a click function that sets the text equal to hello or Funky based on whatever it isn't */}
            <h1 id="ok" onClick={
                () => {
                banana == "Funky" ? setBanana('hello') : setBanana('Funky');
            }}
            >{banana}</h1>
            {/* return 10 items from array */}
            {/* {ids && ids.slice(0, 10).map(id => { return <div key={id}>{id}</div> })} */}

            
            {/* return 10 items from array into a new class */}
            {/* displays all ids */}
            {ids.slice(0, 10).map(id => <div key={id}>{id}</div>)}
            {/* loops through ids and passes them into id calling the function to get titles */}
            {ids.slice(0, 10).map(id => <DisplayDataFromIds key={id} id={id} />)}

            {/* returning story of single id */}
            {/* <div>{stories.by, stories.text}</div> */}

        </>

    ); 
    
    
};

// CYCLE THROUGH IDS AND DISPLAY TITLE
// takes the id input passes it through our api function - which loops through all the ids - puts the data into our stories object - then we can call properties off of that.

export const DisplayDataFromIds = ({id}) => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        getStoryDataFromIds(id).then(data => data && data.url && setStories(data)); // array of ids return
    }, []) 


    return stories ? (
        <>
          <a className="storyTitle" href={stories.url}>{stories.title}</a> 
            {/* want to return the stories linked to 10 ids */}
            {/* {stories && stories.slice(0, 10).map(story => { return <div key={story}>{story}</div> })} */}
            {/* {ids && ids.slice(0, 10).map(id => { return <div key={id}>{id}</div> })} */}
            {/* {stories.by, stories.text} */}
        </>

    ) : null; 
    
    
};


export const Story = ({info}) => {
    return(
        <div></div>
    );
}


// DATA FROM AN OBJECT WITH MULTIPLE CHILDREN
// SEE SELECTDATA TO NARROW DOWN DATA SELECTION

export const DisplayDataAgain = () => {
    const [props, setProps] = useState([]);

    useEffect(() => {
        getData().then(data => setProps(data));
    }, []) 

    return (
        <>          
             {/* {props.by}
             {props.id}
             {props.text}   */}
        </>

    );  
};







// TESTING CODE

// export const DisplayData = () => {
//     const [infos, setInfos] = useState([]);
//     // const something = infos && infos.map((input) => {return input*10});
    
//     // const storyIds = infos.map((infos) => {});

//     useEffect(() => {
//         // getData().then(data => setInfos(data));
//         storyData().then(data => setInfos(data));
        
//     }, []) 
//     // putting in [infos] causes update and rerun of functions inside useEffect
    
//     // const something = infos && infos.map((input) => {return input*10});
//     // console.log("hi" + something);

//     return (
//         <>
        
//             {infos && infos.slice(0, 10).map(info => {
//                 // console.log(infos[1]); // returns 1st in array 500 times
//                 return <div key={info}>{info}</div>
//                 console.log(info);
//                 // return class that will display info for all data gathered
//             })}
            
//              {/* {infos.by}
//              {infos.id}
//              {infos.text} */}
            
//         </>

//     );

    
// }