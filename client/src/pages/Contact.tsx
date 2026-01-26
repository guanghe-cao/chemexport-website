import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useState, type FormEvent } from "react";
import { productCategories } from "@/data/products";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      country: String(formData.get("country") || "").trim(),
      category: String(formData.get("category") || "").trim(),
      application: String(formData.get("application") || "").trim(),
      quantity: String(formData.get("quantity") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      honeypot: String(formData.get("company_website") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseBody = await response.json().catch(() => ({}));
      if (!response.ok) {
        const message =
          typeof responseBody?.error === "string"
            ? responseBody.error
            : "Submission failed.";
        throw new Error(message);
      }

      toast.success("Thank you for your inquiry! We'll respond within 24 business hours.");
      form.reset();
      setSelectedCategory("");
    } catch (error) {
      const message =
        error instanceof Error && error.message
          ? error.message
          : "Submission failed. Please email tatum.hongquan@gmail.com directly.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <Mail className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Contact Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our technical sales team is ready to assist with your chemical sourcing requirements. We respond to all inquiries within 24 business hours.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us an Inquiry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input
                        type="text"
                        name="company_website"
                        tabIndex={-1}
                        autoComplete="off"
                        className="hidden"
                      />
                      <input type="hidden" name="category" value={selectedCategory} />
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name *</Label>
                          <Input id="name" name="name" required placeholder="John Smith" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name *</Label>
                          <Input id="company" name="company" required placeholder="ABC Construction Ltd" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" name="phone" type="tel" placeholder="+1 234 567 8900" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="country">Country *</Label>
                          <Input id="country" name="country" required placeholder="United States" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category">Product Category</Label>
                          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              {productCategories.map((cat) => (
                                <SelectItem key={cat.id} value={cat.id}>
                                  {cat.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="application">Application / End Use</Label>
                        <Input id="application" name="application" placeholder="e.g., Ready-mix concrete production" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quantity">Estimated Quantity</Label>
                        <Input id="quantity" name="quantity" placeholder="e.g., 20 MT per month" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Information *</Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          required 
                          rows={6}
                          placeholder="Please provide details about your requirements: specific products, grades, specifications, delivery timeline, destination port, etc."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to be contacted by our team regarding your inquiry.
                      </p>
                    </form>
                  </CardContent>
                </Card>

                <Card className="mt-8 bg-accent/5 border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-lg">What to Include in Your Inquiry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        <span><strong className="text-foreground">Product name and grade</strong> (if known)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        <span><strong className="text-foreground">Application and performance requirements</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        <span><strong className="text-foreground">Key specifications needed</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        <span><strong className="text-foreground">Quantity and packaging preferences</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent font-bold mr-3">•</span>
                        <span><strong className="text-foreground">Destination port and timeline</strong></span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm text-foreground mb-1">Email</div>
                        <div className="text-sm text-muted-foreground">tatum.hongquan@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm text-foreground mb-1">Phone</div>
                        <div className="text-sm text-muted-foreground">+86 198 6210 3099</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm text-foreground mb-1">Response Time</div>
                        <div className="text-sm text-muted-foreground">Within 24 business hours</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm text-foreground mb-1">Location</div>
                        <div className="text-sm text-muted-foreground">Shanghai, China</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#25D366] text-white">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">Chat on WhatsApp</h3>
                    <p className="text-sm opacity-90 mb-4">
                      For quick questions or product availability, reach our team on WhatsApp.
                    </p>
                    <a
                      href="https://wa.me/8615653883028?text=Hello%2C%20I'm%20interested%20in%20your%20chemical%20export%20products."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#128C7E] transition-colors hover:bg-white/90"
                    >
                      <span>+86 156 5388 3028</span>
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">Technical Support</h3>
                    <p className="text-sm opacity-90">
                      Need help selecting the right product? Our technical team can provide recommendations based on your specific requirements.
                    </p>
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
