import React from 'react'
import { Card, Image, Divider } from 'semantic-ui-react'
import Head from 'next/head'

import 'semantic-ui-css/semantic.min.css'

export default function Home() {
  return (
    <>
      <div className="ui container">
        <Head>
          <title>Home</title>
        </Head>
        <h1>Welcome</h1>
        <h4>
          My name is Guan Yu Chen, you can call me Kevin. I am a student at University of Toronto Scarborough specializing in Machine Learning and Data Mining. I
          love learning new machine learning and data mining algorithms and applying them to make new models for datasets. I also have a interest in learning big
          data and useful languages/packages such as Scala, TensorFlow, Spark and Hadoop. Most of my work is available on GitHub and a brief description is
          available on the projects page. Also my resume is available here.
      </h4>
      </div>
      <Divider hidden />
      <div className="ui container">
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
      </div>
    </>
  )
}
