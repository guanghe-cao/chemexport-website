import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Lightbulb, ChevronRight } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function IronOxideConcrete() {
  usePageMeta({
    title: "Iron Oxide Pigments for Concrete & Construction | ShiChem Industrial",
    description:
      "Sourcing iron oxide pigments for concrete, pavers, and cementitious systems: grade selection, dosage, weather resistance, and container-level export with COA/MSDS.",
    keywords:
      "iron oxide for concrete, iron oxide pigment construction, iron oxide paving, colored concrete pigment, iron oxide export China",
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
                <span className="text-foreground">Iron Oxide for Concrete</span>
              </nav>

              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Application Guide — Rubber &amp; Construction
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Iron Oxide Pigments for Concrete &amp; Construction Applications
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Content for this application guide is coming soon. We are currently preparing
                detailed technical guidance on selecting and sourcing{" "}
                <strong className="text-foreground">iron oxide pigments for concrete</strong>,
                covering grade selection, dosage ranges, weather resistance, and export
                documentation requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Looking for Iron Oxide for Concrete?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our technical sales team can assist with grade selection, MOQ, packaging,
                    and export documentation now—even while this guide is in progress.
                    Contact us directly with your application requirements.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact">
                      <Button size="lg">Send a Technical Inquiry</Button>
                    </Link>
                    <a
                      href="https://wa.me/8615653883028?text=Hello%2C%20I'm%20looking%20for%20iron%20oxide%20pigments%20for%20concrete%20applications.%20Please%20share%20grade%20options%2C%20COA%2FMSDS%2C%20MOQ%2C%20packing%2C%20and%20lead%20time."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </CardContent>
              </Card>

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
