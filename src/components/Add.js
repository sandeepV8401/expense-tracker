import React, { useState } from "react";
import List from "./List";

function Add() {
  const [balance, setBalance] = useState(0);
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  var d = new Date();

  var date = d.getDate();
  var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  var year = d.getFullYear();
  var n = d.getMilliseconds();

  var myTime = d.toString().substring(15, 24);

  var dateStr = year + "-" + month + "-" + date + "T" + myTime + "." + n + "Z";

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const add = () => {
    setBalance(balance + parseInt(value));

    let tag = "add";
    let data = { dateStr, value, tag };
    items.push(data);
    setItems([...items]);
    setValue("");
  };

  const remove = () => {
    setBalance(balance - parseInt(value));

    let tag = "remove";
    let data = { dateStr, value, tag };
    items.push(data);
    setItems([...items]);
    setValue("");
    console.log(items);
  };

  return (
    <div>
      <h1 className="App">Expense Tracker - Basic</h1>
      <div className="App">
        <p>Balance:{balance}</p>
        <input type="number" onChange={changeHandler} value={value} />
        <br />
        <button onClick={add}>Add</button>
        <button onClick={remove}>Remove</button>
      </div>
      <div>
      <h2>Transactions:</h2>
        {items.map((item, idx) => (
          <List
            key={idx}
            currentDate={item.dateStr}
            value={item.value}
            tag={item.tag}
          />
        ))}
      </div>
    </div>
  );
}

export default Add;
