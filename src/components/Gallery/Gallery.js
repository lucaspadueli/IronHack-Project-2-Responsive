import { Link } from "react-router-dom";
import './Gallery.css';


import galleryImg1 from "../../images/cover-pic.jpg"
import galleryImg3 from "../../images/cover-pic-3.jpg"
import galleryImg4 from "../../images/r&mHome.png"
import galleryImg5 from "../../images/gallery-img.jpg"
import galleryImg6 from "../../images/gallery-img-2.jpg"
import galleryImg7 from "../../images/gallery-img-3.png"
import galleryImg8 from "../../images/gallery-img-4.png"
import galleryimg10 from "../../images/cMIO9o.webp"
import galleryimg11 from "../../images/gallery-img-5.jpg"
import galleryimg12 from "../../images/gallery-img-10.webp"
import galleryimg13 from "../../images/gallery-img-11.webp"
import galleryimg14 from "../../images/rick_morty_still_h_15.webp"
import galleryimg15 from "../../images/gallery-img-9.png"
import galleryimg16 from "../../images/wallpaper.jpg"
import galleryimg17 from "../../images/image-asset.jpeg"




const Gallery = () => {

    return (

        

        <div className="gallery">

            <Link to="/" > <button className="btn btn-primary gallery-buttons"> Home Page </button></Link>

            <h2> Embark on a Visual Adventure: Rick and Morty Gallery Awaits! </h2>


            <img src={galleryImg1} alt="rick-and-morty-epsode" />
            <img src={galleryImg3} alt="rick-and-morty-epsode" />
            <img src={galleryImg4} alt="rick-and-morty-epsode" />
            <img src={galleryImg5} alt="rick-and-morty-epsode" />
            <img src={galleryImg6} alt="rick-and-morty-epsode" />
            <img src={galleryImg7} alt="rick-and-morty-epsode" />
            <img src={galleryImg8} alt="rick-and-morty-epsode" />
            <img src={galleryimg10} alt="rick-and-morty-epsode" />
            <img src={galleryimg11} alt="rick-and-morty-epsode" />
            <img src={galleryimg12} alt="rick-and-morty-epsode" />
            <img src={galleryimg13} alt="rick-and-morty-epsode" />
            <img src={galleryimg14} alt="rick-and-morty-epsode" />
            <img src={galleryimg15} alt="rick-and-morty-epsode" />
            <img src={galleryimg16} alt="rick-and-morty-epsode" />
            <img src={galleryimg17} alt="rick-and-morty-epsode" />
            
        </div>
        
    )
}

export default Gallery;