/**
 * Design Philosophy: Industrial Precision meets Modern Clarity
 * - Grid-based layout with clear product categorization
 * - Professional color scheme with navy and green accents
 */

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { productCategories } from "@/data/products";
import Navigation from "@/components/Navigation";
import { usePageMeta } from "@/hooks/usePageMeta";
import Footer from "@/components/Footer";
import { Package } from "lucide-react";

export default function Products() {
  usePageMeta({
    title: "Industrial Chemical Products for Export – ShiChem Industrial",
    description:
      "Browse ShiChem's full product range: concrete admixtures, dry-mix mortar additives, construction fibers, pigments, and water treatment chemicals. Container-level B2B export from China.",
    keywords:
      "industrial chemical products China, chemical export supplier, concrete admixtures, HPMC, RDP, zinc oxide, PAC, ShiChem",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <Package className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Product Catalog</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Construction & Industrial Chemicals for Export
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We supply five major categories of construction and industrial chemicals, covering 24+ specialized products sourced from verified Chinese manufacturers. All products are available for container-level export with complete documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category) => (
                <Link key={category.id} href={`/products/${category.id}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-2 hover:border-primary/50">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                          {category.name}
                        </h2>
                        <Badge variant="secondary" className="ml-2 text-base px-3 py-1">
                          {category.productCount}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {category.description}
                      </p>
                      <div className="flex items-center text-primary font-semibold group-hover:underline">
                        View Products →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-foreground">About Our Product Range</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  As a professional chemical trading company based in China, we specialize in sourcing and exporting construction and industrial chemicals to B2B buyers worldwide. Our product range covers concrete admixtures, dry-mix mortar additives, construction fibers and fillers, pigments and coating materials, and water treatment chemicals.
                </p>
                <p className="leading-relaxed mb-4">
                  We work with ISO 9001-certified manufacturers and provide comprehensive quality documentation including Certificates of Analysis (COA), Material Safety Data Sheets (MSDS), and Technical Data Sheets (TDS) for every shipment. REACH-compliant grades are available for European markets.
                </p>
                <p className="leading-relaxed">
                  Our minimum order quantities are designed for container-level trade (FCL and LCL), making us an ideal partner for distributors, manufacturers, and construction material suppliers looking for reliable chemical sourcing from China.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
