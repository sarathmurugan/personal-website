import React from 'react';

const Values = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-medium leading-tight">
            Values
          </h1>
          <p className="text-lg text-black leading-relaxed">
            The principles that guide how I work and live.
          </p>
        </div>

        {/* Value 1 */}
        <div className="space-y-6 pt-8">
          <div className="space-y-2">
            <h2 className="text-xl font-medium text-[#CC5500]">Curiosity over Comfort</h2>
            <div className="flex gap-3 items-start">
              <span className="text-[#CC5500] font-medium shrink-0">+</span>
              <p className="text-black leading-relaxed">
                I believe in constantly pushing boundaries to learn new things, even if it means feeling like a beginner again.
              </p>
            </div>
            {/* Resource Link */}
            <div className="pl-6 pt-1">
              <a 
                href="https://paulgraham.com/curiosity.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-[#CC5500] transition-colors italic"
              >
                Read: "The Age of the Essay" by Paul Graham →
              </a>
            </div>
          </div>
        </div>

        {/* Value 2 */}
        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <h2 className="text-xl font-medium text-[#CC5500]">Minimalism</h2>
            <div className="flex gap-3 items-start">
              <span className="text-[#CC5500] font-medium shrink-0">+</span>
              <p className="text-black leading-relaxed">
                Stripping away the non-essential to focus on what actually matters. In design, code, and life.
              </p>
            </div>
             {/* Resource Link */}
             <div className="pl-6 pt-1">
              <a 
                href="https://fs.blog/mental-models/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-[#CC5500] transition-colors italic"
              >
                Explore: Farnam Street Mental Models →
              </a>
            </div>
          </div>
        </div>

        {/* Value 3 */}
        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <h2 className="text-xl font-medium text-[#CC5500]">Community</h2>
            <div className="flex gap-3 items-start">
              <span className="text-[#CC5500] font-medium shrink-0">+</span>
              <p className="text-black leading-relaxed">
                Technology should bring people together, not drive them apart. 
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Values;