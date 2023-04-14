import { Typography } from '../Typography'
import clsx from 'clsx'
import React, { ReactNode, useContext, useState } from 'react'

import styles from './HadwareAccordion.module.sass'
import { ThemeContext } from 'src/pages'

type CustomAccordionProps = {
  title: string
  title_text: string
  text: string
  icon: string
}

export const CustomAccordion = ({ title, title_text, text, icon }: CustomAccordionProps) => {
  const [openAccordion, setOpenAccordion] = useState(false)

  const toggleHendler = () => {
    setOpenAccordion(!openAccordion)
  }

  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.hardwareAccordion}>
      <div className={styles.hardwareAccordion_heading}>
        <Typography component="h3" variant="h3" colorVariant={openAccordion ? 'lightGray' : 'gray'}>
          {title}
        </Typography>

        <button className={styles.accordion_icon} onClick={toggleHendler}>
          <i
            aria-expanded={openAccordion}
            className={clsx(styles.hardwareAccordion_arrow, 'fa-solid', 'fa-chevron-down')}
          />
        </button>
      </div>
      <div aria-expanded={!openAccordion} className={styles.hardwareAccordion_content}>
        <div className={styles.content_container}>
          <div className={clsx(styles.content_title, theme ? styles.title_content_light : '')}>
            <div className={styles.title_icon}>
              <i className={`fa-solid ${icon}`} />
            </div>
            <div className={styles.title_text}>{title_text}</div>
          </div>
          <div className={styles.content_text}>{text}</div>
        </div>
      </div>
    </div>
  )
}
