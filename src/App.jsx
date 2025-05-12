import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Banner />
      <Subscribe />
    </main>
  );
};

export default App;
