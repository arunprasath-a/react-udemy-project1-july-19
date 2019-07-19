import React from "react";
import Card from "./../card/card.component";
import "./card-list.styles.css";

const Cardlist = props => {
  
  return (
    <React.Fragment>
      <div className="card-list">
        {props.monsters.map(val => (
          <Card key={val.id} monster={val} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Cardlist;
