import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const Button = ({ text }: Props) => {
  return <div className={styles.test}>Button Component: {text}</div>
}
