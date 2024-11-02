import DynamicChart from "@/components/DynamicLineChart";
import AccountView from "@/components/AccountView";
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
        <main className="flex flex-row-reverse items-center justify-center">
          <div className="flex flex-col items-center">
          <h1 className="text-9xl">Ignas Panavas</h1>
          <h2 className="text-2xl">Student at the University of Georgia</h2>
          </div>
          <div className="w-full max-w-4xl">
            <AccountView/>
          </div>
        </main>
       
        
        
    </div>
  );
}
