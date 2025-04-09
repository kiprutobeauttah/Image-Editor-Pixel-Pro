import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function TemplatesPage() {
  // Sample templates data
  const templates = [
    { id: 1, name: "Instagram Post", category: "social", thumbnail: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Facebook Cover", category: "social", thumbnail: "/placeholder.svg?height=200&width=350" },
    { id: 3, name: "Twitter Header", category: "social", thumbnail: "/placeholder.svg?height=200&width=350" },
    { id: 4, name: "YouTube Thumbnail", category: "social", thumbnail: "/placeholder.svg?height=200&width=350" },
    { id: 5, name: "Business Card", category: "print", thumbnail: "/placeholder.svg?height=200&width=350" },
    { id: 6, name: "Flyer", category: "print", thumbnail: "/placeholder.svg?height=200&width=250" },
    { id: 7, name: "Resume", category: "print", thumbnail: "/placeholder.svg?height=200&width=150" },
    { id: 8, name: "Website Banner", category: "web", thumbnail: "/placeholder.svg?height=200&width=350" },
    { id: 9, name: "Email Header", category: "web", thumbnail: "/placeholder.svg?height=200&width=350" },
  ]

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Templates</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Start with professionally designed templates for any project.
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search templates..." className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Templates</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="print">Print</TabsTrigger>
          <TabsTrigger value="web">Web</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {templates.map((template) => (
              <Card key={template.id} className="overflow-hidden">
                <div className="aspect-square relative group bg-muted">
                  <img
                    src={template.thumbnail || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm" asChild>
                      <Link href={`/editor?template=${template.id}`}>Use Template</Link>
                    </Button>
                  </div>
                </div>
                <CardFooter className="p-3">
                  <div>
                    <h3 className="font-medium">{template.name}</h3>
                    <p className="text-xs text-muted-foreground capitalize">{template.category}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="social">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {templates
              .filter((template) => template.category === "social")
              .map((template) => (
                <Card key={template.id} className="overflow-hidden">
                  <div className="aspect-square relative group bg-muted">
                    <img
                      src={template.thumbnail || "/placeholder.svg"}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button size="sm" asChild>
                        <Link href={`/editor?template=${template.id}`}>Use Template</Link>
                      </Button>
                    </div>
                  </div>
                  <CardFooter className="p-3">
                    <div>
                      <h3 className="font-medium">{template.name}</h3>
                      <p className="text-xs text-muted-foreground capitalize">{template.category}</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="print">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {templates
              .filter((template) => template.category === "print")
              .map((template) => (
                <Card key={template.id} className="overflow-hidden">
                  <div className="aspect-square relative group bg-muted">
                    <img
                      src={template.thumbnail || "/placeholder.svg"}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button size="sm" asChild>
                        <Link href={`/editor?template=${template.id}`}>Use Template</Link>
                      </Button>
                    </div>
                  </div>
                  <CardFooter className="p-3">
                    <div>
                      <h3 className="font-medium">{template.name}</h3>
                      <p className="text-xs text-muted-foreground capitalize">{template.category}</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="web">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {templates
              .filter((template) => template.category === "web")
              .map((template) => (
                <Card key={template.id} className="overflow-hidden">
                  <div className="aspect-square relative group bg-muted">
                    <img
                      src={template.thumbnail || "/placeholder.svg"}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button size="sm" asChild>
                        <Link href={`/editor?template=${template.id}`}>Use Template</Link>
                      </Button>
                    </div>
                  </div>
                  <CardFooter className="p-3">
                    <div>
                      <h3 className="font-medium">{template.name}</h3>
                      <p className="text-xs text-muted-foreground capitalize">{template.category}</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
