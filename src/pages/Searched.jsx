import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {Grid,Card} from './Style';


function Searched() {
    
    const[searchedRecipes, setsearchedRecipes ] = useState([]);
    let params = useParams();
    
    const getSearched = async name => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const data = await api.json();
        const recipes = data.results;

        setsearchedRecipes(recipes);
    };

    useEffect(() =>{
        getSearched(params.search);
    },[params])

    return <Grid>
       {searchedRecipes.map(item =>{
           return(
            <Link to={`/recipe/${item.id}`}> 
               <Card key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
               </Card>
            </Link>   
           )
       })}
    </Grid>
}

export default Searched;