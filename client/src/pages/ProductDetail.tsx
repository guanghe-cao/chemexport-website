/**
 * Design Philosophy: Industrial Precision meets Modern Clarity
 * - Detailed technical specifications with clear hierarchy
 * - Professional color scheme with navy and green accents
 */

import { useRoute, Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Package, FileText, ShieldCheck, Truck, Info } from "lucide-react";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:categorySlug/:productSlug");
  const { categorySlug, productSlug } = params || {};

  const product = products.find(
    p => p.categorySlug === categorySlug && p.slug === productSlug
  );

  if (!product) {
    return <NotFound />;
  }

  const relatedProducts = products
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-12">
          <div className="container">
            <Link href={`/products/${product.categorySlug}`}>
              <Button variant="ghost" size="sm" className="mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to {product.category}
              </Button>
            </Link>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <Package className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">{product.category}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  {product.name}
                </h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tradeNames.map((name, idx) => (
                    <Badge key={idx} variant="secondary">
                      {name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-1">
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-muted-foreground mb-1">Minimum Order</div>
                        <div className="text-lg font-bold text-foreground">{product.moq}</div>
                      </div>
                      {product.hsCode && (
                        <div>
                          <div className="text-sm font-semibold text-muted-foreground mb-1">HS Code</div>
                          <div className="text-lg font-mono text-foreground">{product.hsCode}</div>
                        </div>
                      )}
                      <Separator />
                      <Link href="/contact">
                        <Button className="w-full" size="lg">
                          Request a Quote
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-12">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Info className="h-5 w-5 mr-2 text-primary" />
                      Product Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Forms */}
                <Card>
                  <CardHeader>
                    <CardTitle>Typical Export Forms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.forms.map((form, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent font-bold mr-3">•</span>
                          <span className="text-muted-foreground">{form}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Grades */}
                {product.grades && product.grades.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Available Models & Grades</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 italic">
                        We source from verified manufacturers. The table below represents typical grades available for export. We can work with you to source a specific grade based on your performance requirements.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-3 px-4 font-semibold text-foreground">Grade Type</th>
                              {product.grades[0].solidContent && <th className="text-left py-3 px-4 font-semibold text-foreground">Solid Content</th>}
                              {product.grades[0].waterReduction && <th className="text-left py-3 px-4 font-semibold text-foreground">Water Reduction</th>}
                              <th className="text-left py-3 px-4 font-semibold text-foreground">Key Feature</th>
                              <th className="text-left py-3 px-4 font-semibold text-foreground">Typical Use Case</th>
                            </tr>
                          </thead>
                          <tbody>
                            {product.grades.map((grade, idx) => (
                              <tr key={idx} className="border-b border-border/50">
                                <td className="py-3 px-4 font-medium text-foreground">{grade.name}</td>
                                {grade.solidContent && <td className="py-3 px-4 text-muted-foreground">{grade.solidContent}</td>}
                                {grade.waterReduction && <td className="py-3 px-4 text-muted-foreground">{grade.waterReduction}</td>}
                                <td className="py-3 px-4 text-muted-foreground">{grade.feature}</td>
                                <td className="py-3 px-4 text-muted-foreground">{grade.useCase}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Key Specs */}
                {product.keySpecs && product.keySpecs.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Key Specifications Buyers Care About</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {product.keySpecs.map((spec, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-accent font-bold mr-3">•</span>
                            <span className="text-muted-foreground">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Applications */}
                <Card>
                  <CardHeader>
                    <CardTitle>Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {product.applications.map((app, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-accent font-bold mr-3">•</span>
                          <span className="text-muted-foreground">{app}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Packaging */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Truck className="h-5 w-5 mr-2 text-primary" />
                      Export Packaging & Logistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-foreground mb-2">Common Packaging Options:</div>
                        <ul className="space-y-2">
                          {product.packaging.map((pkg, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-accent font-bold mr-3">•</span>
                              <span className="text-muted-foreground">{pkg}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Separator />
                      <div>
                        <div className="text-sm font-semibold text-foreground mb-2">Minimum Order Quantity (MOQ):</div>
                        <p className="text-muted-foreground">{product.moq}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quality & Compliance */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ShieldCheck className="h-5 w-5 mr-2 text-primary" />
                      Quality & Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        <span className="text-muted-foreground"><strong className="text-foreground">Sourced From:</strong> ISO 9001 certified manufacturers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        <span className="text-muted-foreground"><strong className="text-foreground">Compliance:</strong> Products compliant with ASTM, EN, and other international standards are available</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        <span className="text-muted-foreground"><strong className="text-foreground">EU Market:</strong> REACH-registered grades available for export to the European Union</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        <span className="text-muted-foreground"><strong className="text-foreground">Documentation:</strong> All shipments include batch-specific Certificate of Analysis (COA), MSDS, and TDS</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Buyer Guidance */}
                <Card className="bg-accent/5 border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-accent" />
                      Buyer Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        <span className="text-muted-foreground"><strong className="text-foreground">Specify Your Need:</strong> When inquiring, please state your specific requirements (grade, performance targets, application)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        <span className="text-muted-foreground"><strong className="text-foreground">Provide Context:</strong> Inform us of your local conditions (cement type, climate, standards) so we can recommend compatible products</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        <span className="text-muted-foreground"><strong className="text-foreground">Request a Sample:</strong> We recommend testing a sample with your own materials before placing a large order</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Related Products */}
                {relatedProducts.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Related Products</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {relatedProducts.map((related) => (
                        <Link key={related.id} href={`/products/${related.categorySlug}/${related.slug}`}>
                          <div className="group cursor-pointer">
                            <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                              {related.name}
                            </h4>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {related.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* CTA */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">Need Technical Support?</h3>
                    <p className="text-sm mb-4 opacity-90">
                      Our team can help you select the right grade and specification for your application.
                    </p>
                    <Link href="/contact">
                      <Button variant="secondary" className="w-full">
                        Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
