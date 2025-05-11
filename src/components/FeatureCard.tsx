import { type JSX } from 'react';

type FeatureCardProps = {
    title: string;
    description: string;
    demo?: string
}

const FeatureCard = ({ title, description, demo }: FeatureCardProps): JSX.Element => {
  return (
    <div className="w-full max-w-lg mx-auto bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out p-5 space-y-5">
      <div className="space-y-2">
        <h2 className="text-xl font-extrabold text-slate-800">{title}</h2>
        <p className="text-slate-600 leading-relaxed">{description}</p>
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