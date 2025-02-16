import React from "react";
import { FaPlug } from "react-icons/fa";

const APIPlugin = () => {
  return (
    <>
      {/* SDKs & Plugins */}
      <div id="api-plugins" className="mt-16 text-left">
        <h3 className="text-2xl font-semibold text-white">SDKs & Plugins</h3>
        <p className="mt-4 text-gray-300">
          Speed up development with our SDKs and plugins for major programming
          languages.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <FaPlug className="text-yellow-500 text-3xl mb-3" />
            <h4 className="text-lg font-semibold">Node.js SDK</h4>
            <p className="text-gray-300 mt-2">
              Install via npm: <code>npm install xpenda-sdk</code>
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <FaPlug className="text-pink-500 text-3xl mb-3" />
            <h4 className="text-lg font-semibold">Python SDK</h4>
            <p className="text-gray-300 mt-2">
              Install via pip: <code>pip install xpenda-sdk</code>
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <FaPlug className="text-purple-500 text-3xl mb-3" />
            <h4 className="text-lg font-semibold">PHP SDK</h4>
            <p className="text-gray-300 mt-2">
              Install via composer: <code>composer require xpenda/sdk</code>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default APIPlugin;
