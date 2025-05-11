import { FeatureCard } from "./components";
import { v19Features } from "./configs/v19.config";
import "./index.css";

function App() {

  return (
    <div className="bg-blue-50 min-h-screen w-full">
      <div className="p-5">
        <h1 className="font-extrabold text-center">React version.19</h1>
        <div className="h-100 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          v19Features.map(feature => <FeatureCard title={feature.title} description={feature.desc} demo="sfsafasfsaf" />)
        }
        </div>
      </div>
    </div>
  )
}

export default App