import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, DetailWrapper, Info } from "./Style";

function Recipe(){

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await data.json();

        setDetails(detailData);

        console.log(detailData)
    }

    useEffect(()=>{
        fetchDetails();
    },[params])

    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
             <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
             <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
              
            {activeTab === 'instructions' &&(
             <div>
                 <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                 <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
             </div>
             )}
            
            {activeTab === 'ingredients' &&(
             <ul>
                 {details.extendedIngredients.map((item) => (
                     <li key={item.id}>{item.original}</li>
                 ))}
             </ul>
             )}
             
            </Info>
        </DetailWrapper>
    )
}

export default Recipe;