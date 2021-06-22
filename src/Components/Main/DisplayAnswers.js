import React,{useState} from 'react';
import '../../ComponentCss/DisplayComment.css'
import Answer from './Answer';

function DisplayAnswer(props) {

    function clickHandler(){
        
        setFlag((prevState)=>!prevState);
    }

    const [flag,setFlag]= useState(false);
    
    console.log("in display comment: ", props);

    if(flag==false){
        return(<button onClick={clickHandler} className="display-comments-button">Load Comments...!</button>)
    }
    else{
        console.log("props.answers.length is", props.answers.length);
        if(props.answers.length==0){
            return <p>No Answers.....!</p>
        }
        else{
            return (
                <div id="answers-list">

                    {props.answers.map((answer, index) => {
                        return <Answer answer={answer} key={index}/>
                    })}



                </div>
                    

                
                
            )
        }

    }

  
    
}

export default DisplayAnswer;
