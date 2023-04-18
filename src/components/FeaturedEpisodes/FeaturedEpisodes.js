import './FeaturedEpisodes.css';
import { Link } from "react-router-dom";
import featured1 from "../../images/featured-1.png";
import featured2 from "../../images/featured-2.png";
import featured3 from "../../images/featured-3.png";
import featured4 from "../../images/featured-4.png";
import featured5 from "../../images/featured-5.png";

const FeaturedEpisodes = () => {
  return (
    
    
    <div className="featured-episodes-page">

       <Link to = "/" > <button className="btn btn-primary featured-ep-buttons"> Home Page </button></Link>
    
      <h1 id = "h1-featured-eps"> Featured Episodes </h1>
      <p className = "episode-description">
        {" "}
        Looking for the quintessential Rick and Morty experience? Look no
        further than our Featured Episodes page. We've compiled a list of the
        most mind-bending, heart-wrenching, and hilarious episodes of the
        series, so you can immerse yourself in the weird and wonderful world of
        the Smith family.
      </p>

      <h2 className="ep-number"> 5 </h2>
      <img className="episodes-img" src={featured5} alt="fifth-best-episode" />
      <p className = "episode-description">
        {" "}
        Many of the best Rick and Morty episodes take a few sharp turns before
        the end, and "The Wedding Squanchers" is no exception. What starts as a
        seemingly lighthearted celebration of Birdperson and Tammy rapidly
        devolves into all-out chaos as the Galactic Federation sets its sights
        on Rick. With Earth under occupation and the Smith family struggling to
        adjust to life on their remote new alien home, Rick has no choice but to
        sacrifice himself in what is easily one of the most emotionally charged
        moments of the whole series. Quite a way to wrap up the season.
      </p>

      <h2 className="ep-number"> 4 </h2>
      <img className="episodes-img" src={featured4} alt="fourth-best-episode" />
      <p className = "episode-description">
        {" "}
        In "Mortynight Run," Rick and Morty butt heads when Morty insists on
        protecting a rogue alien named Fart (guest star Jermaine Clement).
        Naturally, there are a few major twists and turns and emotional
        meltdowns along the way. But in many ways, it's the little details that
        set this one apart, from Clements' amazing David Bowie-inspired musical
        number to Morty's horrific experience with the arcade game Roy: A Life
        Well lived. This episode also boasts what is possibly the best Jerry
        subplot ever, as Jerry meets dozens of his alter egos at a Jerry-only
        daycare.
      </p>

      <h2 className="ep-number"> 3 </h2>
      <img className="episodes-img" src={featured3} alt="third-best-episode" />
      <p className = "episode-description">
        Only Rick and Morty could do an entire episode about the main characters
        watching TV and wind up with one of its best episodes ever. Here the
        Smiths are introduced to the wonders of Rick's interdimensional cable
        box, opening up an entire multiverse of bad television. This episode
        delivers a nonstop stream of bizarre clips, introducing instant
        fan-favorite characters like Ants in my Eyes Johnson, Two Brothers and
        Gazorpazorpfield. But this episode also shows a surprising amount of
        depth, with Jerry and Beth struggling with the glimpses of their
        alternate lives and Morty consoling Summer by revealing the tragic
        events of "Rick Potion No. 9."{" "}
      </p>
      <h2 className="ep-number"> 2 </h2>
      <img className="episodes-img" src={featured2} alt="second-best-episode" />
      <p className = "episode-description">
        {" "}
        This episode boasts one of the cleverer Rick and Morty storylines to
        date, as Rick is reunited with his ex-lover Unity (guest star Christina
        Hendricks), a hive mind possessing the population of an entire world. As
        Rick and Unity's billions of hosts descend into a hedonistic orgy of
        excess, it quickly becomes apparent why the two were such a bad match in
        the first place. The tragic ending of this episode is a soul-crushing
        experience, as a lovelorn Rick literally comes within inches of suicide.
        It's another powerful reminder that beneath all the catchphrases and big
        ideas is a very lonely and unstable man.
      </p>

      <h2 className="ep-number"> 1 </h2>
      <img className="episodes-img" src={featured1} alt="best-episode" />
      <p className = "episode-description">
        {" "}
        "Total Rickall" truly captures everything that makes Rick and Morty
        great. Its premise is ridiculously clever, with the Smith household
        invaded by an alien parasite that takes root in the hosts' memories. It
        features a terrific slate of one-off side characters, from Hamurai to
        Sleepy Gary to Photography Raptor. And it quickly veers from amusement
        to crushing emotional drama as the Smiths feel the full impact of their
        memories being torn to shreds. But compared to Mr. Poopybutthole, they
        got off light.
      </p>
    </div>
  );
};

export default FeaturedEpisodes;
