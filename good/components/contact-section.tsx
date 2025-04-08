"use client"

import { SocialButton } from "@/components/social-button"
import { Github, Mail, BookOpen } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-12 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Interested in collaborating or learning more about my work? Feel free to reach out through any of the channels
          below.
        </p>
        <div className="flex justify-center gap-6">
          <SocialButton icon={Mail} label="Email" tooltip="xsyyyccc@gmail.com" onClick={(e) => e.preventDefault()} />
          <SocialButton icon={Github} label="GitHub" tooltip="GitHub" href="https://github.com/ChenYang-personal" />
          <SocialButton icon={BookOpen} label="Blog" tooltip="Blog" href="https://nickstylesync.blogspot.com/" />
        </div>
      </div>
    </section>
  )
}
