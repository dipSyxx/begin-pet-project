import React, { useContext } from 'react'
import styles from './CompanyLogosStyles.module.sass'
import { CompanyLogosData, CompanyLogosDataProps } from 'src/data/CompanyLogos'
import { ThemeContext } from 'src/pages'
import clsx from 'clsx'

export const CompanyLogos = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={clsx(styles.company_block, theme ? styles.company_block_light : '')}>
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
