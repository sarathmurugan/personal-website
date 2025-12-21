import projectsData from '../data/projects.json';

const Projects = () => {
  const activeProjects = projectsData.filter(project => project.status === 'active');
  const ideaProjects = projectsData.filter(project => project.status === 'idea');

  const ProjectCard = ({ project, isIdea }) => {
    return (
      <div
        className={`border-l-2 pb-8 pl-6 ${
          isIdea
            ? 'border-neutral-700 opacity-60'
            : 'border-neutral-500'
        }`}
      >
        <div className="space-y-3">
          <h2 className={`text-xl font-medium transition-colors ${
            isIdea ? 'text-neutral-400' : 'text-neutral-100 hover:text-neutral-300'
          }`}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {project.title}
              <svg
                className="w-4 h-4 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </h2>
          <p className={`leading-relaxed ${
            isIdea ? 'text-neutral-500' : 'text-neutral-400'
          }`}>
            {project.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="space-y-16">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-medium">Projects</h1>
          <p className="text-lg text-[#CC5500]">
            A collection of projects I'm working on.
          </p>
        </div>

        <div className="space-y-12 pt-4">
          {/* Building Now Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-medium text-black">Building Now</h2>
            <div className="space-y-0">
              {activeProjects.length > 0 ? (
                activeProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} isIdea={false} />
                ))
              ) : (
                <p className="text-black text-sm pl-6">No active projects at the moment.</p>
              )}
            </div>
          </section>

          {/* The Backlog Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-medium text-black">The Backlog</h2>
            <div className="space-y-0">
              {ideaProjects.length > 0 ? (
                ideaProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} isIdea={true} />
                ))
              ) : (
                <p className="text-neutral-500 text-sm pl-6">No ideas in the backlog yet.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;

