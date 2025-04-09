import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eraser, Wand2, Zap, CloudSun, Paintbrush, Upload } from "lucide-react"

export default function AIStudioPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Studio</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Powerful AI tools to transform your images with just a few clicks.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="rounded-full bg-primary/10 p-3 w-fit mb-2">
              <Eraser className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Background Remover</CardTitle>
            <CardDescription>Automatically remove backgrounds with perfect edge detection in seconds.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-md bg-muted flex items-center justify-center">
              <Upload className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Remove Background</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="rounded-full bg-primary/10 p-3 w-fit mb-2">
              <Wand2 className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Object Remover</CardTitle>
            <CardDescription>Remove unwanted objects and people with intelligent content-aware fill.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-md bg-muted flex items-center justify-center">
              <Upload className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Remove Objects</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="rounded-full bg-primary/10 p-3 w-fit mb-2">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>AI Upscaler</CardTitle>
            <CardDescription>Enhance low-resolution images with AI that adds realistic details.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-md bg-muted flex items-center justify-center">
              <Upload className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Upscale Image</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="rounded-full bg-primary/10 p-3 w-fit mb-2">
              <CloudSun className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Sky Replacement</CardTitle>
            <CardDescription>Replace the sky in your photos with beautiful alternatives.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-md bg-muted flex items-center justify-center">
              <Upload className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Replace Sky</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="rounded-full bg-primary/10 p-3 w-fit mb-2">
              <Paintbrush className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Style Transfer</CardTitle>
            <CardDescription>Transform your photos into artwork inspired by famous artistic styles.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-md bg-muted flex items-center justify-center">
              <Upload className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Apply Style</Button>
          </CardFooter>
        </Card>

        <Card className="border-dashed">
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
            <CardDescription>More AI-powered tools are on the way!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-md bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Stay tuned!</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline" disabled>
              Coming Soon
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
