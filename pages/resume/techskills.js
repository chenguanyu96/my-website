import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

class TechSkills extends Component {
    render() {
        return (
            <>
                <h2>Languages</h2>
                <Card.Group itemsPerRow={6} style={{marginBottom: "2em"}}>
                    <Card raised image={"/HTML5.png"} />
                    <Card raised image={"/css.png"} />
                    <Card raised image={"/javascript.png"} />
                    <Card raised image={"/C-Sharp.png"} />
                    <Card raised image={"/python.png"} />
                </Card.Group>
                <h2>Applications/Platforms</h2>
                <Card.Group itemsPerRow={6} style={{marginBottom: "2em"}}>
                    <Card raised image={"/sharepoint.png"} />
                    <Card raised image={"/PowerAutomate.png"} />
                    <Card raised image={"/BluePrism.png"} />
                    <Card raised image={"/powerbi.png"} />
                    <Card raised image={"/provenir.png"} />
                    <Card raised image={"/azure.png"} />
                    <Card raised image={"/muleSoft.png"} />
                </Card.Group>
            </>
        )
    }
}

export default TechSkills;