import { Link } from "react-router-dom";
import "./Curiosities.css";
const Curiosities = () => {
    return (


        <div className="news-page">

            <Link to="/" > <button className="btn btn-primary news-buttons"> Home Page </button></Link>

            <h2 className = "h2-news"> Rick and Morty </h2>
            <p className="news-p">
                {" "}
                The animated sci-fi comedy “Rick and Morty” will recast its title roles after severing ties with Justin Roiland,
                a voice actor and the shows co-creator, who has a pretrial hearing in April for felony domestic abuse charges from 2020.
            </p>

            <h2 className = "h2-news"> Season 7 - Potential release date </h2>
            <p className="news-p">
                {" "}
                Rick and Morty hasn't revealed a return date for season seven just yet, but we can
                definitely expect to see new episodes air in 2023.
            </p>

            <h2 className = "h2-news"> Beginning </h2>
            <p className="news-p">
                {" "}
                In May 2012, Adult Swim unveiled its development slate that included a Rick and Morty pilot from Harmon and Roiland,
                which was eventually picked up to series in October 2012, as one of the network's first primetime original shows.
                The first season premiered in December 2013 and concluded in April 2014. It comprised eleven episodes (including the pilot),
                and aired Mondays at 10:30 pm ET.
            </p>

            <h2 className = "h2-news"> Streaming Service </h2>
            <p className="news-p">
                {" "}
                The show is available to watch in its entirety on Netflix in a number of countries,
                while the first four seasons are available to stream in the United States on both Hulu and HBO Max.
                Following the conclusion of the show's third season, Adult Swim made a livestream marathon of
                Rick and Morty available to watch on its official website in select regions,
                hoping to dissuade viewers from watching other illegal livestreams.
            </p>

            <h2 className = "h2-news"> Critical Reception </h2>
            <p className="news-p">
                {" "}
                Season
                1	96% (28 reviews)
                2	91% (13 reviews)
                3	96% (10 reviews)
                4	96% (31 reviews)	
                5	86% (22 reviews)	
                6	91% (47 reviews)
            </p>

            <h2 className = "h2-news"> Possible Featured Film </h2>
            <p className="news-p">
                {" "}
                Show creator Justin Roiland said in 2019 that he would love to make an R-rated Rick and Morty feature film.
                In June 2021, producer Scott Marder confirmed that the creators and crew hope to eventually produce a feature film, 
                with Roiland stating that it is more a question of "when", rather than "if".
                In 2022, American filmmaker Zack Snyder expressed interest in directing a Rick and Morty science fiction movie.
            </p>

            <h2 className = "h2-news"> Awards </h2>
            <p className="news-p">
                {" "}
                Rick and Morty have 4 nominations and 2 awards winner. 
                Outstanding Animated Program - 2018.
                Outstanding Animated Program - 2020.
            </p>


        </div>

    );
};

export default Curiosities;
