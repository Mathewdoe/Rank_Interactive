import { useState, useEffect } from "react";

function saveBannedCountries(bannedCountries) {
  localStorage.setItem("bannedCountries", bannedCountries);
}

function getBannedCountries() {
  const data = localStorage.getItem("bannedCountries");

  if (data) {
    return data.split(",");
  }
  return [];
}

function BannedCountries() {
  const [ban, setBanned] = useState(getBannedCountries());
  const [country, setCountry] = useState("");

  useEffect(() => {
    saveBannedCountries(ban);
  }, [ban]);

  const handleCountry = (event) => {
    setCountry(event.target.value);
    event.preventDefault();
  };

  const addCountry = () => {
    const countryExit = ban.some((q) => q === country);
    if (countryExit) {
      alert("Country already listed");
      clearState();
    } else {
      setBanned([...ban, country]);
      clearState();
    }
  };

  const clearState = () => {
    setCountry("");
  };

  const deleteCountry = () => {
    const del = ban.filter((x) => x !== country);
    if (country === "") {
      alert("Invalid Entry");
    } else {
      setBanned([...del]);
      checkExist();
      clearState();
    }
  };

  const checkExist = () => {
    const notExist = ban.some((y) => y === country);
    if (notExist) {
      return;
    } else {
      alert("Country not Banned");
    }
  };

  return (
    <div style={{ paddingLeft: "25%" }}>
      <h1>CONFIGURE BANNED COUNTRIES</h1>
      <div style={{ paddingLeft: "10%" }}>
        <div>
          <label>
            <input type="value" value={country} onChange={handleCountry} />
          </label>
          <button
            onClick={addCountry}
            style={{
              backgroundColor: "#556B2F",
              color: "white",
              height: "35px",
            }}
          >
            Add Country
          </button>
          <button
            onClick={deleteCountry}
            style={{ background: "#8B0000", color: "white", height: "35px" }}
          >
            Delete Country
          </button>
        </div>

        <h3>List of Banned Countries:</h3>

        <div>
          <ul style={{ listStyle: "none" }}>
            {ban.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BannedCountries;
