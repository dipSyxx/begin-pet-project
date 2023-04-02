import React from 'react'
import styles from './IntroStyles.module.sass'
import Link from 'next/link'

export const Intro = () => {
  return (
    <div className={styles.block_intro}>
      <div className={styles.intro}>
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
