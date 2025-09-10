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
            Backend & DevOps Engineer, <br/>with Technology Entreperauser Mindset.
            </h3>

            <p className="text-muted-foreground">
              I’m a junior Backend & DevOps engineer with ~1 year of hands-on experience. 
              I build APIs and automation with Node.js, and ship them with Docker, Kubernetes,
              Terraform, and CI/CD.
            </p>

            <p className="text-muted-foreground"> 
              I love taking ideas from repo to production — testing, monitoring, 
              and documentation included.<br/>
              Deepening my monitoring & alerting skills
              to strengthen availability and reliability.
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
                    Creating maintainable REST services with Node.js/Express,
                    auth, caching, and tests..
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
                    Docker & Kubernetes (Helm), Terraform, AWS, 
                    and CI/CD with GitHub Actions/Jenkins.
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
                    From idea to impact: customer discovery, rapid MVPs, 
                    and metric-driven iteration to product-market fit.
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