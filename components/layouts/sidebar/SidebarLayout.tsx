import Link from 'next/link';
import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>
      <Link href="/contact">
        <p>Contact</p>
      </Link>
    </nav>
  );
};

export default SidebarLayout;
