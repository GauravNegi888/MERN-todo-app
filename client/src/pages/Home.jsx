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
    <div className="max-w-7xl min-h-screen lg:h-full mx-auto flex gap-0 lg:gap-7 flex-col lg:flex-row">
      {/* left-section */}
      <div className="left w-full h-[65vh] md:h-full pl-5 pr-5 lg:pr-0 pt-5 lg:pt-10 md:pb-5 flex flex-col gap-5 bg-zinc-100">
        {/* greeting-card  */}
        <GreetingCard />

        {/* Task-section */}
        <TaskSection />
      </div>

      {/* right-section */}
      <div className="right w-full h-[80vh] lg:h-full pl-5 lg:pl-0 pr-5 pt-5 lg:pt-10 lg:pb-5 flex flex-col gap-5 bg-zinc-100">
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
