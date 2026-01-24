import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldCheck, Truck, Lightbulb, BookOpen } from "lucide-react";

export function Quality() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Quality & Compliance</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Our Commitment to Quality
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Quality assurance and compliance are at the heart of our operations. We work exclusively with ISO-certified manufacturers and provide comprehensive documentation for every shipment.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <img src="/images/quality-certification.png" alt="Quality control" className="w-full rounded-lg mb-6" />
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Quality Control Process</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our multi-stage quality assurance process includes supplier verification, batch testing, and comprehensive documentation to ensure consistent product quality.
                  </p>
                  <Link href="/contact">
                    <Button>Request Quality Documentation</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function Export() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <Truck className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Export Capability</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Seamless Export Logistics
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From packaging and container loading to customs documentation, we manage the entire export process for smooth delivery to your destination port.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Export Services</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We handle all aspects of international chemical exports, including packaging, documentation, shipping coordination, and compliance with destination country requirements.
                  </p>
                  <Link href="/contact">
                    <Button>Discuss Your Export Needs</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function Applications() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Applications</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Industry Applications
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our products serve a wide range of construction and industrial applications, from ready-mix concrete to water treatment facilities.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <img src="/images/concrete-admixtures.png" alt="Concrete" className="w-full rounded-lg mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Ready-Mix Concrete</h3>
                  <p className="text-sm text-muted-foreground">High-performance admixtures for concrete production</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <img src="/images/mortar-additives.png" alt="Mortar" className="w-full rounded-lg mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Tile Adhesives</h3>
                  <p className="text-sm text-muted-foreground">Additives for high-quality mortar formulations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function Resources() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Resources</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Knowledge Center
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technical guides, buyer resources, and industry insights to help you make informed sourcing decisions.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Coming Soon</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We're building a comprehensive library of technical guides, specification sheets, and buyer resources. Check back soon for updates.
                  </p>
                  <Link href="/contact">
                    <Button>Contact Us for Technical Information</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
