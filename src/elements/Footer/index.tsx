import React from 'react'
import styles from './FooterStyles.module.sass'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_block}>
          <div className={styles.logo}>
            <div className={styles.logo_triangle}>
              <i className="fa-solid fa-play" />
            </div>
            <Link href="/" className={styles.logo_title}>
              BEGIN
            </Link>
          </div>
          <ul className={styles.footer_socials}>
            <li className={styles.footer_social}>
              <Link target="_blank" href="/">
                <i className="fa-brands fa-facebook-f" />
              </Link>
            </li>
            <li className={styles.footer_social}>
              <Link target="_blank" href="/">
                <i className="fa-brands fa-twitter" />
              </Link>
            </li>
            <li className={styles.footer_social}>
              <Link target="_blank" href="/">
                <i className="fa-brands fa-instagram" />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.reserved}>
          <Link href="/" className={styles.all_reserved}>
            <span className={styles.c}>©</span> All Rights Reserved
          </Link>
          <div className={styles.terms_block}>
            <Link href="/" className={styles.terms_conditions}>
              Terms and Conditions
            </Link>
            <span className={styles.terms_dot}>·</span>
            <Link href="/" className={styles.privacy}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
