import React, { useContext } from 'react'
import styles from './StandartFeatures.module.sass'
import { MTypography, Typography } from '../Typography'
import { MSubTitleLine, SubTitleLine } from '../SubTitleLine'
import { CustomAccordion, MCustomAccordion } from '../HardwareAccordion/HardwareAccordion'
import { HardwareAccordionData, HardwareAccordionDataProps } from 'src/data/HardwareAccordion'
import { ThemeContext } from 'src/pages'
import { motion } from 'framer-motion'

export const StandartFeatures = () => {
  const { theme } = useContext(ThemeContext)

  const textAnimations = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  }

  const accordionAnimations = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  }

  return (
    <motion.div
      viewport={{ once: true, amount: 0.4 }}
      initial="hidden"
      whileInView="visible"
      className={styles.standartFeatures}
      id="features"
    >
      <div className={styles.container}>
        <div className={styles.standartFeatures_title}>
          <MTypography
            variants={textAnimations}
            custom={1}
            component="h3"
            variant="h3"
            marginBottom="mb-36"
            colorVariant={theme ? 'black' : ''}
          >
            Standart Features
          </MTypography>
          <MSubTitleLine variants={textAnimations} custom={4} widthGreen={'w_40'} />
        </div>
        <div className={styles.Hardware}>
          {HardwareAccordionData.map(({ id, title, title_text, text, icon, index }: HardwareAccordionDataProps) => (
            <MCustomAccordion
              variants={accordionAnimations}
              custom={index}
              key={id}
              title={title}
              title_text={title_text}
              text={text}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
