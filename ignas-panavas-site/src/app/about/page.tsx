import Image from "next/image"
import Gallery from "@/components/Gallery"
export default function About() {
    return (
      <div>
        <main className='flex justify-center items-center min-h-screen'>
            <div className="flex flex-col justify-center">
            <div className="flex flex-1 flex-col items-center py-24 space-y-5 ">
                <h1 className="text-5xl">About Me</h1>
                <p className="text-center max-w-2xl">
                I'm Ignas Panavas, a Computer Science and Finance student at the University of Georgia. 
                Passionate about building innovative software solutions, I enjoy blending my technical skills with financial insights.
                When I'm not coding or analyzing markets, you can find me running with NEST, sipping iced coffee, or exploring antique stores.
                </p>
                <p className="text-center max-w-2xl">
                Whether it's crafting full-stack applications, designing trading journals, or leading projects, I strive to deliver impactful results. 
                Let's create something amazing together!
                </p>
            </div>
                <div className="flex flex-1">
                        <Gallery/>
                    
                </div>
            
          </div>
        </main>
      </div>
    );
  }
  