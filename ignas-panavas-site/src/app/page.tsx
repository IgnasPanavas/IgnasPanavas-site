import DynamicChart from "@/components/DynamicLineChart";


export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
        
        <main className="flex flex-col items-center justify-center">
          <h1 className="text-9xl">Ignas Panavas</h1>
          <h2 className="text-2xl">Student at the University of Georgia</h2>
          <div className="w-full max-w-lg">
            <DynamicChart/>
          </div>
        </main>
       
        
        
    </div>
  );
}
