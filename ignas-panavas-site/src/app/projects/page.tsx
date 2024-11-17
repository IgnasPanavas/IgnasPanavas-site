import ProjectTile from "@/components/project-tile";


export default function Projects() {
  return (
    <div>
      <main className='flex justify-center items-center min-h-screen '>
        <div className="flex flex-col items-center min-h-screen py-24 space-y-5">
            <h1 className="text-5xl">Projects</h1>
            <p>Check out my latest creations</p>
            <div className="flex flex-row space-x-5 p-10">
            <ProjectTile title="Day Trading Journal" image="/resources/schwab.jpg" description="This project uses Python and PostgreSQL to receive and process
             all trade transactions from a Charles Schwab account. The consolidated trades can then be extracted in a CSV format for records or to be used as a trading journal."/>
            <ProjectTile title="Options Dealer Positioning Analysis" image="/resources/vol_surface.png" description="This project uses options market data to gain insights into
              dealer positioning dynamics. It also provides visualizations for option volatility surfaces, showing impacts of second order derivatives on option pricing. 
              Technology Used: Python, MatPlotLib."/>
            <ProjectTile title="Schwab Scraper" image="/resources/schwab.jpg" description="This project worked to make a trade journal "/>
            </div>
        </div>
        
      </main>
    </div>
  );
}   