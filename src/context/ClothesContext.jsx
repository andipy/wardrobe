import React, { useState, createContext } from "react";

import OrangeTShirt from '../assets/clothes/orange-t-shirt.png';
import VioletTShirt from '../assets/clothes/violet-t-shirt.png';
import GreenTShirt from '../assets/clothes/t-shirt-green.png';
import MagentaTrousers from '../assets/clothes/magenta-trousers.png';
import GreenTrousers from '../assets/clothes/green-trousers.png';
import VioletSweater from '../assets/clothes/violet-sweater.png';
import GreenSweater from '../assets/clothes/green-sweater.png';
import RedShorts from '../assets/clothes/red-shorts.png';
import VioletShorts from '../assets/clothes/violet-shorts.png';
import BrownTrousers from '../assets/clothes/brown-trousers.png';
import HalfTShirt from '../assets/clothes/half-t-shirt.png';
import RedTShirt from '../assets/clothes/red-t-shirt.png';
import BlueTShirt from '../assets/clothes/blue-t-shirt.png';
import GreyTrousers from '../assets/clothes/grey-trousers.png';
import Jeans from '../assets/clothes/jeans.png';

export const ClothesContext = createContext();

export const ClothesContextProvider = ({ children }) => {
    const [data, setData] = useState([
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
          name: 'magenta trousers',
          body_part: 'legs',
          cloth: MagentaTrousers,
          on: false
        },{
          id: 4,
          name: 'green trousers',
          body_part: 'legs',
          cloth: GreenTrousers,
          on: false
        },{
          id: 5,
          name: 'violet sweater',
          body_part: 'chest',
          cloth: VioletSweater,
          on: false
        },{
          id: 6,
          name: 'green t-shirt',
          body_part: 'chest',
          cloth: GreenTShirt,
          on: false
        },{
          id: 7,
          name: 'green sweater',
          body_part: 'chest',
          cloth: GreenSweater,
          on: false
        },{
          id: 8,
          name: 'red shorts',
          body_part: 'legs',
          cloth: RedShorts,
          on: false
        },{
          id: 9,
          name: 'violet shorts',
          body_part: 'legs',
          cloth: VioletShorts,
          on: false
        },{
          id: 10,
          name: 'blue t-shirt',
          body_part: 'chest',
          cloth: BlueTShirt,
          on: false
        },{
          id: 11,
          name: 'grey trousers',
          body_part: 'legs',
          cloth: GreyTrousers,
          on: false
        },{
          id: 12,
          name: 'jeans',
          body_part: 'legs',
          cloth: Jeans,
          on: false
        },{
          id: 13,
          name: 'brown trousers',
          body_part: 'legs',
          cloth: BrownTrousers,
          on: false
        },{
          id: 14,
          name: 'red t-shirt',
          body_part: 'chest',
          cloth: RedTShirt,
          on: false
        },{
          id: 15,
          name: 'half t-shirt',
          body_part: 'chest',
          cloth: HalfTShirt,
          on: false
        }
      ]);

      return (
        <ClothesContext.Provider value={[data, setData]}>
            { children }
        </ClothesContext.Provider>
    )
}