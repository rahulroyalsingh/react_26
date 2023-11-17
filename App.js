import './App.css';
import React from 'react'
function App() {
    const students = [
      {name:'rahul',email:'rahul@check.com', contact: 987},
      {name:'singh',email:'singh@check.com', contact: 876},
      {name:'garun',email:'garun@check.com', contact: 765},
      {name:'devesh',email:'devesh@check.com', contact: 654},
    ]
    return (
        <div className="App">
            <h1>Handling array using List</h1>
            <table border="1">
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Contact</td>
              </tr>
            {
              students.map((data)=>
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.contact}</td>
              </tr>
            )  
            }
           </table>             
        </div>
    );
}
export default App;