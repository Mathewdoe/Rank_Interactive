import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AdminTable from "./AdminTable";
import BannedCountries from "./BannedCountries";

function Home() {
  const [x, setX] = useState(-1);
  return (
    <>
      {x === -1 ? (
        <div>
          <div className="d-grid gap-2">
            <Button variant="secondary" size="lg" onClick={() => setX(1)}>
              Edit Countries Banned
            </Button>
            <Button variant="primary" size="lg" onClick={() => setX(0)}>
              Validate Credit Card
            </Button>
          </div>
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
