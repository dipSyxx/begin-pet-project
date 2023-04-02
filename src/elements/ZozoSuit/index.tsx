import React from 'react'
import styles from './ZozoSuitStyles.module.sass'
import { Typography } from '../Typography'

export const ZozoSuit = () => {
  return (
    <div className={styles.zozoSuit}>
      <div className={styles.container}>
        <div className={styles.zozoSuit_inner}>
          <div className={styles.zozoSuit_item}>
            <div className={styles.zozoSuit_img}>
              <img src="/zozosuit/zozosuit.png" alt="zozosuit" />
            </div>
          </div>
          <div className={styles.zozoSuit_item}>
            <div className={styles.zozoSuit_info}>
              <Typography component="p" variant="subtitle1">
                In collaboration with ZOZOSUIT, our mirror will also provide a highly accurate replica of the user’s
                body via scanning and image processing. Through this, we will also be able to provide motion tracking
                for the user-customized metahuman in real time, making the experience incredibly realistic provided the
                mirror will be touch screen and interactive.
              </Typography>
            </div>
          </div>
        </div>
        <div className={styles.zozoSuit_line_block}>
          <div className={styles.zozoSuit_line} />
          <h3 className={styles.zozoSuit_line_text}>ZOZOSUIT</h3>
        </div>
      </div>
    </div>
  )
}
