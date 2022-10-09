import React, { useState, useContext, useEffect } from "react";
import { ClothesContext } from "./context/ClothesContext";

import { useNavigate } from "react-router-dom";

import Back from "./assets/icons/back-arrow.svg";
import Chest from './assets/icons/chest.svg';
import Legs from './assets/icons/legs.svg';

function App() {

  const navigate = useNavigate();

  const [data, setData] = useContext(ClothesContext);
  const [garments, setGarments] = useState([]);
  const [currentType, setCurrentType] = useState('');

  const [chest, setChest] = useState('');
  const [legs, setLegs] = useState('');

  const handleFilters = (e) => {    
    let id = e.target.id;
    setCurrentType(id);
    setGarments(data.filter(elem => elem.body_part == id));
    console.log(garments);
  }

  function scroll(e) {
    console.log('scroll left: ' + e.target.scrollLeft);    
    for ( var i = 0; i < garments.length; i++ ) {
      if ( e.target.scrollLeft >= (108*i) && currentType == 'chest' ) {
        setChest(garments[i]);
      }
      if ( e.target.scrollLeft >= (108*i) && currentType == 'legs' ) {
        setLegs(garments[i]);
      }
    }
  }

  function position(e) {
    console.log(e);
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

        <div className="filters">
          <div className="filter-icon" id="chest" onClick={handleFilters}>
            <img src={Chest} />
          </div>
          <div className="filter-icon" id="legs" onClick={handleFilters}>
            <img src={Legs} />
          </div>
        </div>

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

        <div className="cloth-carousel" onScroll={scroll}>
          <div className="inner-carousel" >
          {garments.map((item) => {
              return (
                <div
                  className="cloth"
                  id={item.id}
                  key={item.id}
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

export default App;











//   let screenWidth;
//   window.addEventListener('load', ()=> {
//     screenWidth = window.innerWidth;    
//   });  
//   window.addEventListener('resize', ()=> {
//     screenWidth = window.innerWidth;    
//   });