import React, { Fragment } from "react";

export default function Project(props) {
    const style = {
        border: '5px', 
        borderColor: 'red'
    };
    return (
        <div class='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 '>
           <div style={style}>
            <img className='photo' src={props.img} width={600} ></img>
           </div>
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'></div>
            <div class='resume-content'>
                <h3 class='mb-0'>{props.title}</h3>
                <div class='subheading mb-3'>
                    {props.subtitle}
                </div>
                <p>
                   {props.body}
                </p>
                <a href={props.link}>
                    <img className='fab fa-github'></img>
                </a>
            </div>
        </div>
    );
}