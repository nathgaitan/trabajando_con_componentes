import React from 'react'
import Tbody from './Tbody'

function MovieTable() {
    let data = [
        {
            title: "Billy Elliot",
            length: 123,
            rating: 5,
            genres: ["Drama", "Comedia"],
            awards: 2
        },
        {
            title: "Alicia en el país de las maravillas",
            length: 142,
            rating: 4.8,
            genres: ["Drama", "Acción", "Comedia"],
            awards: 3
        },
    ]
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4 card shadow">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <td>Título</td>
                            <td>Duración</td>
                            <td>Rating</td>
                            <td>Género</td>
                            <td>Premios</td>
                        </tr>
                    </thead>
                    {data.map((col,i) => {
                        return <Tbody data = {col} key={i+col.title}/>
                    })}
                </table>
            </div>
        </div>

    )
}

export default MovieTable
