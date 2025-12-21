import React from 'react'
import { useParams } from 'react-router-dom'

function Coursesdetail() {

    const params = useParams ()

    return (
        <h1> {params.Coursesdetail} Courses detail </h1>
    )
}

export default Coursesdetail
