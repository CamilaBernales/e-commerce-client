import React from 'react'
import {Link} from "react-router-dom"
const BtnNew = () => {
    return (
        <div>
            <Link to="/newproduct">
            <button className="m-5 p-2 bg-red-400">
                Crear
            </button>
            </Link>
        </div>
    )
}

export default BtnNew
