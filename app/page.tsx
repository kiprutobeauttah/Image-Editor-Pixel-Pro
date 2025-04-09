import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Paintbrush, Sparkles, Layers, Share2, Zap, ImageIcon, Wand2, Eraser, ArrowUpRight, Check } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Professional Photo Editing for Everyone
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Transform your photos with powerful editing tools and AI-powered features. No design skills required.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/editor">Try Editor Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background" id="features">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Everything you need to create stunning visuals in one place.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Paintbrush className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Advanced Editing</h3>
              <p className="text-center text-muted-foreground">
                Professional-grade tools for precise adjustments and creative effects.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">AI-Powered Tools</h3>
              <p className="text-center text-muted-foreground">
                Let AI do the heavy lifting with smart object removal, background replacement, and more.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Layer Management</h3>
              <p className="text-center text-muted-foreground">
                Work with multiple layers for complex compositions and non-destructive editing.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
              <div className="rounded-full bg-primary/10 p-3">
                <ImageIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Templates</h3>
              <p className="text-center text-muted-foreground">
                Start with professionally designed templates for any project.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">One-Click Filters</h3>
              <p className="text-center text-muted-foreground">
                Apply stunning filters and effects with a single click.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Easy Sharing</h3>
              <p className="text-center text-muted-foreground">
                Export and share your creations directly to social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI-Powered Magic</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our advanced AI tools make complex edits simple and fast.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mt-12">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Eraser className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Background Remover</h3>
              </div>
              <p className="text-muted-foreground">
                Automatically remove backgrounds with perfect edge detection in seconds.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Wand2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Object Removal</h3>
              </div>
              <p className="text-muted-foreground">
                Remove unwanted objects and people with intelligent content-aware fill.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Upscaler</h3>
              </div>
              <p className="text-muted-foreground">
                Enhance low-resolution images with AI that adds realistic details.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Style Transfer</h3>
              </div>
              <p className="text-muted-foreground">
                Transform your photos into artwork inspired by famous artistic styles.
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Button size="lg" asChild>
              <Link href="/ai">
                Explore AI Studio
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background" id="pricing">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that works for you.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
            {/* Free Plan */}
            <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Free</h3>
                <p className="text-muted-foreground">Basic editing for everyone</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$0</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Basic editing tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>5 exports per month</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>720p max resolution</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Community templates</span>
                </li>
              </ul>
              <Button className="mt-8" variant="outline" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
            {/* Pro Plan */}
            <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm relative">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Popular
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-muted-foreground">For serious creators</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$12</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>All editing tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Unlimited exports</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>4K resolution</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>50 AI credits/month</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Premium templates</span>
                </li>
              </ul>
              <Button className="mt-8" asChild>
                <Link href="/signup">Get Pro</Link>
              </Button>
            </div>
            {/* Business Plan */}
            <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Business</h3>
                <p className="text-muted-foreground">For teams and businesses</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$29</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Brand assets library</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>200 AI credits/month</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Button className="mt-8" variant="outline" asChild>
                <Link href="/signup">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Loved by Creators</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                See what our users are saying about PhotoMaster.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <div className="flex flex-col space-y-4 rounded-lg bg-card p-6 shadow-sm">
              <p className="text-muted-foreground">
                "PhotoMaster has completely transformed my workflow. The AI tools save me hours of tedious editing
                work."
              </p>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/10"></div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Photographer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg bg-card p-6 shadow-sm">
              <p className="text-muted-foreground">
                "As a marketing team, we rely on PhotoMaster daily. The templates and collaboration features are
                game-changers."
              </p>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/10"></div>
                <div>
                  <p className="font-medium">Mark Thompson</p>
                  <p className="text-sm text-muted-foreground">Marketing Director</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg bg-card p-6 shadow-sm">
              <p className="text-muted-foreground">
                "I'm not a designer, but PhotoMaster makes me look like one. The intuitive interface and AI tools are
                incredible."
              </p>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/10"></div>
                <div>
                  <p className="font-medium">Jessica Lee</p>
                  <p className="text-sm text-muted-foreground">Small Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Photos?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Start creating stunning visuals today with our powerful editor and AI tools.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/editor">Try Editor Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
