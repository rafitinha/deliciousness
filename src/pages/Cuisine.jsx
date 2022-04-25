import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Grid, Card} from './Style';

function Cuisine(){

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async name => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const data = await api.json();
        const recipes = data.results;

        setCuisine(recipes);
    };

    useEffect(() =>{
      getCuisine(params.type);
    },[params]);

    return <Grid
     animate={{opacity: 1}}
     initial={{opacity: 0}}
     exit={{opacity: 0}}
     transition={{duration: 0.5}}
    > 
        {cuisine.map(item =>{
            return (
                <Card key={item.id}>
                  <Link to={`/recipe/${item.id}`}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                  </Link>
                </Card>
            )
        })}
    </Grid>
}

export default Cuisine;