import { useEffect,useState } from "react";
import {Wrapper,Card ,Gradient} from './Style';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';

function Popular(){

    const [popular, setPopular] = useState([]);

    useEffect(()=> {
        getPopular();
    },[])
   
    const getPopular = async () => {
        
        const check = localStorage.getItem('@Deliciousness:popular');

        if(check){
            setPopular(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json();
            
            setPopular(data.recipes);

            localStorage.setItem('@Deliciousness:popular',JSON.stringify(data.recipes));
            
          //  console.log(data.recipes);
        }
    }

    return (
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '2rem'
            }}>
            {popular.map(recipe =>{
                return(
                    <SplideSlide key={recipe.id}>
                    <Card>
                        <Link to={`/recipe/${recipe.id}`}>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                            <Gradient/>
                        </Link>
                    </Card>
                    </SplideSlide>
                )
            })}
            </Splide>
        </Wrapper>
        )

}

export default Popular;