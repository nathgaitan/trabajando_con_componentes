import React from 'react'

function Tbody(props) {
    return (
        <tbody>
            <tr>
                <td>{props.data.title}</td>
                <td>{props.data.length}</td>
                <td>{props.data.rating}</td>
                <td>
                    <ul>
                        {props.data.genres.map((genre,i) => <li key={i+genre}>{genre}</li>)}
                    </ul>
                </td>
                <td>{props.data.awards}</td>
            </tr>
        </tbody>
    )
}

export default Tbody
