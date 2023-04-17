import React, { useContext, useState } from 'react'
import styles from './HeaderActions.module.sass'
import clsx from 'clsx'
import { Button } from '../Button'
import { ThemeContext } from 'src/pages'
import { Login } from 'src/modules/Login'

export const HeaderActions = () => {
  const { theme, themeSwitch } = useContext(ThemeContext)

  const [login, setLogin] = useState(false)

  const handleOpenLoginWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setLogin(true)
  }
  return (
    <>
      <Login login={login} setLogin={setLogin} />
      <div className={styles.header_actions}>
        <div className={styles.header_toggle}>
          <div onClick={themeSwitch} className={clsx(styles.toggle)}>
            <div className={clsx(styles.toggle_button, theme ? styles.toggle_button_active : '')}>
              <i className={clsx(theme ? 'fa-solid fa-sun' : 'fa-solid fa-moon')} />
            </div>
          </div>
        </div>
        <Button
          onClick={handleOpenLoginWindow}
          component="button"
          variant={theme ? 'withoutBgBlack' : 'withoutBg'}
          classNameStyles="button"
        >
          LogIn
        </Button>
        <Button component="button" variant="signUp" classNameStyles="button">
          SIGN UP
        </Button>
      </div>
    </>
  )
}
