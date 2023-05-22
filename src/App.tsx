import React from "react";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-emerald-950">
      <div
        id="hero"
        className="center container flex flex-row bg-emerald-500 text-emerald-100"
      >
        <div className="bg-emerald-850">
          <img src="https://picsum.photos/200/300" alt="TEST"></img>
        </div>
        <div className="">
          <div className="text-5xl font-bold">
            Tabletop RPGs Have Never Been More Retro
          </div>
          <div>Experience your digital tabletop RPG in a full retro-game style!</div>
          <div>Try our Demo!</div>
        </div>
      </div>
      <div id="fold">
        <div id="features" className="">
          <div>Keep track of character tokens</div>
          <div>Spawn and kill enemies in only two clicks!</div>
          <div>
            We keep it simple. So simple in-fact that Tablebitz will work for
            ANY grid-based combat
          </div>
          <div>
            The app is still in Alpha but we are working hard to add new
            features whenever possible.  Some of our upcoming features are:
            <div>New, Loadable Maps</div>
            <div>Better Movement</div>
            <div>Texture Packs</div>
          </div>
          <div></div>
        </div>
        <div id="faq">FAQ</div>
        <div id="cta">Call to action</div>
        <div id="about">Why this project?</div>
      </div>
    </div>
  );
}

export default App;
