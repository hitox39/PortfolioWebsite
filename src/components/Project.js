import React, { Fragment } from "react";

export default function Project(props) {
    return (
        <div class='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div class='resume-content'>
                <h3 class='mb-0'>{props.title}</h3>
                <div class='subheading mb-3'>
                    {props.subtitle}
                </div>
                <p>
                   {props.body}
                </p>
                <a href={props.link}>
                    <i class='fab fa-github ml-2'></i>
                </a>
            </div>
        </div>
    );
}