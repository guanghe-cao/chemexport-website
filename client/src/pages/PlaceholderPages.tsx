import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { ShieldCheck, Truck, Lightbulb, BookOpen, ArrowRight } from "lucide-react";

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
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <Link href="/applications/tio2-coatings-guide">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-6">
                    <img src="/images/water-treatment.png" alt="Coatings" className="w-full rounded-lg mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">Titanium Dioxide (TiO2) in Coatings</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive guide on high-performance titanium dioxide applications for the paint and coatings industry.</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Technical Insights ── */}
        <section className="py-16 bg-muted/20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Technical Insights
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                In-Depth Application Guides
              </h2>
              <p className="text-muted-foreground mb-8">
                Practical guides written for procurement managers and engineers—covering formulation, selection criteria, and supplier qualification.
              </p>

              <Separator className="mb-8" />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Article Card: Concrete Admixtures */}
                <Link href="/applications/5-key-concrete-admixtures-ready-mix-performance">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src="/images/concrete-admixtures.png"
                        alt="Ready-mix concrete with chemical admixtures"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Concrete &amp; Construction
                      </span>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mt-1.5 mb-2 leading-snug">
                        5 Key Concrete Admixtures to Improve Ready-Mix Concrete Performance
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Discover the essential admixtures—PCE, SNF, calcium formate, sodium gluconate, and AEA—that enhance workability, strength, and durability in ready-mix concrete.
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Article Card: Phosphate-Free Detergents */}
                <Link href="/applications/phosphate-free-detergents-stpp-alternatives-shmp">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src="/images/water-treatment.png"
                        alt="Phosphate-free detergent formulation SHMP STPP alternative builder"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Detergents &amp; Cleaning Chemicals
                      </span>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mt-1.5 mb-2 leading-snug">
                        Phosphate-Free Detergents: A Guide to STPP Alternatives like SHMP
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        How SHMP, zeolites, polycarboxylates, and citrate co-builders replace STPP in compliant formulations—with sourcing specs and regulatory compliance checkpoints.
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Article Card: Lightweight Concrete Blocks */}
                <Link href="/applications/lightweight-concrete-blocks-foaming-agent-guide">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src="/images/concrete-admixtures.png"
                        alt="CLC lightweight concrete blocks production with foaming agent"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Concrete &amp; Construction
                      </span>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mt-1.5 mb-2 leading-snug">
                        How to Produce Lightweight Concrete Blocks with Foaming Agents
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Step-by-step CLC block production guide—protein vs synthetic foaming agents, mix design starting points, 7-step process SOP, and QC controls for consistent density and strength.
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Article Card: Zinc Oxide Rubber */}
                <Link href="/applications/zinc-oxide-rubber-vulcanization-guide">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src="/images/quality-certification.png"
                        alt="Zinc oxide ZnO activator for rubber vulcanization"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Rubber &amp; Elastomers
                      </span>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mt-1.5 mb-2 leading-snug">
                        The Role of Zinc Oxide in Modern Rubber Vulcanization
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        How ZnO + stearic acid activates accelerators, why active vs. standard grades perform differently, and how to source rubber-grade ZnO with the consistency your QC requires.
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Article Card: Paint & Coating Fillers */}
                <Link href="/applications/paint-coating-fillers-guide">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src="/images/water-treatment.png"
                        alt="Industrial fillers calcium carbonate talc kaolin for paints and coatings"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Paints &amp; Coatings
                      </span>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mt-1.5 mb-2 leading-snug">
                        Solving Common Problems in Paints &amp; Coatings with Industrial Fillers
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        How calcium carbonate, talc, and kaolin solve opacity, sheen, scrub resistance, and barrier problems—with a practical filler selection workflow for coating formulators.
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Article Card: Dry-Mix Mortar Additives */}
                <Link href="/applications/dry-mix-mortar-additives-guide">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src="/images/mortar-additives.png"
                        alt="Dry-mix mortar additives HPMC RDP wood fiber"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Dry-Mix Mortars
                      </span>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mt-1.5 mb-2 leading-snug">
                        Enhancing Mortar Performance: A Guide to Dry-Mix Mortar Additives
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        HPMC, RDP, and wood fiber—how to select, dose, and combine the three core additives for tile adhesives, wall putty, EIFS, and renders.
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Article Card: PP Fiber Concrete */}
                <Link href="/applications/pp-fiber-concrete-plastic-shrinkage-cracking">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src="/images/mortar-additives.png"
                        alt="Polypropylene PP fiber for plastic shrinkage crack control in concrete"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Concrete Reinforcement
                      </span>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mt-1.5 mb-2 leading-snug">
                        How to Prevent Plastic Shrinkage Cracking in Concrete with PP Fiber
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Monofilament vs. fibrillated PP fibers, dosing guidance, batching SOP, and secondary benefits—a practical guide to plastic shrinkage cracking control at production scale.
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Article Card: Cold Weather Concreting */}
                <Link href="/applications/cold-weather-concreting-admixtures">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src="/images/concrete-admixtures.png"
                        alt="Cold weather concreting admixtures calcium formate AEA PCE"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Concrete &amp; Winter Construction
                      </span>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mt-1.5 mb-2 leading-snug">
                        Cold Weather Concreting: Essential Admixtures for Winter Construction
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Calcium formate accelerators, air-entraining agents, and PCE superplasticizers—how to use them together to beat the freeze window and build durable concrete all winter.
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Article Card: Water Treatment Chemicals */}
                <Link href="/applications/water-treatment-chemicals-sourcing-guide">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src="/images/water-treatment.png"
                        alt="Industrial water treatment chemicals PAC SHMP citric acid"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Water Treatment
                      </span>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mt-1.5 mb-2 leading-snug">
                        Buyer's Guide: Sourcing Water Treatment Chemicals from China
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        How to source PAC, SHMP, STPP, and citric acid with the right specs, compliance documentation, and supplier due diligence for industrial and potable water applications.
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Article Card: Tile Adhesive Additives */}
                <Link href="/applications/high-performance-tile-adhesive-additives">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src="/images/mortar-additives.png"
                        alt="HPMC RDP fiber additives for tile adhesive formulation"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Tile Adhesives &amp; Dry-Mix Mortars
                      </span>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mt-1.5 mb-2 leading-snug">
                        How to Choose Additives for High-Performance Tile Adhesives
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        A formulator's guide to HPMC, RDP/VAE, and fiber selection—water retention, adhesion, crack resistance, and supplier qualification for C2/S1 systems.
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Article Card: TiO2 in Coatings */}
                <Link href="/applications/tio2-coatings-guide">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src="/images/water-treatment.png"
                        alt="Titanium dioxide pigment for architectural coatings"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Paint &amp; Coatings
                      </span>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mt-1.5 mb-2 leading-snug">
                        How to Choose the Right TiO₂ Grade for Architectural Coatings
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Comprehensive guide on selecting high-performance titanium dioxide for the paint and coatings industry—rutile vs anatase, hiding power, and dispersion.
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
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
