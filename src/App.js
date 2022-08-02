import ScrollReveal from 'scrollreveal';
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import AboutMe from "./Components/AboutMe";

import MyProjects from "./Components/MyProjects";
import MyStack from "./Components/MyStack";

import Footer from "./Components/Footer";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    ScrollReveal({ reset: true })

    ScrollReveal({
      distance: '50px',
      duration: 2000,
      origin: 'top',
      reset: false
    })


    ScrollReveal().reveal('.d-200', { delay: 200 })
    ScrollReveal().reveal('.d-300', { delay: 300 })
    ScrollReveal().reveal('.d-400', { delay: 400 })

  }, []);

  return (
    <>
      <Header />

      <main>
        <article className='d-200'>
          <Introduction />
        </article>

        <article className='d-200'>
          <AboutMe />
        </article>

        <article className='d-400'>
          <MyProjects />
        </article>

        <article className='d-400'>
          <MyStack />
        </article>
      </main>

      <Footer />
    </>
  );
}

export default App;
