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

export const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
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
    </>
  )
}

export default Home
