import React from "react";
import { useNavigate } from "react-router-dom";

function Intro() {

    const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Intro, please read carefully!</h1>
      
      <p>Here you will find two versions of the garment <span className="highlight">browsing and fitting interaction inside the fitting room</span>, meaning the way you browse the garments in the fitting room and apply them on the avatar. Please test both of them many times.</p>

      <span className="highlight">The assumptions are that:</span>
      <ul>
        <li>the user selects a number of garments in teh Explore section, which will be the ones that she/he can try in the fitting room</li>
        <li>the number of garments that the user can bring in the fitting room is limited, and the limit is around 15 garments</li>
        <li>you are a real user, so take your time in the process, like you were using the app for real</li>
        <li className="highlight">IMPORTANT: try combinations of garments on chest and legs in both interaction versions</li>
      </ul>

      <button onClick={() => navigate('/one')}>Go to interaction 1</button>
      <button onClick={() => navigate('/two')}>Go to interaction 2</button>
    </div>
  );
}

export default Intro;