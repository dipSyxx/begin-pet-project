import React, { useContext } from 'react'
import styles from './HowItStyles.module.sass'
import { MTypography, Typography } from '../Typography'
import { MSubTitleLine, SubTitleLine } from '../SubTitleLine'
import { Button, MButton } from '../Button'
import { ThemeContext } from 'src/pages'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export const UserCom = () => {
  const { theme } = useContext(ThemeContext)

  const textAnimations = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  }

  const cardAnimations = {
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      className={clsx(styles.userCom, theme ? styles.userCom_light : '')}
    >
      <div className={styles.container}>
        <div className={styles.userCom_title}>
          <MTypography variants={textAnimations} custom={1} component="h3" variant="h3" marginBottom="mb-24">
            How it is useful for user and companies
          </MTypography>
          <MSubTitleLine variants={textAnimations} custom={4} widthGreen="w_40" />
        </div>
        <ul className={styles.card_items}>
          <motion.li variants={cardAnimations} custom={1} className={styles.card_item}>
            <div className={styles.card_title}>
              <Typography component="h4" variant="subtitle1">
                Lorem Ipsum
              </Typography>
              <span className={styles.title_arrow}>
                <i className="fa-solid fa-chevron-right" />
              </span>
            </div>
            <div className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi
            </div>
          </motion.li>

          <motion.li variants={cardAnimations} custom={2} className={styles.card_item}>
            <div className={styles.card_title}>
              <Typography component="h4" variant="subtitle1">
                Lorem Ipsum
              </Typography>
              <span className={styles.title_arrow}>
                <i className="fa-solid fa-chevron-right" />
              </span>
            </div>
            <div className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi
            </div>
          </motion.li>

          <motion.li variants={cardAnimations} custom={3} className={styles.card_item}>
            <div className={styles.card_title}>
              <Typography component="h4" variant="subtitle1">
                Lorem Ipsum
              </Typography>
              <span className={styles.title_arrow}>
                <i className="fa-solid fa-chevron-right" />
              </span>
            </div>
            <div className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi
            </div>
          </motion.li>
        </ul>
        <div className={styles.userCom_button}>
          <MButton
            variants={textAnimations}
            custom={2}
            component="button"
            variant={theme ? 'blackButton' : 'whiteButton'}
            classNameStyles="button"
          >
            LEARN MORE
          </MButton>
        </div>
      </div>
    </motion.div>
  )
}
