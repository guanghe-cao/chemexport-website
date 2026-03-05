import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { ChevronRight, Layers } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const WHATSAPP_LINK =
  "https://wa.me/8615653883028?text=Hello%2C%20I'm%20interested%20in%20dry-mix%20mortar%20additives%20(HPMC%2C%20RDP%2C%20wood%20fiber).%20Please%20share%20TDS%2C%20COA%2C%20MOQ%2C%20packing%2C%20and%20lead%20time.";

function LayerIndicator({
  number,
  label,
  color,
}: {
  number: number;
  label: string;
  color: "blue" | "green" | "amber";
}) {
  const colorMap = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-green-100 text-green-700 border-green-200",
    amber: "bg-amber-100 text-amber-700 border-amber-200",
  };
  const ringMap = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    amber: "bg-amber-600",
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      <div
        className={`w-14 h-14 rounded-full ${ringMap[color]} text-white flex items-center justify-center text-2xl font-bold flex-shrink-0`}
      >
        {number}
      </div>
      <span
        className={`text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${colorMap[color]}`}
      >
        {label}
      </span>
    </div>
  );
}

function MiniLayerBar({
  layers,
}: {
  layers: { label: string; intensity: "high" | "medium" | "low" | "optional"; color: string }[];
}) {
  const heightMap = { high: "h-8", medium: "h-5", low: "h-3", optional: "h-2" };
  const labelMap = { high: "High", medium: "Med", low: "Low", optional: "Opt" };

  return (
    <div className="flex items-end gap-2 mt-4 mb-2">
      {layers.map((l) => (
        <div key={l.label} className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-bold text-muted-foreground">
            {labelMap[l.intensity]}
          </span>
          <div className={`w-16 ${heightMap[l.intensity]} ${l.color} rounded-sm`} />
          <span className="text-[10px] font-semibold text-foreground mt-0.5">
            {l.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function DryMixMortarAdditives() {
  usePageMeta({
    title:
      "Guide to Dry-Mix Mortar Additives: HPMC, RDP & Wood Fiber | ShiChem",
    description:
      "Elevate your dry-mix mortar quality. This guide covers key additives like HPMC, RDP, and Wood Fiber to improve workability, adhesion, and crack resistance.",
    keywords:
      "dry-mix mortar additives, HPMC cellulose ether mortar, RDP flexible mortar, redispersible polymer powder, wood fiber mortar, mortar performance, HPMC for cement plaster, additives for wall putty",
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
                  Dry-Mix Mortar Additives Guide
                </span>
              </nav>

              <div className="flex items-center space-x-2 mb-4">
                <Layers className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Formulation Guide — Dry-Mix Mortars &amp; Construction
                  Chemicals
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Enhancing Mortar Performance: A Guide to Dry-Mix Mortar
                Additives
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A mortar additive package is a system with three layers. Get one
                wrong and the other two can't compensate.{" "}
                <strong className="text-foreground">Layer 1</strong> controls
                water.{" "}
                <strong className="text-foreground">Layer 2</strong> builds bond
                and flexibility.{" "}
                <strong className="text-foreground">Layer 3</strong> holds the
                green matrix together while the mortar cures. Every dry-mix
                plant that ships reliably has all three layers dialed in—not
                just dosed, but matched to the cement, the sand, the climate,
                and the target application.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                The fastest path to better{" "}
                <strong className="text-foreground">mortar performance</strong>{" "}
                isn't dumping more binder into the silo. It's choosing the right{" "}
                <strong className="text-foreground">
                  dry-mix mortar additives
                </strong>{" "}
                and assembling them as a system. This guide walks through{" "}
                <strong className="text-foreground">
                  cellulose ether mortar
                </strong>{" "}
                systems (HPMC), polymer modification (RDP), and wood fiber—three
                additive layers that{" "}
                <strong className="text-foreground">
                  improve mortar workability
                </strong>
                , adhesion, and crack resistance when stacked correctly.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Article Body ──────────────────────────────────────── */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">

              {/* ── Section 1: Why Additives Matter — Layer Failure Framing ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                The Foundation of Quality: Why Mortar Additives Matter
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mortar failures don't come out of nowhere. Trace them back far
                enough and you'll land on the same short list: water bleeding out
                too fast, a weak bond line, not enough green cohesion to hold
                the mortar together while it cures. Hot weather amplifies
                everything. High-suction substrates make it worse. Variable sand
                makes it unpredictable.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every failure maps to a layer that broke down:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  {
                    label: "Low water retention",
                    tag: "Layer 1 failure",
                    tagColor: "bg-blue-100 text-blue-700",
                    detail:
                      "The mortar skins over before the installer finishes tooling. Curing suffers. Adhesion drops.",
                  },
                  {
                    label: "Poor workability",
                    tag: "Layer 1 failure",
                    tagColor: "bg-blue-100 text-blue-700",
                    detail:
                      "Tearing under the trowel, inconsistent feel, installers adding water on site to compensate—which creates a whole new set of problems.",
                  },
                  {
                    label: "Debonding on smooth substrates",
                    tag: "Layer 2 failure",
                    tagColor: "bg-green-100 text-green-700",
                    detail:
                      "The polymer film never formed properly, or there wasn't enough polymer to form one at all.",
                  },
                  {
                    label: "Cracking and powdering",
                    tag: "Layer 3 failure",
                    tagColor: "bg-amber-100 text-amber-700",
                    detail:
                      "Shrinkage stress meets a paste that can't hold itself together. The surface fails.",
                  },
                  {
                    label: "Sag and slip on walls",
                    tag: "Layer 3 failure",
                    tagColor: "bg-amber-100 text-amber-700",
                    detail:
                      "Yield stress too low, thixotropy not designed into the system.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-destructive/60 font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span>
                      <strong className="text-foreground">{item.label}</strong>{" "}
                      <span
                        className={`inline-block text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${item.tagColor} align-middle mx-1`}
                      >
                        {item.tag}
                      </span>{" "}
                      — {item.detail}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-10 italic border-l-2 border-accent pl-4">
                Get all three layers working together—HPMC, RDP, and wood fiber—and
                you ship product that performs in the field with fewer callbacks
                and tighter QC windows in your plant.
              </p>

              <Separator className="mb-10" />

              {/* ── LAYER 1: Water Control — HPMC ── */}
              <LayerIndicator number={1} label="Layer 1 — Water Control" color="blue" />

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                HPMC: The Key to Superior Water Retention and Workability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                  Hydroxypropyl Methyl Cellulose (HPMC)
                </strong>{" "}
                is the control center of any{" "}
                <strong className="text-foreground">
                  cellulose ether mortar
                </strong>{" "}
                formulation. It governs two things simultaneously: how much
                water stays in the mortar and how the mortar behaves under the
                trowel. Open time, anti-sag, application feel—HPMC touches all
                of it. When Layer 1 is right, the other two layers have the
                moisture environment they need to do their jobs.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Why HPMC Prevents Premature Drying (and Improves Finishability)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A properly selected HPMC locks mix water inside the mortar
                matrix. It fights evaporation. It resists substrate suction. The
                cement at the bond interface keeps hydrating instead of starving
                for moisture.
              </p>
              <ul className="space-y-2 mb-8 text-muted-foreground">
                {[
                  "Water retention climbs → dry edges disappear, curing stays consistent across the full application area",
                  "Open time extends → adjustability improves, large-format work becomes manageable instead of a race",
                  "Trowel feel improves → smoother application, less sand drag, the kind of \"creaminess\" that gets installers to stop complaining",
                  "Porous substrate performance stabilizes → AAC blocks, cement boards, absorbent masonry stop robbing the mortar blind",
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
                Choosing HPMC for Cement Plaster and General Renders
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When selecting{" "}
                <strong className="text-foreground">
                  HPMC for cement plaster
                </strong>
                , don't shop by viscosity number alone. Two products at the same
                stated viscosity can behave completely differently depending on
                particle size distribution, substitution chemistry, and
                dissolution rate. The viscosity on the data sheet is one number.
                What the mortar does on the wall is what matters.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  {
                    param: "Retention vs. workability balance",
                    detail:
                      "Too low and the mortar dries before the installer is done. Too high and the surface feels sticky and won't release from the trowel. The sweet spot depends on your application and climate.",
                  },
                  {
                    param: "Dissolution speed",
                    detail:
                      "A slow-dissolving HPMC lumps in high-shear mixers and gives inconsistent early thickening. A fast-dissolving grade might peak too early. Match it to your mixing equipment and cycle time.",
                  },
                  {
                    param: "Temperature & sand sensitivity",
                    detail:
                      "The HPMC grade that works in February might not work in August. The one that works with one quarry's sand might not work with another's.",
                  },
                  {
                    param: "Compatibility with RDP & defoamers",
                    detail:
                      "The wrong pairing traps air, inflates porosity, and drags strength numbers down. Test the system, not the individual ingredient.",
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

              <Separator className="mb-10" />

              {/* ── Mid-page CTA ── */}
              <Card className="bg-primary text-primary-foreground mb-10">
                <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-base mb-1">
                      Need HPMC, RDP, or wood fiber for your mortar plant?
                    </p>
                    <p className="text-sm opacity-90">
                      Share your target application, cement and sand details,
                      and performance gaps. We'll spec an optimized additive
                      package with TDS, COA, samples, and bulk pricing.
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

              {/* ── LAYER 2: Bond and Flexibility — RDP ── */}
              <LayerIndicator number={2} label="Layer 2 — Bond & Flexibility" color="green" />

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                RDP: Boosting Adhesion and Flexibility in Polymer-Modified
                Mortars
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                  Redispersible Polymer Powder (RDP)
                </strong>{" "}
                is what separates a basic cementitious mortar from a
                polymer-modified system with real adhesion, real flexibility,
                and real durability. During mixing, RDP redisperses into the
                water phase. As the mortar cures, the polymer coalesces into a
                continuous film that threads through the pore network and builds
                strength at every interface. Layer 2 can only form that film
                properly when Layer 1 gives it enough retained water to work
                with.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                What RDP Changes in the Mortar Microstructure
              </h3>
              <ul className="space-y-2 mb-8 text-muted-foreground">
                {[
                  "Drives adhesion to difficult substrates—dense tiles, smooth concrete, painted surfaces, anything that gives a straight cementitious mortar almost nothing to grab onto",
                  "Builds deformability and crack tolerance—the polymer phase absorbs movement, thermal cycling, and shrinkage stress instead of transmitting it straight to the bond line",
                  "Increases cohesion under load—the matrix fails gradually instead of snapping in brittle fracture",
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
                Using RDP for Flexible Mortar: What Buyers Should Control
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you're specifying{" "}
                <strong className="text-foreground">RDP for flexible mortar</strong>,
                you need to control consistency as tightly as you control
                dosage. A polymer that redisperses cleanly in one batch and
                leaves fish-eyes in the next will give you mortar that tests
                well on Monday and fails on Thursday.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    param: "Dispersibility in your mix water",
                    detail:
                      "Not in distilled water in the supplier's lab. In your water, at your temperature, in your mixer. No fish-eyes. Clean, stable redispersion.",
                  },
                  {
                    param: "Lot-to-lot COA discipline",
                    detail:
                      "Key parameters tested and reported for every production lot. Not 'typical values.' Actual values, every time.",
                  },
                  {
                    param: "Compatibility with your HPMC system",
                    detail:
                      "HPMC and RDP interact. The wrong combination produces unexpected thickening, air entrainment, or both. Confirm compatibility in your formula, not in isolation.",
                  },
                  {
                    param: "Storage stability",
                    detail:
                      "RDP cakes in humid warehouses. If your supplier's packaging can't handle ocean freight and summer storage, you'll open bags of solid blocks instead of free-flowing powder.",
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

              <Separator className="mb-10" />

              {/* ── LAYER 3: Green-State Structure — Wood Fiber ── */}
              <LayerIndicator number={3} label="Layer 3 — Green-State Structure" color="amber" />

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Wood Fiber: The Natural Solution for Crack Resistance and
                Stability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wood fiber (cellulose fiber) is the structural backbone of
                green-state mortar stability. In plasters, joint compounds, and
                anti-sag mortars, it reinforces the fresh matrix, builds early
                cohesion, and reduces the kind of shrinkage-driven surface
                defects that lead to rework and customer complaints. Layer 3
                picks up where Layers 1 and 2 leave off—it gives the mortar
                physical structure before hydraulic strength kicks in.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                How Wood Fiber Improves Crack Resistance and Green Strength
              </h3>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {[
                  "Adds body and cohesion—the mortar holds together on the trowel and on the wall instead of slumping, segregating, or collapsing under its own weight",
                  "Distributes drying stress—as the mortar shrinks during curing, fiber bridges microcrack initiation points, especially in thin layers where stress concentrates fast",
                  "Stabilizes vertical applications—reduced slip and sag on walls without over-relying on HPMC thickening, which can make the mortar feel heavy and unworkable",
                  "Improves finishing behavior—less tearing in plasters and joint compounds, cleaner tooling marks, smoother final surfaces",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-muted/30 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-2">
                  Where Wood Fiber Makes the Biggest Difference
                </p>
                <ul className="space-y-1.5 text-muted-foreground">
                  {[
                    "Cement plasters and renders—particularly on uneven substrates where application thickness varies",
                    "Joint compounds and repair mortars—where thin layers dry fast and shrinkage cracking is the primary failure mode",
                    "Any thin-layer application where stress builds early and there's no mass to absorb it",
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

              {/* ── Stacking the Layers — Combining Additives ── */}
              <div className="mb-6">
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Stacking the Layers for Your Product
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Formulating for Success: Combining Additives for Specific
                Applications
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                No single additive carries a formulation by itself. The products
                that perform reliably in the field treat the additive package as
                an integrated system: HPMC manages water and rheology, RDP
                delivers adhesion and toughness, and wood fiber holds the green
                matrix together during the most vulnerable phase of curing.
                Below, see how the three layers stack differently depending on
                what you're building.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  {
                    title: "Tile Adhesives (Polymer-Modified Systems)",
                    objective:
                      "Wet the tile, stay open long enough for placement, grip the wall without sliding, and bond hard to dense substrates.",
                    roles: [
                      {
                        ingredient: "HPMC",
                        role: "Controls water retention, extends open time, governs trowel feel and workability",
                      },
                      {
                        ingredient: "RDP",
                        role: "The adhesion and deformability engine—this is where higher-grade systems (C2, C2TE, S1) live or die",
                      },
                      {
                        ingredient: "Wood fiber (optional)",
                        role: "Adds structure for vertical applications, improves slip resistance, stabilizes mixes on variable sand",
                      },
                    ],
                    validate:
                      "Open time and skin formation timing, vertical slip and sag, tensile adhesion (dry, wet, and after heat aging), air content stability across batches.",
                    layers: [
                      { label: "L1 HPMC", intensity: "high" as const, color: "bg-blue-400" },
                      { label: "L2 RDP", intensity: "high" as const, color: "bg-green-400" },
                      { label: "L3 Fiber", intensity: "optional" as const, color: "bg-amber-400" },
                    ],
                  },
                  {
                    title: "Wall Putty",
                    objective:
                      "Go on smooth, sand clean, resist powdering, and don't crack—especially in thicker passes.",
                    roles: [
                      {
                        ingredient: "HPMC",
                        role: "Workability and water retention—this is what gives wall putty its trowel feel and finishing response",
                      },
                      {
                        ingredient: "RDP (low to moderate)",
                        role: "Improves surface cohesion and substrate bonding where a straight cementitious putty would powder",
                      },
                      {
                        ingredient: "Wood fiber (select grades)",
                        role: "Stabilizes thicker applications and bridges shrinkage cracks before they reach the surface",
                      },
                    ],
                    validate:
                      "Sanding behavior and dust generation, surface hardness, shrinkage cracking tendency, and compatibility with topcoats and paints.",
                    layers: [
                      { label: "L1 HPMC", intensity: "high" as const, color: "bg-blue-400" },
                      { label: "L2 RDP", intensity: "low" as const, color: "bg-green-400" },
                      { label: "L3 Fiber", intensity: "medium" as const, color: "bg-amber-400" },
                    ],
                  },
                  {
                    title: "EIFS / Base Coats and Polymer-Modified Renders",
                    objective:
                      "Stick to insulation boards, resist cracking and impact, and apply consistently regardless of temperature.",
                    roles: [
                      {
                        ingredient: "HPMC",
                        role: "Water retention and working time stability across a wide temperature range—morning shade to afternoon sun, spring to summer",
                      },
                      {
                        ingredient: "RDP",
                        role: "Adhesion to EPS/XPS boards, flexibility for crack bridging, toughness for impact resistance. In EIFS base coats, RDP isn't optional—it's the performance foundation.",
                      },
                      {
                        ingredient: "Wood fiber",
                        role: "Reduces shrinkage cracking in thin base-coat layers, improves cohesion on vertical surfaces, adds body that makes application more forgiving",
                      },
                    ],
                    validate:
                      "Tensile bond to insulation substrate, crack-bridging performance under thermal cycling, impact resistance (hard body and soft body), workability at temperature extremes.",
                    layers: [
                      { label: "L1 HPMC", intensity: "high" as const, color: "bg-blue-400" },
                      { label: "L2 RDP", intensity: "high" as const, color: "bg-green-400" },
                      { label: "L3 Fiber", intensity: "medium" as const, color: "bg-amber-400" },
                    ],
                  },
                ].map((app) => (
                  <Card key={app.title} className="border-l-4 border-l-primary/40">
                    <CardContent className="p-6">
                      <p className="font-bold text-foreground mb-1">
                        {app.title}
                      </p>
                      <p className="text-sm text-muted-foreground italic mb-4">
                        Objective: {app.objective}
                      </p>

                      <MiniLayerBar layers={app.layers} />

                      <div className="space-y-2 mb-4 mt-4">
                        {app.roles.map((r) => (
                          <div
                            key={r.ingredient}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="flex-shrink-0 font-bold text-primary min-w-[80px]">
                              {r.ingredient}
                            </span>
                            <span className="text-muted-foreground">
                              {r.role}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-3 border-t text-xs text-muted-foreground">
                        <strong className="text-foreground">
                          Validate in trials:
                        </strong>{" "}
                        {app.validate}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Separator className="mb-10" />

              {/* ── Bottom CTA ── */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Ready to Tighten Your Additive Package?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you want more predictable{" "}
                    <strong className="text-foreground">
                      mortar performance
                    </strong>{" "}
                    from production-ready{" "}
                    <strong className="text-foreground">
                      dry-mix mortar additives
                    </strong>
                    , get in touch with{" "}
                    <strong className="text-foreground">
                      Joe at Shichem Industrial
                    </strong>
                    .
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Tell Joe which product you're building—tile adhesive,{" "}
                    <strong className="text-foreground">
                      additives for wall putty
                    </strong>
                    , render, EIFS, whatever you're running—and he'll spec the
                    three-layer package: the right HPMC for Layer 1, the right
                    RDP for Layer 2, and the right fiber for Layer 3. Dosing
                    strategy, TDS, sample testing, and bulk pricing that scales
                    cleanly from your lab bench to your production silo. One
                    conversation. Real formulation support. Consistent raw
                    materials.
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
                      title: "Tile Adhesive Additives (HPMC, RDP, Fibers)",
                      href: "/applications/high-performance-tile-adhesive-additives",
                    },
                    {
                      title: "PP Fiber for Plastic Shrinkage Cracking",
                      href: "/applications/pp-fiber-concrete-plastic-shrinkage-cracking",
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
