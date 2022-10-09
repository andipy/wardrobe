import React from "react";
import { useNavigate } from "react-router-dom";

function Intro() {

    const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Intro, please read carefully!</h1>
      
      <p>Here you will find two versions of the garment browsing and fitting interaction inside the fitting room, meaning the way you browse the garments in the fitting room and apply them on the avatar.</p>

      <span className="highlight">Scenario:</span>
      <ul>
        <li>you are a real user, <span className="highlight">so take your time for this test, like you were using the app for real</span></li>
        <li>you selected <span className="highlight">8 t-shirts/sweaters and 7 trousers</span> in the Explore section</li>
        <li>you reached the <span className="highlight">max limit of 15 garments</span> you can bring in the fitting room</li>        
        <li className="highlight">you want to combine chest and legs garments on the avatar, to see how the upper part matches with the bottom part</li>
      </ul>

      <p>The goal is to understand which of the two versions is more comfortable and easy to use. Try them here:</p>

      <button onClick={() => navigate('/one')}>Go to interaction 1</button>
      <button onClick={() => navigate('/two')}>Go to interaction 2</button>
    </div>
  );
}

export default Intro;