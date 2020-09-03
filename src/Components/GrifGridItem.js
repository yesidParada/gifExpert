import React from 'react'

export const GrifGridItem = ({ title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <div className="container">
                <p>{title}</p>
            </div>
        </div>
    )
}
