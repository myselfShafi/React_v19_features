import { FeatureCard, ThemeButton } from "./components";
import { v19Features } from "./configs/v19.config";
import "./index.css";

function App() {
  return (
    <div className="relative p-5 min-h-screen bg-aqua-200 dark:bg-aqua-700">
      <ThemeButton />
      <h1 className="text-center text-aqua-900 dark:text-aqua-100">React version.19</h1>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        v19Features.map(feature => <FeatureCard key={feature.title} title={feature.title} description={feature.desc} demo="sfsafasfsaf" />)
      }
      </div>
    </div>
  )
}

export default App