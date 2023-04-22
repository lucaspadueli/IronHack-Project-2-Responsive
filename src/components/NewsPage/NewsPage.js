import "./NewsPage.css";
import { Link } from "react-router-dom";


const NewsPage = () => {
    return (


        <div className="news-page">

            <Link to="/" > <button className="btn btn-primary news-buttons"> Home Page </button></Link>

            <h1 id = "h1-news"> Rick and Morty </h1>
            <p className="first-news">
                {" "}
                The animated sci-fi comedy “Rick and Morty” will recast its title roles after severing ties with Justin Roiland,
                a voice actor and the shows co-creator, who has a pretrial hearing in April for felony domestic abuse charges from 2020.
            </p>

            <h1> Season 7 - Potential release date </h1>
            <p className="season7">
                {" "}
                Rick and Morty hasn't revealed a return date for season seven just yet, but we can
                definitely expect to see new episodes air in 2023.
            </p>

            <h1> Beginning </h1>
            <p className="beginning">
                {" "}
                In May 2012, Adult Swim unveiled its development slate that included a Rick and Morty pilot from Harmon and Roiland,
                which was eventually picked up to series in October 2012, as one of the network's first primetime original shows.
                The first season premiered in December 2013 and concluded in April 2014. It comprised eleven episodes (including the pilot),
                and aired Mondays at 10:30 pm ET.
            </p>

            <h1> Streaming Service </h1>
            <p className="streaming">
                {" "}
                The show is available to watch in its entirety on Netflix in a number of countries,
                while the first four seasons are available to stream in the United States on both Hulu and HBO Max.
                Following the conclusion of the show's third season, Adult Swim made a livestream marathon of
                Rick and Morty available to watch on its official website in select regions,
                hoping to dissuade viewers from watching other illegal livestreams.
            </p>

            <h1> Critical Reception </h1>
            <p className="critical">
                {" "}
                Season
                1	96% (28 reviews)
                2	91% (13 reviews)
                3	96% (10 reviews)
                4	96% (31 reviews)	
                5	86% (22 reviews)	
                6	91% (47 reviews)
            </p>

            <h1> Possible Featured Film </h1>
            <p className="possible-film">
                {" "}
                Show creator Justin Roiland said in 2019 that he would love to make an R-rated Rick and Morty feature film.
                In June 2021, producer Scott Marder confirmed that the creators and crew hope to eventually produce a feature film, 
                with Roiland stating that it is more a question of "when", rather than "if".
                In 2022, American filmmaker Zack Snyder expressed interest in directing a Rick and Morty science fiction movie.
            </p>

            <h1> Awards </h1>
            <p className="awards">
                {" "}
                Rick and Morty have 4 nominations and 2 awards winner. 
                Outstanding Animated Program - 2018.
                Outstanding Animated Program - 2020.
            </p>


        </div>

    );
};

export default NewsPage;