import React, { useState } from "react";
import Navbar from "../Navbar/navbar.js";
import CItems from "./cartitem.json";

function Cart() {
    const[count,setCount] = useState(0);
  return (
    <div>
      <Navbar />
      <div class="container bcontent" style={{ marginLeft: "0vw" }}>
        {CItems.items.map((item) => (
          <div class="card" style={{ width: "60vw", marginBottom: "5vh" }}>
            {console.log(item)}
            <div class="row no-gutters">
              <div class="col-sm-5">
                <img src={item.img} className="card-img" />
              </div>
              <div class="col-sm-7">
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text" style={{ fontSize: "15px" }}>
                    {item.description}
                  </p>
                  <form>
                    <label for="cars">Quantity:</label>
                    <select id="qty" name="qty" style={{marginLeft:"1vw"}}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    <input type="submit"value="Submit" style={{marginLeft:"3vw"}}/>
                  </form>
                  <p class="card-text" style={{ fontSize: "25px" }}>
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
