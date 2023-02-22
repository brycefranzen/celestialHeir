import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import cn from 'classnames';
import styles from '~/styles/Home.module.scss';
import { TierList } from '~/components/TierList';
import logo from '~/public/logo.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>WHO WANTS TO BE A CELESTIAL HEIR</title>
      </Head>
      <main className={cn(inter.className, styles.main)}>
        <div className={styles.contentWrapper}>
          <section className={styles.tiers}>
            <Image className={styles.logo} src={logo} alt="logo" width={350} />
            <TierList />
            <TierList />
            <TierList />
          </section>
        </div>
      </main>
    </>
  );
}
