import React from "react";
import Home from "./pages/Home";
import FormContainer from "./components/FormContainer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="bg-zinc-100 w-full h-screen">
      <Home />
      <FormContainer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
