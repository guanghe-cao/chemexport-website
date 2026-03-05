import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { ChevronRight, Grid3x3 } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const WHATSAPP_LINK =
  "https://wa.me/8615653883028?text=Hello%2C%20I'm%20interested%20in%20PP%20polypropylene%20fiber%20for%20concrete%20(plastic%20shrinkage%20control).%20Please%20share%20TDS%2C%20COA%2C%20MOQ%2C%20packing%2C%20and%20lead%20time.";

export default function PpFiberConcrete() {
  usePageMeta({
    title:
      "How to Prevent Plastic Shrinkage Cracking in Concrete with PP Fiber | ShiChem",
    description:
      "Tired of surface cracks in your concrete? Learn how adding Polypropylene (PP) Fiber provides a cost-effective solution for controlling plastic shrinkage cracking.",
    keywords:
      "PP fiber concrete, polypropylene fiber concrete, plastic shrinkage cracking, prevent concrete cracking, synthetic fiber reinforcement, monofilament PP fiber, fibrillated PP fiber, concrete crack control",
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
                  PP Fiber for Plastic Shrinkage Control
                </span>
              </nav>

              <div className="flex items-center space-x-2 mb-4">
                <Grid3x3 className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Technical Guide — Concrete Reinforcement &amp; Crack Control
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                How to Prevent Plastic Shrinkage Cracking in Concrete with PP
                Fiber
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A single{" "}
                <strong className="text-foreground">
                  plastic shrinkage cracking
                </strong>{" "}
                callback on a 500-yard slab costs you $25,000–$50,000 in
                grinding, overlay, and schedule damage. The{" "}
                <strong className="text-foreground">PP fiber concrete</strong>{" "}
                that would have prevented it costs about $0.30/yd³. That's the
                math. And once you see it, the question stops being "should we
                add fiber?" and becomes "why aren't we adding it to every load?"
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                This guide covers why{" "}
                <strong className="text-foreground">
                  plastic shrinkage cracking
                </strong>{" "}
                happens, how{" "}
                <strong className="text-foreground">
                  synthetic fiber reinforcement
                </strong>{" "}
                stops it at the microstructural level, and{" "}
                <strong className="text-foreground">
                  how to use PP fiber in concrete
                </strong>{" "}
                to{" "}
                <strong className="text-foreground">
                  prevent concrete cracking
                </strong>{" "}
                and protect your margin—pour after pour, with zero callbacks and
                zero warranty arguments.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Article Body ──────────────────────────────────────── */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">

              {/* ── Cost Comparison Visual ── */}
              <Card className="mb-12 overflow-hidden border-2">
                <div className="grid md:grid-cols-2">
                  <div className="bg-destructive/5 border-b md:border-b-0 md:border-r border-destructive/20 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-destructive mb-3">
                      The Callback
                    </p>
                    <p className="text-3xl md:text-4xl font-extrabold text-destructive mb-2">
                      ~$50/yd³
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Grinding, overlay, schedule slip, warranty dispute, and
                      reputation damage on a single 500-yard slab callback.
                      $25K–$50K gone before the argument is even settled.
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/20 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-400 mb-3">
                      The Fix
                    </p>
                    <p className="text-3xl md:text-4xl font-extrabold text-green-700 dark:text-green-400 mb-2">
                      $0.30/yd³
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      PP microfiber added at the batch plant. No mix redesign.
                      No schedule change. No finishing headache. Just{" "}
                      <strong className="text-foreground">
                        concrete crack control
                      </strong>{" "}
                      built into every yard.
                    </p>
                  </div>
                </div>
              </Card>

              {/* ── Section 1: What Causes It — "The $50/yd³ problem" ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                What Causes Plastic Shrinkage Cracking in Concrete?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This is the $50/yd³ problem.{" "}
                <strong className="text-foreground">
                  Plastic shrinkage cracking
                </strong>{" "}
                shows up <strong className="text-foreground">before</strong> the
                concrete sets. Surface water evaporates faster than bleed water
                can migrate up to replace it. The exposed surface shrinks.
                Tensile stress builds in paste that has zero tensile capacity.
                The concrete cracks because it has no other way to relieve the
                strain—and the callback clock starts ticking.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The industry trigger point is the evaporation rate. When the
                exposed surface hits roughly{" "}
                <strong className="text-foreground">
                  0.2 lb/ft²/hr (≈1.0 kg/m²/hr)
                </strong>
                , plastic shrinkage risk jumps—particularly with today's
                low-bleed mixes that barely bring any water to the surface in
                the first place.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Risk factors that accelerate surface drying:
              </p>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {[
                  "Wind, low humidity, warm air—the classic trifecta. Any two of the three can push you over the evaporation threshold.",
                  "Hot subgrade, hot forms, direct sun—the slab is losing water from the top and heating from below.",
                  "Low-bleed mix designs—low w/cm, heavy SCM loading, high fines content, and HRWR usage all suppress bleed. The surface dries out because there's almost no bleed water coming up to replenish it.",
                  "Delayed curing start—if your curing crew is 20 minutes behind the finishers on a windy day, the damage is already done.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground leading-relaxed mb-10 italic border-l-2 border-destructive/30 pl-4">
                Once those first map cracks open, they don't close. They
                propagate through every layer applied over them—coatings,
                epoxies, VCT, polished finishes. A surface defect becomes a
                system failure. A cosmetic crack becomes a $50/yd³ liability.
              </p>

              <Separator className="mb-10" />

              {/* ── Section 2: The Solution — "The $0.30/yd³ fix" ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                The Solution: Introducing a 3D Fiber Reinforcement Network
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This is the $0.30/yd³ fix—and the return on it is
                staggering. PP microfibers don't slow evaporation. That's not
                their job. Their job is to hold the concrete together when
                shrinkage stresses hit during the plastic phase. The moisture
                loss is weather-driven. Whether that moisture loss turns into
                visible cracking—and a five-figure callback—is{" "}
                <strong className="text-foreground">
                  reinforcement-driven
                </strong>
                .
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                How PP Fiber Concrete Controls Plastic Shrinkage Cracking
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Millions of individual polypropylene fibers dispersed through
                the mix create a{" "}
                <strong className="text-foreground">
                  3D secondary reinforcement network
                </strong>{" "}
                that does three things—each one a layer of insurance between you
                and that $50/yd³ callback:
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    heading: "Bridges microcracks at formation",
                    detail:
                      "Fibers span the crack and arrest it before it propagates to visible width.",
                  },
                  {
                    heading: "Increases green cohesion",
                    detail:
                      "The surface paste can absorb tensile stress during settlement and early shrinkage instead of splitting open.",
                  },
                  {
                    heading: "Reduces weak-zone sensitivity",
                    detail:
                      "Edges, joints, rebar cover transitions, and other geometric stress concentrators are less likely to initiate cracking.",
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

              <p className="text-muted-foreground leading-relaxed mb-10">
                This is why micro PP fibers have become a default{" "}
                <strong className="text-foreground">
                  prevent concrete cracking
                </strong>{" "}
                specification for slabs-on-grade, pavements, curb and gutter,
                and general flatwork. Low cost. Minimal disruption. Measurable
                crack reduction. The ROI isn't a theory—it's the difference
                between a clean pour and a warranty claim.
              </p>

              <Separator className="mb-10" />

              {/* ── Mid-page CTA ── */}
              <Card className="bg-primary text-primary-foreground mb-10">
                <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-base mb-1">
                      Need monofilament or fibrillated PP fiber for your mix?
                    </p>
                    <p className="text-sm opacity-90">
                      Share your application, target dosage, placement
                      conditions, and finishing requirements. We'll recommend
                      the right fiber type with TDS, sample testing, and bulk
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

              {/* ── Section 3: Monofilament vs Fibrillated — Decision Frame ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Monofilament vs. Fibrillated PP Fibers: Which to Choose?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You've decided to spend the $0.30/yd³. Good. Now pick the right
                tool for the job. Both fiber types target plastic shrinkage
                cracking control, but they behave differently in fresh concrete
                and under the finishing tools. Pick the wrong one and you'll
                either fight the finish or leave performance on the table.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mb-8">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-5">
                    <p className="font-bold text-foreground mb-3">
                      Monofilament PP Fiber
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Best fit for architectural slabs, burnished or troweled floors, and pumped concrete where finish quality is non-negotiable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Low visual impact on the finished surface when properly mixed and finished</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Positioned primarily for plastic shrinkage control within the first 24 hours</span>
                      </li>
                    </ul>
                    <div className="mt-3 pt-3 border-t text-xs font-semibold text-primary">
                      Typical dose: 0.5–0.75 lb/yd³
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent/60">
                  <CardContent className="p-5">
                    <p className="font-bold text-foreground mb-3">
                      Fibrillated PP Fiber
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Ships as mesh-like bundles that open during mixing, creating a branched network with more mechanical interlock</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Builds more cohesion in the fresh mix and helps with settlement and slip control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>Stronger option where extra crack resistance matters more than a glass-smooth finish</span>
                      </li>
                    </ul>
                    <div className="mt-3 pt-3 border-t text-xs font-semibold text-primary">
                      Typical dose: 0.75–1.5 lb/yd³
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/30 rounded-lg p-5 mb-4 text-sm">
                <p className="font-semibold text-foreground mb-1">
                  Simple Selection Rule
                </p>
                <p className="text-muted-foreground">
                  Pick <strong className="text-foreground">monofilament</strong>{" "}
                  when the finish is the priority—polished floors, architectural
                  slabs, anything where the surface will be seen up close. Pick{" "}
                  <strong className="text-foreground">fibrillated</strong> when
                  you want more green structure, more cohesion, and the
                  application can tolerate a slightly coarser finishing feel. If
                  you're unsure, monofilament at the right dose covers the
                  widest range of applications without finishing complaints.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-1">
                  Quick Decision Frame
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">IF</strong> finish quality
                  is the priority →{" "}
                  <strong className="text-foreground">monofilament</strong>.{" "}
                  <strong className="text-foreground">IF</strong> green cohesion
                  and crack resistance matter more →{" "}
                  <strong className="text-foreground">fibrillated</strong>.
                  Either way, you're spending $0.30/yd³ to avoid a $50/yd³
                  problem.
                </p>
              </div>

              <Separator className="mb-10" />

              {/* ── Section 4: Dosing & Mixing — Mistake-Avoidance Frame ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Dosing and Mixing Polypropylene Fiber for Optimal Results
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You bought the right fiber. Now don't screw up the batching.
                PP microfibers perform when they're dispersed. Clumped fibers
                sitting in a ball at the bottom of the drum don't reinforce
                anything. Your mixing protocol and dosing discipline determine
                whether the $0.30/yd³ investment pays off or becomes a QC
                headache of its own.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">
                How to Use PP Fiber in Concrete: Plant + Truck Sequence
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Build a repeatable SOP. The difference between "fibers work
                great" and "we had fiber balls in every load" is almost always
                the batching sequence. Each step below is framed around the
                mistake it prevents:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    step: "1",
                    heading: "Add fibers early",
                    detail:
                      "Introduce PP fibers when there's enough mortar volume in the mixer or truck to actually disperse them. Dumping fibers into a nearly dry load guarantees clumping.",
                    mistake: "Mistake prevented: fiber clumps from dry-batching",
                  },
                  {
                    step: "2",
                    heading: "Don't dump the whole bag at once",
                    detail:
                      "Feed fibers gradually or use pre-measured packs. One big lump of fiber overwhelms the mixing action and creates the exact clumps you're trying to avoid.",
                    mistake: "Mistake prevented: fiber balls from overloading the mixer",
                  },
                  {
                    step: "3",
                    heading: "Mix long enough",
                    detail:
                      "After full fiber addition, extend the mixing cycle to achieve uniform distribution. Follow your fiber supplier's minimum mix-time guidance, then confirm with a visual check at discharge.",
                    mistake: "Mistake prevented: uneven fiber distribution across the load",
                  },
                  {
                    step: "4",
                    heading: "Don't add water to fix workability",
                    detail:
                      "If fibers shift your slump, adjust with a compatible water reducer. Water addition defeats the purpose—you're trying to build a denser, tighter matrix, not dilute it.",
                    mistake: "Mistake prevented: weakened matrix from excess water",
                  },
                  {
                    step: "5",
                    heading: "QC at discharge",
                    detail:
                      "Check slump, check finishing response, and confirm fiber distribution before placing anything that matters. Catch problems at the truck, not on the slab.",
                    mistake: "Mistake prevented: discovering bad loads after placement",
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
                        <p className="text-xs text-destructive/80 font-medium mt-2 italic">
                          {item.mistake}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-1">
                  One Thing Fibers Don't Replace: Curing
                </p>
                <p className="text-muted-foreground">
                  PP fibers reduce cracking risk by reinforcing the plastic
                  paste. They don't reduce evaporation. If conditions are
                  pushing you past the ~0.2 lb/ft²/hr evaporation threshold,
                  deploy wind breaks, fogging, evaporation reducers, and start
                  curing immediately. Fiber reinforcement and proper curing work
                  together. Neither one substitutes for the other.
                </p>
              </div>

              <Separator className="mb-10" />

              {/* ── Section 5: Beyond Crack Control — "Bonus performance" ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Beyond Crack Control: Other Benefits of PP Fiber
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You're spending $0.30/yd³ for plastic shrinkage control. Here's
                the bonus performance you didn't pay for. Once micro PP fibers
                are in the mix, you pick up secondary gains that contractors and
                owners actually notice—particularly on high-traffic slabs,
                industrial floors, and thin-section elements. Think of these as
                free value-adds that come with the crack control investment.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {[
                  {
                    heading: "Impact & shatter resistance",
                    detail:
                      "The 3D micro-reinforcement network helps the matrix absorb localized impact and resist edge chipping, especially in thin sections and slab edges where conventional reinforcement doesn't reach.",
                    tag: "Free add-on",
                  },
                  {
                    heading: "Surface durability",
                    detail:
                      "Fibers reduce segregation and stabilize the surface paste under finishing stress—which translates to a denser, more uniform wearing surface (mix-dependent, but consistent across most standard mixes).",
                    tag: "Free add-on",
                  },
                  {
                    heading: "Fire-related spalling mitigation",
                    detail:
                      "Micro synthetic fibers are widely referenced for reducing explosive spalling risk in fire-exposed concrete. Fibers melt at relatively low temperatures, creating pressure relief pathways for steam escape. Application-dependent—notable for tunnel linings, parking structures, and high-rise elements.",
                    tag: "Free add-on",
                  },
                ].map((item) => (
                  <Card key={item.heading}>
                    <CardContent className="p-4">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-950/40 px-2 py-0.5 rounded mb-2">
                        {item.tag}
                      </span>
                      <p className="text-sm font-bold text-foreground mb-2">
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
                None of this replaces structural reinforcement. But for
                serviceability, durability, and reducing the kind of minor
                damage that leads to repair costs and owner complaints, PP fiber
                earns its place in the mix—and you already paid for it when you
                solved the crack control problem.
              </p>

              <Separator className="mb-10" />

              {/* ── Bottom CTA ── */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Ready to Spec PP Fiber for Your Next Project?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Send{" "}
                    <strong className="text-foreground">
                      Joe at Shichem Industrial
                    </strong>{" "}
                    your slab spec and placement conditions—he'll quote the
                    fiber and the SOP. No guesswork. No callbacks.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Include your application (slab, pavement, precast, whatever
                    it is), target dosage range, placement conditions, and
                    finishing requirements. Joe's team will recommend the right{" "}
                    <strong className="text-foreground">
                      polypropylene fiber for concrete
                    </strong>
                    —monofilament or fibrillated—along with a practical batching
                    SOP, TDS, sample testing, and bulk pricing built for
                    predictable{" "}
                    <strong className="text-foreground">
                      plastic shrinkage cracking
                    </strong>{" "}
                    control at production scale. You spend $0.30/yd³ now. You
                    skip the $50/yd³ callback later.
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
