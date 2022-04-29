import { useEffect,useState } from 'react';
import './App.css';
import video from './food.mp4'
import Recipes from './Recipes';


function App() {

  const MY_ID = '3cf48e55';
  const MY_KEY = 'cae9c547a0cccf9972652e353550498f	';


  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmit, setWordSubmit] = useState('beef');

useEffect( ()=>{

  async function getRecipe(){
    const response = await fetch  (`https://api.edamam.com/search?q=${wordSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  console.log(data.hits);
  setMyRecipes(data.hits);
}
getRecipe()  
}, [wordSubmit])


  const myRecipeSearch =(e)=>{
    console.log(e.target.value);
    setMySearch(e.target.value)

  }

  const finalSearch =(e)=>{
    e.preventDefault();
    setWordSubmit(mySearch)

  }

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
          <h1>Find a Recipe</h1>
      </div>

      <div className="container">
        <form onSubmit={finalSearch}>
          <input className='search ' 
          placeholder='Seach ...'
          onChange={myRecipeSearch}
          value={mySearch}
          
          
          />
        </form>

      </div>
<br></br>
      <div className="container">
        <button onClick={finalSearch}>
        <img src="https://img.icons8.com/cute-clipart/64/000000/search.png" alt='xx'/>
        </button>
        </div>

        {myRecipes.map((element, index)=>(
          <Recipes key={index}
          label={element.recipe.label} 
          image={element.recipe.image} 
          calories={element.recipe.calories} 
          ingredients={element.recipe.ingredientLines}
          
       

          
          />
        ))}
  
    
    
    </div>
  );
}

export default App;
