import React from 'react'
import styles from './StandartFeatures.module.sass'
import { Typography } from '../Typography'
import { SubTitleLine } from '../SubTitleLine'
import { CustomAccordion } from '../HardwareAccordion/HardwareAccordion'

export const StandartFeatures = () => {
  return (
    <div className={styles.standartFeatures}>
      <div className={styles.container}>
        <div className={styles.standartFeatures_title}>
          <Typography component="h3" variant="h3" marginBottom="mb-36">
            Standart Features
          </Typography>
          <SubTitleLine widthGreen={'w_40'} />
        </div>
        <div className={styles.Hardware}>
          <CustomAccordion />
          <CustomAccordion />
          <CustomAccordion />
          <CustomAccordion />
          <CustomAccordion />
        </div>
      </div>
    </div>
  )
}
