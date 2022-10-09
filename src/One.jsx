import React, { useState, useContext } from "react";
import { ClothesContext } from "./context/ClothesContext";
import { useNavigate } from "react-router-dom";

import Back from "./assets/icons/back-arrow.svg";

function One() {

  const navigate = useNavigate();

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
    <div>
      <nav>
        <div className="container nav">
          <div className="back" onClick={()=>navigate('/')}>
            <img src={Back} alt="<-" />
            <span>Back to intro</span>
          </div>
        </div>
      </nav>

      <main className="container">
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
          <div className="inner-carousel">
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
      </main>
    </div>
  );
}

export default One;