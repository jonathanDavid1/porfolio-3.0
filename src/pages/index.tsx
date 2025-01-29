import CallToAction from "@/components/CallToAction";
import ContactMe from "@/components/contactMe";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} relative`}>
          <div className="fixed inset-0 z-0">
            <img
              src="/background.jpg" // Reemplaza con la ruta a tu archivo SVG
              alt="Fondo de pantalla"
              className="w-full h-full object-cover"
            />
          </div>
            <Navbar />
            <main className="container mx-auto py-8 relative z-10">
              <Intro/>
              <Skills />
              <CallToAction/>
              <Projects/>
              <ContactMe/>
              </main>
            <WhatsAppButton/>
        </div>
    );
}
