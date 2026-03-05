import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { ChevronRight, Paintbrush } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const WHATSAPP_LINK =
  "https://wa.me/8615653883028?text=Hello%2C%20I'm%20interested%20in%20industrial%20fillers%20for%20paints%20and%20coatings%20(calcium%20carbonate%2C%20talc%2C%20kaolin).%20Please%20share%20TDS%2C%20COA%2C%20MOQ%2C%20packing%2C%20and%20lead%20time.";

export default function PaintCoatingFillers() {
  usePageMeta({
    title:
      "Solving Paint & Coating Problems with Industrial Fillers | ShiChem",
    description:
      "Struggling with paint performance? Learn how industrial fillers like Calcium Carbonate, Talc, and Kaolin can improve opacity, durability, and cost-efficiency in your formulations.",
    keywords:
      "industrial fillers paint coatings, calcium carbonate filler, talc powder for coatings, kaolin clay paint filler, improve paint opacity, reduce coating cost with fillers, paint and coating additives, extender pigments",
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
                  Industrial Fillers for Paints &amp; Coatings
                </span>
              </nav>

              <div className="flex items-center space-x-2 mb-4">
                <Paintbrush className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Formulation Guide — Paints, Coatings &amp; Industrial
                  Minerals
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Solving Common Problems in Paints &amp; Coatings with
                Industrial Fillers
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Stop calling fillers "cheap extenders." That mindset is twenty
                years out of date and it's costing you performance. In any
                well-built formulation,{" "}
                <strong className="text-foreground">industrial fillers</strong>{" "}
                are functional{" "}
                <strong className="text-foreground">
                  paint and coating additives
                </strong>{" "}
                that directly control opacity, sheen, scrub resistance, barrier
                behavior, and rheology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                This guide covers how{" "}
                <strong className="text-foreground">
                  calcium carbonate filler
                </strong>
                ,{" "}
                <strong className="text-foreground">
                  talc powder for coatings
                </strong>
                , and{" "}
                <strong className="text-foreground">
                  kaolin clay paint filler
                </strong>{" "}
                solve real formulation problems—and how to pick the right grade
                based on particle size, shape, and binder demand instead of
                price per ton.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Article Body ──────────────────────────────────────── */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">

              {/* ── Section 1: Functional Role ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Beyond Color: The Functional Role of Fillers in Coatings
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fillers—extender pigments, if you prefer the old terminology—shape
                the performance of a coating film through four variables: particle
                size distribution (PSD), particle shape, surface chemistry, and
                oil absorption (which is really binder demand by another name).
                Together, these control the micro-architecture of the dried film:
                how pigments pack together, how efficiently light scatters, and
                how fast water and ions find a path through the matrix.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What industrial fillers actually engineer in your formulation:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  {
                    label: "Opacity and brightness",
                    detail:
                      "A well-graded filler optimizes TiO₂ spacing and boosts light scattering efficiency, letting you improve paint opacity at lower titanium dioxide loading. That's real money back in the formula.",
                  },
                  {
                    label: "Sheen control",
                    detail:
                      "Surface micro-roughness and PVC targeting determine whether you hit flat, eggshell, or satin. Filler PSD is the primary lever.",
                  },
                  {
                    label: "Durability",
                    detail:
                      "Scrub resistance, block resistance, abrasion performance—all improvable with the right filler at the right loading, provided you don't starve the binder in the process.",
                  },
                  {
                    label: "Barrier performance",
                    detail:
                      "Platy fillers force water and ions to take a longer path through the film. That translates to better anti-corrosion behavior and lower moisture transmission in primers and topcoats.",
                  },
                  {
                    label: "Process economics",
                    detail:
                      "Fillers raise solids, stabilize in-can viscosity, and cut raw material cost per gallon. But only if you control oil absorption and dispersion quality. An uncontrolled filler addition raises viscosity, destabilizes the grind, and tanks scrub or hiding.",
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

              <Separator className="mb-10" />

              {/* ── Section 2: Calcium Carbonate ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Calcium Carbonate (GCC/PCC): The Workhorse for Brightness and
                Opacity
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A well-selected{" "}
                <strong className="text-foreground">
                  calcium carbonate filler
                </strong>{" "}
                anchors most interior architectural paint formulations. It
                delivers high brightness, solid film build, and cost-efficient
                volume solids. The gap between "performs well" and "kills my
                gloss and spikes viscosity every other batch" almost always
                comes down to particle size, PSD width, and surface treatment.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                GCC vs. PCC: What Changes in the Paint Film
              </h3>
              <div className="grid md:grid-cols-2 gap-5 mb-8">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-5">
                    <p className="font-bold text-foreground mb-3">
                      GCC — Ground Calcium Carbonate
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Mined limestone, mechanically ground. Typically a broader particle size distribution.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Go-to for cost-effective volume extension and baseline rheology contribution.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Grade selection matters—the wrong cut means grit on the drawdown bar and gloss numbers that wander between batches.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent/50">
                  <CardContent className="p-5">
                    <p className="font-bold text-foreground mb-3">
                      PCC — Precipitated Calcium Carbonate
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Synthesized, not mined. Tighter PSD, controllable crystal morphology.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Higher purity and brightness. Can measurably improve hiding efficiency by optimizing TiO₂ particle spacing in the dried film.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Costs more per ton than GCC. Earns it back in formulations where performance targets justify the upgrade.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                How Calcium Carbonate Helps Improve Paint Opacity in Interior
                Paints
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Calcium carbonate will never match TiO₂'s refractive index.
                That's not the point. The point is that a properly graded CaCO₃
                makes your TiO₂ work harder by:
              </p>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {[
                  "Spacing TiO₂ particles optimally—crowded titanium dioxide scatters light less efficiently. The right filler PSD acts as a spacer, reducing the 'crowding penalty' and getting more hiding per pound of TiO₂.",
                  "Contributing fine-particle scattering—especially in engineered PSD grades where the fine fraction is designed to add its own scattering contribution below the CPVC.",
                  "Enabling higher PVC without destroying application feel—as long as binder demand stays within budget, you can push PVC up, build more film, and maintain acceptable trowel-out and leveling.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-2">
                  Practical Formulation Notes
                </p>
                <ul className="space-y-1.5 text-muted-foreground">
                  {[
                    "Finer grades give smoother films and better hiding support but drive viscosity up and pull more binder out of the system. Over-fine and you're starving the film.",
                    "Coarser grades are easy on binder demand and viscosity but hurt film smoothness, gloss, and scrub. Push too far and the surface feels rough under the roller.",
                    "Watch grit, sieve residue, and brightness lot to lot. A supplier who drifts 2 points on brightness will show up in your QC as haze shifts and gloss drift that nobody can explain until someone checks the filler.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="flex-shrink-0">⚠</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator className="mb-10" />

              {/* ── Mid-page CTA ── */}
              <Card className="bg-primary text-primary-foreground mb-10">
                <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-base mb-1">
                      Need CaCO₃, talc, or kaolin grades with full technical documentation?
                    </p>
                    <p className="text-sm opacity-90">
                      Share your resin system, target sheen, PVC range, and
                      the specific problem you're solving. We'll recommend the
                      right filler grades with TDS, COA, samples, and bulk
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

              {/* ── Section 3: Talc ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Talc Powder: Improving Durability and Barrier Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                  Talc powder for coatings
                </strong>{" "}
                brings something the other fillers can't: a naturally platy,
                lamellar particle shape that stacks in the film like shingles on
                a roof. Water and ions don't travel in a straight line through a
                talc-loaded film—they wind through a tortuous path that buys you
                time and durability.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Where Talc Solves Common Coating Failures
              </h3>

              <div className="space-y-4 mb-8">
                {[
                  {
                    failure: "Poor scrub resistance or early burnish",
                    solution:
                      "The platy reinforcement distributes stress across the film surface instead of letting the brush or pad dig in. In the right binder balance, talc-loaded films hold their sheen longer under wet scrubbing. Overload it or under-bind it and you lose the benefit—but get the ratio right and scrub numbers climb.",
                  },
                  {
                    failure: "Moisture sensitivity and corrosion creep",
                    solution:
                      "This is talc's signature move. Lamellar particles oriented in the film plane create overlapping barriers that slow water and chloride ingress. In primers for steel and exterior wood, that path-length extension translates directly to slower corrosion initiation and less blistering.",
                  },
                  {
                    failure: "Weak film toughness in higher-PVC systems",
                    solution:
                      "At PVC levels where the binder is stretched thin, talc's platy structure adds crack resistance and film integrity that equant fillers can't match. The plates bridge micro-defects instead of concentrating stress.",
                  },
                ].map((item) => (
                  <Card key={item.failure} className="border-l-4 border-l-primary/40">
                    <CardContent className="p-5">
                      <p className="text-sm font-bold text-foreground mb-1">
                        {item.failure}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.solution}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-muted/30 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-3">
                  Procurement &amp; QC Controls for Talc
                </p>
                <ul className="space-y-1.5 text-muted-foreground">
                  {[
                    "Aspect ratio: Higher aspect ratio = stronger barrier effect and more shear-thinning response. Cheap talc often means low aspect ratio and a fraction of the barrier performance.",
                    "Whiteness and impurity profile: Iron-bearing impurities discolor light tints. For pastels or whites, demand low-Fe grades and verify incoming lots.",
                    "Oil absorption: Talc generally runs higher on binder demand than CaCO₃. In a binder-limited formula, high oil absorption talc will steal resin from the pigment-binder interface and cost you scrub resistance.",
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

              {/* ── Section 4: Kaolin ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Kaolin Clay: Enhancing Sheen Control and Hiding Power
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                  Kaolin clay paint filler
                </strong>{" "}
                (China clay) is the sheen-control specialist. Its plate-like
                particle shape and fine PSD create the controlled surface
                micro-roughness that defines a flat or matte finish—and when
                used strategically, kaolin also improves hiding efficiency and
                film structure without the opacity penalty you'd expect from a
                non-opacifying filler.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                How Kaolin Controls Gloss and Supports Pigment Dispersion
              </h3>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {[
                  "Sheen control: The flat, plate-like particles interrupt the film surface at a microscopic level, scattering reflected light and pulling gloss down in a controlled, predictable way. This is how you hit a consistent flat or matte without over-matting and killing the film's ability to clean.",
                  "Hiding efficiency support: Kaolin helps with pigment packing geometry and can improve how TiO₂ distributes through the film—which means you improve paint opacity without simply dumping in more titanium dioxide.",
                  "Film structure: Adds mechanical reinforcement that can improve block resistance and reduce surface tack in critical-PVC and near-CPVC systems.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid md:grid-cols-2 gap-5 mb-6">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-5">
                    <p className="font-bold text-foreground mb-3">
                      Hydrous Kaolin
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Better fit for rheology balance and smoother film profiles in waterborne systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Lower viscosity contribution. Easier to disperse.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>The safe default for most interior architectural formulations.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent/50">
                  <CardContent className="p-5">
                    <p className="font-bold text-foreground mb-3">
                      Calcined Kaolin
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Stronger opacity contribution and more aggressive flatting effect via internal voids that scatter light.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Trade-off: higher viscosity impact and more sensitivity to dispersion quality.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>If your grind isn't right, calcined kaolin will punish you with settling, flooding, and float.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-1">
                  Formulation Warning
                </p>
                <p className="text-muted-foreground">
                  Kaolin can spike viscosity fast if dispersion is incomplete
                  or the dispersant package isn't matched to the grade. Validate
                  your grind fineness, check for color float and flooding, and
                  run storage stability under temperature cycling. A paint that
                  looks good out of the disperser and separates after two weeks
                  in a warm warehouse ships with a problem.
                </p>
              </div>

              <Separator className="mb-10" />

              {/* ── Section 5: Selection Guide ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Selecting the Right Filler: A Guide for Coating Formulators
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Picking industrial fillers is an engineering decision, not a
                purchasing decision. Particle size, PSD, oil absorption, shape,
                and purity have to align with your target PVC, sheen
                specification, and durability requirements.
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto mb-10">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted/40">
                      <th className="text-left p-3 font-bold text-foreground border border-border">
                        Filler
                      </th>
                      <th className="text-left p-3 font-bold text-foreground border border-border">
                        Particle Form
                      </th>
                      <th className="text-left p-3 font-bold text-foreground border border-border">
                        Strongest Contribution
                      </th>
                      <th className="text-left p-3 font-bold text-foreground border border-border">
                        Watch Outs
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        filler: "Calcium Carbonate (GCC/PCC)",
                        form: "Equant / irregular (grade-dependent)",
                        strength:
                          "Brightness, volume extension, cost control, opacity support in interiors",
                        watchouts:
                          "Too fine spikes viscosity; too coarse hurts gloss/scrub; grit and brightness drift between lots",
                      },
                      {
                        filler: "Talc",
                        form: "Platy / lamellar",
                        strength:
                          "Barrier properties, durability reinforcement, anti-corrosion in primers",
                        watchouts:
                          "Higher binder demand; iron contamination risk; strong effect on sheen and rheology",
                      },
                      {
                        filler: "Kaolin (Hydrous / Calcined)",
                        form: "Plate-like",
                        strength:
                          "Sheen control, hiding efficiency, film reinforcement",
                        watchouts:
                          "Dispersion-sensitive; viscosity risk; settling and float if stabilization is weak",
                      },
                    ].map((row, i) => (
                      <tr
                        key={row.filler}
                        className={i % 2 === 0 ? "bg-background" : "bg-muted/10"}
                      >
                        <td className="p-3 font-semibold text-foreground border border-border align-top">
                          {row.filler}
                        </td>
                        <td className="p-3 text-muted-foreground border border-border align-top">
                          {row.form}
                        </td>
                        <td className="p-3 text-muted-foreground border border-border align-top">
                          {row.strength}
                        </td>
                        <td className="p-3 text-muted-foreground border border-border align-top">
                          {row.watchouts}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-5">
                A Practical Selection Workflow: Start with the Failure Mode
              </h3>

              <div className="space-y-4 mb-10">
                {[
                  {
                    problem: "Low hiding or brightness problems",
                    action:
                      "Optimize your CaCO₃ grade first (PSD, brightness). Layer in kaolin for TiO₂ spacing and scattering support. Check whether your titanium dioxide is actually well-dispersed before assuming you need more of it.",
                  },
                  {
                    problem: "Poor scrub or weak film integrity",
                    action:
                      "Evaluate talc loading for platy reinforcement and kaolin for structural support—but check binder demand before you add. If the formula is already binder-starved, more filler makes the problem worse.",
                  },
                  {
                    problem: "Corrosion creep or moisture blistering",
                    action:
                      "Platy talc is your first move. Pair it with the appropriate anti-corrosion pigment package. Barrier performance is a function of aspect ratio and loading—cheap, low-aspect-ratio talc won't get the job done.",
                  },
                ].map((item) => (
                  <Card key={item.problem}>
                    <CardContent className="p-5 flex items-start gap-4">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <p className="font-bold text-sm text-foreground mb-1">
                          {item.problem}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.action}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-muted/30 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-3">
                  Four Rules Before You Add Any Filler
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Set your PVC strategy first. Fillers behave one way below CPVC and a completely different way near it. As you approach CPVC, binder demand becomes the hard constraint.",
                    "Match filler oil absorption to your binder budget. High oil absorption fillers eat binder. Know the oil absorption of every filler in the grind and account for it.",
                    "Validate dispersion and shelf stability—not just the drawdown. Run fineness-of-grind checks. Heat-age and cold-cycle the cans. Check for syneresis, hard settling, and color shift.",
                    "Specify what you'll control lot to lot: PSD, brightness, moisture, sieve residue, and key impurity limits. If you're not testing incoming material against a specification, you're not controlling your product.",
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

              {/* ── Bottom CTA ── */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Having Trouble with Opacity, Sheen Drift, Scrub Numbers, or
                    Raw Material Costs?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If your filler package isn't performing and you want to fix
                    it instead of guessing, reach out to{" "}
                    <strong className="text-foreground">
                      Joe at Shichem Industrial
                    </strong>
                    . Send him your resin system, target sheen level, PVC range,
                    and current filler/TiO₂ package—along with whatever specific
                    problem is driving the conversation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Joe's team will recommend the right{" "}
                    <strong className="text-foreground">
                      calcium carbonate filler
                    </strong>
                    ,{" "}
                    <strong className="text-foreground">
                      talc powder for coatings
                    </strong>
                    , or{" "}
                    <strong className="text-foreground">
                      kaolin clay paint filler
                    </strong>{" "}
                    grades to{" "}
                    <strong className="text-foreground">
                      improve paint opacity
                    </strong>{" "}
                    and{" "}
                    <strong className="text-foreground">
                      reduce coating cost with fillers
                    </strong>{" "}
                    without trading away durability. TDS, formulation support,
                    sample testing, and bulk pricing—one conversation with Joe
                    gets the whole process moving.
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
                      title: "TiO₂ for Architectural Coatings",
                      href: "/applications/tio2-coatings-guide",
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
