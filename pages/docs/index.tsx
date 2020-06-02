import Head from 'next/head';
import { Layout } from 'libs/layout';

export default function DocsPage() {
  return <Layout heading='Documentation'>
    <>
      <Head>
        <title>Documentation - {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <div className='container'>
        <div className='docs-page clear'>
          <div className='sidebar'>
            <h3 className='toc-header'>Contents</h3>
            <ul className='toc'>
              <li><a href='#github-pages'>Prepare Github page</a></li>
              <li><a href='#determine-subdomain'>Determine subdomain</a></li>
              <li><a href='#CNAME-file'>Create CNAME file</a></li>
              <li><a href='#pull-request'>Submit pull request</a></li>
              <li><a href='#enforce-https'>Enforce https</a></li>
            </ul>
          </div>
          <div className='content'>
            <h2 id='github-pages'>Prepare Github page</h2>
            <section>
              <p>First of all, PHP.Onl only provides free subdomain. We have no hosting service so you have to do it your self.</p>
              <p>Github is the largest development platform and it offers amazing static site hosted service. You are allowed to create and publish free site through Github pages service</p>
              <p>By pointing PHP.Onl subdomain to your Github pages, you get a perfect combination that may fit your need on promoting Personal portfolio, OSS Project, or Organization profile...</p>
              <p>Create Github pages is quite easy. We expected that you have a page before integrate to PHP.Onl.<br />In case you don't know what is Github pages, please check out it <a href='https://pages.github.com/' rel='nofollow noreferrer noopener' target='_blank'>here</a> or follow <a href='https://help.github.com/en/github/working-with-github-pages/getting-started-with-github-pages' rel='nofollow noreferrer noopener' target='_blank'>this instruction</a> to create one</p>
            </section>
            <h2 id='determine-subdomain'>Determine subdomain</h2>
            <section>
              <p>PHP.Onl subdomain can be used for a personal page or project page, nothing is limited here. The choice of the subdomain is depended on you. Although you are free to choose whatever subdomain you want, it's better if you choose a subdomain that best matches your type of page.</p>
              <p>If you are creating a subdomain for your portfolio page, the subdomain should match your name or something that describe you.</p>
              <p>As a page for the project, the subdomain should be the project name. In some cases that you can not get the suitable subdomain name for github.io, there is still a chance that the domain name is still available at PHP.Onl, and you are free to use it.</p>
              <br />
              <br />
              <p><strong>Some example that may help you determine your subdomain:</strong></p>
              <p><strong>+ Personal portfolio:</strong> Assumed that your personal page is <code>JamesCharles1990.github.io</code>, so you can consider choosing the name <code>JamesCharles.php.onl</code> for better identification (of course, you can only use this domain if it is not used by other)</p>
              <p><strong>+ Project page:</strong> It's easier for the project's authors to choose the subdomain as they already named their projects. The tip is quite simple: The subdomain is equal to the project name!<br /> For example, you are writing and maintaining a PHP project called <code>FastRouter</code>, so <code>fastrouter.php.onl</code> may be the thing you are looking for.</p>
            </section>
            <h2 id='CNAME-file'>Create CNAME file</h2>
            <section>
              <p>From the github side</p>
              <blockquote><p>You can set up or update certain DNS records and your repository settings to point the default domain for your GitHub Pages site to a custom domain.</p></blockquote>
              <p>Add a file named "CNAME" to your repo (in the "gh-pages" branch for project pages) with a single line matching the domain you have chosen (e.g. "fastrouter.php.onl" without quotes). If you face any problems, check out the section about <a href='https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/#creating-and-committing-a-cname-file' rel='nofollow noreferrer noopener' target='_blank'>Custom URLs</a> at GitHub Pages Help.</p>
            </section>
            <h2 id='pull-request'>Submit pull request</h2>
            <section>
              <p>The last step, but the most important</p>
              <p>You have to submit a pull request to <a href='https://github.com/phponl/php.onl'>php.onl repo</a> that adds your subdomain to the list of existing php.onl domains. Your new URL should go live within 24 hours (keep an eye on your pull request in case of a naming conflict or a question from our side).</p>
              <p>Make sure to submit your pull request with this form of message:</p>
              <pre>
                <code>
                  - Subdomain: Full_Subdomain<br />
                  - Target: Domain_Target<br />
                  - Use Cloudflare Proxy: Yes<br />
                  - I agree with TOS: Yes
              </code>
              </pre>
            </section>
            <h2 id='enforce-https'>Enforce https</h2>
            <section>
              <p>By default, your site can be accessed with both <code>http://</code> and <code>https://</code> protocols. It's not recommended to use <code>http://</code> protocol and you can force your users to use <code>https</code> by setting as described <a href='https://help.github.com/en/github/working-with-github-pages/securing-your-github-pages-site-with-https' rel='nofollow noreferrer noopener' target='_blank'>here</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  </Layout>;
}
