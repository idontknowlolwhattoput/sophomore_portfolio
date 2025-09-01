function Skills() {
  return (
    <div className="pt-5 flex flex-col items-center font-bold tracking-widest bg-white 
                    h-[calc(100%-8%)] md:h-[calc(100%-7%)] 
                    shadow-[inset_2px_2px_1px_rgba(0,0,0,0.7),inset_-2px_-2px_1px_rgba(255,255,255,0.8)]">
      
      {/* Section Header */}
      <h1 className="md:text-3xl mb-4">Technical Skills</h1>
      
      {/* Skills List */}
      <ul className="font-mono text-sm font-normal tracking-normal bg-gray-100 border border-gray-400 w-[90%] p-3 
                     shadow-[inset_1px_1px_0px_rgba(0,0,0,0.5),inset_-1px_-1px_0px_rgba(255,255,255,0.8)]">
        <li className="mb-1">☑ HTML / CSS</li>
        <li className="mb-1">☑ JavaScript (ES6+)</li>
        <li className="mb-1">☑ React.js</li>
        <li className="mb-1">☑ Node.js & Express</li>
        <li className="mb-1">☑ MySQL & PostgreSQL</li>
        <li className="mb-1">☑ Git & GitHub</li>
      </ul>
    </div>
  );
}

export default Skills;
