
const Skills = () => {
  return (
    <div className="h-full page-shadow bg-white px-10">
      <div>
        {/* heading */}
        <div>
          <div className="relative ">
            <div className="text-center py-3 text-5xl xl:text-7xl font-bold text-black/5 ">
              SKILLS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              My Strengths
            </h1>
          </div>
        </div>
        
        <div>
                <div className="">
              <h1 className="text-2xl md:text-3xl mt-1 mb-1 font-bold text-black/80">Languages</h1>
              <p className=" bg-primary/10 rounded text-md mt-1">Python</p>
               <p className=" bg-primary/20 rounded text-md mt-1">JavaScript</p>
               </div>
               <div className="rounded">
              <h1 className="text-2xl md:text-3xl mt-1 mb-1 font-bold text-black/80">Technologies</h1>
              <p className=" bg-primary/10 rounded text-md mt-1">Django</p>
               <p className=" bg-primary/20 rounded text-md mt-1">VueJs</p>
               <p className=" bg-primary/10 rounded text-md mt-1">HTML & CSS</p>
               <p className=" bg-primary/20 rounded text-md mt-1">ReactJs</p>
               <p className=" bg-primary/10 rounded text-md mt-1">TailwindCSS, Bootstrap</p>
               <p className=" bg-primary/20 rounded text-md mt-1">Java(currently exploring this)</p>
               <p className=" bg-primary/10 rounded text-md mt-1">Postgres</p>
               <p className=" bg-primary/20 rounded text-md mt-1">Firebase</p>
               <p className=" bg-primary/10 rounded text-md mt-1">SQL</p>
               </div>
               <div className="">
              <h1 className="text-2xl md:text-3xl mt-1 mb-1 font-bold text-black/80">Deployment</h1>
              <p className=" bg-primary/20 rounded text-md mt-1">HostPinnacle</p>
               <p className=" bg-primary/10 rounded text-md mt-1">Git and Github</p>
               </div>
               <div className="">
              <h1 className="text-2xl md:text-3xl font-bold text-black/80">Soft Skills</h1>
               <p className=" bg-primary/20 rounded w-auto">Problem solving, Effective communnication, teamplayer</p>
               
               </div>
               </div>

      </div>
    </div>
  );
};

export default Skills;