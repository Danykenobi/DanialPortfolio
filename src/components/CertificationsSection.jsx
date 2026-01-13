import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const certifications = [
  {
    id: 1,
    title: "AWS Educate Introduction to Cloud 101 - Training Badge",
    org: "Amazon",
    issuingDate: "12/21/2025",
    image: "/projects/Badge1.png",
    url: "https://www.credly.com/badges/9b32948c-df1e-4ac5-80be-d6a59f88db07/public_url",
    skills: [
      "Amazon Web Service (AWS)",
      "AWS Cloud",
      "AWS Cloud Computing",
      "Cloud Foundations"
    ],
  },
  {
    id: 2,
    title: "AWS Educate Introduction to Generative AI - Training Badge",
    org: "Amazon",
    issuingDate: "12/21/2025",
    image: "/projects/Badge2.png",
    url: "https://www.credly.com/badges/5892fc5f-393c-4589-87d6-a7784a1721ef/public_url",
    skills: [
      "Amazon Web Services (AWS)",
      "AI",
      "AI and ML on AWS - Foundational",
      "AWS Cloud"
    ],
  },
  {
    id: 3,
    title: "AWS Educate Machine Learning Foundations - Training Badge",
    org: "Amazon",
    issuingDate: "12/21/2025",
    image: "/projects/Badge3.png",
    url: "https://www.credly.com/badges/059194a6-be28-4ce7-8a48-d6214f6e3364/public_url",
    skills: [
      "Amazon Web Services (AWS)",
      "AWS Cloud",
      "ML"
    ],
  },
  {
    id: 4,
    title: "Google Business Intelligence Professional Certificate",
    org: "Google",
    issuingDate: "12/22/2025",
    image: "/projects/Cert1.png",
    url: "https://coursera.org/share/cbd1f22956c176d80a49aa8fcec08d47",
    skills: [
      "Data Pipelines",
      "Data Mart",
      "Business Analysis",
      "Stakeholder Engagement",
      "Database Design",
      "Interviewing Skills",
      "AI Enablement",
      "ETL",
      "Business Reporting",
      "Data Modelling",
      "Data Warehousing"
    ],
  },
];

export const CertificationsSection = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);

  return (
    <section id="certifications" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary"> Certifications</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Certifications and badges that validate my expertise and commitment to continuous learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCertification(cert)}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer transition-all duration-300 flex flex-col items-center p-6"
            >
              <div className="h-48 w-48 overflow-hidden rounded-lg mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="text-center font-semibold text-base line-clamp-3">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Certification Modal */}
        {selectedCertification && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertification(null)}
              className="absolute top-8 right-8 p-3 rounded-full bg-primary hover:bg-primary/80 text-primary-foreground transition-colors duration-200 z-50 shadow-lg"
            >
              <X size={28} strokeWidth={3} />
            </button>

            <div className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Certification Image */}
              <div className="h-72 overflow-hidden flex items-center justify-center bg-secondary/30 p-8">
                <img
                  src={selectedCertification.image}
                  alt={selectedCertification.title}
                  className="h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Header Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-center">
                    {selectedCertification.title}
                  </h2>
                </div>

                {/* Divider */}
                <div className="border-t border-border/30"></div>

                {/* Certification Details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                      Issuing Organization
                    </h4>
                    <p className="text-lg font-medium text-foreground">
                      {selectedCertification.org}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                      Issuing Date
                    </h4>
                    <p className="text-lg font-medium text-foreground">
                      {selectedCertification.issuingDate}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border/30"></div>

                {/* Skills Section */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground text-center">Skills Gained</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {selectedCertification.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-sm font-medium rounded-full border border-primary text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border/30"></div>

                {/* Action Button */}
                <div>
                  <a
                    href={selectedCertification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full cosmic-button flex items-center justify-center gap-2 py-3"
                  >
                    <ExternalLink size={18} />
                    View Credential
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
