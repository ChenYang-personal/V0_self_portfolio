import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">Hey, I'm Chen Yang.</h1>
          <p className="text-2xl text-gray-800">Welcome to my personal website!</p>
          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-6 h-auto text-base" asChild>
            <a href="#projects">
              VIEW MY PROJECTS
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ava.jpg-xq0UBTexRnbbNu5TfP8sCAxKnl3UmE.jpeg"
            alt="Chen Yang"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
