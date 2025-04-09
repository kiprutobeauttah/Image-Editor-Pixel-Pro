import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import { Plus, MoreHorizontal, Folder, ImageIcon, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ProjectsPage() {
  // Sample projects data
  const projects = [
    { id: 1, name: "Summer Vacation Photos", date: "2023-08-15", thumbnail: "/placeholder.svg?height=200&width=300" },
    { id: 2, name: "Product Photography", date: "2023-09-22", thumbnail: "/placeholder.svg?height=200&width=300" },
    { id: 3, name: "Website Banner", date: "2023-10-05", thumbnail: "/placeholder.svg?height=200&width=300" },
    { id: 4, name: "Social Media Campaign", date: "2023-11-12", thumbnail: "/placeholder.svg?height=200&width=300" },
    { id: 5, name: "Holiday Cards", date: "2023-12-01", thumbnail: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search projects..." className="pl-8" />
        </div>
        <Button variant="outline">
          <Folder className="h-4 w-4 mr-2" />
          All Projects
        </Button>
        <Button variant="outline">
          <ImageIcon className="h-4 w-4 mr-2" />
          Recent
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="aspect-video relative group">
              <img
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="sm" variant="secondary" asChild>
                  <Link href={`/editor?project=${project.id}`}>Edit</Link>
                </Button>
                <Button size="sm" variant="outline">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardFooter className="p-3 flex justify-between">
              <div>
                <h3 className="font-medium">{project.name}</h3>
                <p className="text-xs text-muted-foreground">
                  Last edited: {new Date(project.date).toLocaleDateString()}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}

        <Card className="border-dashed flex flex-col items-center justify-center p-6 h-full aspect-[4/3]">
          <Plus className="h-8 w-8 mb-2 text-muted-foreground" />
          <p className="text-muted-foreground">Create New Project</p>
          <Button variant="outline" className="mt-4" asChild>
            <Link href="/editor">Start Creating</Link>
          </Button>
        </Card>
      </div>
    </div>
  )
}
