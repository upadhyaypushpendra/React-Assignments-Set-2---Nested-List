import React, { useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow"
          },
          {
            name: "Dewas"
          }
        ]
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit"
          },
          {
            name: "Berasia"
          }
        ]
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur"
          }
        ]
      }
    ]
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad"
          },
          {
            name: "Hirapur"
          }
        ]
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's"
          },
          {
            name: "Faizal khan's"
          }
        ]
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's"
          },
          {
            name: "Guddu bhaiya's"
          }
        ]
      }
    ]
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin"
          },
          {
            name: "Jalah"
          }
        ]
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati"
          },
          {
            name: "Leopard found in IIT Guwahati"
          }
        ]
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh"
          },
          {
            name: "Silchar"
          }
        ]
      }
    ]
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur"
          },
          {
            name: "Maner"
          }
        ]
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur"
          },
          {
            name: "Barachatti"
          }
        ]
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara"
          },
          {
            name: "Jale"
          }
        ]
      }
    ]
  }
];

const STATE = "STATE";
const CITY = "CITY";
const TOWN = "TOWN";

function App() {
  const [stateIndex, setStateIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [townIndex, setTownIndex] = useState(0);
  const handleChange = (event, type) => {
    switch (type) {
      case STATE:
        setStateIndex(event.target.selectedIndex);
        break;
      case CITY:
        setCityIndex(event.target.selectedIndex);
        break;
      case TOWN:
        setTownIndex(event.target.selectedIndex);
        break;
      default:
    }
  };
  return (
    <div id="main">
      <select
        onChange={(event) => handleChange(event, STATE)}
        value={states[stateIndex].name}
      >
        {states.map((state, index) => (
          <option id={`state${index + 1}`} key={states[index].name}>
            {state.name}
          </option>
        ))}
      </select>
      <select
        onChange={(event) => handleChange(event, CITY)}
        value={states[stateIndex].cities[cityIndex].name}
      >
        {states[stateIndex].cities.map((city, index) => (
          <option
            key={states[stateIndex].cities[index].name}
            id={`city${index + 1}`}
          >
            {city.name}
          </option>
        ))}
      </select>
      <select
        onChange={(event) => handleChange(event, TOWN)}
        value={states[stateIndex].cities[cityIndex].towns[townIndex].name}
      >
        {states[stateIndex].cities[cityIndex].towns.map((town, index) => (
          <option
            id={`town${index + 1}`}
            key={states[stateIndex].cities[cityIndex].towns[index].name}
          >
            {town.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
