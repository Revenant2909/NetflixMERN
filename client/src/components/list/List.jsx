import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = ({list}) => {
    const[isMoved,setIsMoved] = useState(false);
    //Slider limiter on continue watching
    const [slideNumber,setSlideNumber] = useState(0)
    //Continue watching sliders and arrows
    const listRef = useRef()
    const handleClick = (direction) =>{
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x-50
        if(direction==="left" && slideNumber>0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230+distance}px)`
        }
        if(direction==="right" && slideNumber<5){
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-230+distance}px)`
        }
    }
  return (
    <div className="list">
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")}
            style={{display:!isMoved && "none"}}/>
            <div className="container" ref={listRef}>
                {list.content.map((item,i)=>(
                    <ListItem  index={i} item={item}/>
                ))}
            </div>
            <ArrowForwardIosOutlined className="sliderArrow right"onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default List