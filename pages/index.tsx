import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import cn from 'classnames';
import styles from '~/styles/Home.module.scss';
import { TierList } from '~/components/TierList';
import logo from '~/public/logo.png';
import { useState } from 'react';
import { Sounds } from '~/components/Sounds';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Head>
        <title>WHO WANTS TO BE A CELESTIAL HEIR</title>
      </Head>
      <main className={cn(inter.className, styles.main)}>
        <div className={styles.contentWrapper}>
          <section className={cn(styles.tiers, { [styles.playing]: playing })}>
            <Image
              className={styles.logo}
              src={logo}
              alt="logo"
              width={playing ? 350 : 800}
              onClick={() => setPlaying(!playing)}
            />
            <TierList />
            <TierList />
            <TierList />
          </section>
        </div>
      </main>
      <Sounds hidden={!playing} />
    </>
  );
}
