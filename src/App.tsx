import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'


import styles from './App.module.css'

import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/58087865?v=4',
      name: 'Rodriggo Ferreira',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph:', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉<a href="#"> jane.design/doctorcare</a>' },
    ],
    publishedAt: new Date('2022-09-01 20:00:00'),
  },
]


export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author.name}
                content={post.content} 
                publish={post.publishedAt}
                />
            )
          })}
        </main>
      </div>
    </>
  )
}