import { useState } from "react";
import Header from "./Components/Elements/Header";
import HeroSection from "./Components/Elements/HeroSection";
import MemberStories from "./Components/Elements/MemberStories";
import Answers from "./Components/Elements/Answers";
import Footer from "./Components/Elements/Footer";

function App() {
  const [navIsClicked, setNavIsClicked] = useState(false);
  return (
    <>
      <div className="bg-[#004733] w-screen overflow-y-hidden">
        <header className="relative z-[10]">
          <Header
            navIsClicked={navIsClicked}
            setNavIsClicked={setNavIsClicked}
          />
        </header>
        <HeroSection />
      </div>
      <main className="px-[1.5rem]">
        <MemberStories />
        <Answers />
        <hr className="mx-[-1.5rem] mb-[1rem]" />
        <Footer />
      </main>
    </>
  );
}

export default App;
