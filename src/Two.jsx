import React, { useState } from "react";

import OrangeTShirt from './assets/clothes/orange-t-shirt.png';
import VioletTShirt from './assets/clothes/violet-t-shirt.png';
import GreenTShirt from './assets/clothes/t-shirt-green.png';
import MagentaTrousers from './assets/clothes/magenta-trousers.png';
import GreenTrousers from './assets/clothes/green-trousers.png';
import VioletSweater from './assets/clothes/violet-sweater.png';
import GreenSweater from './assets/clothes/green-sweater.png';
import RedShorts from './assets/clothes/red-shorts.png';
import VioletShorts from './assets/clothes/violet-shorts.png';
import BrownTrousers from './assets/clothes/brown-trousers.png';
import HalfTShirt from './assets/clothes/half-t-shirt.png';
import RedTShirt from './assets/clothes/red-t-shirt.png';
import BlueTShirt from './assets/clothes/blue-t-shirt.png';
import GreyTrousers from './assets/clothes/grey-trousers.png';
import Jeans from './assets/clothes/jeans.png';

function App() {

    const [top, setTop] = useState([
        {
          id: 1,
          name: 'orange t-shirt',
          body_part: 'chest',
          cloth: OrangeTShirt,
          on: false
        },{
          id: 2,
          name: 'violet t-shirt',
          body_part: 'chest',
          cloth: VioletTShirt,
          on: false
        },{
          id: 3,
          name: 'violet sweater',
          body_part: 'chest',
          cloth: VioletSweater,
          on: false
        },{
          id: 4,
          name: 'green t-shirt',
          body_part: 'chest',
          cloth: GreenTShirt,
          on: false
        },{
          id: 5,
          name: 'green sweater',
          body_part: 'chest',
          cloth: GreenSweater,
          on: false
        },{
          id: 6,
          name: 'blue t-shirt',
          body_part: 'chest',
          cloth: BlueTShirt,
          on: false
        },{
          id: 7,
          name: 'red t-shirt',
          body_part: 'chest',
          cloth: RedTShirt,
          on: false
        },{
          id: 8,
          name: 'half t-shirt',
          body_part: 'chest',
          cloth: HalfTShirt,
          on: false
        }
      ]);
      const [bottom, setBottom] = useState([
        {
          id: 1,
          name: 'magenta trousers',
          body_part: 'legs',
          cloth: MagentaTrousers,
          on: false
        },{
          id: 2,
          name: 'green trousers',
          body_part: 'legs',
          cloth: GreenTrousers,
          on: false
        },{
          id: 3,
          name: 'red shorts',
          body_part: 'legs',
          cloth: RedShorts,
          on: false
        },{
          id: 4,
          name: 'violet shorts',
          body_part: 'legs',
          cloth: VioletShorts,
          on: false
        },{
          id: 5,
          name: 'grey trousers',
          body_part: 'legs',
          cloth: GreyTrousers,
          on: false
        },{
          id: 6,
          name: 'jeans',
          body_part: 'legs',
          cloth: Jeans,
          on: false
        },{
          id: 7,
          name: 'brown trousers',
          body_part: 'legs',
          cloth: BrownTrousers,
          on: false
        }
      ]);

  const [chest, setChest] = useState('');
  const [legs, setLegs] = useState('');

//   let screenWidth;
//   window.addEventListener('load', ()=> {
//     screenWidth = window.innerWidth;    
//   });  
//   window.addEventListener('resize', ()=> {
//     screenWidth = window.innerWidth;    
//   });

  function scroll(e) {
    console.log('scroll left: ' + e.target.scrollLeft);    
    for ( var i = 0; i < top.length; i++ ) {
      if ( e.target.scrollLeft > 0 ) {
        setChest(top[0]);
      }
      if ( e.target.scrollLeft > 108 ) {
        setChest(top[1]);
      }
      if ( e.target.scrollLeft > 216 ) {
        setChest(top[2]);
      }
      if ( e.target.scrollLeft > 324 ) {
        setChest(top[3]);
      }
      if ( e.target.scrollLeft > 432 ) {
        setChest(top[4]);
      }
      if ( e.target.scrollLeft > 540 ) {
        setChest(top[5]);
      }
      if ( e.target.scrollLeft > 648 ) {
        setChest(top[6]);
      }
      if ( e.target.scrollLeft >= 756 ) {
        setChest(top[7]);
      }
      /*
      if ( e.target.scrollLeft > 108 && top[i].body_part == 'legs' ) {
        setLegs(top[i]);
      }
      */
    }
  }

  function position(e) {
    console.log(e);
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

      <div className="cloth-carousel" onScroll={scroll}>
        <div className="inner-carousel">
        {top.map((item) => {
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
    </div>
  );
}

export default App;