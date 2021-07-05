import React,{useEffect, useState} from 'react';
import Header from  '../Header';
import '../../ComponentCss/Unauthorized.css';
import cookie from 'react-cookies';
import Typical from 'react-typical';

function Unauthorized() {

 
    return (

        <div id="logout-container">
            {/* <Header/> */}
            <div id="unauthorized">
            <Typical
            steps={['want',3000,'to improve your skills', 5000,'by gaininig and sharing knowledge',6000]}
            loop={1}
            wrapper="p"
        />

            <h6>Here is the onestop Solution</h6>
            <h1>AMA</h1> 
        </div>

            <div id ="about">
                <h6>About AMA</h6>
             <small>AMA (Ask Me Anything) is a platform where users can gain knowledge through sharing and seeking knowledge. This platform enables the user to post their doubts so that other knowledgeable people who are well versant of the subject relevant can reply answers/ solutions</small>
            </div>

            <div id="creator">

                <small></small>
                
            </div>



        </div>
    )
}

export default Unauthorized
