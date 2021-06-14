import React, { Component } from 'react'
import LeftMain from './LeftMain';
import MiddleMain from './MiddleMain';

import '../ComponentCss/Main.css'

export class Main extends Component {
    render() {
        return (
            <div class="main">

                <LeftMain/>
                <LeftMain/>
                <LeftMain/>

                
            </div>
        )
    }
}

export default Main
