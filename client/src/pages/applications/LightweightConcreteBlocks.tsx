import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { ChevronRight, Building2 } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const WHATSAPP_LINK =
  "https://wa.me/8615653883028?text=Hello%2C%20I'm%20interested%20in%20concrete%20foaming%20agents%20for%20CLC%20lightweight%20block%20production.%20Please%20share%20TDS%2C%20COA%2C%20protein%20vs%20synthetic%20options%2C%20MOQ%2C%20packing%2C%20and%20lead%20time.";

export default function LightweightConcreteBlocks() {
  usePageMeta({
    title:
      "How to Produce Lightweight Concrete Blocks with Foaming Agents | ShiChem",
    description:
      "A step-by-step guide for manufacturers on how to produce Cellular Lightweight Concrete (CLC) blocks using protein or synthetic foaming agents for superior insulation and cost savings.",
    keywords:
      "lightweight concrete blocks, concrete foaming agent, CLC block production, cellular lightweight concrete, protein foaming agent vs synthetic, lightweight concrete mix design, foam concrete chemicals, foamed concrete",
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
                  CLC Lightweight Concrete Blocks
                </span>
              </nav>

              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Production Guide — Cellular Lightweight Concrete &amp;
                  Foaming Agents
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                How to Produce Lightweight Concrete Blocks with Foaming Agents
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Making{" "}
                <strong className="text-foreground">
                  lightweight concrete blocks
                </strong>{" "}
                with a{" "}
                <strong className="text-foreground">
                  concrete foaming agent
                </strong>{" "}
                is straightforward technology—when you control it. The concept
                is simple: inject stable, pre-formed foam into a cementitious
                slurry, cast it, cure it, cut it. The execution is where plants
                win or lose.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">
                  Cellular lightweight concrete (CLC)
                </strong>{" "}
                gets its density, thermal performance, and strength from a
                uniform air-void system built entirely by the foam. If the foam
                is unstable, inconsistent, or wrong for the density you're
                targeting, the blocks are scrap. This guide covers{" "}
                <strong className="text-foreground">CLC block production</strong>{" "}
                from foaming chemistry to casting, the real differences between{" "}
                <strong className="text-foreground">
                  protein foaming agent vs synthetic
                </strong>
                , and practical{" "}
                <strong className="text-foreground">
                  lightweight concrete mix design
                </strong>{" "}
                starting points for plants running production, not lab trials.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Article Body ──────────────────────────────────────── */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">

              {/* ── Section 1: Market ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                The Growing Market for Lightweight Concrete Blocks
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cellular lightweight concrete blocks keep gaining share because
                a single production line can cover multiple products just by
                shifting the density target. The technology spans a wide density
                range—commonly cited from around 320 to 1920 kg/m³—which means
                the same plant can produce insulation-grade infill panels and
                higher-density non-structural masonry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Why lightweight concrete blocks keep showing up on more spec
                sheets:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    label: "Thermal insulation",
                    detail:
                      "More air in the matrix means less heat transfer through the wall. CLC blocks can cut thermal bridging without a separate insulation layer.",
                  },
                  {
                    label: "Fire resistance",
                    detail:
                      "Cement-based cellular matrices hold up under fire exposure better than polymer-based insulation products. The air is inert. The matrix is mineral. It doesn't burn.",
                  },
                  {
                    label: "Reduced structural load",
                    detail:
                      "Lighter walls mean smaller foundations and lighter frames. On multi-story projects, that dead-load reduction cascades through the entire structural design.",
                  },
                  {
                    label: "Faster handling",
                    detail:
                      "A block crew moves more lightweight units per shift with less fatigue. Productivity goes up. Injury claims go down.",
                  },
                ].map((item) => (
                  <Card key={item.label} className="border-t-4 border-t-primary/40">
                    <CardContent className="p-4">
                      <p className="text-sm font-bold text-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-1">
                  Production Note: Fresh Density vs. Dry Density
                </p>
                <p className="text-muted-foreground">
                  Don't confuse fresh density with dry density—they're not the
                  same number. Fresh density runs roughly{" "}
                  <strong className="text-foreground">
                    150–200 kg/m³ higher
                  </strong>{" "}
                  than dry density because of evaporable water that leaves
                  during curing and drying. Design your process around fresh
                  density at discharge, but sell and certify on dry density.
                </p>
              </div>

              <Separator className="mb-10" />

              {/* ── Section 2: Protein vs Synthetic (moved up — pick chemistry first) ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Protein vs. Synthetic Foaming Agents: Which Is Right for You?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The{" "}
                <strong className="text-foreground">
                  protein foaming agent vs synthetic
                </strong>{" "}
                decision is a process decision, not just a price comparison. The
                two chemistries produce different foam characteristics, different
                pore structures, and different levels of robustness under real
                production conditions—especially at the lower densities where
                foam stability is the difference between product and waste.
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted/40">
                      <th className="text-left p-3 font-bold text-foreground border border-border">
                        Attribute
                      </th>
                      <th className="text-left p-3 font-bold text-foreground border border-border">
                        Protein-Based
                      </th>
                      <th className="text-left p-3 font-bold text-foreground border border-border">
                        Synthetic-Based
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        attr: "Foam stability",
                        protein:
                          "Typically strong—protein films form resilient bubble walls that resist drainage and collapse",
                        synthetic:
                          "Can be very stable in well-formulated products, but varies widely between suppliers",
                      },
                      {
                        attr: "Pore structure",
                        protein:
                          "Often produces tighter, more uniform cells with a closed-cell tendency",
                        synthetic:
                          "Can produce uniform pores, but some formulations trend toward more open-cell structure",
                      },
                      {
                        attr: "Strength at density",
                        protein:
                          "Often favorable—a stable void system means fewer weak zones per unit volume",
                        synthetic:
                          "Can match protein results but tends to be more sensitive to process control, especially at 400–800 kg/m³",
                      },
                      {
                        attr: "Handling & storage",
                        protein:
                          "More sensitive to temperature and shelf life—can degrade if stored poorly",
                        synthetic:
                          "Generally simpler logistics and longer shelf stability (supplier-dependent)",
                      },
                    ].map((row, i) => (
                      <tr
                        key={row.attr}
                        className={i % 2 === 0 ? "bg-background" : "bg-muted/10"}
                      >
                        <td className="p-3 font-semibold text-foreground border border-border align-top whitespace-nowrap">
                          {row.attr}
                        </td>
                        <td className="p-3 text-muted-foreground border border-border align-top">
                          {row.protein}
                        </td>
                        <td className="p-3 text-muted-foreground border border-border align-top">
                          {row.synthetic}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-muted/30 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-3">
                  Quick Selection Rules (Plant-Friendly)
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Go with protein foaming agents when foam stability is your top priority—low-density blocks below 600 kg/m³, tight density tolerances, and applications where pore uniformity directly affects thermal or acoustic performance.",
                    "Go with synthetic foaming agents when handling simplicity and supply consistency matter more—warmer climates with storage challenges, operations without cold-chain capability, and plants where operator training turnover is high.",
                    "If you're running multiple density grades off one line, qualify both types through actual production trials. Then standardize on whichever one delivers the lowest total cost—including scrap rate, rework, and strength variability. The cheapest drum on the dock is not always the cheapest foam in the block.",
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

              <Separator className="mb-10" />

              {/* ── Section 3: Core Technology ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                The Core Technology: Creating Stable Foam with a Foaming Agent
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A{" "}
                <strong className="text-foreground">
                  concrete foaming agent
                </strong>{" "}
                has exactly one job: produce foam with controlled bubble size
                and enough stability to survive mixing, pumping, casting, and
                the first hours of curing without collapsing. If the foam breaks
                down before the cement matrix locks it in place, your void
                system is gone and your density target is blown.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Pre-Formed Foam vs. In-Mixer Foaming: How CLC Plants Control
                Density
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most block plants run{" "}
                <strong className="text-foreground">pre-formed foam</strong>{" "}
                because it separates foam generation from slurry production and
                gives two independent control points instead of one chaotic one:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Dilute the foaming agent to a fixed concentration (this ratio stays locked unless the supplier or lot changes).",
                  "Generate foam through a foam generator—compressed air meets diluted solution, and out comes a shaving-cream-consistency foam at a target density.",
                  "Inject that foam into your cementitious slurry at a controlled flow rate. The amount of foam determines the final density. Period.",
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                What "Stable Foam" Means in Foam Concrete Chemicals
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On the production floor, stable foam means three things:
              </p>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {[
                  "It holds its density across your full mixing and casting window. If foam drainage is significant within ten minutes, you'll measure one density going in and a different one coming out.",
                  "It produces small, uniform bubbles. Large bubbles create weak planes. Uneven bubble distribution creates density gradients—strong at the bottom, weak and porous at the top.",
                  "It tolerates your water and your temperature. Hard water, cold water, warm water—the foam has to work in the conditions your plant actually runs, not the conditions on the supplier's data sheet.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground leading-relaxed mb-10 italic border-l-2 border-destructive/30 pl-4">
                When foam stability drifts, the symptoms show up fast: density
                scatter between pours, top-layer collapse in the molds, blocks
                that crumble during cutting, and compressive strength that
                bounces around from one test set to the next.
              </p>

              <Separator className="mb-10" />

              {/* ── Mid-page CTA ── */}
              <Card className="bg-primary text-primary-foreground mb-10">
                <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-base mb-1">
                      Need protein or synthetic foaming agent for CLC production?
                    </p>
                    <p className="text-sm opacity-90">
                      Share your target density grades, cement and filler
                      details, foam generator model, and curing setup. We'll
                      recommend the right chemistry with TDS, COA, sample
                      testing, and bulk pricing.
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

              {/* ── Section 4: Mix Design & Production Process ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                A Basic Mix Design and Production Process for CLC Blocks
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What follows is a working starting point for{" "}
                <strong className="text-foreground">
                  lightweight concrete mix design
                </strong>{" "}
                and a repeatable CLC block production sequence. Final proportions
                must be validated against your cement, filler source, sand PSD,
                target density, and curing setup. Copy someone else's mix design
                without adjusting for your materials and you'll spend the first
                month chasing density and strength.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">
                Sample Mix Designs (Starting Points, per 1 m³ Fresh CLC)
              </h3>

              <div className="grid md:grid-cols-2 gap-5 mb-8">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-5">
                    <p className="font-bold text-foreground mb-3">
                      ~700 kg/m³ Fresh — Insulation-Grade Blocks
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li><strong className="text-foreground">Cement:</strong> 260–320 kg</li>
                      <li><strong className="text-foreground">Fly ash / filler (optional):</strong> 120–220 kg</li>
                      <li><strong className="text-foreground">Fine sand (0–2 mm):</strong> 0–150 kg — less sand improves insulation value but can cost you strength</li>
                      <li><strong className="text-foreground">Water:</strong> w/b ratio 0.45–0.55</li>
                      <li><strong className="text-foreground">Pre-formed foam:</strong> dose by mass balance to hit target fresh density</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent/50">
                  <CardContent className="p-5">
                    <p className="font-bold text-foreground mb-3">
                      ~1000 kg/m³ Fresh — Non-Structural / Higher Strength
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li><strong className="text-foreground">Cement:</strong> 300–380 kg</li>
                      <li><strong className="text-foreground">Fly ash / filler:</strong> 150–300 kg</li>
                      <li><strong className="text-foreground">Fine sand (0–2 mm):</strong> 200–450 kg</li>
                      <li><strong className="text-foreground">Water:</strong> w/b ratio 0.40–0.50</li>
                      <li><strong className="text-foreground">Pre-formed foam:</strong> lower volume than insulation grade—calculate by mass balance</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm">
                <p className="font-semibold text-foreground mb-1">
                  Practical Note
                </p>
                <p className="text-muted-foreground">
                  Your control target is{" "}
                  <strong className="text-foreground">
                    fresh density at discharge from the mixer
                  </strong>
                  . Measure it. Log it. Every batch. Then confirm dry density
                  after your standard curing cycle and track the fresh-to-dry
                  conversion factor for each density grade. That factor will
                  drift if your water content or curing conditions change.
                </p>
              </div>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Step-by-Step Production Process
              </h3>

              <div className="space-y-4 mb-8">
                {[
                  {
                    step: "1",
                    heading: "Raw Material Prep",
                    detail:
                      "Sand moisture is the most common source of density drift that nobody checks until the blocks fail. Measure it. Compensate for it. Use consistent water temperature when possible—foam behavior shifts with temperature, and if your mix water is 50°F in January and 80°F in July, your foam performance is not the same.",
                  },
                  {
                    step: "2",
                    heading: "Slurry Mixing (cement + fillers + water)",
                    detail:
                      "Mix until the slurry is smooth, lump-free, and flows consistently. Watch your mixing intensity—you don't want to entrain air into the slurry before the foam goes in, because that uncontrolled air messes up your density calculation and produces voids you didn't design for.",
                  },
                  {
                    step: "3",
                    heading: "Foam Generation (foam concrete chemicals control point)",
                    detail:
                      "Dilute the concrete foaming agent to the supplier's specified ratio. Generate foam at a fixed target density—hold it within your control band (typically 60–100 g/L). If foam density drifts, stop and fix it before injecting. Weak foam going into good slurry still produces bad blocks.",
                  },
                  {
                    step: "4",
                    heading: "Foam Injection and Final Mixing",
                    detail:
                      "Inject foam into the slurry at a steady, controlled rate while mixing at low-to-moderate shear. Mix just long enough to distribute the foam uniformly. Over-mixing is the fastest way to destroy the void system—every extra minute of high-shear mixing ruptures bubbles you can't get back.",
                  },
                  {
                    step: "5",
                    heading: "Casting",
                    detail:
                      "Pour into molds with as little drop height as possible. Foam breaks on impact. Vibration should be minimal and validated—aggressive vibration is a foam killer.",
                  },
                  {
                    step: "6",
                    heading: "Pre-Curing and Cutting",
                    detail:
                      "Let the cast set until it's firm enough to cut without edges tearing or the wire dragging. Cutting too early rips the surface. Cutting too late dulls your wires and creates dust. Find the window for your density grade and standardize it.",
                  },
                  {
                    step: "7",
                    heading: "Curing",
                    detail:
                      "Keep moisture in. CLC is more sensitive to early drying than dense concrete because the high void content means less mass to buffer water loss. If blocks dry out too fast, shrinkage spikes and strength development stalls. Standardize curing duration and environment.",
                  },
                ].map((item) => (
                  <Card key={item.step}>
                    <CardContent className="p-5 flex items-start gap-4">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-bold text-sm text-foreground mb-1">
                          {item.heading}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* ── Common Mistakes (consolidated from warnings above) ── */}
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Common Mistakes and How to Spot Them
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These five problems show up on almost every CLC line at some
                point. Catching them early saves blocks and batches.
              </p>

              <div className="grid sm:grid-cols-1 gap-4 mb-10">
                {[
                  {
                    mistake: "Foam density drift",
                    symptom:
                      "Fresh density scatter between pours—blocks in the same run weigh different amounts with no mix change.",
                    fix:
                      "Check foam generator output density before every production run. Lock dilution ratio, air pressure, and solution temperature. If foam density wanders more than ±5 g/L from target, stop and recalibrate before injecting.",
                  },
                  {
                    mistake: "Over-mixing after foam injection",
                    symptom:
                      "Density at discharge looks right but cured blocks come out denser than expected. Cut faces show fewer, smaller voids than your foam volume should produce.",
                    fix:
                      "Reduce mixing time after foam injection. Mix at low shear, just long enough to distribute foam uniformly. Every extra 30 seconds of high-shear mixing ruptures bubbles you can't get back.",
                  },
                  {
                    mistake: "Dropping slurry from height during casting",
                    symptom:
                      "Top-layer collapse in molds. Visible density gradient from bottom to top of the block.",
                    fix:
                      "Minimize drop height at the pour point. Use a hose or chute to deliver foamed slurry as close to the mold surface as practical. Foam breaks on impact.",
                  },
                  {
                    mistake: "Aggressive vibration",
                    symptom:
                      "Surface looks dense while the core stays light. Overall density runs higher than calculated from foam input.",
                    fix:
                      "Reduce vibration intensity or eliminate it. CLC doesn't need vibration to consolidate. If you must vibrate, validate that your foam survives the specific setting you're using.",
                  },
                  {
                    mistake: "Blocks drying too fast during curing",
                    symptom:
                      "Surface cracking, curling at edges, low 28-day strength despite correct density.",
                    fix:
                      "Cover molds and maintain humidity during initial curing. High void content means less mass to buffer water loss—early drying causes shrinkage cracking and stalls hydration.",
                  },
                ].map((item) => (
                  <Card key={item.mistake} className="border-l-4 border-l-amber-400">
                    <CardContent className="p-5">
                      <p className="font-bold text-sm text-foreground mb-2">
                        {item.mistake}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong className="text-foreground">Symptom:</strong>{" "}
                        {item.symptom}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Fix:</strong>{" "}
                        {item.fix}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Separator className="mb-10" />

              {/* ── Section 5: QC & Sourcing ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Quality Control and Sourcing Reliable Foaming Agents
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 italic">
                Treat this section as your production QC checklist—what to
                control on your production floor, including your incoming
                materials, to keep blocks consistent and scrap rates low.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                CLC production rewards process discipline more than any other
                block-making technology. The same formula, the same equipment,
                the same crew—change one variable in the foam and the product
                changes with it. QC is not overhead. It's the only thing
                standing between premium blocks and a pile of rubble behind the
                plant.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">
                Key QC Parameters for Foaming Agents
              </h3>
              <ul className="space-y-2 mb-8 text-muted-foreground">
                {[
                  "Foam density at your dilution ratio and air pressure—not the supplier's. Record a target band and reject lots that fall outside it (typically 60–100 g/L depending on equipment).",
                  "Foam stability (drainage and half-life): Measure how much liquid drains out of a set volume of foam over a fixed time. Foam that drains fast produces blocks that collapse at the top.",
                  "Compatibility with your plant water: Hard water, chlorinated water, variable-temperature water. The foam has to work in your conditions, not in distilled water at 20°C.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-4">
                In-Process QC for Lightweight Concrete Blocks
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Track these on every production run:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    param: "Fresh density at discharge",
                    detail: "Your primary control knob. If this number wanders, everything downstream wanders with it.",
                  },
                  {
                    param: "Flow / spread",
                    detail: "Workability has to stay inside a window that gives you castable slurry without collapsing foam.",
                  },
                  {
                    param: "Visual pore uniformity",
                    detail: "Check cut faces for top-layer collapse, segregation banding, and oversized voids. If the pore structure looks wrong, it is wrong.",
                  },
                  {
                    param: "Dry density after curing",
                    detail: "Confirm your fresh-to-dry conversion factor holds. If it shifts, your water content or curing environment changed.",
                  },
                  {
                    param: "Compressive strength at 7 & 28 days",
                    detail: "Track by density grade. Strength that scatters at a given density means your void system isn't consistent.",
                  },
                  {
                    param: "Thermal conductivity (insulation grades)",
                    detail: "Verify by density band. This is what your customer is actually buying.",
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

              <h3 className="text-xl font-bold text-foreground mb-4">
                Supplier Vetting Checklist (International Sourcing-Ready)
              </h3>
              <ul className="space-y-2 mb-10 text-muted-foreground">
                {[
                  "Lot-specific COA with foam density and stability metrics tied to defined test methods—not a generic 'typical values' sheet",
                  "SDS and storage guidance covering real-world conditions: temperature limits, shelf life under tropical and temperate storage, packaging that survives ocean freight",
                  "Manufacturing traceability: batch numbering, retained samples, documented production QC",
                  "Technical support for dilution ratio optimization, foam generator tuning, and troubleshooting density drift when production doesn't match your trials",
                  "Scalable supply: trial quantities for qualification, then seamless scale-up to bulk shipments without reformulation surprises",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Separator className="mb-10" />

              {/* ── Bottom CTA ── */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Scaling Up CLC Production or Chasing Density Problems?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you're building out{" "}
                    <strong className="text-foreground">
                      CLC block production
                    </strong>{" "}
                    capacity—or you're already running and fighting density
                    scatter, foam collapse, or strength inconsistency—talk to{" "}
                    <strong className="text-foreground">
                      Joe at Shichem Industrial
                    </strong>
                    .
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Send him your target density grades, raw materials (cement,
                    filler, sand details), foam generator model, and curing
                    setup. Joe's team will recommend the right{" "}
                    <strong className="text-foreground">
                      concrete foaming agent
                    </strong>{" "}
                    chemistry—protein or synthetic—along with control specs,
                    dilution and operating parameters, and a plant-ready SOP
                    built for producing consistent{" "}
                    <strong className="text-foreground">
                      lightweight concrete blocks
                    </strong>{" "}
                    at industrial volume. TDS, formulation support, sample
                    testing, and bulk pricing—one conversation with Joe gets all
                    of it moving.
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
                      title: "5 Key Concrete Admixtures for Ready-Mix",
                      href: "/applications/5-key-concrete-admixtures-ready-mix-performance",
                    },
                    {
                      title: "Cold Weather Concreting Admixtures",
                      href: "/applications/cold-weather-concreting-admixtures",
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
