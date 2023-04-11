import React, { useContext } from 'react'
import styles from './EnhanceStyles.module.sass'
import { Typography } from '../Typography'
import { SubTitleLine } from '../SubTitleLine'
import { ThemeContext } from 'src/pages'
import clsx from 'clsx'

export const Enhance = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={clsx(styles.enhance, theme ? styles.enhance_light : '')}>
      <div className={styles.enhance_title}>
        <Typography component="h2" variant="h2" marginBottom="mb-24">
          Enhance your shopping experience with elevated expertise and efficient time constraints.
        </Typography>
        <SubTitleLine widthGreen={'w_90'} />
      </div>
      <a href="/" target="_blank" className={styles.enhance_play}>
        <i className="fa-solid fa-play" />
      </a>
    </div>
  )
}
