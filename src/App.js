
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import AboutMe from "./Components/AboutMe";

import Projects from "./Components/Projects";
import MyStack from "./Components/MyStack";

import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <>
        <Header />
        <Introduction />
        <main>
          <article> 
            <AboutMe />
            <Projects />
            <MyStack />
          </article>
        </main>
        <Footer />
      </>
    </div>
  );
}

export default App;
