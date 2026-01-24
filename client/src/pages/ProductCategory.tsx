/**
 * Design Philosophy: Industrial Precision meets Modern Clarity
 * - Table-based product listing with clear specifications
 * - Professional color scheme with navy and green accents
 */

import { useRoute, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products, productCategories } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Package } from "lucide-react";
import NotFound from "./NotFound";

export default function ProductCategory() {
  const [, params] = useRoute("/products/:categorySlug");
  const categorySlug = params?.categorySlug;

  const category = productCategories.find(c => c.id === categorySlug);
  const categoryProducts = products.filter(p => p.categorySlug === categorySlug);

  if (!category || categoryProducts.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container">
            <Link href="/products">
              <Button variant="ghost" size="sm" className="mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Products
              </Button>
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <Package className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Product Category</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {category.name} for Export
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        {/* Product List */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Our Range of {category.name}</h2>
            
            <div className="grid gap-6">
              {categoryProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.categorySlug}/${product.slug}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-l-4 border-l-primary/50 hover:border-l-primary">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="md:col-span-2">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                            {product.name}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {product.tradeNames.slice(0, 3).map((name, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {name}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {product.description.substring(0, 150)}...
                          </p>
                        </div>
                        
                        <div>
                          <div className="text-xs font-semibold text-muted-foreground uppercase mb-2">Forms Available</div>
                          <ul className="text-sm text-foreground space-y-1">
                            {product.forms.map((form, idx) => (
                              <li key={idx}>• {form}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <div className="text-xs font-semibold text-muted-foreground uppercase mb-2">Key Applications</div>
                          <ul className="text-sm text-foreground space-y-1">
                            {product.applications.slice(0, 3).map((app, idx) => (
                              <li key={idx}>• {app}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">MOQ:</span> {product.moq}
                        </div>
                        <div className="flex items-center text-primary font-semibold group-hover:underline">
                          View Details →
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Buyer Guidance */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Buyer Guidance</h2>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">How to Choose the Right Product</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Selecting the correct product depends on your specific application requirements, local raw materials, and performance targets. Consider the following factors:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-3">•</span>
                      <span><strong className="text-foreground">Application Type:</strong> Different products are optimized for specific uses (e.g., ready-mix concrete vs. precast elements).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-3">•</span>
                      <span><strong className="text-foreground">Performance Requirements:</strong> Identify key specifications needed (water reduction rate, setting time, strength development).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-3">•</span>
                      <span><strong className="text-foreground">Local Conditions:</strong> Climate, cement type, and aggregate properties affect product selection.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-3">•</span>
                      <span><strong className="text-foreground">Compliance Needs:</strong> Ensure the product meets regional standards (ASTM, EN, REACH, etc.).</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      Need help selecting the right product? Our technical team can provide recommendations based on your specific requirements.
                    </p>
                    <Link href="/contact">
                      <Button>Contact Technical Support</Button>
                    </Link>
                  </div>
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
