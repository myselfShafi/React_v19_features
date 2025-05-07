import { type JSX } from 'react';

type FeatureCardProps = {
    title: string;
    description: string;
    demo?: string
}

const FeatureCard = ({ title, description, demo }: FeatureCardProps): JSX.Element => {
  return (
    <div className="container font-primary font-bold bg-white p-6 rounded-2xl shadow-md border border-gray-200">
    <h1 className="mb-4">{title}</h1>
    <h2 className="font-bold mb-4">{title}</h2>
    <h3 className="font-bold mb-4">{description}</h3>
    <p className="mb-4">{description}</p>
    {demo}
    </div>
  )
}

export default FeatureCard;