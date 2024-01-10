

import React from 'react'
import Loading from '../loading'
import styles from './styles.module.css'

export default function FeaturedLoading() {
  return (
    <div style={{ height: 278}} className={styles.movieWrapper}>
        <Loading/>
    </div>
  )
}
