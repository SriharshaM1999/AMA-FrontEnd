import React from 'react'
import '../../ComponentCss/Tags.css'


function Tags(props) {

    console.log("props in tags are",  props);

    return (
        <div className="tag-element">
            <div className="tag-element-left">{props.tag.name} </div>
            <div className="tag-element-right">{props.tag.questions.length}</div>
        </div>
    )
}

export default Tags
