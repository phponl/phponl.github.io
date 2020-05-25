import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Contributor } from 'libs/types';
import { getContributors, getActiveDomains } from 'libs/utils';

export default function HomePage() {
  const [activeDomains, setActiveDomains] = useState<{ [key: string]: string }>({});
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    (async () => {
      const data = await Promise.all([getActiveDomains(), getContributors()]);
      setActiveDomains(data[0] || {});
      setContributors(data[1] || []);
    })();
  }, []);

  return <>
    <Head>
      <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
    </Head>
    <div className='container'>
      <div className='hero'>
        <h1 className='name'><strong>PHP</strong> Onl</h1>
        <span className='job-title'>
          <a href='https://whois.php.onl' target='_blank'>Check subdomain</a>
        </span>
        <span className='job-title'>
          <a href='#' target='_blank'>Document</a>
        </span>
        <span className='email'>contact@php.onl</span>
        <h2 className='lead'>PHP library development and knowdledge sharing <br /> by PHP developers, for PHP developers </h2>
      </div>
    </div>

    {/* Skills and intrest section */}
    <div className='container'>
      <div className='sections'>
        <h2 className='section-title'>Scopes</h2>
        <div className='list-card'>
          <span className='exp'>+ $domain</span>
          <div>
            <h3>Creating subdomain at php.onl</h3>
            <span>For sharing packages, address your document...</span>
          </div>
        </div>
        <div className='list-card'>
          <span className='exp'>+ $tryOut</span>
          <div>
            <h3>Packagist runner</h3>
            <span>Run Packagist packages online</span>
          </div>
        </div>
      </div>

      <div className='sections'>
        <h2 className='section-title'>Targeting</h2>
        <div className='list-card'>
          <div>
            <h3>Package authors</h3>
            <span>+ For whom creating PHP package</span>
          </div>
        </div>
        <div className='list-card'>
          <div>
            <h3>PHP Developers</h3>
            <span>+ To share personal portfolio</span><br />
            <span>+ Try out packages before use it</span>
          </div>
        </div>
      </div>
    </div>

    {/* Achievements */}
    <div className='container cards'>
      <div className='card'>
        <div className='skill-level'>
          <span>+</span>
          <h2>{Object.keys(activeDomains).length}</h2>
        </div>
        <div className='skill-meta'>
          <h3>Projects</h3>
          <span>Include community packages and personal portfolio pages</span>
        </div>
      </div>

      <div className='card'>
        <div className='skill-level'>
          <h2>50</h2>
          <span>%</span>
        </div>
        <div className='skill-meta'>
          <h3>Well tested packages</h3>
          <span>Package has well writen test, reviewed by the community</span>
        </div>
      </div>

      <div className='card'>
        <div className='skill-level'>
          <span>+</span>
          <h2>{contributors.length}</h2>
        </div>
        <div className='skill-meta'>
          <h3>Contributes</h3>
          <span>Developers who created package pages or portfolios</span>
        </div>
      </div>

      <div className='card'>
        <div className='skill-level'>
          <span>+</span>
          <h2>30</h2>
        </div>
        <div className='skill-meta'>
          <h3>Blog posts</h3>
          <span>Includes: Knowdlege sharing, development tool, Framework/CMS pick up...</span>
        </div>
      </div>
    </div>

    {/* Timeline */}
    <div className='container'>
      <ol className='timeline'>
        <li>
          <p className='line'>Subdomain system</p>
          <span className='point'></span>
          <p className='description'>Idea raising</p>
          <span className='date'>2020-05-15 → 2020-05-20</span>
        </li>

        <li>
          <span className='point'></span>
          <p className='description'>Implement</p>
          <span className='date'>2020-05-20 → Today</span>
        </li>

        <li>
          <p className='line'>Package runner</p>
          <span className='point'></span>
          <p className='description'>Idea raising</p>
          <span className='date'>2020-05-20 → Today</span>
        </li>

        <li>
          <span className='point'></span>
          <p className='description'>Implement</p>
          <span className='date'>Not yet</span>
        </li>
      </ol>
    </div>

    <br /><br />
    <footer className='container'>
      <span style={{ fontSize: 16 }}>This template was made with ❤ by <a rel='nofollow noopener' target='_blank' href='https://dribbble.com/shots/4342703-Minimal-resume-freebie-for-junior-self-taught-people'>Nicolas Meuzard</a> and <a rel='nofollow noopener' target='_blank' href='https://newtodesign.com/'>New to design </a></span>
    </footer>
  </>;
}