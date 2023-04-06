import React from 'react'
import styles from './CompanyLogosStyles.module.sass'
import { CompanyLogosData, CompanyLogosDataProps } from 'src/data/CompanyLogos'

export const CompanyLogos = () => {
  return (
    <div className={styles.company_block}>
      <ul className={styles.company_list}>
        {CompanyLogosData.map(({ id, picture }: CompanyLogosDataProps) => (
          <li key={id} className={styles.company_list_item}>
            <img src={`/company/${picture}.png`} alt="company" />
          </li>
        ))}
      </ul>
    </div>
  )
}
