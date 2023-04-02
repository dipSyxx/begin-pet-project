import { Typography } from '../Typography'
import clsx from 'clsx'
import React, { ReactNode, useState } from 'react'

import styles from './HadwareAccordion.module.sass'

export const CustomAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(false)

  const toggleHendler = () => {
    setOpenAccordion(!openAccordion)
  }

  return (
    <div className={styles.hardwareAccordion}>
      <div className={styles.hardwareAccordion_heading}>
        {openAccordion ? (
          <Typography component="h3" variant="h3" colorVariant="lightGray">
            HARDWARE
          </Typography>
        ) : (
          <Typography component="h3" variant="h3" colorVariant="gray">
            HARDWARE
          </Typography>
        )}

        <button className={styles.accordion_icon} onClick={toggleHendler}>
          <i
            aria-expanded={openAccordion}
            className={clsx(styles.hardwareAccordion_arrow, 'fa-solid', 'fa-chevron-down')}
          />
        </button>
      </div>
      <div aria-expanded={!openAccordion} className={styles.hardwareAccordion_content}>
        <div className={styles.content_container}>
          <div className={styles.content_title}>
            <div className={styles.title_icon}>
              <i className="fa-solid fa-microchip" />
            </div>
            <div className={styles.title_text}>Lorem</div>
          </div>
          <div className={styles.content_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio deserunt totam eos. Dolore aliquam
            distinctio, omnis qui possimus vero? Quia quas ipsam aperiam tenetur impedit molestias consequatur
            voluptatem nulla!
          </div>
        </div>
      </div>
    </div>
  )
}
