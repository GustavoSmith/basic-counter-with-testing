import React from "react";

const FirstApp = ({
  title = "No hay titulo...",
  subtitle = "No hay subtitulo...",
  name = "Gustavo",
}) => {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-16 bg-slate-800 text-white">
      <h1 className="text-5xl font-bold" data-testid="test-title"> {title} </h1>
      <h2 className="text-3xl font-semibold">{subtitle}</h2>
      <h2 className="text-3xl font-semibold">{subtitle}</h2>
      <h3 className="text-2xl">{name}</h3>
    </main>
  );
};

export default FirstApp;
