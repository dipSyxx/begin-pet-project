/* eslint-disable react/display-name */
import { FC, forwardRef } from 'react'
import React from 'react'
import styles from './SubTitleStyles.module.sass'
import clsx from 'clsx'
import { motion } from 'framer-motion'

type SubTitleLineProps = {
  widthGreen: 'w_157' | 'w_90' | 'w_80' | 'w_40'
  widthGray?: 'w_90' | 'w_50' | 'w_40'
}

export const SubTitleLine = forwardRef<HTMLDivElement, SubTitleLineProps>(({ widthGreen, widthGray }, ref) => {
  return (
    <>
      <div className={styles.subtitleline} ref={ref}>
        <div className={styles.subtitleline_block}>
          <div className={clsx(styles.subtitleline_green, styles[widthGreen])}></div>
          <div className={clsx(styles.subtitleline_gray, styles[widthGray || ''])}></div>
        </div>
      </div>
    </>
  )
})

export const MSubTitleLine = motion(SubTitleLine)
