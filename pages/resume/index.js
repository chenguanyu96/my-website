import React, { useState } from 'react'
import Head from 'next/head'
import { Grid, Menu } from 'semantic-ui-react'
import Experience from './experience'
import Education from './education'
import Projects from './projects'
import TechSkills from './techskills'

export default function Home() {
    const [activeItem, setActiveItem] = useState('experience')

    const renderSection = (sectionName) => {
        if (sectionName === "experience") {
            return <Experience />
        } else if (sectionName === "education") {
            return <Education />
        } else if (sectionName === "projects") {
            return <Projects />
        } else if (sectionName === "technical skills") {
            return <TechSkills />
        }
    }

    const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
        <div className="ui container">
            <Head>
                <title>Resume</title>
            </Head>
            <Grid>
                <Grid.Column width={4}>
                    <Menu pointing secondary vertical>
                        <Menu.Item name='experience' active={activeItem === 'experience'} onClick={handleItemClick} />
                        <Menu.Item name='education' active={activeItem === 'education'} onClick={handleItemClick} />
                        <Menu.Item name='projects' active={activeItem === 'projects'} onClick={handleItemClick} />
                        <Menu.Item name='technical skills' active={activeItem === 'technical skills'} onClick={handleItemClick} />
                    </Menu><br/>
                </Grid.Column>
                <Grid.Column width={12}>
                    <div>
                        {renderSection(activeItem)}
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    )
}