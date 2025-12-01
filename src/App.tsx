
import { Layout } from './components/layout/Layout';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Testimonials } from './sections/Testimonials';
import { Services } from './sections/Services';
import { Contact } from './sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Testimonials />
      <Services />
      <Contact />
    </Layout>
  );
}

export default App;
