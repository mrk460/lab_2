import Header from './components/Header';
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-200 px-3 py-4 text-ink sm:px-4 sm:py-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <Header />

        <main className="grid items-start gap-6 md:grid-cols-[280px_1fr]">
          <Contacts />
          <Experience />
          <Education />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
