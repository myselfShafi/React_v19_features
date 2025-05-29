import { AnimatePresence, motion, type MotionProps } from 'motion/react';
import { type HTMLAttributes, type JSX } from 'react';
import ContentCard from './ContentCard';

type FeatureCardProps = HTMLAttributes<HTMLDivElement> & MotionProps & {
    title: string;
    description: string;
    demo?: string;
    isExpanded?: boolean;
}

const FeatureCard = ({ title, description, demo, isExpanded = false, ...rest }: FeatureCardProps): JSX.Element => {
  return (
    // <div className={`w-full max-w-lg mx-auto text-aqua-700 dark:text-aqua-100 rounded-2xl shadow-aqua-300 dark:shadow-aqua-600 transition-all duration-300 ease-in-out p-5 space-y-5 hover:cursor-pointer ${isExpanded ? "shadow-xl col-span-full order-first" : "hover:shadow-xl"}`} {...rest}>
    //   <div className="space-y-2">
    //     <h3 className="uppercase tracking-wider">{title}</h3>
    //     <p className='text-aqua-600 dark:text-aqua-200'>{description}</p>
    //   </div>
    //   {demo && (
    //     <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 text-sm text-slate-700">
    //       {demo}
    //     </div>
    //   )}
    // </div>
       <motion.div 
       layout
       transition={{ layout: { duration: 1.0, type: 'spring' } }}
       className={`w-full max-w-11/12 sm:max-w-4/5 mx-auto text-aqua-700 dark:text-aqua-100 rounded-2xl shadow-aqua-300 dark:shadow-aqua-600 transition-all duration-300 ease-in-out space-y-5 hover:cursor-pointer ${isExpanded ? "shadow-xl col-span-full order-first" : "hover:shadow-xl"}`} {...rest}>
      <motion.div layout className="space-y-2">
        <motion.h3 layout className="uppercase tracking-wider">{title}</motion.h3>
        <p className='text-aqua-600 dark:text-aqua-200'>{description}</p>
      </motion.div>
      {demo && (
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 text-sm text-slate-700">
          {demo}
        </div>
      )}
      <AnimatePresence>
      {isExpanded && ( 
      <motion.div className="col-span-full">
        <ContentCard content="aasdsa" />
      </motion.div>
      )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FeatureCard;