import React, { useContext } from 'react'
import styles from './HowItStyles.module.sass'
import { Typography } from '../Typography'
import { SubTitleLine } from '../SubTitleLine'
import { Button } from '../Button'
import { ThemeContext } from 'src/pages'
import clsx from 'clsx'

export const UserCom = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={clsx(styles.userCom, theme ? styles.userCom_light : '')}>
      <div className={styles.container}>
        <div className={styles.userCom_title}>
          <Typography component="h3" variant="h3" marginBottom="mb-24">
            How it is useful for user and companies
          </Typography>
          <SubTitleLine widthGreen={'w_40'} />
        </div>
        <ul className={styles.card_items}>
          <li className={styles.card_item}>
            <div className={styles.card_title}>
              <Typography component="h4" variant="subtitle1">
                Lorem Ipsum
              </Typography>
              <span className={styles.title_arrow}>
                <i className="fa-solid fa-chevron-right" />
              </span>
            </div>
            <div className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi
            </div>
          </li>

          <li className={styles.card_item}>
            <div className={styles.card_title}>
              <Typography component="h4" variant="subtitle1">
                Lorem Ipsum
              </Typography>
              <span className={styles.title_arrow}>
                <i className="fa-solid fa-chevron-right" />
              </span>
            </div>
            <div className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi
            </div>
          </li>

          <li className={styles.card_item}>
            <div className={styles.card_title}>
              <Typography component="h4" variant="subtitle1">
                Lorem Ipsum
              </Typography>
              <span className={styles.title_arrow}>
                <i className="fa-solid fa-chevron-right" />
              </span>
            </div>
            <div className={styles.card_text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi
            </div>
          </li>
        </ul>
        <div className={styles.userCom_button}>
          <Button component="button" variant="whiteButton" classNameStyles="button">
            LEARN MORE
          </Button>
        </div>
      </div>
    </div>
  )
}
