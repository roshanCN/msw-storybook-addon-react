import React from "react"; 
import '../App.css';


export default function Card({ item }) {
  const {first_name, email, last_name } = item;
  return (
    <div className="card">
      <div className="content">
        <center><img src={item.avatar} alt={''}/>
        <h3 className="header">{first_name + '' + last_name}</h3>
        <h5>id{email}</h5> </center> 
      </div>
    </div>
  );
}
