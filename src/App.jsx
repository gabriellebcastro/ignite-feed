import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Gabrielle Castro" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cumque, eaque itaque, harum accusantium minima a temporibus sunt iure impedit sed dolore officia, reprehenderit voluptatem quod reiciendis quis ducimus laborum!"
          />
          
          <Post
            author="Ingo Sacha"
            content="Um novo post muito legal :)"
          />
        </main>
      </div>
    </div>
  )
}

