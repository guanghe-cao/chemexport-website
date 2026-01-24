import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building2, Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">About Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Your Partner in Global Chemical Sourcing
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Professional chemical trading company based in China, specializing in construction and industrial chemical exports with deep product knowledge and extensive international trade experience.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Who We Are</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Founded in 2014, ShiChem Industrial Materials Co., Ltd. (实化工业材料有限公司) is a professional chemical trading company based in China, specializing in the global export of construction and industrial chemicals. We are not a manufacturer. Instead, our core value lies in our deep product knowledge, our rigorous supplier verification process, and our extensive experience in managing the complexities of international trade.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to bridge the gap between China's leading chemical manufacturers and overseas buyers, providing a seamless, reliable, and transparent sourcing experience. We focus exclusively on container-level (FCL and LCL) B2B trade.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-bold text-lg mb-2 text-foreground">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">
                      Chemical engineers, trade specialists, and logistics experts
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Target className="h-12 w-12 mx-auto mb-4 text-accent" />
                    <h3 className="font-bold text-lg mb-2 text-foreground">Our Focus</h3>
                    <p className="text-sm text-muted-foreground">
                      Container-level B2B chemical exports with complete documentation
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-bold text-lg mb-2 text-foreground">Quality First</h3>
                    <p className="text-sm text-muted-foreground">
                      ISO-certified suppliers with rigorous quality assurance
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Commitment</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <span className="text-accent font-bold text-xl">•</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">To Quality</h3>
                      <p className="text-muted-foreground">We are committed to sourcing high-quality, consistent products. Our multi-stage quality assurance process ensures that what you order is what you receive.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-accent font-bold text-xl">•</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">To Transparency</h3>
                      <p className="text-muted-foreground">We believe in clear and honest communication. We are transparent about our role as a trading partner and provide complete, accurate documentation for every shipment.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-accent font-bold text-xl">•</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">To Partnership</h3>
                      <p className="text-muted-foreground">We aim to build long-term relationships with our clients by acting as a trusted extension of their procurement team.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Ready to Work Together?</h2>
                <p className="text-muted-foreground mb-6">
                  Contact our team to discuss your chemical sourcing requirements.
                </p>
                <Link href="/contact">
                  <Button size="lg">Get in Touch</Button>
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
