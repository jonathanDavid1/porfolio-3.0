'use client';
import CallToAction from "@/components/CallToAction";
import ContactMe from "@/components/ContactMe";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Geist, Geist_Mono } from "next/font/google";
import { useTheme } from "@/ThemeContext";
import { FormattedMessage } from "react-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
    const { isDarkMode } = useTheme();

    const backgroundURL = isDarkMode ? '/background-dark.jpg' : '/background-light.jpg';

    return (
        <div className={`${geistSans.variable} ${geistMono.variable} relative`}>
            <div className="fixed inset-0 z-0">
               <img
                   src={backgroundURL}
                   alt={<FormattedMessage id="background.alt" defaultMessage="Fondo de pantalla" />}
                   className="w-full h-full object-cover"
               />
            </div>
            <Navbar/>
            <main className="container mx-auto py-8 relative z-10">
                <Intro/>
                <Skills />
                <CallToAction/>
                <Projects/>
                <ContactMe/>
            </main>
            <WhatsAppButton />
        </div>
    );
}