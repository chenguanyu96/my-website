import React, { useState } from 'react'
import { Card, Image, Form, Segment, Message, Icon } from 'semantic-ui-react'
import Head from 'next/head'

import 'semantic-ui-css/semantic.min.css'

export default function Home() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleNameChange = (e, { name, value }) => setName(value)
  const handleEmailChange = (e, { name, value }) => setEmail(value)
  const handleMessageChange = (e, { name, value }) => setMessage(value)

  return (
    <>
      <div className="ui container">
        <Head>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
          <title>Home</title>
        </Head>
        <h1>Places I've Been</h1>
        <Card.Group itemsPerRow={4}>
          <Card>
            <Image src="/toronto.jfif" />
            <Card.Content>
              <Card.Header>Toronto</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Image src="/losangeles.jpg" />
            <Card.Content>
              <Card.Header>Los Angeles</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Image src="/sanfrancisco.jpg" />
            <Card.Content>
              <Card.Header>San Francisco</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Image src="/beijing.jpg" />
            <Card.Content>
              <Card.Header>Beijing</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Image src="/nanchang.jpg" />
            <Card.Content>
              <Card.Header>Nanchang</Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
        <Segment style={{marginTop: '3em'}}>
          <h1>Get In Touch!</h1>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Your Name' placeholder='Your Name' name='name' value={name} onChange={handleNameChange}/>
              <Form.Input fluid label='Your Email' placeholder='Your Email' name='email' value={email} onChange={handleEmailChange} />
            </Form.Group>
            <Form.TextArea label='Your Message' placeholder='Your Message' name='message' value={message} onChange={handleMessageChange} />
            <Message icon>
              <Icon name='hand paper' />
              <p>This uses your default mail application and does not automatically send the email. Please make sure your mail application is configured.</p>
            </Message>
            <Form.Button href={"mailto:guanyukevin.chen+kevingc@gmail.com?Subject=Kevingc.com Message&body=Name%3A%20"+ JSON.stringify(name) +"%0D%0AEmail%3A%20"+ JSON.stringify(email) +"%0D%0AMessage%3A%20"+ JSON.stringify(message)} className="ui button">Send</Form.Button>
          </Form>
        </Segment><br/>
      </div>
    </>
  )
}
