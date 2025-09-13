import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "Python", level: 80, category: "languages" },
  { name: "JavaScript", level: 80, category: "languages" },
  { name: "C", level: 80, category: "languages" },
  { name: "C++", level: 80, category: "languages" },
  { name: "C#", level: 80, category: "languages" },
  { name: "Bash", level: 80, category: "languages" },

  // Databases
  { name: "MongoDB", level: 65, category: "databases" },
  { name: "PostgreSQL", level: 60, category: "databases" },

  // DevOps & Cloud
  { name: "Docker", level: 80, category: "devops" },
  { name: "Kubernetes", level: 70, category: "devops" },
  { name: "Helm", level: 65, category: "devops" },
  { name: "Argo CD", level: 65, category: "devops" },
  { name: "Terraform", level: 65, category: "devops" },
  { name: "AWS", level: 70, category: "cloud" },
  { name: "CI/CD (Jenkins, GitHub Actions)", level: 72, category: "devops" },

   // Monitoring & Logging
  { name: "Prometheus", level: 65, category: "monitoring" },
  { name: "Grafana", level: 68, category: "monitoring" },
  { name: "EFK Stack (Elasticsearch, Fluent Bit, Kibana)", level: 60, category: "monitoring" },

  // Security
  { name: "Wiz (CSPM)", level: 60, category: "security" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Bash/Linux", level: 80, category: "tools" },
];


const categories = ["all", "languages", "cloud", "devops", "databases", "monitoring", "security", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};