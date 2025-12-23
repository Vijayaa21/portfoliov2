import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = React.forwardRef(({ children, id }, ref) => {
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="h-full w-full overflow-y-auto px-6 lg:px-20 py-12 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600"
    >
      <div className="max-w-6xl mx-auto min-h-full flex flex-col justify-center">
        {children}
      </div>
    </motion.section>
  );
});

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;
