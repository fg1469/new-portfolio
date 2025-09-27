import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-game-primary/20 via-game-dark to-game-dark z-0" />
        <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-game text-game-light animate-float">
            <span className="text-game-accent">Fritzgerald</span> Gabriel
          </h1>
          <p className="text-lg md:text-xl text-game-light/80 font-sans">
            Engineering • Design • Problem-Solving
          </p>
          <div className="flex justify-center gap-4">
            <Button
              href="#about"
              className="bg-game-primary hover:bg-game-primary/80 text-white font-game"
            >
              Start Journey
            </Button>
            <Button
              href="#contact"
              variant="outline"
              className="border-game-accent text-game-accent hover:bg-game-accent/20 font-game"
            >
              Contact
            </Button>
          </div>
        </div>
      </section>

      {/* Profile Image Section */}
      <section className="py-20 px-6 bg-game-dark/80">
        <div className="max-w-7xl mx-auto">
          <Card className="p-11 bg-game-dark/50 border-game-primary/30 glow-card"> {/* Added glow-card class */}
            <div className="relative w-full aspect-square rounded-lg overflow-hidden game-card">
              <Image
                src="/Opera Snapshot_2025-09-24_040159_www.instagram.com.png"
                alt="Fritzgerald Gabriel"
                width={2138}
                height={2138}
                className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                priority
                quality={100}
              />
            </div>
            <div className="mt-11 text-center">
              <div className="flex justify-center gap-7">
                <Button
                  href="https://www.linkedin.com/in/fritz-g-677a5abb/"
                  target="_blank"
                  variant="ghost"
                  size="icon"
                  className="text-game-light hover:text-game-accent scale-[0.99]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Button>
                <Button
                  href="https://www.instagram.com/cknightez500__"
                  target="_blank"
                  variant="ghost"
                  size="icon"
                  className="text-game-light hover:text-game-accent scale-[0.99]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-game text-game-accent text-center mb-12 about-header-hover">About Me</h2>
          <Card className="p-6 bg-game-dark/50 border-game-primary/30 glow-card"> {/* Added glow-card class */}
            <ScrollArea className="h-[400px] w-full pr-4">
              <div className="space-y-6 text-game-light/90">
                <p>
                  My name is Fritzgerald Gabriel, and I am passionate about engineering, design, and problem-solving. 
                  Over the years, I have gained hands-on experience in technical environments where precision, creativity, 
                  and communication are equally important.
                </p>
                <h3 className="text-xl font-game text-game-secondary">Engineering & Design Experience</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Assisted with tools and equipment including 3D printers, vinyl cutters, and soldering kits</li>
                  <li>Hosted workshops on design software and fabrication techniques</li>
                  <li>Designed and repaired functional items such as braille door signs</li>
                  <li>Mentored youth in developing foundational engineering skills</li>
                </ul>
                <h3 className="text-xl font-game text-game-secondary">Professional Experience</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-game-accent">Engineering Department (City of Stamford)</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Surveyed and mapped over 54,500 sq ft of damaged infrastructure</li>
                      <li>Recorded detailed meeting notes on development projects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-game-accent">Community Service (DOMUS Kids, Inc.)</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Guided youth in maintaining and harvesting crops</li>
                      <li>Coordinated volunteer schedules and managed projects</li>
                    </ul>
                  </div>
                </div>
                <h3 className="text-xl font-game text-game-secondary">Future Aspirations</h3>
                <p>
                  I am preparing to join the Air Force Reserve as an officer, where I hope to further develop my leadership, 
                  technical, and strategic skills. I view my career as a blend of service, engineering, and personal growth, 
                  with the goal of contributing to both my community and my country.
                </p>
              </div>
            </ScrollArea>
          </Card>
        </div>
      </section>
    </main>
  )
}