import React from 'react'
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">
                Revenue
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$5,322</span>
                <div className="featuredMoneyRate">-11.3 <ArrowDownward className='featuredIcon negative'/></div>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Sales
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3,512</span>
                <div className="featuredMoneyRate">-11.3 <ArrowDownward className='featuredIcon negative'/></div>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Cost
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,322</span>
                <div className="featuredMoneyRate">+5.3 <ArrowUpward className='featuredIcon'/></div>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        
    </div>
  )
}
