import Image from "next/image";

interface ProjectDetails {
    title: string;
    image: string;
    description: string;

}
const ProjectTile: React.FC<ProjectDetails> = ({ title, image, description }) => {
    return (
      <div className="flex flex-col min-w-60 min-h-96 drop-shadow-lg p-5 items-center max-w-56 bg-white ">
        <div className="items-start space-y-6">
        <div
        className="w-full h-32 bg-cover bg-center mb-3"
        style={{ backgroundImage: `url(${image})` }}
      >
      </div>
      <div>
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-start">{description}</p>
        </div>
        <button className="border-2 border-black  p-2 rounded-3xl min-w-36 font-bold">Find Out More</button>
        </div>
      </div>
    );
  }
  
  export default ProjectTile;