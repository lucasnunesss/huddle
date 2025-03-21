import AllArticles from "./components/articles/AllArticles";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Section";
import "./index.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <AllArticles />
        <Section />
      </main>

      <Footer />
    </div>
  );
}

export default App;
