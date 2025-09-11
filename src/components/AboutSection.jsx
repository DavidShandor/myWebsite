import { Lightbulb, Code, CloudCog } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Software Engineer With <br/>
            Backend Experience<br/>
            DevOps Knowledge<br/>
            And Technology Entreperauser Mindset.
            </h3>

            <p className="text-muted-foreground">
            I’m naturally curious and love building things that actually work.
            Over the past few years, I’ve gained hands-on experience in backend
            development and cloud-native workflows.

            </p>
            <p className="text-muted-foreground">
            I also completed an intensive
            DevOps bootcamp, adding more tools to my toolbox and shaping me into a versatile 
            software engineer who can do a bit of everything from coding to infrastructure.

            </p>

            <p className="text-muted-foreground"> 
            I enjoy writing clean code, developing scalable applications, 
            and setting up systems that teams can rely on. 
            With a solid academic background and a fast-learning mindset, 
            I focus on creating software that’s both practical and impactful.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="./src/assets/David Shandor CV.pdf"
                target="_ blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Backend & APIs</h4>
                  <p className="text-muted-foreground">
                    I build and maintain clean, reliable REST services, 
                    focusing on code that’s easy to understand, extend, and scale.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CloudCog className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps & Cloud</h4>
                  <p className="text-muted-foreground">             
                  I design and manage containerized environments with Docker and Kubernetes, 
                  implement Infrastructure as Code with Terraform and Helm, and set up CI/CD 
                  pipelines to ensure smooth and automated deployments.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Tech Entrepreneurship</h4>
                  <p className="text-muted-foreground">  
                  I love turning ideas into real projects. For me, it’s not just about 
                  writing code but also about asking the right questions, finding creative solutions, 
                  and building products that people actually want to use.  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};