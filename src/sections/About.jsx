import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center bg-[#242424] text-white pt-24 px-6 md:flex-row md:justify-center gap-0 md:gap-12"
    >
      {/* Heading */}
      <div className="absolute top-17 left-6 md:top-28 md:left-20">
        <div className="flex items-center gap-3 mb-1">
          <h2 className="text-3xl font-extrabold text-[#777777]">About</h2>
          <div className="flex-1 border-t-4 rounded-sm border-[#777777]"></div>
        </div>
        <h3 className="text-3xl font-extrabold italic text-white">LAILY NOVA</h3>
      </div>

      {/* Gambar */}
      <div className="order-1 md:order-1 mb-8 mt-10 md:mb-0 md:mt-0">
        <img
          src="/danu.png"
          alt="pp"
          className="w-60 h-60 md:w-[28rem] md:h-[28rem] rounded-full object-cover hover:-translate-y-2 transition-transform duration-300"
        />
      </div>

      {/* Text content */}
      <div className="order-2 md:order-2 text-center md:text-left max-w-xl mb-8 md:mb-0">
        <p className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Hallo I’m <br /> Mohammad Laily Nova Krisna
        </p>
        <p className="text-base md:text-lg text-gray-300 mb-6">
          Front-End Developer Enthusiast | Graphic & UI/UX Designer <br />
          Creating Functional and Beautiful Digital Experiences <br />
          Undergraduate of Informatics at University of Jember
        </p>

        <a
          href="https://docs.google.com/document/d/19Nwu4CU8H4-WeXksCp2MbLUdlpIcZft7084MOgEkroQ/edit?tab=t.0"
          target="_blank"
          download
          className="inline-flex items-center gap-2 bg-white text-[#242424] hover:bg-gray-100 hover:text-black px-4 py-2 rounded-md text-base md:text-lg font-semibold transition-all duration-300 group"
        >
          Download CV
          <FiDownload className="text-xl transform transition-transform duration-300 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
};

export default About;
