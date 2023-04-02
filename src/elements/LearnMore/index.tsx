import React from 'react'
import styles from './LearnMoreStyles.module.sass'
import { Button } from '../Button'
import { Typography } from '../Typography'
import clsx from 'clsx'

export const LearnMore = () => {
  return (
    <div className={styles.learnMore}>
      <div className={styles.container}>
        <div className={styles.learnMore_inner}>
          <div className={clsx(styles.learnMore_item, styles.learnMore_innerImg)}>
            <div className={styles.learnMore_imgHuman}>
              <img src="/learnMore/humanWithPhone.png" alt="human" />
            </div>
          </div>
          <div className={styles.learnMore_imgPlant}>
            <img src="/learnMore/plant.png" alt="plant" />
          </div>
          <div className={styles.learnMore_item}>
            <div className={styles.learnMore_info}>
              <Typography component="p" variant="subtitle2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulpuLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con
              </Typography>
            </div>
            <div className={styles.learnMore_btn}>
              <Button component="button" variant="whiteButton" classNameStyles="button">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
