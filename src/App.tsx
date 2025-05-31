import { motion } from "motion/react";
import { useState } from "react";
import { FeatureCard, ThemeButton } from "./components";
import { v19Features } from "./configs/v19.config";
import "./index.css";

function App() {
  const [featIndex, setFeatIndex] = useState<number | null>(null);
  return (
    <div className="relative sm:p-5 min-h-screen bg-aqua-200 dark:bg-aqua-700">
      <ThemeButton />
      <h1 className="text-center text-aqua-700 dark:text-aqua-100 tracking-wide">React version.19</h1>
      <motion.div layout className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          v19Features.map((feature, index) =>
              <FeatureCard
                key={feature.id}
                cId={feature.id}
                title={feature.title}
                description={feature.desc}
                onClick={() => setFeatIndex(prev => (prev === index ? null : index))}
                isExpanded={featIndex === index && !!feature.element}
              />)
        }
      </motion.div>
    </div>
  )
}

export default App