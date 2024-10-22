import ProjectTile from "@/components/project-tile";


export default function Projects() {
  return (
    <div>
      <main className='flex justify-center items-center min-h-screen '>
        <div className="flex flex-col items-center min-h-screen py-24">
            <h1 className="py-5 text-5xl">Projects</h1>
            <p>Check out my latest creations</p>
            <ProjectTile title="Schwab Scraper" image="/resources/schwab.jpg" description="This project worked to make a trade journal "/>
        </div>
        
      </main>
    </div>
  );
}   