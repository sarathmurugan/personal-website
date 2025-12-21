const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="space-y-8">
        
        {/* Intro Section */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-medium leading-tight">
            what's up! i'm Sarath 
          </h1>
          
          {/* Paragraph 1 */}
          <div className="flex gap-3 items-start">
            <span className="text-[#CC5500] font-medium shrink-0">+</span>
            <p className="text-lg text-black leading-relaxed">
              i like food, movies, learning new things, and meeting cool people. currently on the pursuit to complete more side quests (this is exhibit a.)
            </p>
          </div>
        </div>

        <div className="space-y-6 pt-8">
          <div className="space-y-4">
            <h2 className="text-xl font-medium">About</h2>
            <div className="text-black leading-relaxed space-y-4">
              
              {/* Paragraph 2 */}
              <div className="flex gap-3 items-start">
                <span className="text-[#CC5500] font-medium shrink-0">+</span>
                <p>
                  I'm a management consultant currently working in the R&D sector. My background is in product and business operations, and I have a Law degree from the University of Bristol. 
                </p>
              </div>

              {/* Paragraph 3 */}
              <div className="flex gap-3 items-start">
                <span className="text-[#CC5500] font-medium shrink-0">+</span>
                <p>
                  The long term goal is to leave some material impact in the world, however small that is (currently interested in how we can use technology to bring people together.) 
                </p>
              </div>

            </div>
          </div>
{/* NEW: Things I'm working on */}
<div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium">Things I'm working on</h2>
            <div className="text-black leading-relaxed space-y-4">
              <div className="flex gap-3 items-start">
                <span className="text-[#CC5500] font-medium shrink-0">+</span>
                <p>
                  Vibe coding(this website is my first punt at it and ngl, the process has blown my mind).
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#CC5500] font-medium shrink-0">+</span>
                <p>
                  Starting my writing journey (as a forcing function actually do the things I talk about).
                </p>
              </div>
            </div>
          </div>

          {/*Things I'm curious about */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium">Things I'm curious about</h2>
            <div className="text-black leading-relaxed space-y-4">
              <div className="flex gap-3 items-start">
                <span className="text-[#CC5500] font-medium shrink-0">+</span>
                <p>
                  How agents and automation can help supercharge the third sector (not in a let's replace their jobs kinda way, but how can we leverage the tools at our disposal to turn those working in the sector into 10x versions versions of themselves.)
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#CC5500] font-medium shrink-0">+</span>
                <p>
                 How we can build tech that truly brings us togther. 
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-8">
            <h2 className="text-xl font-medium">want to connect?</h2>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <a
                href="https://x.com/sarry_muruks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#CC5500] transition-colors"
              >
               
              
                LinkedIn
              </a>
             
              <a
                href="mailto:sarath.murugan@yahoo.com"
                className="hover:text-[#CC5500] transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;  