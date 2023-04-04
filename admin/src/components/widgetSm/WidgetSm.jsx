import React, { useEffect, useState } from 'react'
import "./widgetSm.css";
import { Visibility } from '@mui/icons-material';
import axios from "axios";
export default function WidgetSm() {
    const[newUsers,setNewUsers] = useState([]);
    useEffect(()=>{
        const getNewUsers= async()=> {
            try {
                const res = await axios.get("/users?new=true",{
                    headers:{
                    token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjMwZWQxMTAxMjhmOWRlYWM5NGEwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDU1MjY3OCwiZXhwIjoxNjgwOTg0Njc4fQ.LRuM5f2q3e3N7NRFomom5czASlFnEmLjNTCIKIpK4xo"
            },
          }) 
          setNewUsers(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        getNewUsers();
        },[])
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            {newUsers.map(user=>(
                <li className="widgetSmListItem">
                <img src={user.profilePic || "https://i.ibb.co/1nkPyfs/Netflix-avatar.png"} alt="Error" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            ))}
        </ul>
    </div>
  )
}
