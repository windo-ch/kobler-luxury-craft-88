
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KoblerLayout from "./components/layout/KoblerLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Journal from "./pages/Journal";
import JournalRubyStory from "./pages/JournalRubyStory";
import Creations from "./pages/Creations";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KoblerLayout />}>
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="journal" element={<Journal />} />
          <Route path="journal/ruby-story" element={<JournalRubyStory />} />
          <Route path="collections" element={<Creations />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
