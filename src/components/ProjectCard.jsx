export default function ProjectCard({ project, onClick }) {
  return (
    <div
      className="rounded-lg overflow-hidden border border-[#30363D] hover:border-[#238636] transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-[#E6EDF3] mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-[#30363D] text-[#E6EDF3]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}