import StockChart from "@/components/StockChart";

export default function About() {
  return (
    <main className="">
      <section className="w-screen h-screen relative">
        <StockChart />
        <div
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{ top: '30%' }} // adjust this value as needed
        >
          <div className="items-center justify-center">
            <div className="text-white text-3xl text-center">The Stock Market.</div>
            <div className="text-white text-1xl text-center">I am an active trader utilizing options to generate short term cash flow on a consistent basis</div>
          </div>
        </div>
      </section>
    </main>
  );
}
