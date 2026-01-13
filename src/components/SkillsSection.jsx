import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Data Stack
  { name: "Python ETL", level: 95, category: "datastack" },
  { name: "SQL", level: 85, category: "datastack" },
  { name: "Excel Macro", level: 95, category: "datastack" },
  { name: "Apache Kafka", level: 80, category: "datastack" },
  { name: "PostgreSQL", level: 75, category: "datastack" },

  // Software Stack
  { name: "React.js", level: 80, category: "softwarestack" },
  { name: "JavaScript", level: 80, category: "softwarestack" },
  { name: "Java Spring Boot", level: 70, category: "softwarestack" },
  { name: "TypeScript", level: 80, category: "softwarestack" },
  { name: "HTML/CSS", level: 90, category: "softwarestack" },
  { name: "Tailwind CSS", level: 85, category: "softwarestack" },
  { name: "Node.js", level: 70, category: "softwarestack" },
  { name: "Express", level: 70, category: "softwarestack" },
  { name: "MongoDB", level: 80, category: "softwarestack" },
  { name: "GraphQL", level: 60, category: "softwarestack" },

  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 95, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Power BI", level: 95, category: "tools" },
  { name: "Power Apps", level: 90, category: "tools" },
  { name: "Power Automate", level: 90, category: "tools" },
  { name: "Dataverse", level: 90, category: "tools" },
  { name: "Grafana", level: 75, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Streamlit", level: 85, category: "tools" },
];

const categories = ["all", "datastack", "softwarestack", "tools"];

const getCategoryLabel = (category) => {
  const labels = {
    all: "All",
    datastack: "Data Stack",
    softwarestack: "Software Stack",
    tools: "Tools",
  };
  return labels[category] || category;
};

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

        {/* Desktop: Button filters */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
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
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Mobile: Dropdown filter */}
        <div className="md:hidden mb-12 flex justify-center">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground cursor-pointer border-none focus:outline-none focus:ring-2 focus:ring-primary/50 capitalize font-medium transition-all duration-300 appearance-none pr-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.7rem center",
              backgroundSize: "1.2em 1.2em",
              paddingRight: "2.5rem",
            }}
          >
            {categories.map((category, key) => (
              <option key={key} value={category}>
                {getCategoryLabel(category)}
              </option>
            ))}
          </select>
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
