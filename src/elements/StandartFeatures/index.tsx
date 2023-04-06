import React from 'react'
import styles from './StandartFeatures.module.sass'
import { Typography } from '../Typography'
import { SubTitleLine } from '../SubTitleLine'
import { CustomAccordion } from '../HardwareAccordion/HardwareAccordion'
import { HardwareAccordionData, HardwareAccordionDataProps } from 'src/data/HardwareAccordion'

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
          {HardwareAccordionData.map(({ id, title, title_text, text, icon }: HardwareAccordionDataProps) => (
            <CustomAccordion key={id} title={title} title_text={title_text} text={text} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  )
}
