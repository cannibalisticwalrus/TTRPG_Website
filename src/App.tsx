import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex w-screen flex-col items-center bg-black text-white">
      <div
        id="headerPlaceHolder"
        className="flex h-20 w-full flex-row justify-between px-20 py-10"
      >
        <div id="logoAndTitle">Logo. Tablebitz.</div>
        <div id="navItems" className="flex flex-row gap-7">
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <a href="#about">About</a>
          <button className="PinkDropShadow self-center mt-5 h-fit border-2 p-3 hover:bg-neutral-800">
            Try our Demo!
          </button>
        </div>
      </div>
      <div
        id="hero"
        className="mx-44 my-20 flex flex-row gap-20 text-emerald-200"
      >
        <div className="bg-emerald-850">
          <img src="https://picsum.photos/600/600" alt="TEST"></img>
        </div>
        <div className="flex flex-col justify-end">
          <div className="PinkTextShadow text-5xl font-bold">
            Tabletop RPGs Have Never Been So Retro
          </div>
          <div className="mt-4 text-3xl font-normal text-emerald-200">
            Experience your digital tabletop RPG in a full retro-game style!
          </div>
          <button className="PinkDropShadow mt-2 w-fit border-2 p-3 hover:bg-neutral-800">
            Try our Demo!
          </button>
        </div>
      </div>
      <div id="fold" className="flex flex-col items-center">
        <div id="features" className="align-center flex w-5/6 flex-col pt-5">
          <div className="PinkTextShadow pt-3 text-6xl text-emerald-200">
            Not Convinced?
          </div>
          <div className="pt-2 text-3xl text-emerald-200">
            Here is what we can do for you
          </div>
          <div className="my-10 flex flex-row justify-between bg-neutral-800 p-5">
            <div className="flex flex-col">
              <div className="PinkTextShadow-2 pt-5 text-2xl text-emerald-200">
                Keep track of character tokens
              </div>
              <div className="block w-4/6 py-5 text-xl">
                Character movement is universal. You have a speed, you move some
                number of squares and we like that. Let's make it easy just
                click on the character, see where you can move and go! No need
                to worry about anything else.
              </div>
            </div>
            <div className="min-h-auto min-w-1/2 bg-emerald-600">
              This is supposed to be an image
            </div>
          </div>
          <div className="my-10 flex flex-row-reverse justify-between gap-5 p-5">
            <div className="flex flex-col">
              <div className="PinkTextShadow-2 pt-5 text-2xl text-emerald-200">
                Spawn and kill enemies in only two clicks! (Ok...maybe 4)
              </div>
              <div className="block w-4/6 py-5 text-xl">
                Its always so much prep work to import characters and npcs and
                bosses and this and that and and and and...screw it. You
                probably already have the character/creature stats anyways. Just
                put the number of squares it can move and the color you want to
                use and boom! You have an enemy (or a player).
              </div>
            </div>
            <div className="min-h-auto min-w-1/2 bg-emerald-600">
              This is supposed to be an image
            </div>
          </div>
          <div className="my-10 flex flex-row justify-between gap-5 bg-neutral-800 p-5">
            <div className="flex flex-col">
              <div className="PinkTextShadow-2 pt-5 text-2xl text-emerald-200">
                Ruleset Agnostic
              </div>
              <div className="block w-4/6 py-5 text-xl">
                We keep it simple. So simple in-fact that Tablebitz will work
                for ANY grid-based combat. If you play on a grid and you move on
                that grid then this will work for you.
              </div>
            </div>
            <div className="min-h-auto min-w-1/2 bg-emerald-600">
              This is supposed to be an image
            </div>
          </div>
          <div className="my-10 flex flex-col items-center gap-5 p-5">
            <div className="PinkTextShadow pt-5 text-4xl text-emerald-200">
              More Features to Come
            </div>
            <div className="flex flex-col justify-center">
              <div className="block  py-5 text-xl">
                We are still working hard on new features as we need them
                (because we play TTRPGs too!). We are currently developing:
              </div>
              <div className="flex h-[400px] flex-row justify-evenly gap-5">
                <div className="bg-neutral-800">Preset Maps</div>
                <div>Improved Movement</div>
                <div className=" bg-neutral-800">Map Designer</div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="faq"
          className="flex w-5/6 flex-col py-60 text-3xl text-emerald-200"
        >
          <div className=" pt-3 text-5xl text-emerald-200">
            Still Got Questions? We have answers
          </div>
          <div className="py-5">
            <div className="PinkTextShadow-2-Clean my-5 border-y-2 py-4">
              How do I use this app?
            </div>
            <div className="text-white">
              Great question. This app is intended to be streamed to the other
              people in you dnd/pathfinder/rpg session. This is by design. It
              saves the commmon problem of people moving around the map randomly
              when they are bored in a digital session and ensures that there
              are minimal technical issues that the DM cant troubleshoot on
              his/her end. Think of this app as a DM tool.
            </div>
          </div>

          <div className="py-5">
            <div className="PinkTextShadow-2-Clean my-5 border-y-2 py-4">
              Are you planning on making it so players can control their own
              characters over a network?
            </div>
            <div className="text-white">
              We have no plans of developing multiplayer solutions at the
              moment, however, we will consider it if we can provide something
              uniquely different from Roll20 or WorldAnvil's services. Right
              now, we just was something easy to use, that gets out of the way
              of telling a great story and having some fun.
            </div>
          </div>
        </div>
        <div
          id="cta"
          className="PinkTextShadow flex w-5/6 flex-col items-center justify-start"
        >
          <div className="pt-3 text-5xl text-emerald-200">
            So... whatcha waiting for?
          </div>
          <button className="PinkDropShadow my-10 w-fit border-2 p-4 hover:bg-neutral-800">
            Try our Demo!
          </button>
        </div>
        <div id="about" className="mb-20 mt-52 flex w-5/6 flex-col ">
          <div className="pt-3 text-5xl text-emerald-200">
            A Note From the Dev
          </div>
          <div className="block w-4/6 self-center py-10 text-lg">
            Hey. Boo. Welcome to my little project. I hope you enjoy it. This
            project was developed at a time when I was unemployed(and looking
            for a resume-building project) and playing a lot of pathfinder. The
            way I was running combat was leveraging Excel as a grid and choosing
            my player's favorite colors to represent them. I would make small
            maps here and there to dictate bounds, etc. It worked...for a while
            although it brought about some light mockery from my players. But I
            kept wanting my players to have a little more fun with the maps but
            I didn't want to move to a heafty map-making solution, thus
            tablebits was born. It attempts to remain ultra-lightweight,
            ultra-streamable while being as easy as booting up Excel and filling
            in the grid with a map and the players. Its not there yet but I hope
            that soon, it will just be that easy. Hopefully I will see you then!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
