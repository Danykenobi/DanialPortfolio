import { ArrowRight, ExternalLink, Github, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Visa Application Tracker",
    description:
      "Full-featured MERN-stack platform with user authentication and CRUD implementation.",
    fullDescription: [
      "Built a web-based Visa Application Tracker that centralizes employee visa requests, document uploads, and approval stages, replacing scattered manual processes, aimed for SLB's Brunei visa policy.",
      "Reduced missed or untracked visa requests by routing all submissions through a single React interface backed by Node.js/Express APIs and a MongoDB data model linked to authenticated users.",
      "Shortened HR follow-up time by presenting each request's end-to-end status (documents, DOE, Labor, Immigration, Endorsement) on structured user and admin dashboards, instead of relying on ad-hoc updates.",
      "Improved traceability of decisions by logging every admin action (document approval, stage decision, reopening requests) into an audit trail stored with each visa record.",
      "Reduced back-and-forth clarification between HR, admins, and employees by enforcing clear workflows: users submit requests and see progress, while admins review documents, update stages, and manage rejections/approvals through protected routes.",
      "Increased system robustness by implementing JWT-based authentication, role-based access (user vs admin), and dedicated admin APIs for approvals, ensuring only authorized actions can change visa status."
    ],
    images: [
      "/projects/VISA/Visa1.png",
      "/projects/VISA/Visa2.png",
      "/projects/VISA/Visa3.png",
      "/projects/VISA/Visa4.png",
      "/projects/VISA/Visa5.png",
      "/projects/VISA/Visa6.png",
      "/projects/VISA/Visa7.png",
      "/projects/VISA/Visa8.png",
      "/projects/VISA/Visa9.png",
      "/projects/VISA/Visa10.jpg",
      "/projects/VISA/Visa11.jpg",
      "/projects/VISA/Visa12.jpg",
      "/projects/VISA/Visa13.jpg",
      "/projects/VISA/Visa14.jpg",
      "/projects/VISA/Visa15.jpg",
      "/projects/VISA/Visa16.jpg",
      "/projects/VISA/Visa17.jpg",
      "/projects/VISA/Visa18.jpg",
    ],
    tags: ["MERN Stack"],
    demoUrl: "#",
    githubUrl: "https://github.com/Danykenobi/Visa-Application-Tracker.git",
    features: [
      "User authentication",
      "CRUD operations",
      "Real-time updates",
      "Data persistence",
      "Admin dashboard"
    ],
  },
  {
    id: 2,
    title: "Visa Application Tracker",
    description:
      "Centralized employee visa submissions and document uploads using Power Apps.",
    fullDescription: [
      "Centralized employee visa submissions and document uploads using Power Apps and Power Automate, eliminating missed or untracked requests by 100%.",
      "Built end-to-end dashboards for HR and admins to track documents and approval stages, reducing follow-up time by 50%.",
      "Implemented an audit trail for all admin actions and enforced clear workflows, cutting back-and-forth clarifications between HR, admins, and employees by 60%.",
      "Leveraged Dataverse to securely store and manage visa records, enabling structured data management, user authentication, and reliable reporting across the process."
    ],
    images: [
      "/projects/VAT/VAT1.png",
      "/projects/VAT/VAT2.png",
      "/projects/VAT/VAT3.png",
      "/projects/VAT/VAT4.png",
      "/projects/VAT/VAT5.png",
      "/projects/VAT/VAT6.png",
      "/projects/VAT/VAT7.png",
      "/projects/VAT/VAT8.png",
    ],
    tags: ["Microsoft Power Apps", "Power Automate", "Dataverse"],
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "100% eliminated missed visa submissions",
      "50% reduction in follow-up time",
      "60% fewer clarifications needed",
      "Secure Dataverse storage",
      "Audit trail tracking",
      "Real-time document uploads"
    ],
  },
  {
    id: 3,
    title: "UTP Found & Lost",
    description:
      "Automated lost-and-found coordination system using Power Apps and SharePoint.",
    fullDescription: [
      "Reduced manual lost-and-found coordination by automating 100% of item submissions and notifications, through Power Apps and Power Automate workflows.",
      "Improved item reporting and search turnaround time by enabling real-time submission and instant database updates, through centralized data storage in SharePoint.",
      "Increased data consistency by standardizing all lost-and-found records with mandatory fields, categories, and image uploads, using structured Power Apps forms."
    ],
    images: [
      "/projects/UTP Found & Lost/FNL1.png",
      "/projects/UTP Found & Lost/FNL2.png",
      "/projects/UTP Found & Lost/FNL3.png",
      "/projects/UTP Found & Lost/FNL4.png",
      "/projects/UTP Found & Lost/FNL5.png",
      "/projects/UTP Found & Lost/FNL6.png",
      "/projects/UTP Found & Lost/FNL7.png",
      "/projects/UTP Found & Lost/FNL8.png",
      "/projects/UTP Found & Lost/FNL9.png",
      "/projects/UTP Found & Lost/FNL10.png",
    ],
    tags: ["Microsoft Power Apps", "Power Automate", "SharePoint"],
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "100% automated submissions",
      "Real-time database updates",
      "Instant notifications",
      "Standardized data fields",
      "Image upload support",
      "Centralized storage"
    ],
  },
  {
    id: 4,
    title: "IRM – Integrity and Retirement Metrics",
    description:
      "Automated ETL pipeline with dashboards for HR seniority and retirement tracking.",
    fullDescription: [
      "Built an automated ETL pipeline using Power Automate that extracts, transforms, and loads HR datasets from SharePoint, enabling accurate seniority and retirement metrics with 100% automated data processing.",
      "Implemented automated email notifications for employees approaching seniority and retirement milestones (6–12 months in advance), eliminating manual email preparation entirely and ensuring timely 100% coverage.",
      "Developed a Power Apps dashboard for HRBP managers to track targeted and notified employees, with on-demand Excel exports, reducing manual reporting effort by 60%."
    ],
    images: [
      "/projects/IRM/IRM1.jpeg",
      "/projects/IRM/IRM2.jpeg",
      "/projects/IRM/IRM3.jpeg",
      "/projects/IRM/IRM4.jpeg",
      "/projects/IRM/IRM5.jpeg",
      "/projects/IRM/IRM6.jpeg",
    ],
    tags: ["Microsoft Power Apps", "Power Automate", "SharePoint", "Power BI"],
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Automated ETL pipeline",
      "100% data processing automation",
      "Proactive milestone notifications",
      "100% coverage guarantee",
      "Manager dashboard",
      "Excel export capabilities"
    ],
  },
  {
    id: 5,
    title: "Jersey Order Management & Automation",
    description:
      "End-to-end automated order management system for jersey orders.",
    fullDescription: [
      "Developed and maintained an end-to-end jersey order management solution fully automated with order capture, centralized tracking, and improved data accuracy, by integrating Microsoft Forms, Power Automate, SharePoint, and Power Apps.",
      "Streamlined manual order processing with 100% automated data flow from customer submission to order management, by designing Power Automate workflows to store Microsoft Forms responses into SharePoint.",
      "Improved order visibility and reporting with real-time insights into total orders, jersey types, and size distribution, by building structured data models and summaries within Power Apps.",
      "Strengthened order verification and dispute prevention with photo-based proof of jersey collection per customer, by developing a mobile-enabled Power Apps feature with image capture and centralized storage."
    ],
    images: [
      "/projects/DNA/DNA1.png",
      "/projects/DNA/DNA2.png",
      "/projects/DNA/DNA3.png",
      "/projects/DNA/DNA4.png",
      "/projects/DNA/DNA5.png",
    ],
    tags: ["Microsoft Power Apps", "Power Automate", "SharePoint"],
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "100% automated order processing",
      "Centralized tracking",
      "Real-time reporting",
      "Mobile-enabled photo capture",
      "Proof of collection system",
      "Structured data models"
    ],
  },
  {
    id: 6,
    title: "Asia Visibility – Logistics Regulations & Shipment Planning Platform",
    description:
      "Centralized international and domestic logistics planning platform with automated workflows.",
    fullDescription: [
      "Streamlined international and domestic logistics planning by centralizing shipment regulations across multiple Asian countries, reducing dependency on manual email and call-based consultations, using Microsoft Power Apps, SharePoint, and Power Automate.",
      "Improved shipment planning efficiency by providing a self-service, real-time logistics visibility platform, minimizing response delays and information bottlenecks, through automated data workflows and a centralized SharePoint repository.",
      "Enhanced data accuracy and compliance readiness by consolidating fragmented logistics documents into a single source of truth, lowering the risk of outdated or inconsistent regulatory information, using role-based access control and version management in SharePoint.",
      "Accelerated decision-making for logistics teams by enabling instant access to import/export requirements and domestic shipment details, measured by faster planning turnaround and reduced specialist workload, leveraging Power Apps dashboards with dynamic filtering.",
      "Reduced operational inefficiencies in logistics communication by replacing repetitive manual queries with an automated visibility platform, measured by decreased reliance on Import/Export specialists, through Power Automate notification and update workflows.",
      "Strengthened supply chain transparency and scalability by designing a structured logistics information system, supporting multi-country expansion and future regulatory updates, using low-code Power Platform architecture."
    ],
    images: [
      "/projects/AVP/AVP1.png",
      "/projects/AVP/AVP2.png",
      "/projects/AVP/AVP3.png",
      "/projects/AVP/AVP4.png",
      "/projects/AVP/AVP5.png",
      "/projects/AVP/AVP6.png",
      "/projects/AVP/AVP7.png",
      "/projects/AVP/AVP8.png",
      "/projects/AVP/AVP9.png",
      "/projects/AVP/AVP10.png",
    ],
    tags: ["Microsoft Power Apps", "Power Automate", "SharePoint"],
    demoUrl: "#",
    githubUrl: "#",
    features: [
      "Centralized shipment regulations",
      "Self-service visibility platform",
      "Real-time logistics tracking",
      "Automated data workflows",
      "Role-based access control",
      "Dynamic filtering dashboards",
      "Multi-country scalability",
      "Automated notifications"
    ],
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleNextImage = () => {
    if (selectedProject) {
      const maxIndex = selectedProject.images.length - 1;
      setCurrentImageIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      const maxIndex = selectedProject.images.length - 1;
      setCurrentImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
              className="group glass-card overflow-hidden card-hover cursor-pointer transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs font-medium border border-primary rounded-full text-primary bg-transparent">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 p-3 rounded-full bg-primary hover:bg-primary/80 text-primary-foreground transition-colors duration-200 z-50 shadow-lg"
            >
              <X size={28} strokeWidth={3} />
            </button>

            <div className="glass-card-modal max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">

              {/* Project Image with Carousel */}
              <div className="h-96 overflow-hidden relative">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setFullscreenImage(selectedProject.images[currentImageIndex])}
                />
                
                {/* Left Arrow - Only show if multiple images and not first */}
                {selectedProject.images.length > 1 && currentImageIndex > 0 && (
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary/80 hover:bg-primary text-primary-foreground transition-colors duration-200"
                  >
                    <ChevronRight size={24} className="rotate-180" />
                  </button>
                )}
                
                {/* Right Arrow - Only show if multiple images */}
                {selectedProject.images.length > 1 && (
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary/80 hover:bg-primary text-primary-foreground transition-colors duration-200"
                  >
                    <ChevronRight size={24} />
                  </button>
                )}
                
                {/* Image Dots Indicator */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex
                            ? "bg-gray-700 w-6"
                            : "bg-gray-500 hover:bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Header Section */}
                <div>
                  <h2 className="text-4xl font-bold mb-4 text-center">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap justify-center gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="px-4 py-1.5 text-sm font-semibold rounded-full border border-primary text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border/30"></div>

                {/* About Section */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">About This Project</h3>
                  <div className="space-y-4">
                    {Array.isArray(selectedProject.fullDescription) ? (
                      selectedProject.fullDescription.map((sentence, idx) => (
                        <p key={idx} className="text-muted-foreground leading-relaxed text-base">
                          {sentence}
                        </p>
                      ))
                    ) : (
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {selectedProject.fullDescription}
                      </p>
                    )}
                  </div>
                </div>

                {/* Features Section */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="border-t border-border/30"></div>

                {/* Action Buttons - Only show for first project (MERN) */}
                {selectedProject.id === 1 && (
                  <div className="flex gap-4 justify-center">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2 font-medium min-w-[160px] justify-center"
                    >
                      <Github size={18} />
                      Github
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
{/* Fullscreen Image Viewer */}
        {fullscreenImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setFullscreenImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-8 right-8 p-3 rounded-full bg-primary hover:bg-primary/80 text-primary-foreground transition-colors duration-200 z-50 shadow-lg"
            >
              <X size={28} strokeWidth={3} />
            </button>

            {/* Fullscreen Image */}
            <img
              src={fullscreenImage}
              alt="fullscreen"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Danykenobi/Visa-Application-Tracker.git"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
