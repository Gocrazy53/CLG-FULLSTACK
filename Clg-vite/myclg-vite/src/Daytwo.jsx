import React from 'react'

const Daytwo = () => {

    const arr = ['Hello','hi','bye']



  return (
    // <div>daytwo</div>

    <ul>
        {
            arr.map( (item,index) => (

                <li key={index}>{item}</li>



            ))
        }
    </ul>


  )
}

export default Daytwo