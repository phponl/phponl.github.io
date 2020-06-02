import Link from 'next/link';

interface LayoutProps {
  children: React.ReactElement,
  heading?: React.ReactElement | string;
}
export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children, heading } = props;
  return <>
    <div className='container'>
      <div className='hero'>
        <h1 className='name'>
          <Link href='/'>
            <a href='/'><strong>PHP</strong> Onl</a>
          </Link>
        </h1>
        <span className='job-title'>
          <a href='https://whois.php.onl' target='_blank'>Check subdomain</a>
        </span>
        <span className='job-title'>
          <Link href='/docs'>
            <a href='/docs' title='Documentation'>Document</a>
          </Link>
        </span>
        <span className='email'>contact@php.onl</span>
        {!heading ? null : <h2 className='lead'>{heading}</h2>}
      </div>
    </div>

    {children}

    <br /><br />
    <footer className='container'>
      <span style={{ fontSize: 16 }}>This template was made with ❤ by <a rel='nofollow noopener' target='_blank' href='https://dribbble.com/shots/4342703-Minimal-resume-freebie-for-junior-self-taught-people'>Nicolas Meuzard</a> and <a rel='nofollow noopener' target='_blank' href='https://newtodesign.com/'>New to design </a></span>
    </footer>
  </>;
}
