import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import cn from 'classnames';
import styles from '~/styles/Home.module.scss';
import { TierList } from '~/components/TierList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Who Wants To Be A Celestial Heir</title>
      </Head>
      <main className={cn(inter.className, styles.main)}>
        <div className={styles.contentWrapper}>
          <h1>Who Wants To Be A Celestial Heir?</h1>
          <section className={styles.tiers}>
            <TierList teamName="Team 1" />
            <TierList teamName="Team 2" />
            <TierList teamName="Team 3" />
          </section>
        </div>
      </main>
    </>
  );
}
