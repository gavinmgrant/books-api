import React from 'react';
import './Book.css'

export default function Book(props) {
    return (
        <div className='book'>
            <div className="bookTitle">
                <h2>{props.title}</h2>
                <img className="bookImage" src={props.image} alt={props.title} />
            </div>
            <div className="bookDetails">
                <p>{props.author}</p>
                <p>{props.price}</p>

                <a
                className="bookPreview"
                href={props.preview}
                rel="noopener noreferrer"
                target="_blank"
                >
                    Click here to preview.
                </a>
                <p>{props.description}</p>
            </div>
        </div>
    );
}