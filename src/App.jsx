import BlackHole from "./components/BlackHole";
import BgVideo from "./components/BgVideo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import 'boxicons';

const App = () => {
  return (
    <div className="text-sky-200 dark:text-slate-400 bg-[#001f7C40]">
      <BgVideo />
      <Header />
      <BlackHole />
      <Hero />
      <Info />
    </div>
  );
};

export default App;
