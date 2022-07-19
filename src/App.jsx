import { Header } from './Components/Header';
import  { Post } from './Components/Post';
import { Sidebar } from './Components/Sidebar';


import './global.css';
import styles from './App.module.css';




function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
