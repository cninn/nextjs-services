import Link from 'next/link'
import React from 'react'
import { TbBrandNextjs } from "react-icons/tb";
import styles from './styles.module.css'

export default function Footer() {
  return (
   <footer className={styles.footer}>
      <TbBrandNextjs className={styles.icon}/>
    Course Project created with <b style={{color:'darkorange'}}>Mehmet Pekcan</b>  // by&nbsp;
    <Link href={'https://www.github.com/cninno'}><b style={{color:'darkorange'}}>cninnworks</b></Link>
  
   </footer>
  )
}
