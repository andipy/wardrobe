import React, { useState, useContext } from "react";
import { ClothesContext } from "./context/ClothesContext";

function App() {

  const [data, setData] = useContext(ClothesContext);

  const [chest, setChest] = useState('');
  const [legs, setLegs] = useState('');

  function handleCloth(e) {
    for ( var i = 0; i < data.length; i++ ) {
      if ( data[i].id == e.target.id && data[i].body_part == 'chest' ) {
        setChest(data[i]);
      }
      if ( data[i].id == e.target.id && data[i].body_part == 'legs' ) {
        setLegs(data[i]);
      }
    }
  }

  return (
    <div className="container">
      <h1>Fitting room</h1>

      <div className="avatar">
        <div className="inner-avatar">
          <div className="chest">
            <img src={chest.cloth} alt="" />
          </div>
          <div className="legs">
            <img src={legs.cloth} alt="" />
          </div>
        </div>
      </div>

      <div className="cloth-carousel">
        {data.map((item) => {
          return (
            <div
              className="cloth"
              id={item.id}
              key={item.id}
              onClick={handleCloth}
            >
              <img
                src={item.cloth}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
