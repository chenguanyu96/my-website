import React, { Component } from 'react'
import { Button, Card, Elevation, Classes, Drawer, Position } from "@blueprintjs/core";

class Projects extends Component {
    render() {
        return (
            <>
                <Card interactive={false} elevation={Elevation.TWO}>
                    <h3 style={{marginBottom: "0px"}}>Random Forest Versus Support Vector Machine <small>(October 2018 to November 2018)</small></h3>
                    <h4 style={{marginTop: "0px"}}>University of Toronto, Toronto, ON, Canada</h4>
                </Card>
                <Card interactive={false} elevation={Elevation.TWO} style={{marginTop: "2em", marginBottom: "2em"}}>
                    <h3 style={{marginBottom: "0px"}}>Research in Random Forest <small>(Janurary 2018 to April 2018)</small></h3>
                    <h4 style={{marginTop: "0px"}}>University of Toronto, Toronto, ON, Canada</h4>
                </Card>
                <Card interactive={false} elevation={Elevation.TWO} style={{marginBottom: "2em"}}>
                    <h3 style={{marginBottom: "0px"}}>Gene Expression Data Analytics <small>(October 2017 to December 2017)</small></h3>
                    <h4 style={{marginTop: "0px"}}>University of Toronto, Toronto, ON, Canada</h4>
                </Card>
                <Card interactive={false} elevation={Elevation.TWO} style={{marginBottom: "2em"}}>
                    <h3 style={{marginBottom: "0px"}}>Tipping Factor Analysis <small>(October 2017 to December 2017)</small></h3>
                    <h4 style={{marginTop: "0px"}}>University of Toronto, Toronto, ON, Canada</h4>
                </Card>
            </>
        )
    }
}

export default Projects;