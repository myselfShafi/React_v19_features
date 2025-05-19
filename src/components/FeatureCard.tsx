import { type HTMLAttributes, type JSX } from 'react';

type FeatureCardProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    description: string;
    demo?: string;
    isExpanded?: boolean;
}

const FeatureCard = ({ title, description, demo, isExpanded = false, ...rest }: FeatureCardProps): JSX.Element => {
  return (
    <div className={`w-full max-w-lg mx-auto bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out p-5 space-y-5 hover:cursor-pointer ${isExpanded ? "ring-2 ring-red-500" : ""}`} {...rest}>
      <div className="space-y-2">
        <h3 className="text-slate-800">{title}</h3>
        <p>{description}</p>
      </div>
      {demo && (
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 text-sm text-slate-700">
          {demo}
        </div>
      )}
    </div>
  )
}

export default FeatureCard;