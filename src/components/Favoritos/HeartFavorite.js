
import { useState } from "react";
import greyHeart from '../../images/grey-heart.jpeg';
import redHeart from '../../images/red-heart.png';
import './HeartFavorite.css';

const HeartFavorite = () =>{
    const[heart,setHeart] = useState(greyHeart);
     const toggleHeart = (e) =>{
       if(heart === greyHeart){
        setHeart(redHeart)
       }
       else if(heart === redHeart){
        setHeart(greyHeart);
       }
        }
        

return (

<div className = "favorite-storage"> 

<button  onClick={toggleHeart}> 
<img className="heart-picture" src = {heart} alt = 'grey-heart'/>
</button>

</div>

)
}


export default HeartFavorite;
