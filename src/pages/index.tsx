import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import UnderDevelopmentBanner from '../components/under-development/under-development';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroBanner)}>

      <UnderDevelopmentBanner></UnderDevelopmentBanner>

      <div className="container">
        <img className={styles.imageLogo} src='img/logo.png'></img>
        <Heading as="h1" className="hero__title">|Abstract|</Heading>
        <p className="hero__subtitle">Programming language_</p>

        <div className={styles.bannerRoutes}>
          <a href="docs/language/first_prog">Get Started</a>
          <a href="https://github.com/abstractLang/Abstract">View on GitHub</a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="">
      
      <HomepageHeader />
      <main className={styles.warning}>
        Warning! <br/>
        This website is still under development! <br/>
        Get more information or help us to improve this page
        on github.
      </main>
    </Layout>
  );
}
