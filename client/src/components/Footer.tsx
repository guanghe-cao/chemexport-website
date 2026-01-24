import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">ShiChem Industrial Materials</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional chemical trading company specializing in construction and industrial chemical exports from China.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/applications" className="text-muted-foreground hover:text-primary transition-colors">Applications</Link></li>
              <li><Link href="/quality" className="text-muted-foreground hover:text-primary transition-colors">Quality & Compliance</Link></li>
              <li><Link href="/export" className="text-muted-foreground hover:text-primary transition-colors">Export Capability</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">Knowledge Center</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: sales@example.com</li>
              <li>Technical: tech@example.com</li>
              <li>Response Time: Within 24 hours</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ShiChem Industrial Materials Co., Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>ISO 9001 Certified</span>
              <span>•</span>
              <span>REACH Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
