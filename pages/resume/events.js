import React, { Component } from 'react'
import { Button, Card, Elevation, Classes, Drawer, Position } from "@blueprintjs/core";

class Events extends Component {
    render() {
        return (
            <>
                <Card interactive={false} elevation={Elevation.TWO}>
                    <h3 style={{ marginBottom: "0px" }}>ASA University of Toronto Datafest <small>(May 2018)</small></h3>
                    <h4 style={{ marginTop: "0px" }}>University of Toronto, Toronto, ON, Canada</h4>
                    <Button intent="success" text="Read More" className={Classes.BUTTON} onClick={this.handleDrawerOpen} />
                </Card>
                <Card interactive={false} elevation={Elevation.TWO} style={{ marginTop: "2em", marginBottom: "2em" }}>
                    <h3 style={{ marginBottom: "0px" }}>UofT Hack IV 2017 <small>(Janurary 2017)</small></h3>
                    <h4 style={{ marginTop: "0px" }}>University of Toronto, Toronto, ON, Canada</h4>
                    <Button intent="success" text="Read More" className={Classes.BUTTON} onClick={this.handleDrawerOpen} />
                </Card>
            </>
        )
    }
}

export default Events