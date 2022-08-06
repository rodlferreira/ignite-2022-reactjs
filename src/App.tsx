import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './Post'


import styles from './App.module.css'

import './global.css'


export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          sidebbar
        </aside>
        <main>
          <Post
            author="Rodriggo Ferreira"
            
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Hic perferendis odit, ipsum sapiente magni nostrum commodi dolorum 
            nihil quibusdam voluptate ducimus dolorem repudiandae autem est quis 
            eius optio iusto in."
          />
        </main>
      </div>
    </>
  )
}