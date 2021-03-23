import React from "react";
import "../App.css";

function List(props) {
  return (
    <div>
      
      <table className="App grid">
        <tbody>
          <tr>
            <td>{props.currentDate} - </td>
            <td>{props.value} - </td>
            <td>{props.tag}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default List;
