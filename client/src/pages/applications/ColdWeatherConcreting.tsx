import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { ChevronRight, Snowflake } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const WHATSAPP_LINK =
  "https://wa.me/8615653883028?text=Hello%2C%20I'm%20interested%20in%20cold%20weather%20concreting%20admixtures%20(calcium%20formate%2C%20AEA%2C%20PCE).%20Please%20share%20TDS%2C%20COA%2C%20MOQ%2C%20packing%2C%20and%20lead%20time.";

export default function ColdWeatherConcreting() {
  usePageMeta({
    title:
      "Cold Weather Concreting: Essential Admixtures for Winter Construction | ShiChem",
    description:
      "Don't let winter stop your project. Learn about essential admixtures like Calcium Formate and Air-Entraining Agents for successful cold weather concreting.",
    keywords:
      "cold weather concreting, winter construction admixtures, calcium formate concrete accelerator, non-chloride accelerator concrete, freeze-thaw resistant concrete, air entraining agent, PCE superplasticizer, ACI 306R",
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
                  Cold Weather Concreting Admixtures
                </span>
              </nav>

              <div className="flex items-center space-x-2 mb-4">
                <Snowflake className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Technical Guide — Concrete &amp; Winter Construction
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Cold Weather Concreting: Essential Admixtures for Winter
                Construction
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                It's 38°F at 6 AM and the pour is at 9. The batch plant needs
                your admixture call in the next hour. Here's your checklist.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Once ambient temperature drops below{" "}
                <strong className="text-foreground">40°F (4°C)</strong> during
                the protection period, you're in cold-weather territory per ACI
                306R—hydration slows, finishing windows drag out, and the odds
                of early freeze damage climb fast. Good{" "}
                <strong className="text-foreground">
                  cold weather concreting
                </strong>{" "}
                has almost nothing to do with "pouring hotter." It's about
                controlling hydration rate, building early strength fast enough
                to beat the freeze window, and engineering an air-void system
                that keeps hardened concrete intact through years of freeze-thaw
                cycling.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                This guide covers the three decisions you need to make before
                that truck rolls—and the{" "}
                <strong className="text-foreground">
                  winter construction admixtures
                </strong>{" "}
                that back each one: a{" "}
                <strong className="text-foreground">concrete accelerator</strong>{" "}
                built on calcium formate chemistry, air-entraining agents for
                long-term durability, and PCE superplasticizers to hold
                workability without blowing up your w/cm.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Article Body ──────────────────────────────────────── */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">

              {/* ── Stakes: The Risks ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                The Risks of Pouring Concrete in Low Temperatures
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Here's what happens if you get this wrong. Cold doesn't just
                slow things down—it changes the chemistry. ACI's cold-weather
                threshold—air temperature at or expected below{" "}
                <strong className="text-foreground">40°F (4°C)</strong> during
                the protection period—exists because the failure modes in{" "}
                <strong className="text-foreground">
                  concrete in cold climates
                </strong>{" "}
                are predictable, and they all cost money:
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    title: "Hydration slowdown → delayed early strength",
                    detail:
                      "Your finishing window shifts. Sawcut timing pushes later. Schedules compress or blow out entirely.",
                  },
                  {
                    title: "Plastic-state freezing",
                    detail:
                      "Fresh concrete that drops to around 25°F (−4°C) can freeze in place. The damage is severe—potential strength loss exceeding 50%, and the durability of that section is permanently compromised.",
                  },
                  {
                    title: "Freezing before safe strength",
                    detail:
                      "Concrete needs to hit roughly 500 psi (3.5 MPa) before it can survive a freeze event without damage. Depending on conditions, that's typically a 1–2 day protection window. Miss it, and you're tearing out and replacing.",
                  },
                ].map((item) => (
                  <Card key={item.title} className="border-l-4 border-l-destructive/30">
                    <CardContent className="p-5">
                      <p className="font-bold text-sm text-foreground mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-10 italic border-l-2 border-accent pl-4">
                The job of your admixture package in winter is straightforward:
                get early strength up fast enough to clear the freeze-risk
                window, and build a{" "}
                <strong className="text-foreground">
                  freeze-thaw resistant concrete
                </strong>{" "}
                that doesn't disintegrate after the first winter. The three
                decisions below tell you exactly which admixtures you need and
                why.
              </p>

              <Separator className="mb-10" />

              {/* ── Decision 1: Acceleration ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Accelerating Cement Hydration with Calcium Formate
              </h2>

              <Card className="bg-blue-50 border border-blue-200 mb-6">
                <CardContent className="p-5">
                  <p className="text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide">
                    Decision 1 — Do you need acceleration?
                  </p>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>IF</strong> the overnight low during the protection
                    period is forecast below 32°F (0°C){" "}
                    <strong>AND</strong> you need to hit ~500 psi before the
                    freeze window closes →{" "}
                    <strong>THEN</strong> you need a set accelerator in this
                    batch.
                  </p>
                </CardContent>
              </Card>

              <p className="text-muted-foreground leading-relaxed mb-4">
                When temperatures drop, your primary chemical tool is a{" "}
                <strong className="text-foreground">
                  non-chloride accelerator for concrete
                </strong>{" "}
                that pushes early hydration without introducing the corrosion
                liability that comes with calcium chloride—a real problem in any
                reinforced or post-tensioned element. Modern non-chloride
                acceleration packages typically rely on calcium nitrate,
                triethanolamine blends, and{" "}
                <strong className="text-foreground">calcium formate</strong> to
                kick hydration into gear when cold conditions are working against
                you.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Why Calcium Formate Works as a Cold-Weather Concrete Accelerator
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A{" "}
                <strong className="text-foreground">
                  calcium formate concrete accelerator
                </strong>{" "}
                earns its place in winter mix designs because it directly
                addresses the problems cold creates:
              </p>
              <ul className="space-y-2 mb-8 text-muted-foreground">
                {[
                  "Faster initial set and early strength gain—clearing that ~500 psi freeze-risk threshold before overnight temperatures drop below freezing",
                  "Shorter time to finishing and sawcut readiness—in cold placements, this is where schedule recovery happens",
                  "No chloride addition—no corrosion clock started on embedded steel, no arguments with the specifier, no long-term liability",
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
                Spec &amp; Compliance Checkpoints for Procurement
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When sourcing accelerators, make sure product documentation
                aligns with standard classification:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    param: "ASTM C494 / AASHTO M 194 — Type C or Type E",
                    detail:
                      "Type C = set accelerating only. Type E = set accelerating + water reducing. Know which category your product is designed to meet.",
                  },
                  {
                    param: "Lot-specific COA + SDS",
                    detail:
                      "Your documentation package should include a lot-specific COA, current SDS, and recommended dosage ranges with specific guidance for low-temperature performance.",
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
                      Need calcium formate, AEA, or PCE for winter production?
                    </p>
                    <p className="text-sm opacity-90">
                      Share your target set time, early-strength requirements,
                      exposure conditions, and mix design. We'll come back with
                      TDS, COA, sample testing, and a bulk quote.
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

              {/* ── Decision 2: Freeze-Thaw Exposure ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Protecting Concrete from Freeze-Thaw Damage with AEA
              </h2>

              <Card className="bg-blue-50 border border-blue-200 mb-6">
                <CardContent className="p-5">
                  <p className="text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide">
                    Decision 2 — What's your freeze-thaw exposure?
                  </p>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>IF</strong> the structure will face freeze-thaw
                    cycling or de-icing salt exposure over its service life →{" "}
                    <strong>THEN</strong> you need an AEA program dialed in
                    before the pour.
                  </p>
                </CardContent>
              </Card>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Early strength gets concrete through the first 48 hours. Air
                entrainment is what keeps it alive for the next 30 years. If the
                structure will face freezing cycles—and in most of the US, it
                will—AEAs are your durability control against internal cracking
                and surface scaling. They generate a network of stable,
                microscopic air voids that act as pressure relief valves when
                pore water freezes and expands.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">
                How AEAs Build Freeze-Thaw Resistant Concrete
              </h3>
              <ul className="space-y-2 mb-8 text-muted-foreground">
                {[
                  "Resists freeze-thaw deterioration by giving expanding ice somewhere to go without cracking the paste",
                  "Reduces scaling from de-icing chemicals—critical for flatwork, parking structures, and bridge decks exposed to salt",
                  "Often improves fresh workability as a side benefit, making placement and finishing easier",
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
                The Trade-Off You Must Manage: Air vs. Strength
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Air voids protect durability, but they cost compressive strength.
                The general rule:{" "}
                <strong className="text-foreground">
                  each 1% increase in air content
                </strong>{" "}
                knocks off roughly{" "}
                <strong className="text-foreground">
                  3–5% of 28-day compressive strength
                </strong>
                . That's a real number you can't ignore.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10 text-sm">
                <p className="font-semibold text-foreground mb-2">
                  Plant QC Discipline for AEA in Cold Weather
                </p>
                <ul className="space-y-1.5 text-muted-foreground">
                  {[
                    "Set your target air content based on exposure class and your aggregate/cement system. Don't guess.",
                    "Test air more frequently in cold weather. Temperature swings and admixture interactions can shift air content batch to batch in ways that don't show up in summer production.",
                    "Control mixing energy, admixture sequencing, and batching order—all three affect the air system when it's cold.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="flex-shrink-0">⚠</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator className="mb-10" />

              {/* ── Decision 3: Workability ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Maintaining Workability with the Right Superplasticizer (PCE)
              </h2>

              <Card className="bg-blue-50 border border-blue-200 mb-6">
                <CardContent className="p-5">
                  <p className="text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide">
                    Decision 3 — Can you hold w/cm without water addition?
                  </p>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>IF</strong> slump is dropping at the jobsite and
                    the crew is reaching for the water hose →{" "}
                    <strong>THEN</strong> you need PCE, not water. Water
                    addition destroys your designed w/cm, tanks early strength,
                    and opens the door to every durability problem you were
                    trying to avoid.
                  </p>
                </CardContent>
              </Card>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Cold makes concrete stiff and sticky. Viscosity climbs. Placement
                crews fight the mix instead of placing it. And the worst-case
                response—jobsite water addition—destroys your w/cm, tanks early
                strength, and opens the door to every durability problem you were
                trying to avoid.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A{" "}
                <strong className="text-foreground">
                  PCE high-range water reducer
                </strong>{" "}
                solves this by maintaining flow and workability while keeping the
                water-to-cementitious ratio exactly where you designed it.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                Why PCE Matters in Cold Weather Concreting
              </h3>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                {[
                  "Significant water reduction while maintaining target slump—some PCE systems achieve up to ~40% water reduction depending on product chemistry and mix proportions",
                  "Better cohesion and reduced segregation at workable slumps, which matters when placing into cold forms",
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
                The operational logic for winter is simple:{" "}
                <strong className="text-foreground">hold your designed w/cm</strong>,
                keep placement efficiency where it needs to be, and let the
                concrete accelerator handle early strength development. Don't
                chase workability with the water hose. That's a compressive
                strength and permeability problem you'll pay for later.
              </p>

              <Separator className="mb-10" />

              {/* ── Pre-Pour Checklist ── */}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                Best Practices for Admixture Dosing in Winter Conditions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You've made your three decisions. Now run through this pre-pour
                checklist before the truck leaves the plant.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Winter dosing isn't "crank everything up and hope." It's
                controlled adjustment—tied to actual concrete temperature,
                placement method, protection capability, and the time needed to
                reach that ~500 psi safe-strength threshold.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  {
                    step: "Step 1",
                    heading: "Dose to concrete temperature, not the calendar",
                    detail:
                      "Track three numbers: ambient temperature, concrete discharge temperature, and forecast overnight low. ACI cold-weather provisions kick in when air temps are expected below 40°F (4°C) during the protection period. If your dosing protocol is based on 'it's December, add accelerator,' you're guessing. Measure.",
                  },
                  {
                    step: "Step 2",
                    heading: "Accelerator: push early strength, protect rebar",
                    detail:
                      "Prioritize a non-chloride accelerator—calcium formate-based systems in particular—wherever chloride limits apply or rebar durability matters. But don't over-dose. Excessive acceleration compresses your finishing and sawcut window to the point where crews can't keep up, and that invites cracking from a different direction entirely.",
                  },
                  {
                    step: "Step 3",
                    heading: "AEA: verify air at the plant and at discharge",
                    detail:
                      "Cold-weather admixture combinations can destabilize air systems. Test more frequently than summer—at the plant and at the truck. And keep the strength trade-off front of mind: every extra 1% of air costs roughly 3–5% of 28-day compressive strength.",
                  },
                  {
                    step: "Step 4",
                    heading: "PCE: hold workability without touching the water valve",
                    detail:
                      "Tune slump retention for your actual haul time and placement method. Whenever you change PCE dosage or swap accelerator products, re-check air content. The PCE-accelerator-AEA interaction is one of the most common points of failure in winter systems.",
                  },
                  {
                    step: "Step 5",
                    heading: "Run a winter trial batch before the first critical pour",
                    detail:
                      "Validate set time, finishing window, 1- and 2-day compressive strength, and air-system stability using the actual project materials. Not last year's materials. Not the supplier's lab data. Yours. On your plant. In your conditions.",
                  },
                ].map((item, i) => (
                  <Card key={item.heading}>
                    <CardContent className="p-5 flex items-start gap-4">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                          {item.step}
                        </p>
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

              <Separator className="mb-10" />

              {/* ── Bottom CTA ── */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Get Winter Admixture Specs, Support, and Pricing
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Planning{" "}
                    <strong className="text-foreground">
                      cold weather concreting
                    </strong>{" "}
                    and need{" "}
                    <strong className="text-foreground">
                      winter construction admixtures
                    </strong>{" "}
                    you can trust? Whether it's a{" "}
                    <strong className="text-foreground">
                      calcium formate concrete accelerator
                    </strong>
                    , AEA for building{" "}
                    <strong className="text-foreground">
                      freeze-thaw resistant concrete
                    </strong>
                    , or a compatible PCE water reducer—reach out to{" "}
                    <strong className="text-foreground">
                      Joe at Shichem Industrial
                    </strong>
                    .
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Send Joe your mix design, target set time, and overnight
                    low forecast. His team will come back with TDS, formulation
                    and mix-design support, sample testing, and bulk pricing
                    built around your project—not a generic recommendation off
                    a shelf. One message gets the conversation started.
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
