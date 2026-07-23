import React from "react";
import GreetingCard from "../components/GreetingCard";
import CounterWrapper from "../components/CounterWrapper";
import { FaPlus } from "react-icons/fa";
import TaskCard from "../components/TaskCard";
import Chart from "../components/ProductivityChart";

import ChartWrapper from "../components/ChartWrapper";
import Footer from "../components/Footer";
import ChartSection from "../components/ChartSection";
import TaskSection from "../components/TaskSection";

const Home = () => {
  return (
    <div className="max-w-7xl h-full mx-auto flex gap-7">
      {/* left-section */}
      <div className="left w-full h-full pt-10 pb-5 flex flex-col gap-7">
        {/* greeting-card  */}
        <GreetingCard />

        {/* Task-section */}
        <TaskSection />
      </div>

      {/* right-section */}
      <div className="right w-full h-full pt-10 pb-5 flex flex-col gap-7">
        {/* counter-section */}
        <CounterWrapper />
        {/* chart-section */}
        <ChartSection />
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
