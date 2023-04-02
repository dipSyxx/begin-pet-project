import React from 'react'
import styles from './SubTitleStyles.module.sass'
import clsx from 'clsx'

type SubTitleLineProps = {
  widthGreen: 'w_157' | 'w_90' | 'w_80' | 'w_40'
  widthGray?: 'w_90' | 'w_50' | 'w_40'
}

export const SubTitleLine = ({ widthGreen, widthGray }: SubTitleLineProps) => {
  return (
    <div className={styles.subtitleline}>
      <div className={styles.subtitleline_block}>
        <div className={clsx(styles.subtitleline_green, styles[widthGreen])}></div>
        <div className={clsx(styles.subtitleline_gray, styles[widthGray || ''])}></div>
      </div>
    </div>
  )
}
