import Link from 'next/link';

export default function About() {
  return (
    <main className="h-screen overflow-hidden flex items-center justify-center bg-gray-200 p-4 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
        {/* Personal Section */}
        <Link href="/personal" className="h-full overflow-hidden p-0 bg-cover bg-center shadow-md relative" style={{ backgroundImage: "url('/resources/podium.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105">
            <h2 className="text-white text-2xl font-bold mb-2">Personal</h2>
            <p className="text-white">Insights into hobbies, values, and daily routines.</p>
          </div>
        </Link>

        {/* Academic Section */}
        <Link href="/academic" className="h-full overflow-hidden p-0 bg-cover bg-center shadow-md relative" style={{ backgroundImage: "url('/resources/reception.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105">
            <h2 className="text-white text-2xl font-bold mb-2">Academic</h2>
            <p className="text-white">Background, current studies, and academic interests.</p>
          </div>
        </Link>

        {/* Professional Section */}
        <Link href="/professional" className="h-full overflow-hidden p-0 bg-cover bg-center shadow-md relative" style={{ backgroundImage: "url('/resources/professional.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105">
            <h2 className="text-white text-2xl font-bold mb-2">Professional</h2>
            <p className="text-white">Work experience, skills, and career aspirations.</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
