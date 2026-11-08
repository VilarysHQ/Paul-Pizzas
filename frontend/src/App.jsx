import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <main id="inicio">
        <section
          className="
            flex min-h-[120vh] flex-col items-center
            justify-center bg-[#1B0F0B] px-6
            pt-24 text-center text-white
          "
        >
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
            Paul Pizzas
          </h1>

          <p className="mt-5 text-lg text-white/70">
            Próximamente: Hero de la landing.
          </p>
        </section>
      </main>
    </>
  );
}