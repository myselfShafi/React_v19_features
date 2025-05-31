import { AnimatePresence, motion, type MotionProps } from 'motion/react';
import { type HTMLAttributes, type JSX } from 'react';
import ContentCard from './ContentCard';

type FeatureCardProps = HTMLAttributes<HTMLDivElement> & MotionProps & {
    cId: number;
    title: string;
    description: string;
    demo?: string;
    isExpanded?: boolean;
}

const FeatureCard = ({ cId, title, description, demo, isExpanded = false, ...rest }: FeatureCardProps): JSX.Element => {
  return (
       <motion.div
       layoutId={`card-${cId}`}
       className={`w-full p-5 mx-auto text-aqua-700 dark:text-aqua-100 rounded-2xl shadow-aqua-300 dark:shadow-aqua-600 transition-all duration-300 ease-in-out space-y-5 hover:cursor-pointer ${isExpanded ? "shadow-xl col-span-full order-first" : "hover:shadow-xl"}`} 
       {...rest}>
      <div className="space-y-2">
        <h3 className="uppercase tracking-wider">{title}</h3>
        <p className='text-aqua-600 dark:text-aqua-200'>{description}</p>
      </div>
      {demo && (
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 text-sm text-slate-700">
          {demo}
        </div>
      )}
      <AnimatePresence>
      {isExpanded && ( 
      <div className="col-span-full">
        <ContentCard content="aasdsa" />
      </div>
      )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FeatureCard;