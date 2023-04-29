import axios from "axios";
import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./home.scss";

export const Home = ({type}) => {
  const[lists,setLists] = useState([]);
  const[genre,setGenre] = useState(null);

  useEffect(()=>{
    const getRandomLists = async ()=>{
      try {
        const res = await axios.get(`lists${type ? "?type="+type:""}
        ${genre ? "&genre=" + genre:""}`,{
          headers:{
            token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
        );
        // console.log(res);
        setLists(res.data);
      } catch (err) {
          console.log(err);
      }
    };
    getRandomLists();
  },[type,genre]);
  return (
    <div className='home'>
        <Navbar/>
        <Featured type={type} setGenre ={setGenre}/>
        {lists.map((list)=>(
          <List list={list}/>
        ))}
        <Footer/>
        </div>
 )
}
export default Home;
