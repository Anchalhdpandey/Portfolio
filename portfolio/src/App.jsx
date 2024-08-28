import styles from "./App.module.css";
import { Experience } from "./components/Experience/Experience";
import { About } from "./components/Navbar/About/About";
import { Hero } from "./components/Navbar/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
