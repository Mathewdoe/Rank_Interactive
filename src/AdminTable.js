import React, { useState } from "react";
import Validate from "./Validate";

function AdminTable() {
  const [cardData, setCardData] = useState([]);

  const tableRows = cardData.map((info) => {
    return (
      <tr>
        <td style={{ paddingRight:"120px" }}>{info.cardNumber}</td>
        <td style={{ paddingLeft:"150px" }}>{info.country}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalCards = cardData.length;
    data.id = totalCards + 1;
    const updatedCardData = [...cardData];
    updatedCardData.push(data);
    setCardData([updatedCardData, ...updatedCardData]);
  };

  return (
    <div style={{ padding: "5%  25% 10% 25%" }}>
      <table>
        <thead>
          <tr >
            <th style={{paddingRight:"100px"}} >CARDNUMBER</th>
            <th style={{paddingLeft:"100px"}}>COUNTRY</th>
          </tr>
        </thead>
        <tbody style={{ paddingLeft: "25%",marginLeft:"25%" }}>{tableRows}</tbody>
      </table>
      <Validate func={addRows} />
    </div>
  );
}

export default AdminTable;
