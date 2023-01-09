import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import './Events.css';




const product_card = [
  {
      id: 1,
      product_name: "Codechef AIMICPC",
      Batch:"2020",
      thumb: "./images/codechef.png",
      link:"https://www.codechef.com/AIMICPC"
  },
  {
      id: 2,
      product_name: "Codechef START69",
      Batch:"2020",
      thumb: "./images/codechef.png",
      link:"https://www.codechef.com/START69?itm_medium=hpbanner_1&itm_campaign=START69"
  },
  {
      id: 3,
      product_name: "Codechef ZCOPRAC",
      Batch:"2020",
      thumb: "./images/codechef.png",
      link:"https://www.codechef.com/ZCOPRAC"
  },
  {
      id: 4,
      product_name: "Leetcode weekly-contest",
      Batch:"2020",
     
      thumb: "./images/leetcode.png",
      link:"https://leetcode.com/contest/weekly-contest-324/"
  },
  {   
      id: 5,
      product_name: "Leetcode Bi-Weekly",
      Batch:"2020",
      thumb: "./images/leetcode.png",
      link:"https://leetcode.com/contest/weekly-contest-324/"
  },
  {
      id: 6,
      product_name: "Weekly-contest",
      Batch:"2020",
      thumb: "./images/leetcode.png",
      link:"https://leetcode.com/contest/weekly-contest-322/"
  },

]



const Events = () => {
  console.log(product_card);
  const listItems = product_card.map((item) =>
      <div className="card" key={item.id}>
          <div className="card_img">
              <img src={item.thumb} />
          </div>
          <div className="card_header">
              <h2>{item.product_name}</h2>
              <p>{item.description}</p>
              <p className="price">{item.price}<span>{item.currency}</span></p>
              <div className="btn"><a href={item.link} style={{textDecoration:'none',color:'black'}}>
                  know More</a></div>
          </div>
      </div>

  );
  return (
      <div className="main_content">
          <h3></h3>
          {listItems}
      </div>
  )
}
export default Events;

