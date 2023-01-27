
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Content from "./components/content/content";
import "./App.css";
import Github from "./components/github/github";
import Githubprojects from "./components/github/githubprojects";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Github></Github>
      <Githubprojects></Githubprojects>
      <Footer></Footer>
    </div>
  );
}

export default App
