import React, { useContext } from 'react'
import styles from './EnhanceStyles.module.sass'
import { MTypography, Typography } from '../Typography'
import { MSubTitleLine, SubTitleLine } from '../SubTitleLine'
import { ThemeContext } from 'src/pages'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export const Enhance = () => {
  const { theme } = useContext(ThemeContext)

  const playAnimations = {
    hidden: {
      scale: 0,
      rotate: 0,
    },
    visible: {
      scale: 1,
      rotate: 360,
      transition: { type: 'spring', stiffness: 200, damping: 20, delay: 0.3 },
    },
  }

  const textAnimations = {
    hidden: {
      y: 150,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className={clsx(styles.enhance, theme ? styles.enhance_light : '')}
    >
      <div className={styles.enhance_title}>
        <MTypography variants={textAnimations} custom={1} component="h2" variant="h2" marginBottom="mb-24">
          Enhance your shopping experience with elevated expertise and efficient time constraints.
        </MTypography>
        <MSubTitleLine variants={textAnimations} custom={4} widthGreen={'w_90'} />
      </div>
      <motion.a variants={playAnimations} href="/" target="_blank" className={styles.enhance_play}>
        <i className="fa-solid fa-play" />
      </motion.a>
    </motion.div>
  )
}
