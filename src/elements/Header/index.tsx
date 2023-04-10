import React, { useState } from 'react'
import styles from './HeaderStyles.module.sass'
import { HeaderActions } from '../HeaderActions'
import { HeaderLinks, HeaderLinksProps } from 'src/data/HeaderLinks'
import { Button } from '../Button'
import { BurgerMenu } from 'src/modules/BurgerMenu'
import { Link } from 'react-scroll'

export const Header = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

  const handleOpenBurgerMenu = () => {
    setOpenBurgerMenu(true)
  }

  return (
    <>
      <BurgerMenu openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={setOpenBurgerMenu} />
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav_menu}>
            <ul className={styles.menu_links}>
              {HeaderLinks.map(({ id, name, href }: HeaderLinksProps) => (
                <li key={id} className={styles.link_item}>
                  <Link activeClass={styles.activeLink} to={href} spy={true} smooth={true} offset={-150} duration={600}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.nav_menu_burger}>
              <Button onClick={handleOpenBurgerMenu} component="button" variant="withoutBg" classNameStyles="button">
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
