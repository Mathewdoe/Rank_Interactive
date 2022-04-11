import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AdminTable from "./AdminTable";
import BannedCountries from "./BannedCountries";

function Home() {
  const [x, setX] = useState(-1);
  return (
    <>
      {x === -1 ? (
        <div style={{ paddingLeft: "35%" }}>
          <h1>SELECT OPTION</h1>

          <button
            onClick={() => setX(1)}
            style={{
              backgroundColor: "#556B2F",
              color: "white",
              height: "35px",
              margin: "30px",
            }}
          >
            Configure Banned Countries
          </button>
          <br></br>
          <button
            onClick={() => setX(0)}
            style={{
              backgroundColor: "blue",
              color: "white",
              height: "35px",
              margin: "60px",
            }}
          >
            Validate Credit Cards
          </button>
        </div>
      ) : (
        <div>
          {x === 0 ? <AdminTable /> : <BannedCountries />}
          <Button variant="warning" size="lg" onClick={() => setX(-1)}>
            Go Back
          </Button>
        </div>
      )}
    </>
  );
}

export default Home;
