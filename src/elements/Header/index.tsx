import React, { useContext, useState } from 'react'
import styles from './HeaderStyles.module.sass'
import { HeaderActions } from '../HeaderActions'
import { HeaderLinks, HeaderLinksProps } from 'src/data/HeaderLinks'
import { Button } from '../Button'
import { BurgerMenu } from '@modules/BurgerMenu'
import { Link } from 'react-scroll'
import { ThemeContext } from 'src/pages'
import clsx from 'clsx'

export const Header = () => {
  const [scroll, setScroll] = useState(0)

  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

  const handleOpenBurgerMenu = () => {
    setOpenBurgerMenu(true)
  }

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  const { theme } = useContext(ThemeContext)

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <BurgerMenu openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={setOpenBurgerMenu} />
      <header className={clsx(styles.header, theme ? styles.header_light : '')}>
        <div
          className={clsx(
            styles.container,
            theme ? styles.container_light : '',
            scroll > 50 ? '' : styles.fullContainer,
          )}
        >
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
