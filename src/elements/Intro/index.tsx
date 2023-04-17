import React from 'react'
import styles from './IntroStyles.module.sass'
import Link from 'next/link'
import { MTypography, Typography } from '../Typography'
import { MSubTitleLine, SubTitleLine } from '../SubTitleLine'
import { motion } from 'framer-motion'

export const Intro = () => {
  const textAnimations = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  }

  return (
    <motion.div initial="hidden" whileInView="visible" className={styles.block_intro}>
      <div className={styles.intro}>
        <div className={styles.begin_block}>
          <div className={styles.begin_container}>
            <div className={styles.begin_inner}>
              <div className={styles.begin_title}>
                <MTypography variants={textAnimations} custom={0.5} colorVariant="green" component="h4" variant="h4">
                  TAGLINE
                </MTypography>
                <motion.div variants={textAnimations} custom={1.3} className={styles.title_begin}>
                  BEGIN
                </motion.div>
                <MSubTitleLine variants={textAnimations} custom={1.6} widthGreen="w_40" />
              </div>
              <motion.div variants={textAnimations} custom={1.9} className={styles.begin_text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ibh euismod tincidunt ut laoreet
                dolore magna aliquam erat er adipiscing elit, sed diam nonummy nibh euismod tincidunt
              </motion.div>
            </div>
          </div>
        </div>
        <div className={styles.BEGIN}>BEGIN</div>
        <ul className={styles.socials}>
          <motion.li
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }}
            className={styles.socials_item}
          >
            <Link target="_blank" href="/">
              <i className="fa-brands fa-instagram" />
            </Link>
          </motion.li>
          <motion.li
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }}
            className={styles.socials_item}
          >
            <Link target="_blank" href="/">
              <i className="fa-brands fa-twitter" />
            </Link>
          </motion.li>
          <motion.li
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }}
            className={styles.socials_item}
          >
            <Link target="_blank" href="/">
              <i className="fa-brands fa-facebook-f" />
            </Link>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  )
}
