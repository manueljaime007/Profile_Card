import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="wrapper__section">
        <article className="profile__card">
          <div className="like__btn">
            <img src="img/ui/like_regular.png" alt="like_ui_icon" width="30" />
          </div>
          <div className="share__btn"></div>
          <div className="img">
            <img src="img/img-1.jpg" alt="user_profile_pic_1" width="300" height="400" />
          </div>
          <div className="content">
            <div className="user__info">
              <h1 className="username">Manuel Jaime</h1>
              <div>
                <span>Estudante de Tecnologia</span>
                <span>Programador Frontend</span>
              </div>
            </div>
            <div className="user__stacks">
              <h3 className="subtitle">Stacks</h3>
              <div className="stacks__group">
                <img src="img/img_stacks/html_icon.png" alt="html_logo" width="40" title="" />
                <img src="img/img_stacks/css_icon.png" alt="css_logo" width="40" />
                <img src="img/img_stacks/js_icon.png" alt="js_logo" width="40" />
                <img src="img/img_stacks/py_icon.png" alt="python_logo" width="40" />
                <img src="img/img_stacks/node_icon.png" alt="nodejs_logo" width="35" />
                <img src="img/img_stacks/mysql_icon.png" alt="mysql_logo" width="40" />
              </div>
            </div>
            <div className="button">
              {/* <a href="#">Ver mais</a> */}
              <a href="#" className="hover-effect">
                <span></span>
                Ver mais
              </a>
            </div>
          </div>
        </article>
      </section>

    </>
  )
}

export default App
