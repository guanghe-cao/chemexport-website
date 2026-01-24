/**
 * Design Philosophy: Industrial Precision meets Modern Clarity
 * - Deep navy blues with chemical green accents
 * - Asymmetric layouts with clear information hierarchy
 * - Professional photography with subtle depth
 * - Trust-focused messaging with factual content
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { productCategories } from "@/data/products";
import { 
  CheckCircle2, 
  Globe2, 
  Award, 
  ShieldCheck, 
  TrendingUp,
  Package,
  FileCheck,
  Users
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-background.png')] bg-cover bg-center opacity-20"></div>
          <div className="container relative py-20 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge variant="secondary" className="text-sm font-medium px-4 py-1">
                  Professional Chemical Trading Company
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Your Partner for Chemical Exports from China
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We supply container-level construction and industrial chemicals, sourced from verified manufacturers and backed by deep product expertise and comprehensive export documentation.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">Technical Expertise</p>
                      <p className="text-xs text-muted-foreground">In-depth product knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">Verified Network</p>
                      <p className="text-xs text-muted-foreground">ISO & REACH certified</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">Global Experience</p>
                      <p className="text-xs text-muted-foreground">Shipping worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Package className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">Container-Level</p>
                      <p className="text-xs text-muted-foreground">FCL/LCL export focus</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/products">
                    <Button size="lg" className="w-full sm:w-auto">
                      Browse Our Products
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Request a Quote
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/images/hero-background.png" 
                    alt="Chemical storage facility" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Product Range</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We supply five major categories of construction and industrial chemicals, covering 24+ specialized products for global export.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.map((category) => (
                <Link key={category.id} href={`/products/${category.id}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <Badge variant="secondary" className="ml-2">
                          {category.productCount}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center text-sm text-primary font-medium group-hover:underline">
                        View Products →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">A Reliable Partner in Chemical Sourcing</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our value lies in deep product knowledge, rigorous supplier verification, and extensive international trade experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Deep Product Knowledge</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We help you select the right grade and specification for your application, ensuring optimal performance and cost-effectiveness.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Rigorous Supplier Verification</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our sourcing process includes factory audits, certification checks, and batch testing to guarantee quality and consistency.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <Package className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Seamless Export Logistics</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  From packaging and container loading to customs documentation, we manage the entire export process for smooth delivery.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                  <FileCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Commitment to Compliance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We provide complete and accurate documentation (COA, MSDS, TDS) and ensure compliance with international standards like REACH.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Export Capability */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Delivering Chemicals Worldwide</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by B2B buyers across multiple continents for reliable chemical sourcing and export services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years in Business</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24+</div>
                <div className="text-sm text-muted-foreground">Products Supplied</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Compliance */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/images/quality-certification.png" 
                  alt="Quality control laboratory" 
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Commitment to Quality</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Quality assurance is at the heart of our operations. We work exclusively with ISO-certified manufacturers and provide comprehensive documentation for every shipment.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">ISO 9001</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">REACH</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">SGS Verified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">ASTM Standards</span>
                  </div>
                </div>

                <Link href="/quality">
                  <Button variant="outline" className="mt-4">
                    Learn About Our Quality Process
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <Users className="h-12 w-12 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Question or Need a Quote?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Our technical sales team is ready to assist. Provide your requirements, and we'll respond within 24 business hours.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
