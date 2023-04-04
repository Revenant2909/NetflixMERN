import React from 'react'
import "./home.css";
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
// import {userData} from "../../DummyData";
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
export default function Home() {
  
  const MONTHS = useMemo(()=>
  [  "Jan",  "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug",  "Sep",  "Oct",  "Nov",  "Dec"],[]
  );

  const[userStats,setUserStats] = useState([]);

  useEffect(()=>{
    const getStats = async () =>{
      try {
        const res = await axios.get("/users/stats",{
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjMwZWQxMTAxMjhmOWRlYWM5NGEwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDU1MjY3OCwiZXhwIjoxNjgwOTg0Njc4fQ.LRuM5f2q3e3N7NRFomom5czASlFnEmLjNTCIKIpK4xo"
      },
    });
    const statsList = res.data.sort(function(a,b){
      return a._id - b._id;
    });
      statsList.map((item)=> setUserStats((prev)=>[...prev,{name:MONTHS[item._id-1], "New User": item.total}]));
      } catch (err) {
            console.log(err);
      }
    };
    getStats();
  },[MONTHS]);

  return (
    <div className='home'>
    <FeaturedInfo/>
    <Chart title="User Analytics" data={userStats} dataKey="New User" grid/>
    <div className="homeWidgets">
      <WidgetSm/>
      <WidgetLg/>
    </div>

    </div>
  )
}
