import React, { useContext } from 'react'
import styles from './BeginStyles.module.sass'
import { MTypography, Typography } from '../Typography'
import { MSubTitleLine, SubTitleLine } from '../SubTitleLine'
import { ThemeContext } from 'src/pages'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export const Begin = () => {
  const { theme } = useContext(ThemeContext)

  const scaleAnimations = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: custom * 0.3 },
      scale: 1,
    }),
  }

  const lineAnimations = {
    hidden: {
      x: 500,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  }

  const typographyAnimations = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  }

  return (
    <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" className={styles.begin} id="whyBegin">
      <div className={styles.container}>
        <div className={styles.begin_inner}>
          <motion.div variants={scaleAnimations} custom={2} className={styles.begin_img}>
            <img src="/begin/begin.png" alt="BEGIN" />
          </motion.div>
          <div className={styles.begin_block}>
            <div className={styles.begin_content_title}>
              <MTypography
                variants={scaleAnimations}
                custom={2}
                variant="h1"
                marginBottom="mb-8"
                colorVariant={theme ? 'black' : ''}
              >
                EVERYTHING YOU NEED!
              </MTypography>
              <MSubTitleLine variants={lineAnimations} custom={3} widthGreen={'w_157'} widthGray={'w_90'} />
            </div>

            <ul className={styles.begin_items}>
              <li className={styles.begin_item}>
                <motion.div
                  variants={lineAnimations}
                  custom={3.2}
                  className={clsx(styles.begin_content_icon, theme ? styles.begin_content_icon_light : '')}
                >
                  <img src="/begin/icon1.png" alt="icon" />
                </motion.div>
                <div className={styles.begin_content}>
                  <MTypography
                    variants={typographyAnimations}
                    custom={3.8}
                    component="h3"
                    variant="subtitle1"
                    colorVariant={theme ? 'black' : ''}
                  >
                    Body measurement tracking
                  </MTypography>
                  <MTypography
                    variants={typographyAnimations}
                    custom={3.8}
                    component="p"
                    variant="subtitle2"
                    colorVariant={theme ? 'black' : ''}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi
                  </MTypography>
                </div>
              </li>

              <li className={styles.begin_item}>
                <motion.div
                  variants={lineAnimations}
                  custom={3.4}
                  className={clsx(styles.begin_content_icon, theme ? styles.begin_content_icon_light : '')}
                >
                  <img src="/begin/icon2.png" alt="icon" />
                </motion.div>
                <div className={styles.begin_content}>
                  <MTypography
                    variants={typographyAnimations}
                    custom={4}
                    component="h3"
                    variant="subtitle1"
                    colorVariant={theme ? 'black' : ''}
                  >
                    Body measurement tracking
                  </MTypography>
                  <MTypography
                    variants={typographyAnimations}
                    custom={4}
                    component="p"
                    variant="subtitle2"
                    colorVariant={theme ? 'black' : ''}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi
                  </MTypography>
                </div>
              </li>

              <li className={styles.begin_item}>
                <motion.div
                  variants={lineAnimations}
                  custom={3.6}
                  className={clsx(styles.begin_content_icon, theme ? styles.begin_content_icon_light : '')}
                >
                  <img src="/begin/icon3.png" alt="icon" />
                </motion.div>
                <div className={styles.begin_content}>
                  <MTypography
                    variants={typographyAnimations}
                    custom={4.2}
                    component="h3"
                    variant="subtitle1"
                    colorVariant={theme ? 'black' : ''}
                  >
                    Body measurement tracking
                  </MTypography>
                  <MTypography
                    variants={typographyAnimations}
                    custom={4.2}
                    component="p"
                    variant="subtitle2"
                    colorVariant={theme ? 'black' : ''}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi
                  </MTypography>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
