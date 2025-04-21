import { FiEye } from "react-icons/fi";

const ProjectCard = ({ image, title, description, tags, detailsLink, previewLink }) => {
  return (
    <div className="bg-[#404040] hover:bg-[#4d4d4d] rounded-xl shadow-md p-4 w-full max-w-sm transition duration-300 group">
      <div className="rounded-lg overflow-hidden border border-gray-600">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      <h3 className="text-white text-xl font-bold mt-4 relative group">
        {title}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </h3>

      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, idx) => (
          <span key={idx} className="bg-[#242424] text-white text-xs font-semibold px-3 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-gray-300 text-sm mt-2 line-clamp-2">{description}</p>

      <div className="flex gap-3 mt-4">
        <a
          href={detailsLink}
          className="bg-white text-[#242424] hover:bg-gray-100 hover:text-black px-4 py-2 rounded-md flex items-center gap-2 text-sm font-bold transition-all duration-300"
        >
          Details{" "}
          <span className="transform transition-transform duration-300 ">
            →
          </span>
        </a>
        <a
          href={previewLink}
          className="border border-white text-white hover:text-black hover:border-gray-300 hover:bg-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-all duration-300"
        >
          Preview <FiEye />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
