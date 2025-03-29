import BgVideo from "./components/BgVideo";
import BlackHole from "./components/BlackHole";
import Header from "./components/Header";
import Hero from "./components/Hero";
import 'boxicons';

const App = () => {
  return (
    <div className="text-sky-200 dark:text-slate-400">
      <BgVideo />
      <Header />
      <BlackHole />
      <Hero />
    </div>
  );
};

export default App;
