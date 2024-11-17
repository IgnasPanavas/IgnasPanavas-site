
import AccountView from "@/components/AccountView";
import Image from "next/image"
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen py-36">
  <main className="flex-col items-center justify-between w-full max-w-6xl space-y-10">
    
    <div className="flex space-x-10">
      {/* Section 2: Account View */}
      <section className="flex-grow basis-1/2">
          <Image
            src="/resources/professional.jpg" // Update with your image path
            alt="Ignas Panavas"
            width={400} // Adjust width
            height={300} // Adjust height
                        
          />
      </section>

      {/* Section 1: Name and Description */}
      <section className="flex flex-col items-start flex-grow basis-1/3 space-y-3">
        <h1 className="text-4xl">Overview</h1>
        <h2 className="text-lg">Hello! I'm a Second-Year undergraduate student at the University of Georgia. 
          I am a double major in Computer Science and Finance with a keen interest in <b>Quantitative Finance</b>.
          <br></br> <br></br>
          I am primarily focused on equity and derivatives trading within the U.S. financial markets. I work with both
          technical analysis and rules-based systemic approaches to trade <u>commons</u>, <u>options</u>, and <u>futures</u> to generate
           consistent short term cashflow. 
           <br></br><br></br>
          As part of my ongoing interest and work within the Quantitative Finance field, I supplement my regular market analysis
          with Options Dealer Positioning analysis. I use gamma positioning to find optimal ranges for volatility expansion.
          <br></br><br></br>
          My passion in the trading field, coupled with my interest in computer science, brings forth an interest in creating technologies
          and products to assist my own trading and that of others. The current financial markets have so many different variables that it can
          be hard to keep track of everything influencing a given position. I'm interested 
          
          </h2>
      </section>
    </div>
    <section>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl"> Trading Progress</h1>
        <div className="flex flex-col">
            <AccountView/>
        </div>

      </div>
    </section>
    <div className="flex items-center justify-center w-full max-w-6xl py-48 ">
      <section className="flex items-center ">
        <h1 className="text-4xl">Check Out Some of My Projects!</h1>
      </section>
    </div>
  </main>
</div>


  );
}
