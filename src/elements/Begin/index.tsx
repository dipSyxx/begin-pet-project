import React from 'react'
import styles from './BeginStyles.module.sass'
import Image from 'next/image'
import { Typography } from '../Typography'
import { SubTitleLine } from '../SubTitleLine'

export const Begin = () => {
  return (
    <div className={styles.begin}>
      <div className={styles.container}>
        <div className={styles.begin_inner}>
          <div className={styles.begin_img}>
            <img src="/begin/begin.png" alt="BEGIN" />
          </div>
          <div className={styles.begin_block}>
            <div className={styles.begin_content_title}>
              <Typography variant="h1" marginBottom="mb-8">
                EVERYTHING YOU NEED!
              </Typography>
              <SubTitleLine widthGreen={'w_157'} widthGray={'w_90'} />
            </div>

            <ul className={styles.begin_items}>
              <li className={styles.begin_item}>
                <div className={styles.begin_content_icon}>
                  <img src="/begin/icon1.png" alt="icon" />
                </div>
                <div className={styles.begin_content}>
                  <Typography component="h3" variant="subtitle1">
                    Body measurement tracking
                  </Typography>
                  <Typography component="p" variant="subtitle2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi
                  </Typography>
                </div>
              </li>

              <li className={styles.begin_item}>
                <div className={styles.begin_content_icon}>
                  <img src="/begin/icon2.png" alt="icon" />
                </div>
                <div className={styles.begin_content}>
                  <Typography component="h3" variant="subtitle1">
                    Body measurement tracking
                  </Typography>
                  <Typography component="p" variant="subtitle2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi
                  </Typography>
                </div>
              </li>

              <li className={styles.begin_item}>
                <div className={styles.begin_content_icon}>
                  <img src="/begin/icon3.png" alt="icon" />
                </div>
                <div className={styles.begin_content}>
                  <Typography component="h3" variant="subtitle1">
                    Body measurement tracking
                  </Typography>
                  <Typography component="p" variant="subtitle2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi
                  </Typography>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
