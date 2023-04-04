import React from 'react'
import styles from './IntroStyles.module.sass'
import Link from 'next/link'
import { Typography } from '../Typography'
import { SubTitleLine } from '../SubTitleLine'

export const Intro = () => {
  return (
    <div className={styles.block_intro}>
      <div className={styles.intro}>
        <div className={styles.begin_block}>
          <div className={styles.begin_container}>
            <div className={styles.begin_inner}>
              <div className={styles.begin_title}>
                <Typography colorVariant="green" component="h4" variant="h4">
                  TAGLINE
                </Typography>
                <div className={styles.title_begin}>BEGIN</div>
                <SubTitleLine widthGreen="w_40" />
              </div>
              <div className={styles.begin_text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ibh euismod tincidunt ut laoreet
                dolore magna aliquam erat er adipiscing elit, sed diam nonummy nibh euismod tincidunt
              </div>
            </div>
          </div>
        </div>
        <div className={styles.BEGIN}>BEGIN</div>
        <ul className={styles.socials}>
          <li className={styles.socials_item}>
            <Link target="_blank" href="/">
              <i className="fa-brands fa-instagram" />
            </Link>
          </li>
          <li className={styles.socials_item}>
            <Link target="_blank" href="/">
              <i className="fa-brands fa-twitter" />
            </Link>
          </li>
          <li className={styles.socials_item}>
            <Link target="_blank" href="/">
              <i className="fa-brands fa-facebook-f" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
