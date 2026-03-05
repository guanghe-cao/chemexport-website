import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { ChevronRight, Droplets } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const WHATSAPP_LINK =
  "https://wa.me/8615653883028?text=Hello%2C%20I'm%20interested%20in%20water%20treatment%20chemicals%20(PAC%2C%20SHMP%2C%20Citric%20Acid).%20Please%20share%20TDS%2C%20COA%2C%20MOQ%2C%20packing%2C%20and%20lead%20time.";

export default function WaterTreatmentChemicals() {
  usePageMeta({
    title:
      "Buyer's Guide: Sourcing Water Treatment Chemicals from China | ShiChem",
    description:
      "Your complete guide to sourcing high-quality water treatment chemicals like PAC, SHMP, and Citric Acid from China. Learn about compliance, quality control, and supplier selection.",
    keywords:
      "water treatment chemicals China, PAC polyaluminium chloride, SHMP scale inhibitor, STPP sodium tripolyphosphate, citric acid industrial, chemical sourcing China, wastewater treatment chemicals supplier, NSF ANSI 60",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="container">
            <div className="max-w-3xl">
              <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-6">
                <Link
                  href="/applications"
                  className="hover:text-primary transition-colors"
                >
                  Applications
                </Link>
                <ChevronRight className="h-4 w-4 flex-shrink-0" />
                <span className="text-foreground">
                  Water Treatment Chemicals Sourcing Guide
                </span>
              </nav>

              <div className="flex items-center space-x-2 mb-4">
                <Droplets className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Buyer's Guide — Water Treatment &amp; Industrial Chemicals
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                A Buyer's Guide to Sourcing Industrial Water Treatment Chemicals
                from China
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                You're about to wire money to a supplier you've never visited
                for chemicals going into regulated water. Here's how to not get
                burned.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                This guide walks you through the full procurement
                process—from writing your spec sheet for{" "}
                <strong className="text-foreground">PAC</strong>,{" "}
                polyphosphates (
                <strong className="text-foreground">SHMP/STPP</strong>), and{" "}
                <strong className="text-foreground">citric acid</strong>, to
                vetting a{" "}
                <strong className="text-foreground">
                  wastewater treatment chemicals supplier
                </strong>
                , running validation tests, and locking in logistics. Built
                for B2B buyers doing{" "}
                <strong className="text-foreground">
                  chemical sourcing from China
                </strong>{" "}
                who can't afford inconsistent specs, incomplete compliance
                paperwork, or logistics that fall apart mid-shipment.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Article Body ──────────────────────────────────────── */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">

              {/* ── Global Demand (compressed) ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                The Global Demand for Effective Water Treatment Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Industrial plants are getting squeezed from every
                direction—tighter discharge permits, higher recycle ratios, more
                variable influent, less tolerance for upsets. Water treatment
                programs now demand sharper control of turbidity, hardness and
                scale, dissolved metals, and pH—often while running at higher
                cycles of concentration than the system was originally designed
                for. That's why you can't afford to get sourcing wrong:
              </p>

              <div className="space-y-3 mb-10">
                {[
                  {
                    label: "Process reliability",
                    detail:
                      "Scale and fouling choke heat transfer surfaces and force unplanned shutdowns on boilers and cooling towers. Every hour of downtime has a dollar figure attached to it.",
                  },
                  {
                    label: "Product quality",
                    detail:
                      "Turbidity and trace metals contaminate coatings, paper, food-contact packaging, and electronics-grade process water. If your water is dirty, your product is compromised.",
                  },
                  {
                    label: "Compliance risk",
                    detail:
                      "One bad influent swing can blow your discharge limits, trigger permit violations, and stack surcharge fees that wipe out months of cost savings.",
                  },
                  {
                    label: "Cost control",
                    detail:
                      "When plants shift to reuse and recycle loops, chemical efficiency stops being a nice-to-have. You're dosing into a tighter system with less room for waste.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span>
                      <strong className="text-foreground">{item.label}:</strong>{" "}
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-10 italic border-l-2 border-accent pl-4">
                The buyer's mandate hasn't changed: consistent chemistry,
                predictable performance, and documentation that holds up when an
                auditor pulls the file.
              </p>

              <Separator className="mb-10" />

              {/* ── Step 1: Write Your Spec First ── */}
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center">
                  1
                </span>
                <div>
                  <p className="text-sm font-medium text-primary uppercase tracking-wide">
                    Step 1
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    Write Your Spec First
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Before you contact a single supplier, define exactly what you
                need. Sourcing that starts with drum price instead of the spec
                sheet is sourcing that ends with performance complaints. Here's
                what that looks like across the three main product categories.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Key Coagulants &amp; Flocculants for Water Purification (PAC)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                  Polyaluminium Chloride (PAC)
                </strong>{" "}
                is a workhorse—one of the most widely deployed drinking water
                coagulants and industrial coagulants on the market. It
                destabilizes colloids, knocks down suspended solids, and works
                across a broader pH window than conventional aluminum sulfate.
                But PAC performance is chemistry-sensitive. Sourcing that starts
                with drum price instead of the spec sheet is sourcing that ends
                with performance complaints.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                What PAC Does in Industrial and Drinking Water Applications
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PAC hydrolyzes in solution to produce positively charged
                aluminum species. Those species neutralize the surface charge on
                suspended particles, driving aggregation into flocs that settle
                or filter out. Simple mechanism—but the quality of that floc,
                and how much sludge it generates, depends heavily on product
                chemistry.
              </p>
              <ul className="space-y-2 mb-8 text-muted-foreground">
                {[
                  "Lower residual turbidity and tighter solids capture across variable raw water",
                  "Reduced sludge volume compared to some legacy coagulants (system-dependent—run a jar test, don't take a data sheet at face value)",
                  "Better tolerance to temperature and influent swings, depending on basicity and formulation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                PAC Specification Points That Actually Affect Performance
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When benchmarking{" "}
                <strong className="text-foreground">PAC water treatment</strong>,
                compare measurable parameters—not marketing language or "high-purity"
                claims on a drum label. Request COA data with limits for:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    param: "Al₂O₃ content & basicity",
                    detail:
                      "Basicity drives hydrolysis behavior. Two PAC products at the same Al₂O₃ can perform very differently if basicity diverges.",
                  },
                  {
                    param: "Insolubles",
                    detail:
                      "Hits your filter loading and sludge handling directly. Any ambiguity here costs you downstream.",
                  },
                  {
                    param: "Iron & heavy metals",
                    detail:
                      "Non-negotiable for potable applications and any color-sensitive process.",
                  },
                  {
                    param: "pH & density",
                    detail:
                      "Affects dosing stability for liquid PAC and pump calibration accuracy.",
                  },
                  {
                    param: "Chloride & sulfate balance",
                    detail:
                      "Can shift corrosion profiles in distribution piping and recirculating systems.",
                  },
                ].map((row) => (
                  <Card key={row.param}>
                    <CardContent className="p-4">
                      <p className="text-sm font-bold text-foreground mb-1">
                        {row.param}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {row.detail}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-1">
                  Compliance Note — US Potable Channels
                </p>
                <p className="text-muted-foreground">
                  If your PAC touches drinking water, buyers typically require
                  certification to{" "}
                  <strong className="text-foreground">
                    NSF/ANSI/CAN 60
                  </strong>{" "}
                  (Drinking Water Treatment Chemicals – Health Effects). NSF
                  listings specifically cover Polyaluminum Chloride products
                  under coagulation/flocculation, with product-specific maximum
                  use levels. Build this into your qualification process
                  upfront—not after the container has shipped.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                The same discipline applies to polyphosphates. When comparing
                SHMP vs. STPP from a supplier, pin down the details:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    param: "P-content, insolubles & heavy metals",
                    detail:
                      "These are the parameters that separate two 'equivalent' products that don't actually perform the same.",
                  },
                  {
                    param: "Solution clarity & dissolution time",
                    detail:
                      "Test at your actual use concentration and temperature—not the supplier's lab conditions.",
                  },
                  {
                    param: "Compatibility with downstream chemistry",
                    detail:
                      "Polymers, antiscalants, biocides. Unintended precipitation from a bad interaction will create more problems than the phosphate was supposed to solve.",
                  },
                ].map((row) => (
                  <Card key={row.param}>
                    <CardContent className="p-4">
                      <p className="text-sm font-bold text-foreground mb-1">
                        {row.param}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {row.detail}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-muted/30 rounded-lg p-5 mb-10">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Buyer Spec Checkpoints for Citric Acid
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    {
                      label: "Anhydrous vs. monohydrate",
                      detail:
                        "Changes your active content and throws off dosing calculations if you're not accounting for it.",
                    },
                    {
                      label: "Insolubles and solution clarity",
                      detail:
                        "Matters for spray systems, membrane cleaning, and anything with tight nozzle tolerances.",
                    },
                    {
                      label: "Packaging moisture protection",
                      detail:
                        "Citric acid cakes aggressively in humid conditions during ocean transit and warehouse storage. If your supplier doesn't pack for it, you'll open drums of solid blocks instead of free-flowing product.",
                    },
                  ].map((row) => (
                    <li key={row.label} className="flex items-start gap-2">
                      <span className="flex-shrink-0 font-bold text-accent">
                        •
                      </span>
                      <span>
                        <strong className="text-foreground">{row.label}:</strong>{" "}
                        {row.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator className="mb-10" />

              {/* ── Step 2: Understand the Chemistry You're Buying ── */}
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center">
                  2
                </span>
                <div>
                  <p className="text-sm font-medium text-primary uppercase tracking-wide">
                    Step 2
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    Understand the Chemistry You're Buying
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Specs tell you what to order. This section tells you why those
                specs matter—what each chemical actually does in your water
                system and where the performance risks hide.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Managing Hardness and Scale with Sequestrants (SHMP &amp; STPP)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hardness and dissolved metals don't just build scale. They
                destabilize your entire water system—deposit formation triggers
                under-deposit corrosion, kills heat transfer, and plugs spray
                nozzles. Polyphosphates are a proven tool for sequestering
                metals and inhibiting scale when dosed and applied correctly.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">
                SHMP (Sodium Hexametaphosphate): Scale Inhibition &amp; Metal
                Sequestration
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you're buying{" "}
                <strong className="text-foreground">SHMP scale inhibitor bulk</strong>,
                stop treating it like a commodity salt. Chain length
                distribution, purity, and residual moisture all affect
                solubility, sequestration capacity, and how long the product
                holds up in storage before it degrades.
              </p>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {[
                  "Sequestration of Fe/Mn and other multivalent ions—keeps them in solution instead of depositing as stains and scale",
                  "Threshold inhibition of calcium carbonate scale in certain operating regimes",
                  "Cleaner membranes and reduced fouling in process water recirculation loops (system-dependent—validate against your water chemistry)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-sm">
                <p className="text-muted-foreground">
                  For potable-related applications, NSF listings include Sodium
                  Hexametaphosphate under corrosion and scale control/sequestering,
                  with defined maximum use limits per certified product.
                </p>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">
                STPP (Sodium Tripolyphosphate): Buffering &amp; Dispersion
                Support
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-10">
                STPP pulls double duty as a sequestrant and dispersant. It's the
                right fit where you need hardness control and particulate
                dispersion in the same step—cleaning operations, pre-treatment
                stages, and formulated chemical programs.
              </p>

              <Separator className="mb-10" />

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                pH Adjustment and Cleaning with Industrial-Grade Acids (Citric
                Acid)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Acids in industrial water treatment handle three jobs: pH
                control, chelation, and cleaning—particularly in CIP circuits,
                membrane maintenance, and descaling programs.{" "}
                <strong className="text-foreground">Citric acid</strong> gets
                the nod when buyers want effective chelation without the
                handling headaches and safety overhead that come with stronger
                mineral acids.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Citric Acid: Chelation &amp; Controlled pH Reduction
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Citric acid binds metal ions and pulls them into solution,
                dissolving deposits and preventing metal-driven staining and
                fouling from reasserting itself downstream. Practical
                applications include:
              </p>
              <ul className="space-y-2 mb-10 text-muted-foreground">
                {[
                  "Descaling and deposit removal—frequently combined with surfactants and corrosion inhibitors for a complete cleaning program",
                  "pH adjustment in process steps where hydrochloric or sulfuric acid would be overkill or a safety liability",
                  "Metal ion control in cleaning and rinse stages—chelation prevents stripped metals from redepositing on the surfaces you just cleaned",
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

              {/* ── Mid-page CTA ── */}
              <Card className="bg-primary text-primary-foreground mb-10">
                <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-base mb-1">
                      Need PAC, SHMP, STPP, or citric acid with full documentation?
                    </p>
                    <p className="text-sm opacity-90">
                      Share your product list, target specs, and application
                      details. We'll come back with TDS, COA, sample testing
                      support, and a bulk quote.
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

              {/* ── Step 3: Vet the Supplier ── */}
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center">
                  3
                </span>
                <div>
                  <p className="text-sm font-medium text-primary uppercase tracking-wide">
                    Step 3
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    Vet the Supplier
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Vetting Your Chinese Chemical Supplier: A Checklist for B2B
                Buyers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sourcing results come down to supplier discipline. Consistent
                production. Transparent documentation. Technical support that
                goes beyond forwarding a PDF. Use the checklist below to qualify
                partners during chemical sourcing from China—especially when
                you're feeding multiple plants and can't afford batch-to-batch
                variation.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {[
                  {
                    heading: "Quality System",
                    items: [
                      "Verify ISO 9001 certification issued to the actual manufacturing entity and site—not a sales office in a different city",
                      "Ask how they control incoming raw materials, what in-process testing looks like, and whether they retain samples by lot",
                    ],
                  },
                  {
                    heading: "Documentation Package",
                    items: [
                      "COA with lot number, test methods, and acceptance limits—not a single-page printout with one number and no context",
                      "SDS/MSDS in GHS format aligned to your destination country's requirements",
                      "TDS showing dosing ranges, storage stability, and shelf life",
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

              <Separator className="mb-10" />

              {/* ── Step 4: Run Validation Tests ── */}
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center">
                  4
                </span>
                <div>
                  <p className="text-sm font-medium text-primary uppercase tracking-wide">
                    Step 4
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    Run Validation Tests Before Bulk PO
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A COA tells you what the supplier says the product is. Your own
                testing tells you what it actually does in your system. Never
                skip this step.
              </p>

              <Card className="mb-10">
                <CardContent className="p-5">
                  <p className="font-bold text-sm text-foreground mb-3">
                    Product Verification
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      "Pre-shipment sample pulled from the same production line that will fill your bulk order—not a 'standard sample' from a different batch",
                      "Jar tests for PAC; solubility and sequestration checks for SHMP/STPP; chelation performance for citric acid",
                    ].map((item) => (
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

              <Separator className="mb-10" />

              {/* ── Step 5: Lock in Logistics and Documentation ── */}
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center">
                  5
                </span>
                <div>
                  <p className="text-sm font-medium text-primary uppercase tracking-wide">
                    Step 5
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    Lock in Logistics and Documentation
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You've vetted the supplier and validated the product. Now make
                sure everything holds together through shipment and customs
                clearance.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {[
                  {
                    heading: "Regulatory & Compliance",
                    items: [
                      "For EU supply chains: understand REACH obligations—substances imported into the EEA at ≥1 tonne/year generally require registration",
                      "For US potable channels: make NSF/ANSI/CAN 60 certification a hard requirement in your supplier qualification",
                    ],
                  },
                  {
                    heading: "Logistics Reliability",
                    items: [
                      "Confirm lead times, packaging formats (bags, drums, IBCs), palletization specs, and moisture protection measures",
                      "Require lot-matched documentation across every shipment: COA, packing list, and certificates must align",
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

              <Separator className="mb-10" />

              {/* ── Bottom CTA ── */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Get Specs, Samples, and Bulk Pricing That Match Your
                    Application
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Send{" "}
                    <strong className="text-foreground">
                      Joe at Shichem Industrial
                    </strong>{" "}
                    your product list and target specs—he'll send back a
                    qualification package with TDS, COA, application guidance,
                    and sample testing support so you can run validation before
                    committing to a bulk PO.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Whether you're sourcing{" "}
                    <strong className="text-foreground">
                      PAC, SHMP/STPP, or citric acid
                    </strong>
                    , Joe's team treats quality and documentation as baseline
                    expectations—not optional extras. Tell him what's been
                    giving you headaches with your current supply, and get bulk
                    pricing that lets you qualify materials faster, cut
                    performance variability, and lock in long-term supply you
                    don't have to second-guess.
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
                      title: "Concrete Admixtures for Ready-Mix",
                      href: "/applications/5-key-concrete-admixtures-ready-mix-performance",
                    },
                    {
                      title: "Tile Adhesive Additives (HPMC, RDP, Fibers)",
                      href: "/applications/high-performance-tile-adhesive-additives",
                    },
                    {
                      title: "All Industry Applications",
                      href: "/applications",
                    },
                  ].map((item) => (
                    <Link key={item.href} href={item.href}>
                      <Card className="h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                        <CardContent className="p-4">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </p>
                          <p className="text-xs text-primary mt-1 group-hover:underline">
                            View guide →
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
