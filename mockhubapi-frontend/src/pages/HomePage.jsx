import React, { useRef } from "react";
import { ArrowRight, Search, RefreshCw, Filter, CheckCircle } from "lucide-react";
import EndPoints from "../components/EndPoints";

const HomePage = () => {
  const endpointRef = useRef(null);

  const handleScroll = () => {
    endpointRef?.current.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: Search,
      title: "Global Search",
      description: "Search across all resources with type filtering",
    },
    {
      icon: RefreshCw,
      title: "Auto Reset",
      description: "Daily database reset at midnight UTC",
    },
    {
      icon: Filter,
      title: "Advanced Filtering",
      description: "Text search, sorting, and complex filtering",
      },
      {
          icon: CheckCircle,
          title: 'Validation',
          description: 'Comprehensive input validation for all endpoints'
    }
  ];

  return (
    <main className="container mx-auto py-20 px-6">
      <section className="hero text-gray-700 max-w-2xl">
        <h1 className="sm:text-6xl text-5xl font-medium mb-6">
          Instant Mock APIs for Developers
        </h1>
        <h2 className="text-lg">
          A public fake REST API made for developers. Test features, debug, and
          prototype without touching a real database.
        </h2>
        <button
          onClick={handleScroll}
          className="bg-blue-500 rounded-lg shadow-md flex items-center gap-1 px-4 py-2 cursor-pointer text-white my-4 transition duration-300 hover:scale-[0.95]"
        >
          Explore Docs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#fff"
          >
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </button>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
        <div className="bg-white/90 hover:scale-[1.05] backdrop-blur-sm shadow-lg rounded-2xl p-6 card-shadow hover-lift transition duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-forest-800">45,231</div>
              <div className="text-sm text-forest-600">Total Requests</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-eco-600">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 17l9.2-9.2M17 17V7H7"
                />
              </svg>
              <span className="text-sm font-medium">+12% today</span>
            </div>
            <div className="w-16 h-2 bg-gray-300 rounded-full">
              <div className="w-3/4 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 hover:scale-[1.05] backdrop-blur-sm shadow-lg rounded-2xl p-6 card-shadow hover-lift transition duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">98.5%</div>
              <div className="text-sm ">Success Rate</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-blue-500">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span className="text-sm font-medium">Improving</span>
            </div>
            <div className="w-16 h-2 bg-gray-300 rounded-full">
              <div className="w-4/5 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 hover:scale-[1.05] backdrop-blur-sm shadow-lg rounded-2xl p-6 card-shadow hover-lift transition duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-forest-800">145ms</div>
              <div className="text-sm text-forest-600">Avg Response</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
              <span className="text-sm font-medium">On target</span>
            </div>
            <div className="w-16 h-2 bg-gray-300 rounded-full">
              <div className="w-2/3 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 hover:scale-[1.05] backdrop-blur-sm shadow-lg rounded-2xl p-6 card-shadow hover-lift transition duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-forest-800">31</div>
              <div className="text-sm text-forest-600">Active Endpoints</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-eco-600">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="text-sm font-medium">All healthy</span>
            </div>
            <div className="w-16 h-2 bg-gray-300 rounded-full">
              <div className="w-full h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h3 className="text-3xl font-semibold">✨ Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-6 card-shadow hover-lift transition duration-300 hover:scale-[0.98] border-l border-l-4 border-blue-500"
            >
              <div className="flex items-center mb-4">
                <div className="w-11 h-11 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-semibold">{feature.title}</h4>
              </div>
              <p className="text-gray-600 text-md">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="text-gray-300 mt-10" />
      <div className="my-10">
        <h3 className="text-4xl font-medium">When to use</h3>
        <p className="text-black mt-2">
          MockHub API offers simple, plug-and-use fake endpoints designed for
          fast development. Whether you’re prototyping, learning APIs, or
          showcasing features, you can start sending requests immediately.
        </p>
      </div>

      <hr className="text-gray-300 mb-20" />
      <div ref={endpointRef}>
        <EndPoints />
      </div>
    </main>
  );
};

export default HomePage;
