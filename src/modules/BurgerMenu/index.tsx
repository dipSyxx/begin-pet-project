import clsx from 'clsx'
import React, { useContext, useState } from 'react'
import styles from './BurgerMenuStyles.module.sass'
import { HeaderLinks, HeaderLinksProps } from 'src/data/HeaderLinks'
import { Button } from 'src/elements/Button'
import { Link } from 'react-scroll'
import { Typography } from 'src/elements/Typography'
import { ThemeContext } from 'src/pages'

type BurgerMenuProps = {
  openBurgerMenu: boolean
  setOpenBurgerMenu: (isOpenBurgerMenu: boolean) => void
}

export const BurgerMenu = ({ openBurgerMenu, setOpenBurgerMenu }: BurgerMenuProps) => {
  const { theme } = useContext(ThemeContext)

  const handleCloseBurgerMenu = () => {
    setOpenBurgerMenu(false)
  }
  return (
    <>
      <div
        className={clsx(styles.burger_holder, openBurgerMenu ? styles.show_burger : '')}
        onClick={handleCloseBurgerMenu}
      ></div>

      <div
        className={clsx(
          styles.burger_window,
          openBurgerMenu ? styles.burger_window_show : '',
          theme ? styles.burger_window_light : '',
        )}
      >
        <div className={styles.close_button}>
          <Button
            onClick={handleCloseBurgerMenu}
            component="button"
            variant={theme ? 'blackX' : 'withoutBg'}
            classNameStyles="button"
          >
            <i className="fa-solid fa-x"></i>
          </Button>
        </div>
        <h1 className={clsx(styles.burger_title, theme ? styles.burger_title_light : '')}>Menu</h1>
        <nav className={styles.nav_menu}>
          <ul className={styles.menu_links}>
            {HeaderLinks.map(({ id, name, href }: HeaderLinksProps) => (
              <li key={id} className={clsx(styles.link_item, theme ? styles.link_item_light : '')}>
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
