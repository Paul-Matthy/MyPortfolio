

/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'JS Libary'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/HTML5_Badge.svg.png',
    label: 'HTML',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/Bootstrap_logo.svg.png',
    label: 'Bootstap',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/sass.svg',
    label: 'Sass',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/responsive-design.svg',
    label: 'Responsiveness',
    desc: 'Web Design'
  },
  {
    imgSrc: '/images/github2.svg',
    label: 'Github',
    desc: 'Version Control'
  },
  {
    imgSrc: '/images/render.png',
    label: 'Render',
    desc: 'Cloud Hosting'
  },
  {
    imgSrc: '/images/mysql.png',
    label: 'MySQL',
    desc: 'Database'
  },
];



const Skill = () => {
  return (
    <section id="skill" className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Essential Tools I Use
        </h2>

        <p className="text-zinc-400 dark:text-black mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill
