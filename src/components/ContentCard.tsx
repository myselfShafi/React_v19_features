import { useState, type HTMLAttributes, type JSX } from 'react';

type ContentCardProps = HTMLAttributes<HTMLDivElement> & {
    content: string;
}

const ContentCard = ({ content, ...rest }: ContentCardProps): JSX.Element => {
const [tab, setTab] = useState<"code" | "preview">("code");

  return (
    <div className="w-full rounded-2xl border border-gray-200 shadow-md bg-white overflow-hidden transition-all" {...rest}>
      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h3 className="text-xl font-semibold">Expanded View</h3>
      </div>

      {/* Tab Buttons */}
      <div className="flex border-b text-sm font-medium">
        <button
          onClick={() => setTab("code")}
          className={`flex-1 py-2 transition ${
            tab === "code"
              ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
              : "hover:bg-gray-100 text-gray-600"
          }`}
        >
          Code
        </button>
        <button
          onClick={() => setTab("preview")}
          className={`flex-1 py-2 transition ${
            tab === "preview"
              ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
              : "hover:bg-gray-100 text-gray-600"
          }`}
        >
          Preview
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4 transition-all">
        {tab === "code" ? (
          <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded-md overflow-x-auto">
            {`
            function greet(name) {
              return "Hello, " + name;
            };
            
            console.log(greet("World"));
            `}
          </pre>
        ) : (
          <div className="border-dashed border border-gray-300 bg-gray-50 p-6 rounded-md text-center text-gray-500">
            🔧 <span className="font-medium">Preview mode</span> — Render your interactive UI or output here.
          </div>
        )}
      </div>

      {/* Footer / Description */}
      <div className="bg-white border-t px-4 py-3 text-gray-700">
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}

export default ContentCard;