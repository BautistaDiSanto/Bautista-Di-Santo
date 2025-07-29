import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Outside The Cube",
      description: "A software agency offering end-to-end development, cloud solutions, CI/CD, UX design, and agile squads for web and mobile projects.",
      demoLink: "https://outsidecube.com/",
      image: "https://outsidecube.com/assets/banner.f75c5946.webp"
    }
  ];

  return (
    <AnimatedSection className="mt-24 relative" animation="fade-up">
      {/* Subtle background */}
      <div className="absolute inset-0"></div>
      {/* Subtle decorative elements */}
      <div className="absolute -top-10 left-0 w-32 h-32 bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 right-0 w-32 h-32 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center relative">
          Featured Work & Projects
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-400 rounded-full"></div>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <AnimatedSection
              key={project.id}
              animation="fade-up"
              className="overflow-visible"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                demoLink={project.demoLink}
                image={project.image}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}