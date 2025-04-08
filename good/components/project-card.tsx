import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  projectUrl: string
}

export function ProjectCard({ title, description, imageSrc, imageAlt, projectUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <div className="relative h-[200px] w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex gap-4">
          <Button variant="outline" className="mt-2" asChild>
            <Link href={projectUrl} target="_blank">
              View Project
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
