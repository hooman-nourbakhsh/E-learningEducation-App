import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Banner />
    </main>
  );
};

export default App;
