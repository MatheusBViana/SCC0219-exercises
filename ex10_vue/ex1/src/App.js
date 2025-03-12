import React,{useState} from 'react'
import Data from './Data'
import './App.css'

function App() {

  const [list, setList] = useState("");


  return (
    <div className="div-geral">
      <div className="form-group">
          <input 
          type="text"
          className="form-control"
          placeholder="Search Term"
          onChange={(event) => {
              setList(event.target.value);
          }}
          />
      </div>
      
      <div className="result-container">
        <h2>Results<span></span></h2>
      </div>

      <div className="main">
        {Data.filter((item) => {
          if(list === ""){
            return item;
          }
          else if(item.name.toLowerCase()
              .includes(list.toLowerCase())){
                return item
          }
        }).map((item) => (
            <div key={item.id}>
              <ul className="list-group">
                <li className="list-group-item">{item.name}</li>
              </ul>
            </div>
        ))
        }
      </div>
    </div>
  )

}

export default App;