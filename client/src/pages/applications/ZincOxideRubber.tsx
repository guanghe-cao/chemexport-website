import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { ChevronRight, FlaskConical } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const WHATSAPP_LINK =
  "https://wa.me/8615653883028?text=Hello%2C%20I'm%20interested%20in%20zinc%20oxide%20for%20rubber%20compounding%20(vulcanization%20activator).%20Please%20share%20TDS%2C%20COA%2C%20grade%20options%2C%20MOQ%2C%20packing%2C%20and%20lead%20time.";

export default function ZincOxideRubber() {
  usePageMeta({
    title:
      "The Role of Zinc Oxide in Rubber Vulcanization: Activator Guide | ShiChem",
    description:
      "Explore the critical role of Zinc Oxide (ZnO) as an activator in the rubber vulcanization process. Understand how it improves cure efficiency, aging resistance, and final properties.",
    keywords:
      "zinc oxide rubber vulcanization, ZnO activator rubber, zinc oxide for rubber compounding, active zinc oxide supplier, rubber vulcanization activator, improve rubber aging resistance, sulfur vulcanization ZnO",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* ─── Hero — Mechanism-first cold open ───────────────── */}
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
                  Zinc Oxide in Rubber Vulcanization
                </span>
              </nav>

              <div className="flex items-center space-x-2 mb-4">
                <FlaskConical className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Technical Guide — Rubber Compounding &amp; Vulcanization
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                The Role of Zinc Oxide in Modern Rubber Vulcanization
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Every sulfur-cured compound runs through the same activation
                chain:{" "}
                <strong className="text-foreground">zinc oxide rubber</strong>{" "}
                reacts with stearic acid to form zinc stearate, zinc ions
                complex with accelerators, and those complexes generate the
                sulfurating species that actually build crosslinks. ZnO is the
                first link. When that link weakens—wrong grade, drifting
                purity, inconsistent surface area—the whole cure system
                underperforms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                This guide traces the activation mechanism from the{" "}
                <strong className="text-foreground">ZnO activator</strong>{" "}
                surface through to final crosslink formation, maps the failure
                modes that show up when ZnO quality slips, and covers how to
                source{" "}
                <strong className="text-foreground">
                  zinc oxide for rubber compounding
                </strong>{" "}
                with the consistency to{" "}
                <strong className="text-foreground">
                  improve rubber aging resistance
                </strong>{" "}
                and keep your cure curves where they belong—lot after lot.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Article Body ──────────────────────────────────────── */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">

              {/* ── Section 1: What Is Vulcanization (compressed) ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                What Is Rubber Vulcanization and Why Is It Essential?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                  Rubber vulcanization
                </strong>{" "}
                builds sulfur bridges between polymer chains, turning soft
                compound into an engineered material. The mechanism that follows
                depends entirely on how well this crosslinking process performs:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    label: "Elastic recovery & tensile strength",
                    detail:
                      "The crosslinked network stores energy and returns to shape instead of flowing under load.",
                  },
                  {
                    label: "Heat resistance & wear life",
                    detail:
                      "Crosslinks pin polymer chains in place, limiting the molecular mobility that drives softening, creep, and abrasion.",
                  },
                  {
                    label: "Compression set control",
                    detail:
                      "Dimensional stability under sustained load—what keeps seals sealing and mounts mounting.",
                  },
                  {
                    label: "Chemical resistance",
                    detail:
                      "A cured network resists swelling and attack far better than raw compound (polymer- and crosslink-dependent).",
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

              <p className="text-sm text-muted-foreground leading-relaxed mb-10 italic border-l-2 border-destructive/30 pl-4">
                Without a controlled cure, none of this is predictable. The cure
                system is the compound. And the cure system starts with ZnO.
              </p>

              <Separator className="mb-10" />

              {/* ── Section 2: THE MECHANISM (centerpiece) ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Zinc Oxide as the Primary Activator in the Cure System
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ZnO is not filler. It's not there for cost or color. In a sulfur
                vulcanization system, zinc oxide is the{" "}
                <strong className="text-foreground">ZnO activator</strong> that
                makes accelerators do their job at practical temperatures and
                cycle times. Strip it out—or let the grade drift—and your
                accelerator package underperforms, cure times stretch, and
                crosslink density drops. The classic activation package is{" "}
                <strong className="text-foreground">ZnO + stearic acid</strong>,
                and it works because it converts insoluble zinc oxide particles
                into reactive zinc species that plug directly into accelerator
                chemistry.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                How ZnO + Stearic Acid Activates Accelerators
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The activation chain has three links. Break any one and the
                downstream steps starve:
              </p>

              {/* Vertical mechanism chain with connecting arrows */}
              <div className="relative mb-10">
                {/* Step 1 */}
                <div className="relative">
                  <Card className="border-2 border-primary/30 shadow-sm">
                    <CardContent className="p-5 flex items-start gap-4">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center mt-0.5">
                        1
                      </span>
                      <div>
                        <p className="font-bold text-foreground mb-1">
                          Stearic acid forms zinc soaps
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Stearic acid attacks the ZnO surface and forms zinc
                          stearate, dramatically improving zinc ion availability
                          and dispersion through the rubber phase. Without this
                          step, most of your ZnO sits as inert particles that
                          contribute nothing to cure.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Arrow connector 1→2 */}
                <div className="flex justify-center py-1">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-primary/40" />
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/40" />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <Card className="border-2 border-primary/30 shadow-sm">
                    <CardContent className="p-5 flex items-start gap-4">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center mt-0.5">
                        2
                      </span>
                      <div>
                        <p className="font-bold text-foreground mb-1">
                          Zn²⁺ ions complex with accelerators
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Zn²⁺ ions form complexes with thiazoles, sulfenamides,
                          dithiocarbamates, and the whole accelerator family.
                          These zinc–accelerator complexes are far more reactive
                          toward sulfur than the accelerator alone.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Arrow connector 2→3 */}
                <div className="flex justify-center py-1">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-primary/40" />
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary/40" />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <Card className="border-2 border-primary/30 shadow-sm">
                    <CardContent className="p-5 flex items-start gap-4">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center mt-0.5">
                        3
                      </span>
                      <div>
                        <p className="font-bold text-foreground mb-1">
                          Active sulfurating species build crosslinks
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          The complexes generate active sulfurating species that
                          build crosslinks faster, more completely, and with
                          better selectivity for the crosslink types you want
                          (mono- and disulfidic vs. polysulfidic, depending on
                          the system).
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Chain summary label */}
                <div className="mt-4 text-center">
                  <span className="inline-block text-xs font-semibold text-primary/70 uppercase tracking-widest bg-primary/5 rounded-full px-4 py-1.5">
                    ZnO → Zinc Stearate → Zn-Accelerator Complex → Sulfurating
                    Species → Crosslinks
                  </span>
                </div>
              </div>

              {/* Rheometer box — expanded */}
              <div className="bg-muted/30 rounded-lg p-6 mb-10 border border-muted">
                <p className="font-semibold text-foreground mb-3 text-base">
                  What Proper Activation Looks Like on the Rheometer
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  When all three links in the chain are working—ZnO grade is
                  right, stearic acid ratio is matched, and the accelerator
                  package sees enough reactive zinc—you read it directly off
                  the MDR or ODR trace:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Faster torque development — the cure rate picks up without moving the scorch point dangerously close to your processing window",
                    "Higher ultimate torque at the same time and temperature — more complete crosslinking, which means better physical properties per minute of press time",
                    "Better scorch safety vs. cure speed balance — this is the whole game in production compounding, and it's where ZnO grade and dose interact with accelerator selection",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-3 italic">
                  If you're seeing sluggish torque rise, long t90, or a
                  scorch-cure window that keeps tightening—the first place to
                  look is the activation chain, not the accelerator.
                </p>
              </div>

              <Separator className="mb-10" />

              {/* ── Section 3: What Happens When the Chain Breaks ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                The Impact of ZnO Particle Size and Purity on Performance
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The activation chain above looks clean on paper. In practice,
                two bags of zinc oxide can look identical, test at the same
                assay, and behave completely differently in the mixer and in the
                press. Particle size, surface area, and trace impurity profile
                determine how much reactive zinc is actually available for
                activation—and how consistently it shows up lot after lot.
                Here's what happens when the first link weakens.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">
                Active vs. Standard Zinc Oxide Rubber Grades
              </h3>
              <p className="text-sm text-muted-foreground mb-4 italic">
                When the first link is too coarse or weak, the whole chain
                fires slower—or doesn't fire evenly at all.
              </p>
              <div className="grid md:grid-cols-2 gap-5 mb-8">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-5">
                    <p className="font-bold text-foreground mb-3">
                      Active ZnO — Finer Particle, Higher Surface Area
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>More zinc surface exposed to stearic acid → faster, more complete conversion to reactive zinc soaps. The cure system fires harder at the same phr loading.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Better dispersion uniformity—fewer "dead spots" where activation is weak and crosslink density is low.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Enables lower ZnO loading while maintaining cure performance—matters for cost and for tightening zinc discharge limits.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent/50">
                  <CardContent className="p-5">
                    <p className="font-bold text-foreground mb-3">
                      Standard ZnO — Coarser Particles, Lower Surface Area
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Adequate activation for general-purpose compounds where cure demands aren't extreme.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>More sensitive to mixing quality—if dispersion is inconsistent, activation will be inconsistent, showing up as batch-to-batch variation in cure curves.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Slower cure response in demanding recipes: high-filler compounds, low-sulfur systems, formulations with tight activation windows.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-8 text-sm">
                <p className="font-semibold text-foreground mb-1">
                  When Benchmarking ZnO Price
                </p>
                <p className="text-muted-foreground">
                  Compare on performance-relevant specs—surface area, PSD,
                  actual cure response in your compound—not just assay
                  percentage. A 99.7% assay coarse powder that under-activates
                  your system costs more in scrap and press time than a properly
                  graded active oxide at a higher unit price.
                </p>
              </div>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Purity: Why Trace Impurities Show Up as Cure Drift
              </h3>
              <p className="text-sm text-muted-foreground mb-4 italic">
                When contamination disrupts complex formation, the second and
                third links in the chain misfire—and you see it as
                batch-to-batch scatter that no mixing adjustment can fix.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ZnO is a reactive input, not inert powder. The purity parameters
                that actually affect your compound:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    param: "ZnO assay consistency",
                    detail:
                      "Lot-to-lot consistency matters more than the absolute number. A supplier who delivers 99.5% ± 0.1% is more valuable than one who claims 99.9% but drifts ± 0.5%.",
                  },
                  {
                    param: "Heavy metals (Pb, Cd, others)",
                    detail:
                      "Regulatory compliance is one concern. Performance is another—certain trace metals interfere with accelerator chemistry or catalyze oxidative degradation.",
                  },
                  {
                    param: "Insoluble matter & sieve residue",
                    detail:
                      "Undispersed grit creates localized activation defects and can show up as visible defects in molded parts.",
                  },
                  {
                    param: "Moisture & loss on ignition",
                    detail:
                      "Affects handling, weighing accuracy, and introduces variability into batch consistency that's hard to diagnose.",
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

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-2">
                  How Cure Variation Problems Appear in Production
                </p>
                <ul className="space-y-1.5 text-muted-foreground">
                  {[
                    "Scorch time shifting between lots — mixing parameters haven't changed, but the compound starts kicking earlier or later. Check the ZnO.",
                    "Torque plateau instability — under-cure in some batches, reversion sensitivity in others. Same recipe, different zinc availability.",
                    "Aging performance scatter — tensile retention and elongation after heat aging wander between production runs. The crosslink network is inconsistent because activation was inconsistent.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="flex-shrink-0">⚠</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator className="mb-10" />

              {/* ── Mid-page CTA (moved after failure modes) ── */}
              <Card className="bg-primary text-primary-foreground mb-10">
                <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-base mb-1">
                      Need active or standard ZnO for rubber compounding?
                    </p>
                    <p className="text-sm opacity-90">
                      Share your polymer system, accelerator package, target
                      cure profile, and current ZnO loading. We'll recommend
                      the right grade with TDS, COA, sample testing, and bulk
                      pricing.
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

              {/* ── Section 4: Beyond Vulcanization (brief) ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Beyond Vulcanization: Other Functions of ZnO in Rubber
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ZnO is already in the formula for activation. While it's
                there, it pulls extra weight. These secondary functions don't
                replace dedicated stabilizers or pigments, but in the right
                compound design they add real value at no extra loading cost.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    function: "Thermal conductivity",
                    detail:
                      "ZnO conducts heat better than most organic compounding ingredients. In thick-section cures and heat-generating dynamic applications, that helps move heat out of the compound. The effect is compound-design-dependent, but it's measurable.",
                  },
                  {
                    function: "UV & weathering support",
                    detail:
                      "ZnO absorbs UV radiation. In light-colored EPDM, NR/SBR blends without carbon black, and exposed profiles, this provides a baseline level of UV protection. It won't replace a proper antiozonant/antioxidant package, but it contributes.",
                  },
                  {
                    function: "White pigmentation",
                    detail:
                      "In non-black compounds, ZnO provides brightness and opacity. It's already in the formula for cure activation—the pigmentary contribution comes at no extra cost.",
                  },
                  {
                    function: "Acid scavenging",
                    detail:
                      "ZnO can neutralize acidic byproducts generated during processing or service life in certain polymer systems (CR, for example), supporting compound stability over time.",
                  },
                ].map((item) => (
                  <Card key={item.function}>
                    <CardContent className="p-4">
                      <p className="text-sm font-bold text-foreground mb-1">
                        {item.function}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-10 italic border-l-2 border-accent pl-4">
                None of these replace purpose-built protection chemistry. But in
                a well-engineered compound, ZnO's secondary functionality adds
                up—and it's already there for the cure.
              </p>

              <Separator className="mb-10" />

              {/* ── Section 5: Sourcing (mechanism protection) ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Sourcing High-Quality Rubber-Grade Zinc Oxide: Buyer Checklist
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If the activation chain starts with ZnO, controlling ZnO
                quality controls the entire cure. Selecting an{" "}
                <strong className="text-foreground">
                  active zinc oxide supplier
                </strong>{" "}
                is a risk-management decision disguised as a purchasing
                decision. When ZnO quality drifts, cure control drifts with
                it—and the cost lands on the production floor as scrap, extended
                press cycles, rework, and physical property failures that don't
                get caught until the parts are in the customer's hands.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  {
                    heading: "Core Specifications (on the PO and every COA)",
                    items: [
                      "ZnO assay with defined min/max tolerance—not a single typical value",
                      "Particle size distribution (D50/D90) and/or BET surface area, especially for active grades where surface area is the performance driver",
                      "Insoluble matter / sieve residue limits—undispersed particles don't activate anything",
                      "Moisture / LOI limits—for weighing accuracy and batch consistency",
                      "Heavy metals limits (Pb, Cd, others) per your compliance requirements and customer specs",
                    ],
                  },
                  {
                    heading: "Documentation Package (non-negotiable)",
                    items: [
                      "Lot-specific COA with test methods and traceable batch numbers. Not a 'typical' certificate. Actual results from the lot you're receiving.",
                      "SDS in GHS format with storage and handling guidance that reflects the actual product, not a generic template",
                      "Regulatory alignment documentation relevant to your market (REACH status for EU-facing supply chains, customer-specific declarations where required)",
                    ],
                  },
                  {
                    heading: "Supplier Capability Checks",
                    items: [
                      "In-house QC with documented procedures: incoming raw material testing, in-process checks, finished-goods testing, and retained samples per lot",
                      "Packaging that actually protects fine active-grade powder from moisture pickup and contamination during ocean freight and warehouse storage. Bag integrity is a real issue for high-surface-area ZnO—if packaging fails, the product cakes and dispersibility degrades.",
                      "Pre-shipment samples pulled from the production lot tied to your bulk order. Not a 'reference sample' from a different run.",
                      "Technical support that can work through cure drift troubleshooting, dispersion optimization, and dosage adjustment when your compound doesn't behave the way the lab trial predicted.",
                    ],
                  },
                ].map((section) => (
                  <Card key={section.heading} className="border-l-4 border-l-primary/40">
                    <CardContent className="p-6">
                      <p className="font-bold text-foreground mb-3">
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

              {/* ── Bottom CTA — tailored to mechanism ── */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Need to Lock Down Your ZnO Supply?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you're qualifying{" "}
                    <strong className="text-foreground">zinc oxide rubber</strong>{" "}
                    grades for faster, more stable{" "}
                    <strong className="text-foreground">
                      rubber vulcanization
                    </strong>
                    —or evaluating an{" "}
                    <strong className="text-foreground">active ZnO activator</strong>{" "}
                    to tighten cure efficiency and{" "}
                    <strong className="text-foreground">
                      improve rubber aging resistance
                    </strong>{" "}
                    without blowing up your scorch safety—talk to{" "}
                    <strong className="text-foreground">
                      Joe at Shichem Industrial
                    </strong>
                    .
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Send him your polymer system (NR, SBR, EPDM, NBR—whatever
                    you're running), your accelerator package, and your target
                    cure profile. Joe's team will match the ZnO grade to the
                    mechanism—surface area, purity spec, and loading
                    optimized for your activation chain—then back it with
                    TDS, compounding support, sample testing, and bulk pricing
                    so every lot feeds the same cure curve.
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
                      title: "Paint & Coating Fillers (CaCO₃, Talc, Kaolin)",
                      href: "/applications/paint-coating-fillers-guide",
                    },
                    {
                      title: "Water Treatment Chemicals Sourcing Guide",
                      href: "/applications/water-treatment-chemicals-sourcing-guide",
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
