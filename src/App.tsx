import { Nav } from './components/Nav';
import { ToastProvider } from './components/ToastProvider';
import { Accessibility } from './sections/Accessibility';
import { AiWorkflow } from './sections/AiWorkflow';
import { Effects } from './sections/Effects';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { Palettes } from './sections/Palettes';

export function App() {
  return (
    <ToastProvider>
      <a className="skip" href="#effects">
        Skip to content
      </a>
      <div className="scroll-progress" aria-hidden="true" />
      <Nav />
      <Hero />
      <div className="divider" />
      <main>
        <Effects />
        <div className="divider" />
        <Palettes />
        <div className="divider" />
        <Accessibility />
        <div className="divider" />
        <AiWorkflow />
      </main>
      <Footer />
    </ToastProvider>
  );
}
