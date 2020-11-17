import React from 'react'
import './Ninjaz.css'

export default function Ninjaz({ninja,handleDelete}) {
        const {name,belt, age } = ninja;
        return (
        <div 
           className="card-userinfo" 
           onClick={()=>handleDelete(ninja.id)
        }>
           <p>Name:{name}</p> 
           <p>Age:{age}</p> 
           <p> Belt:{belt}</p> 
        </div>
    )
}
