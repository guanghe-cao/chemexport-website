import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { Lightbulb, ChevronRight, FlaskConical, Layers, Sun, Droplets } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Tio2CoatingsGuide() {
  usePageMeta({
    title: "How to Choose the Right TiO₂ Grade for Architectural Coatings",
    description:
      "A practical guide to selecting Titanium Dioxide (TiO₂) grades for architectural coatings: rutile vs anatase, hiding power, weatherability, and dispersion—from a B2B export specialist.",
    keywords:
      "titanium dioxide for architectural coatings, TiO2 grade selection, rutile vs anatase, architectural coatings pigment, hiding power TiO2, exterior paint pigment, TiO2 export China",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-6">
                <Link href="/applications" className="hover:text-primary transition-colors">
                  Applications
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">TiO₂ for Architectural Coatings</span>
              </nav>

              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Application Guide — Paint &amp; Coatings
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                How to Choose the Right Titanium Dioxide (TiO₂) Grade for Architectural Coatings
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When formulating high-quality paint, selecting the correct{" "}
                <strong className="text-foreground">architectural coatings pigment</strong> is
                critical to your product's success. Among all pigments, Titanium Dioxide (TiO₂)
                stands out as the industry standard for providing unmatched whiteness, brightness,
                and opacity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                However, not all TiO₂ is created equal. Using the wrong grade can lead to poor
                weatherability, chalking, or inefficient dispersion—ultimately driving up
                manufacturing costs. This guide explores how to evaluate different titanium dioxide
                grades and choose the right match for your specific coating application.
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* Section 1: Rutile vs Anatase */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <FlaskConical className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    1. The Basics: Rutile vs Anatase
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The first step in selecting TiO₂ for coatings is understanding its two main
                  crystalline structures. When comparing{" "}
                  <strong className="text-foreground">rutile vs anatase</strong>, the choice for
                  architectural coatings is almost always rutile.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-foreground mb-3">Rutile TiO₂</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Offers a higher refractive index, bending light more effectively for
                        superior hiding power (opacity). Highly durable and resistant to UV
                        degradation—making it the premier choice for both interior and{" "}
                        <strong className="text-foreground">exterior paints</strong>.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-accent/50">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-foreground mb-3">Anatase TiO₂</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Slightly whiter in raw form, but less durable and highly photoactive.
                        Tends to chalk and degrade paint films under sunlight. Generally
                        reserved for <strong className="text-foreground">indoor applications</strong>{" "}
                        or specific paper and plastics manufacturing.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Mid-page CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-base mb-1">Need a specific TiO₂ grade recommendation?</p>
                    <p className="text-sm opacity-90">
                      Share your resin system and target application—we'll align the grade range and provide COA/MSDS, MOQ, packing, and lead time.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                    <a
                      href="https://wa.me/8615653883028?text=Hello%2C%20I'm%20looking%20for%20TiO2%20for%20architectural%20coatings.%20Please%20share%20grade%20options%2C%20COA%2FMSDS%2C%20MOQ%2C%20packing%2C%20and%20lead%20time."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-white/90 whitespace-nowrap"
                    >
                      WhatsApp Us
                    </a>
                    <Link href="/contact">
                      <Button variant="outline" className="border-white text-white hover:bg-white/10 whitespace-nowrap">
                        Send Inquiry
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Separator />

              {/* Section 2: Key Properties */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent flex-shrink-0">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    2. Key Properties to Evaluate for Architectural Coatings
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Once you have settled on a rutile grade, examine the surface treatments—usually
                  alumina, silica, or zirconia—applied by the manufacturer. These treatments
                  determine how the pigment performs in your formulation.
                </p>

                <div className="space-y-6">
                  {/* Property A */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                          <span className="text-sm font-bold">A</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground mb-2">
                            Outstanding Hiding Power (Opacity)
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            The primary reason to use TiO₂ is to hide the substrate beneath the
                            paint. Grades optimized for high opacity allow manufacturers to use
                            less pigment while achieving full coverage—directly reducing raw
                            material costs. Look for grades with a controlled, narrow particle
                            size distribution.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Property B */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent flex-shrink-0 mt-0.5">
                          <Sun className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground mb-2">
                            Excellent Weatherability
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            For exterior architectural coatings, weatherability is non-negotiable.
                            TiO₂ grades treated with higher levels of silica provide a dense
                            protective barrier that absorbs UV radiation, preventing breakdown of
                            the polymer matrix. This ensures long-lasting gloss retention and
                            chalk resistance.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Property C */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                          <Droplets className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground mb-2">
                            Ease of Dispersion
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            High-quality titanium dioxide grades are designed for rapid wetting
                            and easy dispersion in both water-borne and solvent-borne systems.
                            Excellent dispersibility reduces milling time, lowers energy
                            consumption, and prevents pigment agglomeration—resulting in a
                            smoother, more consistent finish.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Section 3: Matching the Grade */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  3. Matching the Grade to the Application
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-foreground mb-3">
                        High-Gloss Interior / Exterior Paints
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Choose a multi-purpose rutile grade with an alumina/zirconia treatment.
                        This provides the best balance of high gloss, excellent dispersion, and
                        good durability for demanding applications.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-foreground mb-3">
                        Matte and Flat Paints
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Grades with higher levels of porous silica treatment are ideal here.
                        They provide maximum hiding power and optical efficiency in formulations
                        with a high Pigment Volume Concentration (PVC).
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Bottom CTA */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Secure Your Supply of Premium TiO₂
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Choosing the right architectural coatings pigment requires balancing optical
                    performance, durability, and cost-efficiency. We offer a comprehensive
                    portfolio of premium titanium dioxide grades engineered for coatings
                    applications, available for container-level export with full documentation
                    (COA, MSDS, TDS).
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Ready to optimize your paint production?{" "}
                    <Link href="/contact" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80 transition-colors">
                      Contact our technical sales team today
                    </Link>{" "}
                    to request a sample, review Technical Data Sheets (TDS), or discuss the best
                    TiO₂ grade for your next project.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact">
                      <Button size="lg">Send a Technical Inquiry</Button>
                    </Link>
                    <a
                      href="https://wa.me/8615653883028?text=Hello%2C%20I'm%20looking%20for%20TiO2%20for%20architectural%20coatings.%20Please%20share%20grade%20options%2C%20COA%2FMSDS%2C%20MOQ%2C%20packing%2C%20and%20lead%20time."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Related Applications */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Related Applications</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "TiO₂ for Exterior Architectural Paint",
                      href: "/applications/tio2-exterior-architectural-paint",
                    },
                    {
                      title: "TiO₂ for Powder Coating Formulations",
                      href: "/applications/tio2-powder-coating-formulations",
                    },
                    {
                      title: "TiO₂ for Waterborne Industrial Coatings",
                      href: "/applications/tio2-waterborne-industrial-coatings",
                    },
                  ].map((item) => (
                    <Link key={item.href} href={item.href}>
                      <Card className="h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                        <CardContent className="p-4">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </p>
                          <p className="text-xs text-primary mt-1 group-hover:underline">
                            View →
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Back to Applications */}
              <div className="text-center pt-4">
                <Link href="/applications">
                  <Button variant="outline">← Back to All Applications</Button>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
