import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { ChevronRight, Beaker } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const WHATSAPP_LINK =
  "https://wa.me/8615653883028?text=Hello%2C%20I'm%20interested%20in%20SHMP%20and%20STPP%20alternatives%20for%20detergent%20formulation.%20Please%20share%20TDS%2C%20COA%2C%20grade%20options%2C%20MOQ%2C%20packing%2C%20and%20lead%20time.";

const PHASE_STYLES: Record<
  number,
  { border: string; bg: string; text: string; dot: string; label: string }
> = {
  1: {
    border: "border-blue-500",
    bg: "bg-blue-50",
    text: "text-blue-700",
    dot: "bg-blue-500",
    label: "Weeks 1–2",
  },
  2: {
    border: "border-emerald-500",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
    label: "Weeks 3–4",
  },
  3: {
    border: "border-amber-500",
    bg: "bg-amber-50",
    text: "text-amber-700",
    dot: "bg-amber-500",
    label: "Weeks 5–8",
  },
  4: {
    border: "border-primary",
    bg: "bg-primary/5",
    text: "text-primary",
    dot: "bg-primary",
    label: "Weeks 9–12",
  },
};

function PhaseBanner({
  phase,
  title,
}: {
  phase: number;
  title: string;
}) {
  const s = PHASE_STYLES[phase];
  return (
    <div
      className={`flex items-center gap-3 rounded-lg border ${s.border} ${s.bg} px-4 py-3 mb-6`}
    >
      <span
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${s.dot}`}
      >
        {phase}
      </span>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
        <span className={`text-sm font-bold uppercase tracking-wide ${s.text}`}>
          Phase {phase}
        </span>
        <span className="hidden sm:inline text-muted-foreground">·</span>
        <span className={`text-sm font-medium ${s.text}`}>{s.label}</span>
        <span className="hidden sm:inline text-muted-foreground">—</span>
        <span className="text-sm font-semibold text-foreground">{title}</span>
      </div>
    </div>
  );
}

export default function PhosphateFreeDetergents() {
  usePageMeta({
    title:
      "Phosphate-Free Detergents: STPP Alternatives & SHMP Guide | ShiChem",
    description:
      "As regulations tighten, find effective phosphate-free solutions for your detergents. This guide explores the use of SHMP and other builders as alternatives to STPP.",
    keywords:
      "phosphate-free detergents, STPP alternative detergent, sodium hexametaphosphate in detergent, detergent builder SHMP, eco-friendly detergent formulation, SHMP water softener, zeolite detergent builder, polycarboxylate detergent",
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
                  Phosphate-Free Detergents &amp; SHMP
                </span>
              </nav>

              <div className="flex items-center space-x-2 mb-4">
                <Beaker className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Formulation Guide — Detergents &amp; Cleaning Chemicals
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Phosphate-Free Detergents: A Guide to STPP Alternatives like
                SHMP
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The phosphorus limit just changed in your target market. Your
                current formula doesn't comply. You have 90 days before the
                next production run.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                That's the reality for any formulator still running a{" "}
                <strong className="text-foreground">detergent builder</strong>{" "}
                system built around STPP. With regulatory and retail pressure
                accelerating the move toward{" "}
                <strong className="text-foreground">
                  phosphate-free detergents
                </strong>
                , the engineering problem is real: replace the calcium
                sequestration, alkalinity buffering, and soil suspension that
                made STPP the benchmark—without losing wash performance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                This guide works as a 90-day reformulation plan. It covers why
                STPP worked, how{" "}
                <strong className="text-foreground">
                  sodium hexametaphosphate in detergent
                </strong>{" "}
                formulations can serve as a practical{" "}
                <strong className="text-foreground">STPP alternative</strong>{" "}
                where phosphorus limits allow it, and how to construct an{" "}
                <strong className="text-foreground">
                  eco-friendly detergent formulation
                </strong>{" "}
                using zeolites, polymers, and organic co-builders—organized
                by the four phases you'll walk through from audit to
                production.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Article Body ──────────────────────────────────────── */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">

              {/* ── Timeline overview ── */}
              <div className="grid grid-cols-4 gap-2 mb-12">
                {[1, 2, 3, 4].map((phase) => {
                  const s = PHASE_STYLES[phase];
                  return (
                    <div
                      key={phase}
                      className={`flex flex-col items-center rounded-lg border ${s.border} ${s.bg} py-3 px-2 text-center`}
                    >
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white ${s.dot} mb-1`}
                      >
                        {phase}
                      </span>
                      <span className={`text-[11px] font-bold ${s.text}`}>
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* ── The Regulatory Trigger ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                The Environmental Push Away from Phosphates in Detergents
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The chemistry works. The ecology doesn't. Phosphorus discharged
                into freshwater drives nutrient loading, fuels algal blooms, and
                degrades water quality in lakes and waterways. That's not new
                science—but the regulatory response keeps tightening.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the EU, phosphate restrictions on household laundry
                detergents took effect in{" "}
                <strong className="text-foreground">2013</strong>, followed by
                consumer automatic dishwashing products in{" "}
                <strong className="text-foreground">2017</strong> under the
                Detergents Regulation framework. Other markets are following
                with their own thresholds and timelines.
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic border-l-2 border-accent pl-4">
                Most "phosphate-free" claims aren't voluntary. They're driven by
                total phosphorus limits set by regulation, retailer mandates, or
                both. You don't get to choose whether to reformulate. You only
                get to choose how well the replacement system performs.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-10 font-semibold">
                The clock is running. Here's the plan.
              </p>

              <Separator className="mb-10" />

              {/* ── Phase 1: Understand What You're Losing ── */}
              <PhaseBanner
                phase={1}
                title="Understand What You're Losing"
              />

              <p className="text-muted-foreground leading-relaxed mb-6">
                Before you can replace STPP, you need to understand exactly what
                it was doing. This is the audit phase—map every function the
                builder was handling so nothing falls through during
                reformulation.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                The Function of a Builder: Why STPP Was So Effective
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                STPP earned its dominance because it solved three problems
                simultaneously in hard water—and it did it at an economical
                dose with predictable, lot-to-lot consistency. That combination
                is exactly what makes replacing it difficult.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    heading: "Water softening by sequestration",
                    detail:
                      "STPP grabs Ca²⁺ and Mg²⁺ ions so your surfactant system isn't wasting half its activity forming insoluble calcium soaps that deposit on fabric and leave grey haze on dishes.",
                  },
                  {
                    heading: "Alkalinity & pH buffering",
                    detail:
                      "Maintains the wash liquor in an effective pH range for soil removal and particulate dispersion. Drop out of that range and cleaning efficiency falls off a cliff.",
                  },
                  {
                    heading: "Anti-redeposition & dispersion",
                    detail:
                      "Keeps detached soil particles suspended in the wash water so they drain away instead of settling back onto the surfaces you just cleaned.",
                  },
                ].map((item) => (
                  <Card key={item.heading} className="border-t-4 border-t-primary/40">
                    <CardContent className="p-4">
                      <p className="text-sm font-bold text-foreground mb-1">
                        {item.heading}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-10 italic border-l-2 border-accent pl-4">
                One ingredient. Three functions. Predictable cost. Replacing it
                means splitting those functions across multiple ingredients and
                making them work together—which is a formulation engineering
                problem, not a simple swap.
              </p>

              <Separator className="mb-10" />

              {/* ── Phase 2: Map Your Replacement Options ── */}
              <PhaseBanner
                phase={2}
                title="Map Your Replacement Options"
              />

              <p className="text-muted-foreground leading-relaxed mb-6">
                What are your options? Here's the menu. Phase 2 is about
                surveying every viable builder chemistry before you commit to a
                formulation direction.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Sodium Hexametaphosphate (SHMP) as a Powerful Sequestrant
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">SHMP water softener</strong>{" "}
                capability comes from its polyphosphate chain structure—it
                complexes divalent metal ions and inhibits precipitation under a
                broad range of conditions.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Why SHMP Can Be a Practical STPP Alternative (When Permitted)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In detergent systems,{" "}
                <strong className="text-foreground">
                  sodium hexametaphosphate in detergent
                </strong>{" "}
                formulations does three things well:
              </p>
              <ul className="space-y-2 mb-8 text-muted-foreground">
                {[
                  "Knocks down hard water interference by sequestering Ca²⁺ and Mg²⁺ before they can deactivate surfactants or precipitate as insoluble salts on surfaces",
                  "Supports soil suspension and filming control—particularly inorganic filming on glassware and hard surfaces",
                  "Buffers against regional water variability—when incoming hardness swings seasonally or between distribution zones, SHMP keeps wash performance from swinging with it",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-1">
                  Compliance Reality Check
                </p>
                <p className="text-muted-foreground">
                  SHMP is a polyphosphate. It contains phosphorus. If your
                  product needs a strict "zero-phosphate" claim, SHMP won't get
                  you there. Before positioning it as part of a phosphate-free
                  system, verify the local definition of "phosphate-free" and
                  the allowable total-P threshold in your target market. Some
                  regulations set a numerical limit (e.g., grams P per dose)
                  rather than an absolute zero. SHMP may fit under a{" "}
                  <strong className="text-foreground">low-P limit</strong>. It
                  won't fit under a zero-P claim.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Formulating with SHMP and Other Co-Builders
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                No single ingredient replaces STPP on its own. The most robust
                phosphate-free detergents use a builder stack that divides the
                work: one ingredient captures hardness, another handles
                dispersion and threshold inhibition, a third provides
                alkalinity, and something else manages anti-redeposition.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">
                A Proven Phosphate-Free Builder Backbone: Zeolite + Polymer +
                Carbonate
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The standard European phosphate-free builder system—
                <strong className="text-foreground">
                  Zeolite A + polycarboxylate + sodium carbonate
                </strong>
                —has been in commercial use for years. It works by pairing
                zeolite's ion-exchange capacity with the polycarboxylate's
                dispersion and threshold effects, backed by carbonate for
                alkalinity. It's not a perfect STPP replacement in every
                condition—zeolite exchange kinetics can lag in cold water and
                short cycles—but it's the closest thing the industry has to a
                validated, scaled platform.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Where SHMP Fits in a Modern System
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When regulations allow some phosphorus—or for industrial and
                institutional products not bound by consumer "phosphate-free"
                claims—SHMP fills gaps that zeolite-polymer systems leave open:
              </p>
              <ul className="space-y-2 mb-10 text-muted-foreground">
                {[
                  "Front-end sequestrant for hardness spikes: SHMP reacts faster than zeolite in the first minutes of the wash cycle. In very hard water or Mg²⁺-rich supplies where zeolite is weaker, that speed advantage prevents early-wash calcium soap deposition.",
                  "Cold-water and short-cycle bridge: When zeolite exchange kinetics are too slow—cold water, 15-minute quick cycles—SHMP provides the sequestration that keeps surfactants working.",
                  "Filming and dispersion support: Paired with citrate and polymers, SHMP improves inorganic filming control on glassware and reduces residue on hard surfaces (system-dependent).",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
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
                      Need SHMP or STPP alternatives for your detergent system?
                    </p>
                    <p className="text-sm opacity-90">
                      Share your product type, target hardness range, and
                      phosphorus limits. We'll spec the right builder grades
                      with TDS, COA, sample testing, and bulk pricing.
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

              {/* ── Phase 3: Formulate and Validate ── */}
              <PhaseBanner
                phase={3}
                title="Formulate and Validate"
              />

              <p className="text-muted-foreground leading-relaxed mb-6">
                Pick your builder stack, build the prototype, run wash tests.
                This is where you commit to a direction and stress-test it
                against real wash conditions before you order anything at
                production scale.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Practical Co-Builder Combinations
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Zero-Phosphate Claim (Consumer Products)",
                    items: [
                      "Zeolite A for hardness capture + polycarboxylate for dispersion and threshold inhibition + sodium carbonate for alkalinity",
                      "Optional: citric acid or sodium citrate for chelation assistance and formulation flexibility, especially in spray-dried powders",
                    ],
                  },
                  {
                    title: "Low-Phosphate or Industrial Performance (Where Regulations Permit)",
                    items: [
                      "Reduced-dose STPP or SHMP as a sequestration booster + zeolite for base hardness capture + polymer dispersant for soil suspension",
                      "Add citrate for metal control and filming management in hard-surface and warewashing applications",
                    ],
                  },
                ].map((block) => (
                  <Card key={block.title} className="border-l-4 border-l-primary/40">
                    <CardContent className="p-5">
                      <p className="font-bold text-sm text-foreground mb-3">
                        {block.title}
                      </p>
                      <ul className="space-y-1.5">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-1">
                  Formulation Discipline
                </p>
                <p className="text-muted-foreground">
                  SHMP and other sequestrants don't perform in a vacuum. Their
                  effectiveness shifts with water hardness level, wash
                  temperature, contact time, and surfactant system. Validate
                  with actual wash performance testing—whiteness retention, ash
                  deposition, filming on glass, soil redeposition onto cotton.
                  A beaker chelation test tells you the chemistry works. A wash
                  test tells you the product works. They're not the same thing.
                </p>
              </div>

              <Separator className="mb-10" />

              {/* ── Phase 4: Source and Scale ── */}
              <PhaseBanner
                phase={4}
                title="Source and Scale"
              />

              <p className="text-muted-foreground leading-relaxed mb-6">
                Your prototype passed wash testing. Now lock in supply. The
                fastest way to undo a good reformulation is inconsistent raw
                material—this phase is about securing the right grade, the right
                documentation, and running the compatibility checks before you
                commit to a bulk order.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Sourcing Industrial-Grade SHMP for Detergent Manufacturing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If SHMP is in your builder stack, treat it like the performance
                chemical it is. Variability in chain length, purity, or particle
                size shows up as inconsistent sequestration, filming complaints,
                and wash-to-wash scatter that your QC team chases for weeks
                before anyone thinks to check the raw material.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">
                What to Specify and Verify from an SHMP Supplier
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    param: "Assay / active content",
                    detail:
                      "With tight acceptance limits—not a wide '≥68%' that lets the supplier ship anything in range.",
                  },
                  {
                    param: "Insolubles",
                    detail:
                      "Directly affects solution clarity, spray-dried product quality, and residue on washed surfaces.",
                  },
                  {
                    param: "Moisture",
                    detail:
                      "Controls caking in storage, flowability in dosing, and weighing accuracy on the batching floor.",
                  },
                  {
                    param: "Heavy metal limits",
                    detail:
                      "Aligned to your market requirements and customer expectations.",
                  },
                  {
                    param: "Particle size distribution",
                    detail:
                      "Drives dissolution rate—the difference between a builder that's fully active in a 15-minute cycle and one that's still dissolving when the drain opens.",
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

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Documentation Package for B2B Procurement
              </h3>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {[
                  "Lot-specific COA with test methods and traceable batch ID—not a 'typical values' sheet from last year",
                  "SDS in GHS format, ready for US regulatory filing",
                  "Storage and shelf-life guidance with real attention to packaging moisture barriers—SHMP absorbs moisture and hydrolyzes. Bad packaging means degraded product before it reaches the mixer.",
                  "Supplier quality system evidence (ISO 9001 at minimum) and a retained-sample policy that lets you trace back when something drifts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Scale-Up Checks Before Committing to Bulk
              </h3>
              <ul className="space-y-2 mb-10 text-muted-foreground">
                {[
                  "Dissolution and solution clarity at your use concentration in both cold and warm water—because your customers wash in both",
                  "Hardness tolerance window—challenge the SHMP with Ca and Mg at the levels your target markets actually deliver, not at a convenient lab number",
                  "System compatibility—test alongside your zeolites, polymer dispersants, enzymes, and bleach system. Polyphosphates can interact with calcium-loaded zeolite, precipitate in certain enzyme systems, or destabilize peroxide bleach under the wrong conditions. Find the interactions in the lab, not in the field.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Separator className="mb-10" />

              {/* ── Compliance Checkpoint ── */}
              <Card className="border-2 border-amber-300 bg-amber-50/50 mb-10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                      ✓
                    </span>
                    Compliance Checkpoint — Before You Go to Production
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Before committing your reformulated product to a production
                    run, verify every regulatory box is checked. This
                    consolidates the compliance triggers covered above into a
                    single pre-production checklist.
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {[
                      {
                        check: "Total phosphorus per dose",
                        detail:
                          "Confirm your formula meets the numerical total-P limit for every target market — not just the one that prompted this reformulation. EU household laundry limit took effect 2013; consumer ADW in 2017. Other jurisdictions set their own thresholds.",
                      },
                      {
                        check: "\"Phosphate-free\" claim validity",
                        detail:
                          "If your label says \"phosphate-free,\" verify the local regulatory definition. SHMP contains phosphorus — it may fit under a low-P numerical limit but will not satisfy a zero-P claim. Know the difference before you print packaging.",
                      },
                      {
                        check: "REACH and downstream registration",
                        detail:
                          "If selling into the EU, confirm all builder ingredients (including SHMP, zeolite, polycarboxylate, citrate) are REACH-registered at the tonnage band you need. Missing registrations can halt imports regardless of formula compliance.",
                      },
                      {
                        check: "Retailer and eco-label requirements",
                        detail:
                          "Retailer mandates and eco-label criteria (EU Ecolabel, Nordic Swan) can set stricter limits than regulation. Check the private-label spec sheet, not just the statute.",
                      },
                      {
                        check: "Documentation audit",
                        detail:
                          "Lot-specific COA, GHS-format SDS, ISO 9001 supplier evidence, and retained-sample traceability — all confirmed and on file before the first production batch.",
                      },
                    ].map((row) => (
                      <li key={row.check} className="flex items-start gap-3">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border border-amber-400 bg-white text-xs text-amber-600 mt-0.5">
                          ☐
                        </span>
                        <div>
                          <span className="font-semibold text-foreground">
                            {row.check}:
                          </span>{" "}
                          {row.detail}
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Separator className="mb-10" />

              {/* ── Bottom CTA ── */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Rebuilding Your Builder System?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you're reformulating for{" "}
                    <strong className="text-foreground">
                      phosphate-free detergents
                    </strong>{" "}
                    or qualifying an{" "}
                    <strong className="text-foreground">STPP alternative</strong>{" "}
                    like SHMP for industrial or regulated-low-phosphorus
                    applications, reach out to{" "}
                    <strong className="text-foreground">
                      Joe at Shichem Industrial
                    </strong>
                    .
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Send him your product type (powder or liquid, laundry or
                    ADW or I&amp;I), your target hardness range, and the
                    phosphorus limits you need to hit. Joe's team will spec the
                    right{" "}
                    <strong className="text-foreground">
                      detergent builder
                    </strong>{" "}
                    replacement—SHMP grades, co-builder options, QC
                    parameters—and back it up with TDS, formulation guidance,
                    sample testing, and bulk pricing. Send your P-limit and
                    hardness range and he'll get samples moving.
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
                      title: "Water Treatment Chemicals Sourcing Guide",
                      href: "/applications/water-treatment-chemicals-sourcing-guide",
                    },
                    {
                      title: "Dry-Mix Mortar Additives (HPMC, RDP, Fiber)",
                      href: "/applications/dry-mix-mortar-additives-guide",
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
