import styles from '../styles/projects.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer.js'
import AppLink from '../features/appLink.js'
import { useState } from 'react'

function Projects({projects}) {
    const [active, setActive] = useState(0)

    return(
        <div className={styles.main}>
            <Header/>
            <div className={styles.links}>
                {projects.map((project, index) => 
                    <AppLink 
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
                      />
                )}

            </div>

            <Footer/>
        </div>
    )

}

export default Projects