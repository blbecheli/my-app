import Navbar from '@/components/Navbar'
import HomePage from '@/components/Home'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>     
      <HomePage/>
    </div>
  )
}
