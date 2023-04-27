
import axios from "axios";
import { useEffect, useState } from "react";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./latest.scss";

export const Latest = ({type}) => {
  const[lists,setLists] = useState([]);

  useEffect(()=>{
    const getRandomLists = async ()=>{
      try {
        const res = await axios.get(`lists${type ? "?type="+type:""}`
        ,{
          headers:{
            token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
        );
        setLists(res.data);
      } catch (err) {
          console.log(err);
      }
    };
    getRandomLists();
  },[type]);
  return (
    <div className='latest'>
        <Navbar/>
        {lists.map((list)=>(
          <List list={list}/>
        ))}
        <Footer/>
        </div>
 )
}
export default Latest;
