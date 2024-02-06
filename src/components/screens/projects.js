import styles from '../styles/projects.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer.js'
import Project from '../features/project.js'
import { useState } from 'react'
import projectsData from '../data/projectsData.js'

function Projects() {
    const [active, setActive] = useState(0)

    return(
        <div className={styles.main}>
            <Header/>
            <div className={styles.links}>
                {projectsData.map((project, index) => 
                    <Project 
                      key={index}
                      index={index}
                      active={active}
                      setActive={setActive}
                      name={project.name}
                      classification={project.classification}
                      description={project.description}
                      features={project.features}
                      stage={project.stage}
                      projectUrl={project.url}
                      endDate={project.end}
                      startDate={project.start}
                      techs={project.techs}
                      />
                )}

            </div>

            <Footer/>
        </div>
    )

}

export default Projects