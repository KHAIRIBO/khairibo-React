import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import projectStyles from '../style.module.css'
import styles from './positioning-elements.module.css'

const PositioningElements = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>2 - Positioning Elements - bo studio</title>
        <meta
          name="description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:title"
          content="2 - Positioning Elements - bo studio"
        />
        <meta
          property="og:description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/066b81c8-8fcf-4710-b3f7-8bc463bae1e9/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1"
        />
      </Helmet>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <Heading
            text="Let's see how we position elements in containers"
            heading1="Positioning Elements"
          ></Heading>
          <div className={styles['ul']}>
            <ListItem text="Drag and drop a Heading (H) in the box below "></ListItem>
            <ListItem text="Try to place it in another area of the container and see what happens"></ListItem>
          </div>
          <div className={styles['container3']}></div>
          <div className={styles['ul1']}>
            <ListItem text="You can place your elements to any of these nine points in your containers"></ListItem>
            <Tip text="This option is available only for containers with display flex for the moment"></Tip>
            <ListItem text="Not sure if it's the right position for your element? Just drag and drop it to another point!"></ListItem>
          </div>
        </div>
        <Link to="/positioning-multiple-elements" className={styles['navlink']}>
          <div
            className={` ${styles['container4']} ${projectStyles['thqLink']} `}
          >
            <Tip></Tip>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PositioningElements
