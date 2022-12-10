'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}>
      <motion.div className={`flex-1 ${styles.flexCenter}`} variants={planetVariants('left')}>
        <img className='w-[90%] h-[90%] object-contain' src='/get-started.png' alt='get-started' />
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
