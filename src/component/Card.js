import React from "react";
import pro from "../Data";

export default function Card() {
  const newpro = pro.map(function (item) {
    return <Child key={item.id} item={item} />;
  });

  return <div className="cardsarea">{newpro}</div>;
}

function Child(props) {
  let badgeText;
  if (props.item.soldout === 1) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="cardsarea">
      <section>
        {badgeText && <div className="badge">{badgeText}</div>}
        <img src={props.item.img} alt="" className="" />
        <img src="images/star 1.png" alt="" className="" width="15px" />
        <span>{props.item.rate}</span>
        <span>-</span>
        <span>{props.item.country}</span>
        <p>{props.item.des}</p>
        <h2>From ${props.item.salary} / person</h2>
      </section>
    </div>
  );
}
