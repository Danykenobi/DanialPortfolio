import { Code, Database, BarChart3 } from "lucide-react";

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
              Passionate Data Engineer & Analyst
            </h3>

            <p className="text-muted-foreground">
              I am an Information Systems graduate with a strong interest in data engineering and data analytics, 
              supported by hands-on experience in Python, SQL, and ETL workflows. 
              I am passionate about building clean, reliable datasets that support analytics, reporting, and informed decision-making.
            </p>

            <p className="text-muted-foreground">
              What differentiates me is how I approach data responsibility. 
              Beyond making queries work, I focus on data accuracy, clarity, and trustworthiness for the end users. 
              I am comfortable working in structured environments, documenting processes, and continuously improving data pipelines. 
              With a strong learning mindset and a high sense of ownership, 
              I am able to contribute effectively as a junior professional while steadily developing my expertise in data engineering and analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1GQ9chYn7cBFLPUw9kKXE6f6gvWMB-9Zn/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="glass-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Engineering & ETL</h4>
                  <p className="text-muted-foreground">
                    Designing and maintaining data pipelines using Python and SQL to transform and prepare reliable data for analytics and reporting.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analytics & Business Intelligence</h4>
                  <p className="text-muted-foreground">
                    Analyzing data, building dashboards, and generating insights using SQL, Python, and BI tools to support data-driven decision-making.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Development</h4>
                  <p className="text-muted-foreground">
                    Developing structured, maintainable applications and scripts with a focus on data-driven systems and automation.
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
