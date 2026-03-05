import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { ChevronRight, FlaskConical } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const ARTICLE_SLUG =
  "/applications/5-key-concrete-admixtures-ready-mix-performance";
const WHATSAPP_LINK =
  "https://wa.me/8615653883028?text=Hello%2C%20I'm%20interested%20in%20concrete%20admixtures%20for%20ready-mix%20concrete.%20Please%20share%20product%20options%2C%20COA%2FMSDS%2C%20MOQ%2C%20packing%2C%20and%20lead%20time.";

export default function ConcreteAdmixturesReadyMix() {
  usePageMeta({
    title:
      "5 Key Concrete Admixtures for Ready-Mix Concrete Performance | ShiChem",
    description:
      "Discover the 5 essential concrete admixtures that enhance the workability, strength, and durability of ready-mix concrete. A must-read for plant managers and engineers.",
    keywords:
      "concrete admixtures ready mix, PCE superplasticizer, SNF water reducer, calcium formate accelerator, sodium gluconate retarder, air entraining agent, ready mix concrete performance, concrete admixture supplier",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-6">
                <Link
                  href="/applications"
                  className="hover:text-primary transition-colors"
                >
                  Applications
                </Link>
                <ChevronRight className="h-4 w-4 flex-shrink-0" />
                <span className="text-foreground">
                  5 Key Concrete Admixtures
                </span>
              </nav>

              <div className="flex items-center space-x-2 mb-4">
                <FlaskConical className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Technical Guide — Concrete &amp; Construction
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                5 Key Concrete Admixtures to Improve Ready-Mix Concrete
                Performance
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Modern ready-mix concrete admixtures are no longer
                "nice-to-have" additives—they're production controls. The right
                admixture package stabilizes slump, cuts water demand, keeps set
                times predictable in any weather, and protects hardened concrete
                against the service conditions that erode long-term durability.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                This guide is a practical{" "}
                <strong className="text-foreground">
                  concrete admixture selection
                </strong>{" "}
                resource for plant managers, engineers, and procurement teams
                who need reliable outcomes—not jobsite surprises at discharge.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Article Body ─────────────────────────────────── */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">

              {/* ── 1. The Challenge ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                The Challenge of Modern Ready-Mix Concrete Production
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ready-mix producers are being squeezed from three directions
                simultaneously: tighter project specs, faster placement cycles,
                and relentless pressure on delivered cost per cubic yard. On top
                of that, raw material variability is climbing. Aggregate moisture
                swings, shifting SCM supply, and temperature extremes can
                destabilize fresh concrete performance from one batch to the
                next.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The operational pain points we see most consistently in US
                markets:
              </p>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {[
                  "Slump variability and workability loss during haul and pump—especially with low w/cm and SCM-heavy mixes",
                  "Strength variability driven by uncontrolled water addition at the jobsite",
                  "Setting-time instability in hot weather (flash set, loss of finishing window) and cold weather (slow strength gain, schedule compression)",
                  "Freeze-thaw and de-icing salt durability requirements that must be met without over-airing the mix or sacrificing compressive strength",
                  "Compliance and documentation demands from DOT-driven and large infrastructure projects—ASTM performance data, SDS packages, full traceability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-10">
                The answer isn't "add more admixture." It's selecting the right
                admixture package, dialing in the dosage, and confirming
                compatibility across cement type, SCM blend, and aggregate
                system before a single yard goes out the gate.
              </p>

              <Separator className="mb-10" />

              {/* ── 2. HRWRs ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                1 &amp; 2 — High-Range Water Reducers (PCE / SNF)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                  High-range water reducers (HRWRs)
                </strong>
                —specifically{" "}
                <strong className="text-foreground">
                  PCE (polycarboxylate ether)
                </strong>{" "}
                and{" "}
                <strong className="text-foreground">
                  SNF (sulfonated naphthalene formaldehyde)
                </strong>
                —are the workhorses of any performance-focused ready-mix
                operation. A quality PCE-based superplasticizer cuts water
                demand by up to 30% without sacrificing workability—translating
                directly to higher strength potential, better pumpability, and a
                cleaner finish.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                How HRWRs Improve Concrete Workability (Without Water Dumping)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                HRWRs disperse cement particles through electrostatic repulsion
                and steric hindrance—PCE relies heavily on the latter—breaking
                up flocculation and releasing trapped mix water. In plant terms:
              </p>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {[
                  "Hitting target slump and flow at a lower w/cm",
                  "Reducing bleed and segregation risk when properly balanced",
                  "Gaining early and later-age strength through genuine water reduction, not dilution",
                  "Improving placement efficiency in congested reinforcement zones and pumped pours",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-muted/30 rounded-lg p-5 mb-8">
                <p className="text-sm font-semibold text-foreground mb-2">
                  Practical Plant Targets
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Water reduction:</strong>{" "}
                    12–30%, depending on chemistry, cement reactivity, and dosage
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Slump retention:
                    </strong>{" "}
                    PCE can be engineered for short, medium, or extended
                    retention—match it to your dispatch radius
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Strength uplift:
                    </strong>{" "}
                    Primarily a function of lower w/cm and improved compaction
                    at equivalent workability
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                PCE vs. SNF: Selection Cues for High-Strength Concrete
                Admixtures
              </h3>

              <div className="grid md:grid-cols-2 gap-5 mb-10">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-5">
                    <p className="font-bold text-foreground mb-3">
                      PCE — New-Generation Superplasticizer
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>Superior water reduction and tunable slump retention</li>
                      <li>
                        Go-to for high-strength concrete, SCC-style flow, and
                        aggressive low w/cm targets
                      </li>
                      <li>
                        More sensitive to cement chemistry and clay
                        contamination—compatibility testing isn't optional
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent/50">
                  <CardContent className="p-5">
                    <p className="font-bold text-foreground mb-3">
                      SNF — Traditional Superplasticizer
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>
                        Robust performance in commodity mixes, strong
                        cost-per-yard economics
                      </li>
                      <li>
                        Shorter retention profile compared to engineered PCE
                        systems
                      </li>
                      <li>
                        Right call when performance demands are moderate and
                        cost control drives the decision
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-10 italic border-l-2 border-accent pl-4">
                If your operation runs long haul distances or wide temperature
                variability, prioritize retention control and jobsite robustness
                in your spec. Initial slump numbers at the batch plant tell only
                half the story.
              </p>

              <Separator className="mb-10" />

              {/* ─── Mid-page CTA ── */}
              <Card className="bg-primary text-primary-foreground mb-10">
                <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-base mb-1">
                      Need PCE, SNF, or a custom admixture package?
                    </p>
                    <p className="text-sm opacity-90">
                      Share your mix parameters, cement type, and SCMs. We'll
                      come back with specific recommendations, COA/MSDS, MOQ,
                      and a competitive quote.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-white/90 whitespace-nowrap"
                    >
                      WhatsApp Us
                    </a>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white/10 whitespace-nowrap"
                      >
                        Send Inquiry
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* ── 3. Setting Time ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                3 &amp; 4 — Controlling Setting Time: Accelerators &amp;
                Retarders
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Setting time is a real production lever. Get it wrong and you're
                dealing with flash set on a summer pour, or a cold-weather mix
                that won't gain strength fast enough to pull forms on schedule.
                Two cost-effective tools manage this range:{" "}
                <strong className="text-foreground">Calcium Formate</strong>{" "}
                (accelerator) and{" "}
                <strong className="text-foreground">Sodium Gluconate</strong>{" "}
                (retarder).
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">
                Calcium Formate: Accelerating Set &amp; Early Strength in Cold
                Conditions
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Calcium formate accelerates early hydration kinetics. It's the
                practical fix for cold weather concreting and precast-style
                production schedules where wait time before finishing costs real
                money.
              </p>
              <div className="bg-muted/30 rounded-lg p-5 mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Operational Benefits
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {[
                    "Faster set progression and earlier finishing readiness in sub-optimal temperatures",
                    "Improved early strength gain—reduces formwork hold time and compresses opening schedules",
                    "Potential cement content optimization when early strength is the binding constraint",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-2">
                  Implementation Tips
                </p>
                <ul className="space-y-1.5 text-muted-foreground">
                  {[
                    "Dose carefully and validate on your specific cement/SCM system. Over-acceleration compresses the finishing window fast.",
                    "Verify air system behavior when running alongside AEA—some accelerators shift air entrainment stability.",
                    "Confirm non-chloride compliance requirements for reinforced concrete applications before specifying.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="flex-shrink-0">⚠</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">
                Sodium Gluconate: Managing Hot Weather &amp; Extending
                Workability Window
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sodium gluconate is a potent retarder. It slows the hydration
                reaction, buying time against flash set in high-temperature
                placements, high-reactivity cement systems, and long-haul
                delivery runs.
              </p>
              <div className="bg-muted/30 rounded-lg p-5 mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Operational Benefits
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {[
                    "Stabilizes set time in hot weather concrete placements",
                    "Cuts the risk of cold joints and finishing defects from premature stiffening",
                    "Supports extended placement windows where job conditions demand them",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-2">
                  Implementation Tips
                </p>
                <ul className="space-y-1.5 text-muted-foreground">
                  {[
                    "Small dosage shifts produce large set-time swings. Use controlled dispensing systems and log ambient temperature in your dosage protocol.",
                    "Evaluate interactions with your HRWR—PCE/gluconate combinations can amplify retention effects. Test before deploying at scale.",
                    "Map the full strength development curve. Early strength may be suppressed; later-age strength typically recovers in a well-designed system.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="flex-shrink-0">⚠</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator className="mb-10" />

              {/* ── 4. AEA ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                5 — Ensuring Durability with Air-Entraining Agents (AEA)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In freeze-thaw regions and anywhere de-icing salts hit the
                surface,{" "}
                <strong className="text-foreground">
                  air-entraining agents (AEA)
                </strong>{" "}
                aren't a specification formality—they're load-bearing durability
                protection. A properly entrained air-void system relieves
                hydraulic pressure as pore water freezes, sharply reducing
                scaling and internal cracking over the structure's service life.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">
                Where AEAs Deliver Measurable Concrete Performance Gains
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For ready-mix operations supplying exterior flatwork, DOT
                pavements, bridge decks, and cold-region infrastructure, target
                air content and void spacing factor are gatekeeper requirements.
                Miss them and the load gets rejected—or fails in the field years
                later.
              </p>
              <ul className="space-y-2 mb-8 text-muted-foreground">
                {[
                  "Improved freeze-thaw resistance through a stable, well-distributed air-void structure",
                  "Reduced de-icing salt scaling when paired with proper curing and finishing practice",
                  "Marginally improved workability feel at a given slump—entrained air acts like microscopic ball bearings in the paste",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-4">
                Plant Controls That Prevent Over-Airing &amp; Strength Loss
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AEA control isn't about chasing a number—it's about holding it
                consistently from truck to truck. Every point of air above your
                target costs roughly 200 psi in compressive strength. That's not
                a rounding error.
              </p>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {[
                  "Test fresh air content frequently, especially when aggregate moisture or ambient temperature shifts",
                  "Watch for air instability driven by HRWR interactions, variable fines content, or jobsite water addition",
                  "Hold mixing energy and sequence constant—AEA response drifts with mixing time",
                  "Treat AEA as part of the full system: cement chemistry, SCM type and dosage, and HRWR selection all influence air entrainment response",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed mb-10 italic border-l-2 border-accent pl-4">
                Your admixture supplier should deliver target air content
                guidance, stability data, and compatibility documentation—not
                just a label dosage rate.
              </p>

              <Separator className="mb-10" />

              {/* ── 5. Supplier ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                How to Partner with a Reliable Admixture Supplier
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The admixture supplier you choose has a direct line to your
                batch-to-batch consistency, your claim exposure, and your
                ability to win performance-driven contracts. A real partner
                functions as a technical extension of your QC team—not just a
                source of drums delivered on a pallet.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">
                Supplier Qualification Checklist
              </h3>
              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                {[
                  {
                    heading: "Quality Control & Traceability",
                    items: [
                      "Lot-based Certificate of Analysis, retained samples, and clean batch numbering on every shipment",
                      "Consistent solids content, density, pH, and performance metrics across every product line",
                    ],
                  },
                  {
                    heading: "Standards Alignment & Documentation",
                    items: [
                      "Clear product positioning against ASTM performance categories where applicable",
                      "Complete SDS, handling guidance, and export documentation package ready on request",
                    ],
                  },
                  {
                    heading: "Technical Support",
                    items: [
                      "Mix design support and compatibility screening across cement types and SCM blends",
                      "Responsive troubleshooting for slump loss, set irregularities, or air entrainment instability",
                      "Documented dosing ranges, sequencing recommendations, and storage stability data",
                    ],
                  },
                  {
                    heading: "Supply Reliability",
                    items: [
                      "Predictable lead times, multiple packaging options (IBC, drum, bulk), and logistics flexibility",
                      "Contingency capacity for seasonal demand spikes and project ramp-ups",
                    ],
                  },
                ].map((section) => (
                  <Card key={section.heading}>
                    <CardContent className="p-5">
                      <p className="font-bold text-sm text-foreground mb-3">
                        {section.heading}
                      </p>
                      <ul className="space-y-1.5">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">
                Why This Matters Financially
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A supplier who helps you control variability directly reduces:
              </p>
              <ul className="space-y-2 mb-10 text-muted-foreground">
                {[
                  "Cement overdesign margins carried to buffer strength variability",
                  "Rejected loads and jobsite callbacks",
                  "Unplanned admixture overuse and emergency dosage corrections at the plant",
                  "Warranty exposure tied to durability failures in the field",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Separator className="mb-10" />

              {/* ── Bottom CTA ── */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Work Directly with Our Team — Contact Joe for a Custom
                    Admixture Package
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you're sourcing concrete admixtures for the US market and
                    need measurable, repeatable improvements in ready-mix
                    concrete performance—whether that's tighter workability and
                    slump retention, a{" "}
                    <strong className="text-foreground">
                      high-strength concrete admixture
                    </strong>{" "}
                    system built around <strong className="text-foreground">PCE</strong> or{" "}
                    <strong className="text-foreground">SNF</strong>, or a
                    precisely controlled{" "}
                    <strong className="text-foreground">AEA</strong> program for
                    freeze-thaw service exposure—reach out to the technical team
                    at Shichem Industrial.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Ask for <strong className="text-foreground">Joe.</strong> He
                    works directly with plant managers and procurement teams to
                    build admixture packages that fit your cement system, your
                    SCMs, your haul conditions, and your project specs—not a
                    catalog default. Send him your target mix parameters, cement
                    and SCM details, and typical dispatch conditions. He'll come
                    back with a specific PCE/SNF, accelerator/retarder, and AEA
                    recommendation backed by data, plus a competitive quote.
                    Performance first, cost controlled.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact">
                      <Button size="lg">
                        Contact Joe &amp; the Shichem Industrial Team
                      </Button>
                    </Link>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* ── Related Applications ── */}
              <div className="mt-12">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Related Applications
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Polycarboxylate Superplasticizer (PCE)",
                      href: "/products/concrete-admixtures/polycarboxylate-superplasticizer-pce",
                    },
                    {
                      title: "Sodium Gluconate — Concrete Retarder",
                      href: "/products/concrete-admixtures/sodium-gluconate",
                    },
                    {
                      title: "Calcium Formate — Early Strength Accelerator",
                      href: "/products/concrete-admixtures/calcium-formate",
                    },
                  ].map((item) => (
                    <Link key={item.href} href={item.href}>
                      <Card className="h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                        <CardContent className="p-4">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </p>
                          <p className="text-xs text-primary mt-1 group-hover:underline">
                            View product →
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              {/* ── Back ── */}
              <div className="text-center pt-12">
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
