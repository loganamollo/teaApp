import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div>
                <Link href='/'>
                    <a>KTDA</a>
                </Link>
            </div>
            <ul>
                <li><Link href={'/login'} ><a>log in</a></Link></li>
                <li><Link href={'/account'} ><a>account</a></Link></li>
            </ul>
        </nav>
    )
}