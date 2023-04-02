import React from 'react'
import styles from './NvidiaStyles.module.sass'

export const Nvidia = () => {
  return (
    <div className={styles.nvidia}>
      <div className={styles.nvidaBg}>
        <img src="/nvidia/nvidiaBg.png" alt="nvidia" />
      </div>
    </div>
  )
}
