import React from 'react'
import styles from './CompanyLogosStyles.module.sass'

export const CompanyLogos = () => {
  return (
    <div className={styles.company_block}>
      <ul className={styles.company_list}>
        <li className={styles.company_list_item}>
          <img src="/company/company1.png" alt="company" />
        </li>
        <li className={styles.company_list_item}>
          <img src="/company/company2.png" alt="company" />
        </li>
        <li className={styles.company_list_item}>
          <img src="/company/company3.png" alt="company" />
        </li>
        <li className={styles.company_list_item}>
          <img src="/company/company4.png" alt="company" />
        </li>
        <li className={styles.company_list_item}>
          <img src="/company/company5.png" alt="company" />
        </li>
      </ul>
    </div>
  )
}
