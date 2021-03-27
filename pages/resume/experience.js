import React, { Component } from 'react'
import { Button, Card, Elevation, Classes, Drawer, Position } from "@blueprintjs/core";

class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }

        this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
        this.handleDrawerClose = this.handleDrawerClose.bind(this)
    }

    handleDrawerOpen() {
        this.setState({ isOpen: true })
    }

    handleDrawerClose() {
        this.setState({ isOpen: false })
    }

    render() {
        return (
            <>
                <Card interactive={false} elevation={Elevation.FOUR}>
                    <h3 style={{marginBottom: "0px"}}>Programmer Analyst, Emerging Technologies <small>(Feb 2019 to Present)</small></h3>
                    <h4 style={{marginTop: "0px"}}>Meridian Credit Union, Etobicoke, ON, Canada</h4>
                    <p>
                        <ul>
                            <li>
                                Worked closely with Business Process Technology team to develop new solutions that increases efficiency of processes up to 50%.
                            </li>
                            <li>
                                Managed research and development of solutions that automated tasks such as data migration and testing using libraries such as selenium and numpy (Python).
                            </li>
                            <li>
                                Lead partners to implement a chatbot and cognitive search using Microsoft Azure Bot and Cognitive Services.
                            </li>
                            <li>
                                Lead Robotic Process Automation (RPA) team to implement and deploy processes for repetitive daily tasks.
                            </li>
                        </ul>
                    </p>
                    <Button text="Read More" className={Classes.BUTTON} onClick={this.handleDrawerOpen}/>
                    <Drawer icon="info-sign" position={Position.BOTTOM} size="70%" onClose={this.handleDrawerClose} title="Programmer Analyst, Emerging Technologies @ Meridian Credit Union" {...this.state}>
                        <div className={Classes.DRAWER_BODY}>
                            <div className={Classes.DIALOG_BODY}>
                                Test
                            </div>
                        </div>
                    </Drawer>
                </Card><br/>
            </>
        )
    }
}

export default Experience;