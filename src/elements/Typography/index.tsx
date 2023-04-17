/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import clsx from 'clsx'
import { createElement, ElementType, FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

import styles from './typographyStyles.module.sass'

type TypographyProps = {
  children: ReactNode
  component?: ElementType
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle1' | 'subtitle2'
  marginBottom?: 'mb-36' | 'mb-24' | 'mb-16' | 'mb-12' | 'mb-8' | 'mb-4'
  colorVariant?: 'green' | 'gray' | 'lightGray' | 'black' | ''
}

export const Typography: FC<TypographyProps> = forwardRef(
  ({ children, component = 'h1', variant = 'h1', marginBottom = '', colorVariant = '' }, ref) => {
    return createElement(
      component,
      {
        ref,
        className: clsx(styles.typography, styles[variant], styles[marginBottom], styles[colorVariant]),
      },
      children,
    )
  },
)

export const MTypography = motion(Typography)
