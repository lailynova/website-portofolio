import { FiSend } from "react-icons/fi";
import { SiWhatsapp, SiGmail, SiLinkedin } from "react-icons/si";


const Contact = () => {
    return (
        <section id="contact" className="min-h-screen bg-[#242424] text-white px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 data-aos="fade-down" className="text-3xl font-bold mb-2">Contact Me</h2>
          <p data-aos="fade-down" className="text-gray-300 mb-8">
            I am always open to discussing product design, collaborating work or partnerships. Just contact me with this media below
          </p>
      
          {/* Contact Media Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 justify-center items-center">
            {/* WhatsApp */}
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" className="group relative bg-[#2c2c2c] p-5 rounded-xl flex items-center gap-4 overflow-hidden shadow-md transition duration-300 hover:shadow-green-500/30 border border-transparent hover:border-green-500/50">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:animate-pulse"></div>
              <div className="text-green-500 text-4xl z-10 transform transition-transform duration-300 group-hover:-translate-y-3">
                <SiWhatsapp />
              </div>
              <div className="text-left flex-1 z-10">
                <h4 className="font-bold text-lg">WhatsApp</h4>
                <p className="text-gray-400 text-sm">+62 85330241203</p>
                <a
                  href="https://wa.me/6285330241203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-sm font-semibold text-white bg-green-600 px-4 py-1 rounded hover:bg-green-700 transition"
                >
                  Send A Message
                </a>
              </div>
            </div>
      
            {/* Gmail */}
            <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className="group relative bg-[#2c2c2c] p-5 rounded-xl flex items-center gap-4 overflow-hidden shadow-md transition duration-300 hover:shadow-red-500/30 border border-transparent hover:border-red-500/50">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:animate-pulse"></div>
              <div className="text-red-500 text-4xl z-10 transform transition-transform duration-300 group-hover:-translate-y-3">
                <SiGmail />
              </div>
              <div className="text-left flex-1 z-10">
                <h4 className="font-bold text-lg">Gmail</h4>
                <p className="text-gray-400 text-sm">novawardanu@gmail.com</p>
                <a
                  href="mailto:novawardanu@gmail.com"
                  className="mt-2 inline-flex items-center text-sm font-semibold text-white bg-red-600 px-4 py-1 rounded hover:bg-red-700 transition"
                >
                  Send A Message
                </a>
              </div>
            </div>
                
            {/* LinkedIn */}
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className="group relative bg-[#2c2c2c] p-5 rounded-xl flex items-center gap-4 overflow-hidden shadow-md transition duration-300 hover:shadow-blue-500/30 border border-transparent hover:border-blue-500/50">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:animate-pulse"></div>
              <div className="text-blue-500 text-4xl z-10 transform transition-transform duration-300 group-hover:-translate-y-3">
                <SiLinkedin />
              </div>
              <div className="text-left flex-1 z-10">
                <h4 className="font-bold text-lg">LinkedIn</h4>
                <p className="text-gray-400 text-sm">https://www.linkedin.com/in/lailynova/</p>
                <a
                  href="https://www.linkedin.com/in/lailynova/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-sm font-semibold text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition"
                >
                  Send A Message
                </a>
              </div>
            </div>
          </div>
      
          {/* Divider */}
          <div data-aos="fade-in" className="flex items-center gap-4 my-6">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="text-sm text-gray-400">Or</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>
      
          {/* Contact Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div data-aos="fade-right" >
              <label className="block mb-1">Your First Name</label>
              <input type="text" className="w-full p-2 rounded border border-white bg-transparent" />
            </div>
            <div data-aos="fade-left" >
              <label className="block mb-1">Your Last Name</label>
              <input type="text" className="w-full p-2 rounded border border-white bg-transparent" />
            </div>
            <div data-aos="fade-right" >
              <label className="block mb-1">Your Email</label>
              <input type="email" className="w-full p-2 rounded border border-white bg-transparent" />
            </div>
            <div data-aos="fade-left" >
              <label className="block mb-1">Your Subject</label>
              <input type="text" className="w-full p-2 rounded border border-white bg-transparent" />
            </div>
            <div data-aos="fade-up"  className="md:col-span-2">
              <label className="block mb-1">Your Message</label>
              <textarea rows="5" className="w-full p-2 rounded border border-white bg-transparent"></textarea>
            </div>
            <div data-aos="fade-up" className="md:col-span-2 flex justify-end">
            <button
                type="submit"
                className="mt-4 bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition flex items-center gap-2"
            >
                Send Message
                <FiSend className="text-lg" />
            </button>
            </div>

          </form>
        </div>
      </section>      
    );
  };
  
  export default Contact;
  