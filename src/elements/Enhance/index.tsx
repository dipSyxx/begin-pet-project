import React from 'react'
import styles from './EnhanceStyles.module.sass'
import { Typography } from '../Typography'
import { SubTitleLine } from '../SubTitleLine'

export const Enhance = () => {
  return (
    <div className={styles.enhance}>
      <div className={styles.enhance_title}>
        <Typography component="h2" variant="h2" marginBottom="mb-24">
          Enhance your shopping experience with elevated expertise and efficient time constraints.{' '}
        </Typography>
        <SubTitleLine widthGreen={'w_90'} />
      </div>
      <a href="/" target="_blank" className={styles.enhance_play}>
        <i className="fa-solid fa-play" />
      </a>
    </div>
  )
}
