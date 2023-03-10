import React from 'react'
import "./App.css"
import Home from './Home'
import {v4 as uuidv4} from 'uuid'
import Questions from './Questions'
export default function App() {
const [apiData,setApiData]=React.useState([])
console.log(apiData)

React.useEffect(()=>{

  fetch("https://opentdb.com/api.php?amount=4")
  .then(response =>response.json())
  .then(data=>{
    const updatedData=data.results.map(item=>{
  
      return  {...item,id:uuidv4()};
    });
    setApiData(updatedData)
  })
},[])

  
  let questionsElements=[]
  questionsElements = apiData.map(a=>{
   return <Questions question={a.question}options={`${a.correct_answer},${a.incorrect_answers}`}id={a.id} />
   
  }
  ) 


  return (
     <>
     {/* <Home/> */}
     <div className="section-page">
        <div className="section-game">
          <div className="section-game-area">
   {questionsElements}
   
   <button className='submit-button'>Check answers</button>
          </div>
        </div>
      </div>
     </>
  )
}
