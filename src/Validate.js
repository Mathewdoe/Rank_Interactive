import { useState, useEffect } from "react";
import Cleave from "cleave.js/react";

function saveCountries(Countries) {
  localStorage.setItem("Countries", Countries);
}
function saveCardNumbers(CardNumbers) {
  localStorage.setItem("CardNumbers", CardNumbers);
}

function getBannedCountries() {
  const data = localStorage.getItem("bannedCountries");

  if (data) {
    return data.split(",");
  }
  return [];
}

function getCountries() {
  const data = localStorage.getItem("Countries");

  if (data) {
    return data.split(",");
  }
  return [];
}

function getCardNumbers() {
  const data = localStorage.getItem("CardNumbers");

  if (data) {
    return data.split(",");
  }
  return [];
}
const bannedCountries = getBannedCountries();

function Validate(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState(getCountries());
  const [cardNumbers, setCardNumbers] = useState(getCardNumbers());
  const [cardDetails, setCardDetails] = useState();
  getBannedCountries();

  useEffect(() => {
    saveCountries(countries);
    saveCardNumbers(cardNumbers);
  }, [countries, cardNumbers]);

  const inPutCardNumber = (e) => {
    setCardNumber(e.target.value);
  };

  // const inPutCountry = e => {

  // const inPutCountry = (e) => {
  //   const re = /^[A-Za-z]+$/;
  //   if (value === "" || re.test(value)) {
  //     setTxt(value);
  //     setCountry(e.target.value);
  //   }
    
  // };

  const inPutCountry = e => {
    // const { value } = e.target;
    const re = /^[A-Za-z]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setCountry(e.target.value);
     
    }
  }



  const transferValue = () => {
    const val = {
      cardNumber,
      country,
    };

    const checkIfBanned = bannedCountries.some(myF);
    function myF(x) {
      return x === country;
    }
    const checkDublicate = cardNumbers.some(myFn);
    function myFn(y) {
      return y === cardNumber;
    }
    
    if (!checkIfBanned) {
      if (!checkDublicate) {
        props.func(val);
        clearState();
      } else {
        alert("Dublicate card");
        clearState();
      }
    
    } else {
      clearState();
      return alert("Country Banned");
    }
    setCountries([...countries, country]);
    setCardNumbers([...cardNumbers, cardNumber]);
    setCardDetails(val.cardNumber)
    console.log(typeof(cardDetails[0].CardNumbers));
  };

  const clearState = () => {
    setCardNumber("");
    setCountry("");
  };

  return (
    <div>
      <Cleave
        options={{ creditCard: true }}
        value={cardNumber}
        onChange={inPutCardNumber}
        placeholder="Credit card number"
      />

      <input
        type="text"
        value={country}
        onChange={inPutCountry}
        placeholder="Country"
      />

      <button
        onClick={transferValue}
        style={{ backgroundColor: "#556B2F", color: "white", height: "35px" }}
      >
        {" "}
        Validate{" "}
      </button>
    </div>
  );
}

export default Validate;
