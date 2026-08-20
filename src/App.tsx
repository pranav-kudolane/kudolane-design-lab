import { Nav } from './components/Nav';
import { ToastProvider } from './components/ToastProvider';
import { useHashRoute } from './hooks/useHashRoute';
import { Accessibility } from './sections/Accessibility';
import { AiWorkflow } from './sections/AiWorkflow';
import { DesignDetail } from './sections/DesignDetail';
import { DesignLive } from './sections/DesignLive';
import { Designs } from './sections/Designs';
import { Effects } from './sections/Effects';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { Palettes } from './sections/Palettes';

function Home() {
  return (
    <>
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
        <Designs />
        <div className="divider" />
        <Accessibility />
        <div className="divider" />
        <AiWorkflow />
      </main>
      <Footer />
    </>
  );
}

export function App() {
  const route = useHashRoute();

  return (
    <ToastProvider>
      {route.name === 'live' ? (
        <DesignLive id={route.id} />
      ) : route.name === 'detail' ? (
        <>
          <Nav />
          <DesignDetail id={route.id} />
          <Footer />
        </>
      ) : (
        <Home />
      )}
    </ToastProvider>
  );
}
