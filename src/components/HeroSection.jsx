import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
           <div className="relative mx-auto h-28 w-28 md:h-36 md:w-36 rounded-full overflow-hidden ring-2 ring-primary/40 dark:ring-white/20 shadow-xl animate-fade-in">
            <img
              src="/profile.jpg"            // או /profile.png
              alt="David Shandor"
              className="h-full w-full object-cover object-[50%_5%]"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              David
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Shandor
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
           Software Engineer & M.A. student in Technological Entrepreneurship <br/> 
           Passionate about turning ideas into reality
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};