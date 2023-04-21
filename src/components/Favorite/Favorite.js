import { useEffect, useState } from "react";
import greyHeart from '../../images/grey-heart.jpeg';
import redHeart from '../../images/red-heart.png';


const Favorite = ({id}) =>{
    
    const[heart,setHeart] = useState(greyHeart);
    
    useEffect(()=> {

        const storedHeart = localStorage.getItem(`favorite_${id}`)
        if(storedHeart){
            setHeart(storedHeart);
        }

    },[id])
    
    const toggleHeart = () => {
        const newHeart = heart === greyHeart ? redHeart : greyHeart;
        setHeart(newHeart)
        localStorage.setItem(`favorite_${id}`, newHeart)
    };
        

return (

<div className = "favorite-storage"> 

<button  onClick={toggleHeart}> 
<img className="heart-picture" src = {heart} alt = 'grey-heart'/>
</button>

</div>

)
}


export default Favorite;