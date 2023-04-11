import React, { useContext } from 'react'
import styles from './BeginStyles.module.sass'
import { Typography } from '../Typography'
import { SubTitleLine } from '../SubTitleLine'
import { ThemeContext } from 'src/pages'
import clsx from 'clsx'

export const Begin = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.begin} id="whyBegin">
      <div className={styles.container}>
        <div className={styles.begin_inner}>
          <div className={styles.begin_img}>
            <img src="/begin/begin.png" alt="BEGIN" />
          </div>
          <div className={styles.begin_block}>
            <div className={styles.begin_content_title}>
              <Typography variant="h1" marginBottom="mb-8" colorVariant={theme ? 'black' : ''}>
                EVERYTHING YOU NEED!
              </Typography>
              <SubTitleLine widthGreen={'w_157'} widthGray={'w_90'} />
            </div>

            <ul className={styles.begin_items}>
              <li className={styles.begin_item}>
                <div className={clsx(styles.begin_content_icon, theme ? styles.begin_content_icon_light : '')}>
                  <img src="/begin/icon1.png" alt="icon" />
                </div>
                <div className={styles.begin_content}>
                  <Typography component="h3" variant="subtitle1" colorVariant={theme ? 'black' : ''}>
                    Body measurement tracking
                  </Typography>
                  <Typography component="p" variant="subtitle2" colorVariant={theme ? 'black' : ''}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi
                  </Typography>
                </div>
              </li>

              <li className={styles.begin_item}>
                <div className={clsx(styles.begin_content_icon, theme ? styles.begin_content_icon_light : '')}>
                  <img src="/begin/icon2.png" alt="icon" />
                </div>
                <div className={styles.begin_content}>
                  <Typography component="h3" variant="subtitle1" colorVariant={theme ? 'black' : ''}>
                    Body measurement tracking
                  </Typography>
                  <Typography component="p" variant="subtitle2" colorVariant={theme ? 'black' : ''}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi
                  </Typography>
                </div>
              </li>

              <li className={styles.begin_item}>
                <div className={clsx(styles.begin_content_icon, theme ? styles.begin_content_icon_light : '')}>
                  <img src="/begin/icon3.png" alt="icon" />
                </div>
                <div className={styles.begin_content}>
                  <Typography component="h3" variant="subtitle1" colorVariant={theme ? 'black' : ''}>
                    Body measurement tracking
                  </Typography>
                  <Typography component="p" variant="subtitle2" colorVariant={theme ? 'black' : ''}>
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
