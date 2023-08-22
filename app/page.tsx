import React from "react";

function Home() {
  return (
    <div className="flex flex-col gap-2 justify-center w-full items-center">
      <div>
        <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
          Bienvenido a la pagina de&nbsp;
        </h1>
        <h1 className="tracking-tight inline font-semibold from-[#FF705B] to-[#FFB457] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
          Rick And Morty
        </h1>
      </div>
    </div>
  );
}

export default Home;
