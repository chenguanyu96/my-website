import React, { Component } from 'react'
import { Button, Card, Elevation, Classes, Drawer, Position } from "@blueprintjs/core";

class Education extends Component {
    render() {
        return (
            <>
                <Card interactive={false} elevation={Elevation.FOUR}>
                    <h3 style={{marginBottom: "0px"}}>University of Toronto Scarborough <small>(Sept 2014 to Dec 2018)</small></h3>
                    <h4 style={{marginTop: "0px"}}>Honors Bachelor of Science, Specialist in Statistical Machine Learning and Data Mining</h4>
                </Card>
            </>
        )
    }
}

export default Education;