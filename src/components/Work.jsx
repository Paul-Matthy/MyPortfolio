

/**
 * Components
 */
import ProjectCard from "./ProjectCard";




const works = [
  {
    imgSrc: '/images/pranza.png',
    title: 'Full stack Resturant Website',
    tags: ['Web-design', 'API'],
    projectLink: 'https://pranzaresturant.onrender.com'
  },
  {
    imgSrc: '/images/rental.png',
    title: 'Real Estate Website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://rentalhomes.onrender.com'
  },
  {
    imgSrc: '/images/nat.png',
    title: 'Nature Wesite',
    tags: ['Web-design', 'Freelance'],
    projectLink: 'https://github.com/Paul-Matthy/Nat-geo'
  },
  {
    imgSrc: '/images/explore.png',
    title: 'Exploring website',
    tags: ['Web-design', 'Freelance', 'Development'],
    projectLink: 'https://github.com/Paul-Matthy/World-Exploring'
  },
  {
    imgSrc: '/images/school.png',
    title: 'School website',
    tags: ['Web-design', 'Development', 'Lead City Uni'],
    projectLink: 'https://github.com/Paul-Matthy/SchoolWebsite'
  },
  {
    imgSrc: '/images/dinner.png',
    title: 'Gericht Dinner',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://gerichtdinner.onrender.com'
  },
];




const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work
