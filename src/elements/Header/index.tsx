import React, { useContext, useState } from 'react'
import styles from './HeaderStyles.module.sass'
import { HeaderActions } from '../HeaderActions'
import { HeaderLinks, HeaderLinksProps } from 'src/data/HeaderLinks'
import { Button } from '../Button'
import { BurgerMenu } from 'src/modules/BurgerMenu'
import { Link } from 'react-scroll'
import { ThemeContext } from 'src/pages'
import clsx from 'clsx'

export const Header = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

  const handleOpenBurgerMenu = () => {
    setOpenBurgerMenu(true)
  }

  const { theme } = useContext(ThemeContext)

  return (
    <>
      <BurgerMenu openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={setOpenBurgerMenu} />
      <header className={clsx(styles.header, theme ? styles.header_light : '')}>
        <div className={clsx(styles.container, theme ? styles.container_light : '')}>
          <nav className={styles.nav_menu}>
            <ul className={styles.menu_links}>
              {HeaderLinks.map(({ id, name, href }: HeaderLinksProps) => (
                <li key={id} className={clsx(styles.link_item, theme ? styles.link_item_light : '')}>
                  <Link activeClass={styles.activeLink} to={href} spy={true} smooth={true} offset={-150} duration={600}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.nav_menu_burger}>
              <Button
                onClick={handleOpenBurgerMenu}
                component="button"
                variant={theme ? 'withoutBgBlack' : 'withoutBg'}
                classNameStyles="button"
              >
                Menu
              </Button>
            </div>
          </nav>
          <HeaderActions />
        </div>
      </header>
    </>
  )
}
