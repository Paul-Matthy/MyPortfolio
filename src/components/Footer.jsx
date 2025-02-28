

/**
 * Components
 */
import { ButtonPrimary } from "./Button";



const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Paul-Matthy'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/paul-matthy'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/PaulMatthias900'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/__agami'
  },
];


const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              herf="mailto:paulmatthy900@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 dark:text-slate-400 py-1 transition-colors hover:text-zinc-200 dark:hover:text-slate-300 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400  dark:text-slate-400 py-1 transition-colors hover:text-zinc-200  dark:hover:text-slate-300 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-between pt-10 pb-8">
          <a
            href="/"
            className="logo reveal-up"
          >
            <img
              src="/images/favicon.ico"
              width={40}
              height={40}
              alt="Logo"
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2024 <span className="text-zinc-200 dark:text-slate-400">Paul Matthias</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
