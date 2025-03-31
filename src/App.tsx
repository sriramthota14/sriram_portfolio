import React from "react";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="main-content">
        <div className="container content-container">
          <h1 className="title">Welcome to My Portfolio</h1>
          <p className="subtitle">
            Start prompting (or editing) to see magic happen :)
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
