import HomePage from "./pages/HomePage";
import ModulePage from "./pages/ModulePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomePage} exact />
          <Route path="/module" component={ModulePage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
