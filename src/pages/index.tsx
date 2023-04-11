import React from 'react'
import styles from '@styles/Home.module.sass'
import { Header } from 'src/elements/Header'
import { Intro } from 'src/elements/Intro'
import { CompanyLogos } from 'src/elements/CompanyLogos'
import { Introducing } from 'src/elements/Introducing'
import { Begin } from 'src/elements/Begin'
import { Enhance } from 'src/elements/Enhance'
import { UserCom } from 'src/elements/UserCom'
import { Clothing } from 'src/elements/Clothing'
import { StandartFeatures } from 'src/elements/StandartFeatures'
import { CrossStore } from 'src/elements/CrossStore'
import { LearnMore } from 'src/elements/LearnMore'
import { Nvidia } from 'src/elements/Nvidia'
import { ZozoSuit } from 'src/elements/ZozoSuit'
import { Footer } from 'src/elements/Footer'
import { createContext, useState } from 'react'
import clsx from 'clsx'

type ThemeContextType = {
  theme: boolean
  themeSwitch?: () => void
}

export const ThemeContext = createContext<ThemeContextType>({ theme: false, themeSwitch: () => {} })

export const Home: React.FC = () => {
  const [theme, setTheme] = useState(false)

  const themeSwitch = () => {
    setTheme(!theme)
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme, themeSwitch }}>
        <div className={clsx(styles.wrapper, theme ? styles.wrapper_light : '')}>
          <Header />
          <Intro />
          <CompanyLogos />
          <Introducing />
          <Begin />
          <Enhance />
          <UserCom />
          <Clothing />
          <StandartFeatures />
          <CrossStore />
          <LearnMore />
          <Nvidia />
          <ZozoSuit />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default Home
