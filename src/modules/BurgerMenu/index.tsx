import clsx from 'clsx'
import React, { useState } from 'react'
import styles from './BurgerMenuStyles.module.sass'
import { HeaderLinks, HeaderLinksProps } from 'src/data/HeaderLinks'
import { Button } from 'src/elements/Button'
import { Link } from 'react-scroll'
import { Typography } from 'src/elements/Typography'

type BurgerMenuProps = {
  openBurgerMenu: boolean
  setOpenBurgerMenu: (isOpenBurgerMenu: boolean) => void
}

export const BurgerMenu = ({ openBurgerMenu, setOpenBurgerMenu }: BurgerMenuProps) => {
  const handleCloseBurgerMenu = () => {
    setOpenBurgerMenu(false)
  }
  return (
    <>
      <div
        className={clsx(styles.burger_holder, openBurgerMenu ? styles.show_burger : '')}
        onClick={handleCloseBurgerMenu}
      ></div>

      <div className={clsx(styles.burger_window, openBurgerMenu ? styles.burger_window_show : '')}>
        <div className={styles.close_button}>
          <Button onClick={handleCloseBurgerMenu} component="button" variant="withoutBg" classNameStyles="button">
            <i className="fa-solid fa-x"></i>
          </Button>
        </div>
        <h1 className={styles.burger_title}>Menu</h1>
        <nav className={styles.nav_menu}>
          <ul className={styles.menu_links}>
            {HeaderLinks.map(({ id, name, href }: HeaderLinksProps) => (
              <li key={id} className={styles.link_item}>
                <Link
                  onClick={handleCloseBurgerMenu}
                  activeClass={styles.activeLink}
                  to={href}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
