import React,{useEffect,useState} from "react";
import Rating from "@material-ui/lab/Rating";

export default function Review(props) {

  const [rating, setRating] = useState(props.rating);
  useEffect(() => {
    setRating(props.rating);
  }, [props.rating]);

  return (
    <div style={{ position: "relative" }}>

      {rating != null?<Rating size="small" name="read-only" value={rating} readOnly />:null}
      <span style={{ position: "absolute", top: "0" }}>
        {" "}
        {props.num!=null&&props.num!=undefined?<span> ({props.num} reviews)</span>:null}
      </span>
    </div>
  );
}
