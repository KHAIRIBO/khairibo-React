import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './h-o-m-m-e.module.css'

const HOMME = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>bo studio</title>
        <meta
          name="description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="bo studio" />
        <meta
          property="og:description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/066b81c8-8fcf-4710-b3f7-8bc463bae1e9/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1"
        />
      </Helmet>
      <header className={styles['Header']}>
        <img
          alt="image"
          src="/playground_assets/clever%20logos%20of%20letters%20a%20to%20z%20based%20on%20common%20words%20that%20start%20with%20them-1000h.jpg"
          className={styles['image']}
        />
        <div className={styles['container1']}>
          <nav className={styles['Nav']}>
            <span>About</span>
            <span className={styles['text1']}>NEW PROJCT</span>
            <span className={styles['text2']}>Pricing</span>
            <span className={styles['text3']}>Team</span>
            <div className={styles['container2']}>
              <span>
                <span>CONTACT</span>
              </span>
              <div className={styles['container3']}></div>
            </div>
          </nav>
        </div>
        <div className={styles['BtnGroup']}></div>
        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </header>
      <div className={styles['container4']}>
        <a
          href="https://www.instagram.com/khairibo32/"
          name="INSTGRAM"
          autoFocus="true"
          target="_blank"
          rel="noreferrer noopener"
          className={` ${styles['link']} ${projectStyles['thqButton']} ${projectStyles['thqLink']} `}
        >
          INSTAGRAM
        </a>
        <a
          href="https://www.facebook.com/Khairibo00/"
          name="FACBOOK"
          autoFocus="true"
          target="_blank"
          rel="noreferrer noopener"
          className={` ${styles['link1']} ${projectStyles['thqButton']} ${projectStyles['thqLink']} `}
        >
          FACBOOK
        </a>
      </div>
      <div className={styles['Pricing']}></div>
      <div className={styles['GalleryCard']}>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&amp;ixlib=rb-1.2.1&amp;h=1000"
          className={styles['image1']}
        />
      </div>
    </div>
  )
}

export default HOMME
