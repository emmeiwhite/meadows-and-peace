import React from 'react'

const Rainbow = (WrappedComponent) =>{
    const colors = ['violet','indigo','blue','green','orange','yellow','red']
    const randomColor = colors[Math.floor(Math.random()*colors.length)];    

    const style = {
        backgroundColor:randomColor
    }
 
    // Assume we are returning a super-charged component
    return (props)=>{
        return(
            <div style={style}>
               <WrappedComponent {...props}/>
            </div>
        )
       
    }
}

export default Rainbow;
