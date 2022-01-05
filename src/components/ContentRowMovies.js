import React from 'react';
import ContentRow from './ContentRow';

function ContentRowMovies() {
    let data = [
        {
            color: 'primary',
            title: "Movies in Data Base",
            value: 21,
            icon: "fa-film",
        },
        {
            color: 'success',
            title: "Total awards",
            value: 79,
            icon: "fa-award",
        },
        {
            color: 'warning',
            title: "Actors quantity",
            value: 49,
            icon: "fa-user",
        },
    ];
    return (
        <div className="row">

            {data.map((dato, i) => {
                return <ContentRow data = {dato} key = {i+dato.color}/>
            })}

        </div>
    )
}

export default ContentRowMovies
