
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import AboutMe from "./Components/AboutMe";

import Projects from "./Components/Projects";
import MyStack from "./Components/MyStack";

import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <article>
          <Introduction />
        </article>

        <article>
          <AboutMe />
        </article>

        <article>
          <Projects />
        </article>

        <article>
          <MyStack />
        </article>
      </main>

      <Footer />
    </>
  );
}

export default App;
