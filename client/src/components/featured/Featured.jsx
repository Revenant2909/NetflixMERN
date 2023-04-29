import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";
import { Link } from "react-router-dom";

function Featured({type,setGenre}) {
    const [content,setContent] = useState({});
    useEffect(()=>{
        const getRandomContent = async ()=> {
            try {
                const res = await axios.get(`/movies/random?type=${type}`,
                {
                    headers:{
                      token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                  });
                setContent(res.data[0]);
            } catch (err) {
                    console.log(err);
            }
        };
        getRandomContent();
    },[type]);
    // console.log(content);
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type==="movie" ? "Movies" : "Tv Shows"}</span>
                <select name="genre" id="genre" onChange={(e)=>setGenre(e.target.value)}>
                    <option>Genre</option>
                     {/* <option value="Hindi">Hindi</option>
                     <option value="Tamil">Tamil</option>
                     <option value="Punjabi">Punjabi</option>
                     <option value="Telugu">Telugu</option>
                     <option value="Malyalam">Malyalam</option>
                     <option value="Marathi">Marathi</option>
                     <option value="Bengali">Bengali</option>
                     <option value="English">English</option> */}
                     {/* <option value="International">International</option>
                     <option value="Independent">Independent</option> */}
                     <option value="Comedy">Comedies</option>
                     <option value="Action">Action</option>
                     <option value="Romance">Romance</option>
                     <option value="Drama">Dramas</option>
                     <option value="Thriller">Thriller</option>
                     <option value="Horror">Horror</option>
                     <option value="Sci-fi">Sci-Fi</option>
                     <option value="Crime">Crime</option>
                     {/* <option value="Fantasy">Fantasy</option>
                     <option value="Sports">Sports</option> */}
                     {/* <option value="Bollywood">Bollywood</option>
                     <option value="Hollywood">Hollywood</option>
                     <option value="Children & Family">Children & Family</option>
                     <option value="Award-winning">Award-Winning</option>
                     <option value="Documentary">Documentaries</option>
                     <option value="Short">Shorts</option>
                     <option value="Stand-up-comedy">Stand-Up Comedy</option>
                     <option value="Anime">Anime</option> */}
                </select>
            </div>
        )}
        <img src={content.img} alt="" width="100%"border="0"/>
        <div className="info">
        <img src={content.imgTitle} alt="" border="0"/>
            <span className="description">{content.desc}</span>
            <div className="buttons">
                <Link to={{pathname:"/watch", movie:content}}>
                <button className="play">
                    <PlayArrow/>
                    <span> Play</span>
                </button>
                </Link>
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