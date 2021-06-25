import React,{useEffect, useState} from 'react';
import Header from  './Header';
import '../ComponentCss/Unauthorized.css';
import cookie from 'react-cookies';
import Typical from 'react-typical';

function MainPage() {

    let [string,setString] = useState('');

    useEffect(() =>{   
         cookie.remove('userId', { path: '/' })

        },[])

    return (

        <div id="logout-container">
            {/* <Header/> */}
            <div id="unauthorized">
            <Typical
            steps={['want',3000,'to grow yourself!', 3000,'by gaininig and sharing knowledge',1000]}
            loop={2}
            wrapper="p"
        />

            <h6>Here is the onestop Solution</h6>
            <h1>AMA</h1> 
        </div>

            <div id ="about">
                <h6>About AMA</h6>
                <small>AMA's mission is to share and grow the world’s knowledge. A vast amount of the knowledge that would be valuable to many people is currently only available to a few — either locked in people’s heads, or only accessible to select groups. We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world.</small>
            </div>

            <div id="creator">

                <small></small>
                
            </div>



        </div>
    )
}

export default MainPage
