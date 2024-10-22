import Image from "next/image";

interface ProjectDetails {
    title: string;
    image: string;
    description: string;

}
const ProjectTile: React.FC<ProjectDetails> = ({ title, image, description }) => {
    return (
      <div className="flex flex-col min-w-56 min-h-96 drop-shadow-lg p-5 items-center max-w-56 bg-white">
        <div className="">


        </div>
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        
        <Image src={image} alt={title} width={400} height={400} className="w-32 h-32 object-cover mb-3" />
  
        <p className="text-start">{description}</p>
      </div>
    );
  }
  
  export default ProjectTile;