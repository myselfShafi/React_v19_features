import { type JSX } from 'react';

type FeatureCardProps = {
    title: string;
    description: string;
    demo?: string
}

const FeatureCard = ({ title, description, demo }: FeatureCardProps): JSX.Element => {
  return (
    <div className="container bg-white p-6 rounded-2xl shadow-md border border-gray-200">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <h3 className="text-xl font-bold mb-4">{description}</h3>
    {demo}
    </div>
  )
}

export default FeatureCard;