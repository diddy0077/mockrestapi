import React, { useState } from "react";
import { PlayCircle,Sparkles  } from "lucide-react";

const GuidePage = () => {
  const [copiedStates, setCopiedStates] = useState({});

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates((prev) => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [id]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <main className="container mx-auto p-6">
      <section className="py-6 hero">
        <h1 className="text-4xl font-medium">MockHub API – Guide</h1>
        <p className="text-gray-700 mt-6">
          This page shows quick examples using the Fetch API, but you can
          interact with MockHub from any language or framework that can send
          HTTP requests.You can copy these examples directly into your browser
          console or your code editor to test the API instantly.
        </p>
      </section>

      <section className="mt-16">
        <div>
          <h1 className="text-2xl font-bold mb-5">
            🚀 Fetching a Single Resource
          </h1>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden max-w-4xl shadow-lg font-mono text-sm">
            {/* VSCode Title Bar */}
            <div className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between border-b border-[#3e3e42]">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                </div>
                <span className="text-[#cccccc] text-xs sm:text:sm ml-4">
                  fetch-example.js
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#858585] text-xs">js</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `fetch('https://mockhub-api.onrender.com/api/posts/1')
  .then(res => res.json())
  .then(data => console.log(data));`,
                      "fetch-single"
                    )
                  }
                  className="px-2 py-1 text-xs bg-[#3c3c3c] hover:bg-[#4c4c4c] text-[#cccccc] rounded transition-colors"
                >
                  {copiedStates["fetch-single"] ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4">
              <div className="flex">
                {/* Line Numbers */}
                <div
                  className="text-[#858585] text-right pr-4 select-none"
                  style={{ minWidth: "2rem" }}
                >
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>

                {/* Code Lines */}
                <div className="flex-1 text-[#d4d4d4]">
                  <div>
                    <span className="text-[#4ec9b0]">fetch</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#ce9178]">
                      'https://mockhub-api.onrender.com/api/posts/1'
                    </span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">(function(res) {"{"}</span>
                    <span className="text-[#d4d4d4]"> return res.json()</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">
                      (function(data) {"{"}
                    </span>
                    <span className="text-[#d4d4d4]"> console.log(data)</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                    <span className="text-[#d4d4d4]">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div>
          <h1 className="text-2xl font-bold mb-5">
            📃 Fetching All Items in a Collection
          </h1>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden max-w-4xl shadow-lg font-mono text-sm">
            {/* VSCode Title Bar */}
            <div className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between border-b border-[#3e3e42]">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                </div>
                <span className="text-[#cccccc] text-xs sm:text-sm ml-4">
                  fetch-all.js
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#858585] text-xs">js</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `fetch('https://mockhub-api.onrender.com/api/posts')
  .then(res => res.json())
  .then(data => console.log(data));`,
                      "fetch-all"
                    )
                  }
                  className="px-2 py-1 text-xs bg-[#3c3c3c] hover:bg-[#4c4c4c] text-[#cccccc] rounded transition-colors"
                >
                  {copiedStates["fetch-all"] ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4">
              <div className="flex">
                {/* Line Numbers */}
                <div
                  className="text-[#858585] text-right pr-4 select-none"
                  style={{ minWidth: "2rem" }}
                >
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>

                {/* Code Lines */}
                <div className="flex-1 text-[#d4d4d4]">
                  <div>
                    <span className="text-[#4ec9b0]">fetch</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#ce9178]">
                      'https://mockhub-api.onrender.com/api/posts'
                    </span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">(function(res) {"{"}</span>
                    <span className="text-[#d4d4d4]"> return res.json()</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">
                      (function(data) {"{"}
                    </span>
                    <span className="text-[#d4d4d4]"> console.log(data)</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                    <span className="text-[#d4d4d4]">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div>
          <h1 className="text-2xl font-bold mb-5">🔍 Global Search</h1>

          <div className="mb-6">
            <p className="text-gray-700 max-w-4xl">
              You can search through query parameters across all resources using
              our global search endpoint.
            </p>
            <p className="text-gray-700 max-w-4xl mt-2 font-medium">
              Example: Search for data across all resources:
            </p>
          </div>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden max-w-4xl shadow-lg font-mono text-sm">
            {/* VSCode Title Bar */}
            <div className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between border-b border-[#3e3e42]">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                </div>
                <span className="text-[#cccccc] text-xs sm:text-sm ml-4">
                  global-search.js
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#858585] text-xs">js</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `fetch('https://mockhub-api.onrender.com/api/search?query=example')
  .then(res => res.json())
  .then(data => console.log(data));`,
                      "global-search"
                    )
                  }
                  className="px-2 py-1 text-xs bg-[#3c3c3c] hover:bg-[#4c4c4c] text-[#cccccc] rounded transition-colors"
                >
                  {copiedStates["global-search"] ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4">
              <div className="flex">
                {/* Line Numbers */}
                <div
                  className="text-[#858585] text-right pr-4 select-none"
                  style={{ minWidth: "2rem" }}
                >
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>

                {/* Code Lines */}
                <div className="flex-1 text-[#d4d4d4]">
                  <div>
                    <span className="text-[#4ec9b0]">fetch</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#ce9178]">
                      'https://mockhub-api.onrender.com/api/search?query=example'
                    </span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">(function(res) {"{"}</span>
                    <span className="text-[#d4d4d4]"> return res.json()</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">
                      (function(data) {"{"}
                    </span>
                    <span className="text-[#d4d4d4]"> console.log(data)</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                    <span className="text-[#d4d4d4]">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-600 max-w-4xl border-l border-l-7 border-blue-600 bg-white rounded-lg p-2">
              This endpoint returns related data for that query across all
              available resources (posts, users, todos, etc.).
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div>
          <h1 className="text-2xl font-bold mb-5">
            ➕ Creating a New Resource
          </h1>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden max-w-4xl shadow-lg font-mono text-sm">
            {/* VSCode Title Bar */}
            <div className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between border-b border-[#3e3e42]">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                </div>
                <span className="text-[#cccccc] text-xs sm:text-sm ml-4">
                  create-post.js
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#858585] text-xs">js</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `fetch('https://mockhub-api.onrender.com/api/posts', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "New article",
    body: "This is a new post created for testing.",
    userId: 7
  })
})
  .then(res => res.json())
  .then(data => console.log(data));`,
                      "create-post"
                    )
                  }
                  className="px-2 py-1 text-xs bg-[#3c3c3c] hover:bg-[#4c4c4c] text-[#cccccc] rounded transition-colors"
                >
                  {copiedStates["create-post"] ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4">
              <div className="flex">
                {/* Line Numbers */}
                <div
                  className="text-[#858585] text-right pr-4 select-none"
                  style={{ minWidth: "2rem" }}
                >
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                </div>

                {/* Code Lines */}
                <div className="flex-1 text-[#d4d4d4]">
                  <div>
                    <span className="text-[#4ec9b0]">fetch</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#ce9178]">
                      'https://mockhub-api.onrender.com/api/posts'
                    </span>
                    <span className="text-[#d4d4d4]">, {"{"}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">method</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">'POST'</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">headers</span>
                    <span className="text-[#d4d4d4]">: {"{"}</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-[#9cdcfe]">"Content-Type"</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">"application/json"</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#d4d4d4]">{"}"}</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">body</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#dcdcaa]">JSON</span>
                    <span className="text-[#d4d4d4]">.stringify({"{"}</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-[#9cdcfe]">title</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">"New article"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-[#9cdcfe]">body</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">
                      "This is a new post created for testing."
                    </span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-[#9cdcfe]">userId</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#b5cea8]">7</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#d4d4d4]">{"}): {"}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">(function(res) {"{"}</span>
                    <span className="text-[#d4d4d4]"> return res.json()</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">
                      (function(data) {"{"}
                    </span>
                    <span className="text-[#d4d4d4]"> console.log(data)</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                    <span className="text-[#d4d4d4]">;</span>
                  </div>
                  <div>
                    <span className="text-[#d4d4d4]">{"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div>
          <h1 className="text-2xl font-bold mb-5">
            ✏️ Updating a Resource (PUT)
          </h1>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden max-w-4xl shadow-lg font-mono text-sm">
            {/* VSCode Title Bar */}
            <div className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between border-b border-[#3e3e42]">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                </div>
                <span className="text-[#cccccc] text-xs sm:text-sm ml-4">
                  update-post.js
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#858585] text-xs">js</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `fetch('https://mockhub-api.onrender.com/api/posts/1', {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Updated post title",
    body: "Updated body content",
    userId: 14
  })
})
  .then(res => res.json())
  .then(data => console.log(data));`,
                      "update-post"
                    )
                  }
                  className="px-2 py-1 text-xs bg-[#3c3c3c] hover:bg-[#4c4c4c] text-[#cccccc] rounded transition-colors"
                >
                  {copiedStates["update-post"] ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4">
              <div className="flex">
                {/* Line Numbers */}
                <div
                  className="text-[#858585] text-right pr-4 select-none"
                  style={{ minWidth: "2rem" }}
                >
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                </div>

                {/* Code Lines */}
                <div className="flex-1 text-[#d4d4d4]">
                  <div>
                    <span className="text-[#4ec9b0]">fetch</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#ce9178]">
                      'https://mockhub-api.onrender.com/api/posts/1'
                    </span>
                    <span className="text-[#d4d4d4]">, {"{"}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">method</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">"PUT"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">headers</span>
                    <span className="text-[#d4d4d4]">: {"{"}</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-[#9cdcfe]">"Content-Type"</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">"application/json"</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#d4d4d4]">{"}"}</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">body</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#dcdcaa]">JSON</span>
                    <span className="text-[#d4d4d4]">.stringify({"{"}</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-[#9cdcfe]">id</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#b5cea8]">1</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-[#9cdcfe]">title</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">"Updated post title"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-[#9cdcfe]">body</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">
                      "Updated body content"
                    </span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-[#9cdcfe]">userId</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#b5cea8]">14</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#d4d4d4]">{"}): {"}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">(function(res) {"{"}</span>
                    <span className="text-[#d4d4d4]"> return res.json()</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">
                      (function(data) {"{"}
                    </span>
                    <span className="text-[#d4d4d4]"> console.log(data)</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                    <span className="text-[#d4d4d4]">;</span>
                  </div>
                  <div>
                    <span className="text-[#d4d4d4]">{"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div>
          <h1 className="text-2xl font-bold mb-5">
            🩹 Modifying Part of a Resource (PATCH)
          </h1>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden max-w-4xl shadow-lg font-mono text-sm">
            {/* VSCode Title Bar */}
            <div className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between border-b border-[#3e3e42]">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                </div>
                <span className="text-[#cccccc] text-xs sm:text-sm ml-4">
                  patch-post.js
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#858585] text-xs">js</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `fetch('https://mockhub-api.onrender.com/api/posts/1', {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    body: "Only updating the body field"
  })
})
  .then(res => res.json())
  .then(data => console.log(data));`,
                      "patch-post"
                    )
                  }
                  className="px-2 py-1 text-xs bg-[#3c3c3c] hover:bg-[#4c4c4c] text-[#cccccc] rounded transition-colors"
                >
                  {copiedStates["patch-post"] ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4">
              <div className="flex">
                {/* Line Numbers */}
                <div
                  className="text-[#858585] text-right pr-4 select-none"
                  style={{ minWidth: "2rem" }}
                >
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                </div>

                {/* Code Lines */}
                <div className="flex-1 text-[#d4d4d4]">
                  <div>
                    <span className="text-[#4ec9b0]">fetch</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#ce9178]">
                      'https://mockhub-api.onrender.com/api/posts/1'
                    </span>
                    <span className="text-[#d4d4d4]">, {"{"}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">method</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">"PATCH"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">headers</span>
                    <span className="text-[#d4d4d4]">: {"{"}</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-[#9cdcfe]">"Content-Type"</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">"application/json"</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#d4d4d4]">{"}"}</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">body</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#dcdcaa]">JSON</span>
                    <span className="text-[#d4d4d4]">.stringify({"{"}</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-[#9cdcfe]">body</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">
                      "Only updating the body field"
                    </span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#d4d4d4]">{"}): {"}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">(function(res) {"{"}</span>
                    <span className="text-[#d4d4d4]"> return res.json()</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">
                      (function(data) {"{"}
                    </span>
                    <span className="text-[#d4d4d4]"> console.log(data)</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                    <span className="text-[#d4d4d4]">;</span>
                  </div>
                  <div>
                    <span className="text-[#d4d4d4]">{"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div>
          <h1 className="text-2xl font-bold mb-5">❌ Deleting a Resource</h1>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden max-w-4xl shadow-lg font-mono text-sm">
            {/* VSCode Title Bar */}
            <div className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between border-b border-[#3e3e42]">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                </div>
                <span className="text-[#cccccc] text-xs sm:text-sm ml-4">
                  delete-post.js
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#858585] text-xs">js</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `fetch('https://mockhub-api.onrender.com/api/posts/1', {
  method: "DELETE"
});`,
                      "delete-post"
                    )
                  }
                  className="px-2 py-1 text-xs bg-[#3c3c3c] hover:bg-[#4c4c4c] text-[#cccccc] rounded transition-colors"
                >
                  {copiedStates["delete-post"] ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4">
              <div className="flex">
                {/* Line Numbers */}
                <div
                  className="text-[#858585] text-right pr-4 select-none"
                  style={{ minWidth: "2rem" }}
                >
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>

                {/* Code Lines */}
                <div className="flex-1 text-[#d4d4d4]">
                  <div>
                    <span className="text-[#4ec9b0]">fetch</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#ce9178]">
                      'https://mockhub-api.onrender.com/api/posts/1'
                    </span>
                    <span className="text-[#d4d4d4]">, {"{"}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">method</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">"DELETE"</span>
                  </div>
                  <div>
                    <span className="text-[#d4d4d4]">{"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                    <span className="text-[#d4d4d4]">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div>
          <h1 className="text-2xl font-bold mb-5">🔍 Filtering Results</h1>

          <div className="mb-6">
            <p className="text-gray-700 max-w-4xl">
              You can filter any resource using query parameters.
            </p>
            <p className="text-gray-700 max-w-4xl mt-2 font-medium">
              Example: Return all posts belonging to a specific user:
            </p>
          </div>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden max-w-4xl shadow-lg font-mono text-sm">
            {/* VSCode Title Bar */}
            <div className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between border-b border-[#3e3e42]">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                </div>
                <span className="text-[#cccccc] text-xs sm:text-sm ml-4">
                  filter-posts.js
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#858585] text-xs">js</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `fetch('https://mockhub-api.onrender.com/api/posts?userId=14')
  .then(res => res.json())
  .then(data => console.log(data));`,
                      "filter-posts"
                    )
                  }
                  className="px-2 py-1 text-xs bg-[#3c3c3c] hover:bg-[#4c4c4c] text-[#cccccc] rounded transition-colors"
                >
                  {copiedStates["filter-posts"] ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4">
              <div className="flex">
                {/* Line Numbers */}
                <div
                  className="text-[#858585] text-right pr-4 select-none"
                  style={{ minWidth: "2rem" }}
                >
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>

                {/* Code Lines */}
                <div className="flex-1 text-[#d4d4d4]">
                  <div>
                    <span className="text-[#4ec9b0]">fetch</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#ce9178]">
                      'https://mockhub-api.onrender.com/api/posts?userId=14'
                    </span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">(function(res) {"{"}</span>
                    <span className="text-[#d4d4d4]"> return res.json()</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">
                      (function(data) {"{"}
                    </span>
                    <span className="text-[#d4d4d4]"> console.log(data)</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                    <span className="text-[#d4d4d4]">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-700 max-w-4xl font-medium">
              Example: Filter posts by user with query parameters (title and
              body):
            </p>
          </div>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden max-w-4xl shadow-lg font-mono text-sm mt-4">
            {/* VSCode Title Bar */}
            <div className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between border-b border-[#3e3e42]">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                </div>
                <span className="text-[#cccccc] text-xs sm:text-sm ml-4">
                  filter-user-posts.js
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#858585] text-xs">js</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `fetch('https://mockhub-api.onrender.com/api/users/1/posts?title=example&body=example')
  .then(res => res.json())
  .then(data => console.log(data));`,
                      "filter-user-posts"
                    )
                  }
                  className="px-2 py-1 text-xs bg-[#3c3c3c] hover:bg-[#4c4c4c] text-[#cccccc] rounded transition-colors"
                >
                  {copiedStates["filter-user-posts"] ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4">
              <div className="flex">
                {/* Line Numbers */}
                <div
                  className="text-[#858585] text-right pr-4 select-none"
                  style={{ minWidth: "2rem" }}
                >
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>

                {/* Code Lines */}
                <div className="flex-1 text-[#d4d4d4]">
                  <div>
                    <span className="text-[#4ec9b0]">fetch</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#ce9178]">
                      'https://mockhub-api.onrender.com/api/users/1/posts?title=example&body=example'
                    </span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">(function(res) {"{"}</span>
                    <span className="text-[#d4d4d4]"> return res.json()</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">
                      (function(data) {"{"}
                    </span>
                    <span className="text-[#d4d4d4]"> console.log(data)</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                    <span className="text-[#d4d4d4]">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-600 max-w-4xl border-l border-l-7 border-blue-600 bg-white rounded-lg p-2">
              This endpoint returns all filtered posts associated with user ID
              1, filtered by the query parameters (title=example and
              body=example).
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div>
          <h1 className="text-2xl font-bold mb-5">🌿 Nested Resources</h1>

          <div className="mb-6">
            <p className="text-gray-700 max-w-4xl">
              MockHub supports simple nested routes to fetch related data.
            </p>
          </div>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden max-w-4xl shadow-lg font-mono text-sm mb-4">
            {/* VSCode Title Bar */}
            <div className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between border-b border-[#3e3e42]">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                </div>
                <span className="text-[#cccccc] text-xs sm:text-sm ml-4">
                  nested-comments.js
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#858585] text-xs">js</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `fetch('https://mockhub-api.onrender.com/api/posts/1/comments')
  .then(res => res.json())
  .then(data => console.log(data));`,
                      "nested-comments"
                    )
                  }
                  className="px-2 py-1 text-xs bg-[#3c3c3c] hover:bg-[#4c4c4c] text-[#cccccc] rounded transition-colors"
                >
                  {copiedStates["nested-comments"] ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4">
              <div className="flex">
                {/* Line Numbers */}
                <div
                  className="text-[#858585] text-right pr-4 select-none"
                  style={{ minWidth: "2rem" }}
                >
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>

                {/* Code Lines */}
                <div className="flex-1 text-[#d4d4d4]">
                  <div>
                    <span className="text-[#4ec9b0]">fetch</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#ce9178]">
                      'https://mockhub-api.onrender.com/api/posts/1/comments'
                    </span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">(function(res) {"{"}</span>
                    <span className="text-[#d4d4d4]"> return res.json()</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">
                      (function(data) {"{"}
                    </span>
                    <span className="text-[#d4d4d4]"> console.log(data)</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                    <span className="text-[#d4d4d4]">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-600 max-w-4xl font-medium">
              This is the same as:
            </p>
          </div>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden max-w-4xl shadow-lg font-mono text-sm">
            {/* VSCode Title Bar */}
            <div className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between border-b border-[#3e3e42]">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                </div>
                <span className="text-[#cccccc] text-xs sm:text-sm ml-4">
                  query-filter.js
                </span>
              </div>
              <span className="text-[#858585] text-xs">js</span>
            </div>

            {/* Code Content */}
            <div className="p-4">
              <div className="flex">
                {/* Line Numbers */}
                <div
                  className="text-[#858585] text-right pr-4 select-none"
                  style={{ minWidth: "2rem" }}
                >
                  <div>1</div>
                </div>

                {/* Code Lines */}
                <div className="flex-1 text-[#d4d4d4]">
                  <div>
                    <span className="text-[#d4d4d4]">
                      /posts?title=example&body=example
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div>
          <h1 className="text-2xl font-bold mb-5">
            🎯 Getting a Single Nested Resource
          </h1>

          <div className="mb-6">
            <p className="text-gray-700 max-w-4xl">
              You can access a specific nested resource using the resource IDs
              in the URL path.
            </p>
            <p className="text-gray-700 max-w-4xl mt-2 font-medium">
              Example: Get a specific comment within a post:
            </p>
          </div>

          <div className="bg-[#1e1e1e] rounded-lg overflow-hidden max-w-4xl shadow-lg font-mono text-sm">
            {/* VSCode Title Bar */}
            <div className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between border-b border-[#3e3e42]">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                </div>
                <span className="text-[#cccccc] text-sm ml-4">
                  single-comment.js
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#858585] text-xs">js</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `fetch('https://mockhub-api.onrender.com/api/posts/1/comments/5')
  .then(res => res.json())
  .then(data => console.log(data));`,
                      "single-comment"
                    )
                  }
                  className="px-2 py-1 text-xs bg-[#3c3c3c] hover:bg-[#4c4c4c] text-[#cccccc] rounded transition-colors"
                >
                  {copiedStates["single-comment"] ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4">
              <div className="flex">
                {/* Line Numbers */}
                <div
                  className="text-[#858585] text-right pr-4 select-none"
                  style={{ minWidth: "2rem" }}
                >
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>

                {/* Code Lines */}
                <div className="flex-1 text-[#d4d4d4]">
                  <div>
                    <span className="text-[#4ec9b0]">fetch</span>
                    <span className="text-[#d4d4d4]">(</span>
                    <span className="text-[#ce9178]">
                      'https://mockhub-api.onrender.com/api/posts/1/comments/5'
                    </span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">(function(res) {"{"}</span>
                    <span className="text-[#d4d4d4]"> return res.json()</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-[#dcdcaa]">.then</span>
                    <span className="text-[#d4d4d4]">
                      (function(data) {"{"}
                    </span>
                    <span className="text-[#d4d4d4]"> console.log(data)</span>
                    <span className="text-[#d4d4d4]"> {"}"}</span>
                    <span className="text-[#d4d4d4]">)</span>
                    <span className="text-[#d4d4d4]">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-600 max-w-4xl border-l border-l-7 border-blue-600 bg-white rounded-lg p-2">
              This endpoint returns a single comment object with the specified
              ID (5) from post ID 1.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 px-10">
        <h1 className="text-xl font-medium">Other available nested routes:</h1>
        <h2 className="mt-5">Method: GET</h2>
        <ul className=" pl-4">
          <li className="list-disc underline">/api/posts/1/comments/5</li>
          <li className="list-disc underline">/api/users/1/todos</li>
          <li className="list-disc underline">/api/users/1/todos/1</li>
          <li className="list-disc underline">/api/users/1/posts</li>
          <li className="list-disc underline">/api/users/1/posts/1</li>
        </ul>

        <h2 className="mt-7">Method: POST</h2>
        <ul className=" pl-4">
          <li className="list-disc underline">/api/posts/1/comments</li>
          <li className="list-disc underline">/api/users/1/todos</li>
          <li className="list-disc underline">/api/users/1/posts</li>
        </ul>

        <h2 className="mt-7">Method: PATCH</h2>
        <ul className=" pl-4">
          <li className="list-disc underline">/api/posts/1/comments/1</li>
          <li className="list-disc underline">/api/users/1/todos/1</li>
          <li className="list-disc underline">/api/users/1/posts/1</li>
        </ul>

        <h2 className="mt-7">Method: PUT</h2>
        <ul className=" pl-4">
          <li className="list-disc underline">/api/posts/1/comments/1</li>
          <li className="list-disc underline">/api/users/1/todos/1</li>
          <li className="list-disc underline">/api/users/1/posts/1</li>
        </ul>

        <h2 className="mt-7">Method: DELETE</h2>
        <ul className=" pl-4">
          <li className="list-disc underline">/api/posts/1/comments/1</li>
          <li className="list-disc underline">/api/users/1/todos/1</li>
          <li className="list-disc underline">/api/users/1/posts/1</li>
        </ul>
      </section>

      <section className="mt-15">
        <div className="flex items-center justify-start gap-2">
          <Sparkles  />
          <h1 className="text-2xl sm:text-3xl font-bold">Getting Started</h1>
        </div>
        <p className="mt-4 mb-8 underline">ApiMocker is a comprehensive fake REST API service perfect for development, testing, and tutorials.</p>

        <div className="space-y-6">
          <div>
          <h2 className="text-blue-500 font-semibold sm:text-2xl text-xl border-b border-gray-300">Base URL</h2>
          <p className="mt-4 bg-white shadow-xs rounded-lg p-4">All API endpoints are available at: https://mockhub-api.onrender.com</p>
        </div>

        <div>
          <h2 className="text-blue-500 font-semibold sm:text-2xl text-xl border-b border-gray-300">Authentication</h2>
          <p className="mt-4 bg-white shadow-xs rounded-lg p-4">MockHub is a public API for testing and development purposes, no authentication required.</p>
        </div>
        </div>
      </section>
    </main>
  );
};

export default GuidePage;
