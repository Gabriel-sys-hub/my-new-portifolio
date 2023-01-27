
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Content from "./components/content/content";
import Github from "./components/github/github";
import Githubprojects from "./components/github/githubprojects";
import "./App.css";
import Timeline from "./components/timeline/timeline";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Github></Github>
      <Githubprojects></Githubprojects>
      <Timeline></Timeline>
      <Footer></Footer>
    </div>
  );
}

export default App
