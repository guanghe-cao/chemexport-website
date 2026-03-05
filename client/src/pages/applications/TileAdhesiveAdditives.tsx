import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { ChevronRight, Layers } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const WHATSAPP_LINK =
  "https://wa.me/8615653883028?text=Hello%2C%20I'm%20interested%20in%20tile%20adhesive%20additives%20(HPMC%2C%20RDP%2C%20fibers).%20Please%20share%20TDS%2C%20MOQ%2C%20packing%2C%20and%20lead%20time.";

export default function TileAdhesiveAdditives() {
  usePageMeta({
    title:
      "How to Choose Additives for High-Performance Tile Adhesives | ShiChem",
    description:
      "Learn how to select the right chemical additives for your tile adhesive formulations. Improve adhesion, flexibility, and water retention with HPMC, RDP, and more.",
    keywords:
      "tile adhesive additives, HPMC for tile adhesive, RDP VAE polymer powder, redispersible polymer powder, cellulose ether mortar, C2 tile adhesive raw materials, mortar additives, PP fiber, wood fiber",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────────── */}
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
                <span className="text-foreground">Tile Adhesive Additives</span>
              </nav>

              <div className="flex items-center space-x-2 mb-4">
                <Layers className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Formulation Guide — Tile Adhesives &amp; Dry-Mix Mortars
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                How to Choose the Right Additives for High-Performance Tile
                Adhesives
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Formulating a C2/C2TE or C2/S1 tile adhesive that actually
                holds up in the field comes down to one thing: your additive
                package. Cement quality matters, yes—but the failures that cost
                you callbacks, lost accounts, and wasted production runs almost
                always trace back to the wrong{" "}
                <strong className="text-foreground">HPMC</strong> grade,
                under-dosed{" "}
                <strong className="text-foreground">RDP/VAE</strong>, inconsistent
                fibers, or some combination of all three.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                This guide breaks down how to select and dose tile adhesive
                additives—<strong className="text-foreground">HPMC, RDP,
                and fibers</strong>—so your mortar additives deliver repeatable,
                field-proven performance at scale.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Article Body ──────────────────────────────────────── */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">

              {/* ── 1. The Problem ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                The Problem with Substandard Tile Adhesives
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tile systems don't fail because an installer held the trowel
                wrong. They fail because the formulation couldn't handle what
                the job site threw at it—temperature swings, absorbent
                substrates, large-format porcelain, deflection, trapped
                moisture. The installer gets blamed. The adhesive is the actual
                culprit.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Here's where the failures show up and what's usually behind
                them:
              </p>

              <div className="space-y-4 mb-10">
                {[
                  {
                    title: "Debonding / hollow spots",
                    items: [
                      "Low polymer content (skimping on RDP), poor substrate wetting, weak early tack",
                      "Insufficient water retention causing skinning before the tile is set—cement never fully hydrates at the interface",
                    ],
                  },
                  {
                    title: "Tile cracking / grout-line cracking",
                    items: [
                      "Excessive shrinkage stress, weak cohesion, zero deformability",
                      "No fiber reinforcement, or the wrong fiber type and length for the matrix",
                    ],
                  },
                  {
                    title: "Excessive slip (vertical applications)",
                    items: [
                      "Yield stress too low, thixotropy not dialed in",
                      "HPMC grade mismatch, no fiber structuring to back it up",
                    ],
                  },
                  {
                    title: "Short open time / poor adjustability",
                    items: [
                      "Water draining out of the mortar too fast—surface skins over before the tile contacts wet adhesive",
                      "HPMC viscosity and gel temperature not matched to your sand grading or your climate",
                    ],
                  },
                  {
                    title: "Efflorescence and surface whitening",
                    items: [
                      "Water migrating through the matrix drags soluble salts to the surface",
                      "Poor water retention and inconsistent raw materials make it worse",
                    ],
                  },
                ].map((failure) => (
                  <Card key={failure.title} className="border-l-4 border-l-destructive/30">
                    <CardContent className="p-5">
                      <p className="font-bold text-sm text-foreground mb-2">
                        {failure.title}
                      </p>
                      <ul className="space-y-1.5">
                        {failure.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-destructive/60 font-bold mt-0.5 flex-shrink-0">
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

              <p className="text-sm text-muted-foreground leading-relaxed mb-10 italic border-l-2 border-accent pl-4">
                A tile adhesive formulation that works is engineered around
                three things: <strong className="text-foreground">water management, polymer film formation, and crack
                resistance</strong>. Then it's validated against consistent C2 tile
                adhesive raw materials—because a formula is only as stable as
                its inputs.
              </p>

              <Separator className="mb-10" />

              {/* ── 2. HPMC ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                The Role of Cellulose Ethers (HPMC) in Water Retention &amp;
                Workability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">HPMC</strong> is the
                backbone of your tile adhesive additives package. It does two
                jobs at once: it controls{" "}
                <strong className="text-foreground">water retention</strong> and
                it governs rheology. In a cement-based adhesive, uncontrolled
                water loss is a fast track to premature skinning, starved
                hydration at the bond line, and adhesion numbers that look great
                in the lab and collapse on a hot job site with absorbent block.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                How HPMC Improves Open Time, Wetting, and Application Feel
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A well-chosen HPMC locks mix water inside the mortar matrix. It
                slows evaporation. It resists suction from thirsty substrates.
                The result: your cement actually hydrates properly, and the tile
                contacts a wet, active adhesive surface instead of a dried-out
                skin.
              </p>
              <ul className="space-y-2 mb-8 text-muted-foreground">
                {[
                  "Higher water retention → skinning drops off, bond reliability goes up",
                  "Extended open time (TE behavior) → your crew gets the placement window they need for large-format tiles",
                  "Better workability → smoother troweling, that \"creamy\" feel installers want, less tearing and dragging",
                  "Improved sag resistance (T behavior) → when paired with the right rheology design, vertical applications stay put",
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
                Selecting the Right HPMC Grade for Tile Adhesive Formulation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Not every HPMC is interchangeable. Performance hinges on
                viscosity, particle size distribution, substitution pattern, and
                gel temperature. Here's what your plant and formulation teams
                should be evaluating:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    param: "Viscosity target",
                    detail:
                      "Drives thickening power and slip control. Go too high and you kill wetting and trap air.",
                  },
                  {
                    param: "Water retention profile",
                    detail:
                      "Your lever for TE classification, open time, and bond consistency. Non-negotiable.",
                  },
                  {
                    param: "Dissolution behavior",
                    detail:
                      "Determines thickening speed during mixing—and whether your mixer can handle it without lumping.",
                  },
                  {
                    param: "Compatibility with RDP and defoamers",
                    detail:
                      "Get this wrong and you're chasing air content problems and watching strength numbers slide.",
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
                <p className="font-semibold text-foreground mb-1">
                  Operational Reality Check
                </p>
                <p className="text-muted-foreground">
                  HPMC dosing validated on one sand source can fall apart when
                  you switch suppliers or even quarry faces. Two plants running
                  the "same" formula will get different open time and different
                  rheology if their sand grading and fines content don't match.
                  Test against <em>your</em> raw materials. Every time.
                </p>
              </div>

              <Separator className="mb-10" />

              {/* ── Mid-page CTA ── */}
              <Card className="bg-primary text-primary-foreground mb-10">
                <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-base mb-1">
                      Need HPMC, RDP, or a custom tile adhesive additive package?
                    </p>
                    <p className="text-sm opacity-90">
                      Share your target grade (C1/C2/C2TE/C2S1), cement and
                      sand details, and the issue you're solving. We'll spec an
                      additive package with TDS, formulation support, and a
                      competitive quote.
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

              {/* ── 3. RDP ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Achieving Superior Adhesion and Flexibility with RDP
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                  Redispersible Polymer Powder (RDP/VAE)
                </strong>{" "}
                is where your adhesion and deformability come from. In a
                cementitious tile adhesive, RDP redisperses during mixing, then
                coalesces as the mortar dries and cures—forming a continuous
                polymer film through the pore structure and across the
                tile-adhesive interface.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Why RDP Is Essential for Flexible Tile Adhesive Additives (C2/S1
                and Beyond)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                RDP does two things no other additive can replace. First, it
                increases wetting and cohesive strength within the cured
                matrix—that's your adhesion. Second, it creates a
                polymer-modified microstructure that absorbs substrate movement,
                thermal cycling, and shrinkage stress without cracking or
                delaminating—that's your deformability.
              </p>
              <ul className="space-y-2 mb-8 text-muted-foreground">
                {[
                  "Higher tensile adhesion strength—initial pull numbers and after water/heat aging",
                  "Deformability that meets S1-grade targets (system-dependent, but this is where S1 lives or dies)",
                  "Better impact resistance and toughness under real-world loading",
                  "Reduced water absorption in many systems, depending on overall formulation balance",
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
                RDP Selection Considerations for C2 Tile Adhesive Raw Materials
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                VAE powders are not commodities. Two products with similar data
                sheets can behave completely differently in your cement system.
                Selection should be driven by your performance targets, your
                filler-to-cement ratio, and the conditions your adhesive will
                face in the field.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    param: "Minimum Film Formation Temperature (MFFT)",
                    detail:
                      "If your product ships to cold climates or unheated spaces, a high-MFFT polymer won't form a proper film. That's a durability problem waiting to happen.",
                  },
                  {
                    param: "Ash content and dispersibility",
                    detail:
                      "Affect rheology, early strength, and how cleanly the powder redisperses. Inconsistent ash = inconsistent performance.",
                  },
                  {
                    param: "Stabilizer system",
                    detail:
                      "The source of your water demand, open time interaction with HPMC, and air entrainment tendencies. Ignore it at your own risk.",
                  },
                  {
                    param: "Compatibility with cement and SCMs",
                    detail:
                      "Different cements and supplementary cementitious materials shift setting behavior and strength curves. Validate, don't assume.",
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
                <p className="font-semibold text-foreground mb-1">
                  A Word on Cost-Cutting
                </p>
                <p className="text-muted-foreground">
                  Under-dosing RDP is the most expensive "savings" in dry-mix
                  mortar. You'll pass lab tests at the margin, then watch the
                  product debond, turn brittle, and fail heat/water aging in the
                  field. If cost pressure is real—and it always is—optimize your
                  system: adjust PSD, swap fillers, revisit your HPMC grade,
                  tighten your defoamer strategy. Do not cut polymer below the
                  threshold where film formation breaks down. That threshold is
                  not negotiable.
                </p>
              </div>

              <Separator className="mb-10" />

              {/* ── 4. Fibers ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Preventing Cracks and Improving Cohesion with Fibers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fibers get treated as an afterthought in too many tile adhesive
                formulations. That's a mistake. The right fiber, properly
                dispersed, is cheap insurance against shrinkage cracking, weak
                green strength, and cohesion problems—especially in thin-bed
                applications where stress builds fast and has nowhere to go.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">
                Wood Fiber: Structuring, Slip Resistance &amp; Workability
                Stability
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wood fiber bumps up yield stress and thixotropy. On a vertical
                wall, that means the adhesive grabs and holds instead of
                sliding. It also stabilizes paste structure, which helps with
                water management and gives you a more forgiving mix when sand
                grading wanders between deliveries.
              </p>
              <ul className="space-y-2 mb-8 text-muted-foreground">
                {[
                  "Anti-sag and slip resistance on wall applications—measurable improvement in vertical hang",
                  "Better cohesion and reduced trowel collapse during application",
                  "Stability buffer for mixes running on variable sand sources",
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
                PP Fiber: Micro-Reinforcement Against Shrinkage Cracking
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Polypropylene (PP) fibers work as micro-reinforcement. They
                bridge early-age microcracks and slow crack propagation before
                it becomes visible damage. High-cement mixes and fast-drying
                conditions—exactly where plastic shrinkage risk spikes—benefit
                the most.
              </p>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {[
                  "Reduced shrinkage cracking tendency—the fibers catch cracks while they're still microscopic",
                  "Improved impact resistance and toughness under mechanical load",
                  "Better edge stability during the early curing window",
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
                <p className="font-semibold text-foreground mb-1">
                  Implementation Note
                </p>
                <p className="text-muted-foreground">
                  Fiber length, diameter, surface treatment, and dispersion
                  quality all matter. If your mixing sequence doesn't break
                  fibers apart properly, you end up with fiber balls,
                  inconsistent surface finish, and callbacks. Dosing precision
                  and mixing protocol aren't optional—they're part of the
                  fiber's performance.
                </p>
              </div>

              <Separator className="mb-10" />

              {/* ── 5. Sourcing ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Sourcing Quality-Assured Additives for Your Mortar Plant
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A high-performance formula on paper means nothing if your raw
                materials drift from lot to lot. Supplier vetting isn't a
                procurement formality—it's how you protect production
                consistency and keep your mortar additives performing the way
                they did during qualification.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">
                Supplier Qualification Checklist
              </h3>

              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {[
                  {
                    heading: "Lot-to-Lot Consistency",
                    items: [
                      "COA with measurable parameters for every lot (viscosity for HPMC; ash content and dispersibility for RDP; fiber length distribution for fibers)",
                      "Retained samples tied to traceable batch numbers",
                    ],
                  },
                  {
                    heading: "Quality Management",
                    items: [
                      "Current ISO certification (ask for the certificate, not just the claim)",
                      "Documented QC procedures with real test data, not a marketing deck",
                    ],
                  },
                  {
                    heading: "Technical Documentation",
                    items: [
                      "Complete TDS and SDS in English—no exceptions",
                      "Application guidance including dosage ranges, known compatibility issues, and storage stability data",
                    ],
                  },
                  {
                    heading: "Validation Support",
                    items: [
                      "Willingness to send samples matched to your cement and sand system",
                      "A technical team that can troubleshoot: open time, slip, air content, strength, debonding",
                    ],
                  },
                  {
                    heading: "Logistics Reliability",
                    items: [
                      "Stable lead times, proper packing (bags, palletization, moisture protection)",
                      "Clean export documentation and shipment tracking for US-bound orders",
                    ],
                  },
                  {
                    heading: "Commercial Integrity",
                    items: [
                      "Specs that match what's actually in the bag, claims backed by recognized test methods",
                      "A clear, fair process when something doesn't conform",
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
                    Ready to Lock Down Your Additive Package?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you're formulating for C2/C2TE or flexible S1 systems and
                    you need{" "}
                    <strong className="text-foreground">
                      C2 tile adhesive raw materials
                    </strong>{" "}
                    that perform consistently from the first lot to the
                    hundredth, reach out to{" "}
                    <strong className="text-foreground">
                      Joe at Shichem Industrial
                    </strong>
                    .
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Send him your target grade (C1/C2/C2TE/C2S1), your local
                    sand and cement details, and whatever's giving you
                    trouble—open time, slip, adhesion, cracking. Joe's team will
                    spec a cost-effective additive package (
                    <strong className="text-foreground">
                      HPMC + RDP/VAE + fibers
                    </strong>
                    ) engineered to improve tile adhesive performance with the
                    production consistency your plant needs. TDS, formulation
                    support, sample testing, bulk quotes—one conversation gets
                    it started.
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
                      title: "TiO₂ in Architectural Coatings",
                      href: "/applications/tio2-coatings-guide",
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
