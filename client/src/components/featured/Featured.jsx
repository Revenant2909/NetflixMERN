import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";

function Featured({type}) {
    const [content,setContent] = useState({});
    useEffect(()=>{
        const getRandomContent = async ()=> {
            try {
                const res = await axios.get(`/movies/random?type=${type}`,{
                    headers:{
                      token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjMwZWQxMTAxMjhmOWRlYWM5NGEwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDA0MDk4NiwiZXhwIjoxNjgwNDcyOTg2fQ.AhH84AZ0brJRUW3L1l10WIGCZCu_LgCI1f5YAahcE2I"
                    },
                  });
                setContent(res.data[0]);
            } catch (err) {
                    console.log(err);
            }
        };
        getRandomContent();
    },[type]);
    console.log(content);
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type==="movies" ? "Movies" : "Tv Shows"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                     <option value="hindi">Hindi</option>
                     <option value="tamil">Tamil</option>
                     <option value="punjabi">Punjabi</option>
                     <option value="telugu">Telugu</option>
                     <option value="malyalam">Malyalam</option>
                     <option value="marathi">Marathi</option>
                     <option value="bengali">Bengali</option>
                     <option value="english">English</option>
                     <option value="international">International</option>
                     <option value="independent">Independent</option>
                     <option value="comedies">Comedies</option>
                     <option value="action">Action</option>
                     <option value="romance">Romance</option>
                     <option value="dramas">Dramas</option>
                     <option value="thriller">Thriller</option>
                     <option value="horror">Horror</option>
                     <option value="sci-fi">Sci-Fi</option>
                     <option value="crime">Crime</option>
                     <option value="fantasy">Fantasy</option>
                     <option value="sports">Sports</option>
                     <option value="bollywood">Bollywood</option>
                     <option value="hollywood">Hollywood</option>
                     <option value="children & family">Children & Family</option>
                     <option value="award-winning">Award-Winning</option>
                     <option value="documentaries">Documentaries</option>
                     <option value="shorts">Shorts</option>
                     <option value="stand-up comedy">Stand-Up Comedy</option>
                     <option value="anime">Anime</option>
                </select>
            </div>
        )}
        <img src={content.imgTitle} alt="wallpaperflare-com-wallpaper" width="100%"border="0"/>
        <div className="info">
        <img src={content.imgSm} alt="lostinspace-removebg" border="0"/>
            <span className="description">{content.desc}</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span> Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span> More Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured