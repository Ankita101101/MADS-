import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import InfoCard from "../Components/InfoCard";

const Home = ({ setEntered }) => {
  return (
    <div className="bg-[#07111f] min-h-screen">

      <Navbar />

      <Hero setEntered={setEntered} />

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-white mb-10">
            Intelligence Modules
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <InfoCard
  title="Android Development"
  description="Learn Android application development using Android Studio, SDKs, and modern development tools."
/>

<InfoCard
  title="Java Programming"
  description="Master object-oriented programming concepts used in Android application development."
/>

<InfoCard
  title="Mobile Security"
  description="Explore secure coding practices, permissions, authentication, and Android security mechanisms."
/>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;
