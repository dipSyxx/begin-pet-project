import React from 'react'
import styles from './ClothingStyles.module.sass'
import { Typography } from '../Typography'
import { SubTitleLine } from '../SubTitleLine'
import { Button } from '../Button'

export const Clothing = () => {
  return (
    <div className={styles.clothing}>
      <div className={styles.container}>
        <div className={styles.clothing_inner}>
          <div className={styles.clothing_side}>
            <div className={styles.clothing_title}>
              <Typography component="h1" variant="h1" marginBottom="mb-24">
                3D clothing simulation on user-designed metahuman
              </Typography>
              <SubTitleLine widthGreen="w_157" widthGray="w_90" />
            </div>
            <div className={styles.clothing_text}>
              <Typography component="p" variant="subtitle2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie
              </Typography>
            </div>
            <div className={styles.clohing_btn}>
              <Button component="button" variant="whiteButtonWithBlack" classNameStyles="button">
                DISCOVER MORE <i className="fa-solid fa-chevron-right" />
              </Button>
            </div>
          </div>
          <div className={styles.clothing_side_img}>
            <div className={styles.clothing_img}>
              <img src="/clothing/cloth.png" alt="cloth" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
