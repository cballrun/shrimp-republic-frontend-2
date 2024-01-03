import styles from '../styles/apps.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer.js'
import AppLink from '../features/appLink.js'
import { useState } from 'react'

function Apps({projects}) {
    const [active, setActive] = useState(0)
    return(
        <div className={styles.main}>
            <Header/>
            <div className={styles.links}>
                {projects.map((project, index) => 
                    <AppLink 
                        name={project.name}
                        key={index}
                        active={active}
                        setActive={setActive}
                        />
                )}

            </div>

            <Footer/>
        </div>
    )

}

export default Apps