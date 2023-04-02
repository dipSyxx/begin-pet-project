import React, { useState } from 'react'
import styles from './HeaderActions.module.sass'
import clsx from 'clsx'
import { Button } from '../Button'

export const HeaderActions = () => {
  const [toggle, setToggle] = useState(false)

  const toggleSwitch = () => {
    setToggle(!toggle)
  }
  return (
    <div className={styles.header_actions}>
      <div className={styles.header_toggle}>
        <div onClick={toggleSwitch} className={styles.toggle}>
          <div className={clsx(styles.toggle_button, toggle ? styles.toggle_button_active : '')}>
            <i className={clsx(toggle ? 'fa-solid fa-sun' : 'fa-solid fa-moon')} />
          </div>
        </div>
      </div>
      <Button component={'button'} variant={'withoutBg'} classNameStyles={'button'}>
        LogIn
      </Button>
      <Button component={'button'} variant={'signUp'} classNameStyles={'button'}>
        SIGN UP
      </Button>
    </div>
  )
}
