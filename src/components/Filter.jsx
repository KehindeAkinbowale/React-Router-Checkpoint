import { useState } from 'react';
import { Link } from 'react-router-dom';
import Description from "../components/Description";

function Filter() {
    const [movie, setMovie ] = useState({
        trailer: "",
        description: "",
    });
    const[filteredMovie, setfillteredMovie] = useState([]);
    function handleChange(event){
        const InputText = event.target.name
        const newValue = event.target.value
        setMovie((prevValue)=> {
          if (InputText === "trailer"){
            return {
                  trailer: newValue,
                  description: prevValue.description
            }
          }
          else if (InputText === "description"){
            return {
                  trailer: prevValue.trailer,
                  description: newValue
            }
          }
        });
    }
    function handleMovie(){
        setfillteredMovie((prevValue) =>{
        return [...prevValue, {...movie}];
        });
        setMovie({
          trailer: "",
          description: "",
        });
      }
  return (
    <>
    <h1>Welcome to Trailer and Description Page </h1>
      <div>
        <label>Enter the Trailer URL: </label>
        <input type="text" name='trailer' value={movie.trailer} onChange={(e) => {handleChange(e)}} className='form-control w-50'/>
      </div>
      <div>
        <label>Enter description:</label>
        <textarea type="text" name='description' value={movie.description} onChange={(e) => {handleChange(e)}}className='form-control w-50'/> 
      </div>
      
     <button className='btn btn-warning' onClick={handleMovie}>Enter</button>
     <ul className='d-flex' style={{flexWrap: "wrap"}}>
        {
            filteredMovie.map((item)=> {
              return (
                <>
                <Description trailer={item.trailer} description={item.description}/> 
                </>
              )    
            })
        }
     </ul>
      <Link to="/">Back to Home</Link>
      
    </>
  );
}
export default Filter;