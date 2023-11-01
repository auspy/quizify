import React from 'react'
import Logo from './Logo';




  
const MstQues = () => {
  return (
    <>
     <h6 className='logout'>Logout</h6>
  
    
    
    <h1 className='mst'>Maths- mst1 questions</h1>
    
      <button className='btn'> Add Question</button>

    
      <div className="questionContainer">
      <h3 className='ques'>1. This is Question 1</h3>
      <div className="questionDetails">
        <p> Type: Mcq</p>
        <p>Options: 1, 2, 3, 4</p>
      </div>
    </div>
    

    </>
  )
}

export default MstQues;