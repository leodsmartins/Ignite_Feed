import { Header } from './Components/Header';
import  { Post } from './Components/Post';
import { Sidebar } from './Components/Sidebar';


import './global.css';
import styles from './App.module.css';


const posts =  [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/leodsmartins.png',
      name: 'Leonardo Martins',
      role:  'Desenvolvedor Front-end'
    },
    content: [ 
        {
          type: 'paragraphy',
          content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraphy',
          content: 'Acabei de subir mais um projeto no meu portifa.'
        },
        {
          type: 'paragraphy',
          content: 'É um projeto que fiz no NLW Return, evento da Rocketseat.'
        },
        {
          type: 'paragraphy',
          content: 'O nome do projeto é DoctorCare 🚀'
        },
        {
          type: 'link',
          content: ' 👉jane.design/doctorcare'
        }
      ],
      publishedAt: new Date('2022-07-20 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role:  'Educador @Rocketseat'
    },
    content: [ 
        {
          type: 'paragraphy',
          content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraphy',
          content: 'Acabei de subir mais um projeto no meu portifa.'
        },
        {
          type: 'paragraphy',
          content: 'É um projeto que fiz no NLW Return, evento da Rocketseat.'
        },
        {
          type: 'paragraphy',
          content: 'O nome do projeto é DoctorCare 🚀'
        },
        {
          type: 'link',
          content: ' 👉jane.design/doctorcare'
        }
      ],
      publishedAt: new Date('2022-07-22 13:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl:'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role:  'CTO @Rocketseat'
    },
    content: [ 
        {
          type: 'paragraphy',
          content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraphy',
          content: 'Acabei de subir mais um projeto no meu portifa.'
        },
        {
          type: 'paragraphy',
          content: 'É um projeto que fiz no NLW Return, evento da Rocketseat.'
        },
        {
          type: 'paragraphy',
          content: 'O nome do projeto é DoctorCare 🚀'
        },
        {
          type: 'link',
          content: ' 👉jane.design/doctorcare'
        }
      ],
      publishedAt: new Date('2022-07-22 13:00:00'),
  }
]

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

