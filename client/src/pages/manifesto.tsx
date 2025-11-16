import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import SectionNav from "@/components/SectionNav";
import ManifestoSection from "@/components/ManifestoSection";
import PullQuote from "@/components/PullQuote";
import CosmicBackground from "@/components/CosmicBackground";
import ReadingProgress from "@/components/ReadingProgress";

export default function Manifesto() {
  const sections = [
    { id: "world", title: "I. The World as Relaxation" },
    { id: "time", title: "II. Time as Ordering" },
    { id: "law", title: "III. Law, Complexity, and Randomness" },
    { id: "entropy", title: "IV. Entropy as Direction" },
    { id: "consciousness", title: "V. Consciousness as Emergent" },
    { id: "architecture", title: "VI. The Closed Architecture" },
    { id: "consequence", title: "VII. Consequence" },
    { id: "final", title: "VIII. Final Position" }
  ];

  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <ReadingProgress />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <Link href="/">
          <a 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-sans mb-8"
            data-testid="link-back-home"
          >
            <ArrowLeft className="w-4 h-4" />
            Return
          </a>
        </Link>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3">
            <SectionNav sections={sections} />
          </aside>

          <article className="lg:col-span-9 max-w-3xl">
            <header className="mb-24">
              <div className="inline-block px-4 py-2 border border-primary/20 backdrop-blur-sm rounded-full mb-8">
                <span className="text-xs font-sans text-primary tracking-widest uppercase">
                  Manifesto
                </span>
              </div>
              
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
                data-testid="heading-manifesto-title"
              >
                The Closed Architecture
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-serif)' }}>
                A manifesto on causation, consciousness, and the structure beneath.
              </p>
            </header>

            <div className="prose-custom">
              <p className="text-lg leading-[1.85] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                The universe does not begin with meaning. It begins with motion.
              </p>

              <p className="text-lg leading-[1.85] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                Before a star can die, it must mean nothing. The iron core does not know it is collapsing. The shockwave does not intend to fuse heavier elements. For a billion years, there is only motion— hydrogen burning, gravity pulling, physics permitting what it must. No witness. No narrative. No grief. Just the chain, unspooling.
              </p>

              <p className="text-lg leading-[1.85] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                Meaning appears later, in organisms that evolved to survive, not to understand.
              </p>

              <p className="text-lg leading-[1.85] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                If there is to be any honest account of being human, it must begin before the story—before the metaphors, before the justifications, before the illusions that insulated our ancestors from the structure beneath. It must begin with what is true enough to survive contact with physics, not with what was needed for comfort or cohesion.
              </p>

              <PullQuote>
                You are not being asked to agree. You are being shown the lock on a door you did not know was closed.
              </PullQuote>

              <ManifestoSection id="world" title="I. THE WORLD AS RELAXATION">
                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  The universe can be seen as a relaxation process: concentrated energy exceeded a threshold and dispersed because nothing in the constraints allowed it to do otherwise. Everything since—the formation of atoms, the birth of stars, the emergence of life—is the continuation of that transition. The rest is detail.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Think of a chessboard, though the analogy is crude: pieces as energy configurations, rules as physical constraints. But unlike chess, no player exists. No intent. No objective. Both pieces and rules emerged from earlier states; each configuration bound by the last.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  If the universe has an "aim," the only one consistent with current observation is equilibrium: the flattening of gradients into uniformity, the end toward which every isolated system drifts.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Whether the beginning was a singularity, a bounce, or a phase shift in some deeper geometry is irrelevant at the human scale. Your existence is not separate from that first release. Every carbon atom in your hand was forged in a star that died before Earth existed. Every breath is rearranged stardust. The chain does not care that you are in it.
                </p>

                <p className="text-lg leading-[1.85] font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                  Causation is not philosophical in origin. It is structural. It is the consistency of configuration change across time and conditions.
                </p>
              </ManifestoSection>

              <ManifestoSection id="time" title="II. TIME AS ORDERING">
                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Time is not a flowing container in which events unfold. In physics it is a parameter that orders change; in organisms it becomes an index they assign to sequences they must track to survive. "Before" and "after" are implementations of this indexing in nervous tissue.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  What exists objectively is ordered configuration: particles scattering, gradients flattening, energy dispersing according to dynamical laws. Everything else— memory, anticipation, nostalgia— is the organism stitching transitions into continuity it can act inside.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Imagine a film reel with every frame already present. The frames are not waiting to "happen." They are a set of configurations arranged in a particular order. The sense of motion comes from an observer scanning frames sequentially. The scan is the illusion. The ordering is the structure.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  A man once memorized the angle of his daughter's smile. He believed he had preserved a moment. What he preserved was a biochemical arrangement in a neural substrate, unstable and revisable. When she died, the trace decayed with the tissue that held it. The architecture did not notice.
                </p>

                <PullQuote>
                  Time, as experienced, is the shadow causation casts on organisms with limited bandwidth.
                </PullQuote>
              </ManifestoSection>

              <ManifestoSection id="law" title="III. LAW, COMPLEXITY, AND RANDOMNESS">
                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Once you understand the chain, the next conclusion becomes unavoidable: what humans call "randomness" marks the edge of their models, not a place where events slip free of structure.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  When boundaries exceed perception or computation, people rename necessity "luck." When they fail to see a cause, they declare there wasn't one. But lack of access does not imply absence.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  A woman once stopped speaking after recognizing this. Snow fell outside her window. At first it looked chaotic. Then she began to see implied vectors—air currents, collisions, drag, gravity, each flake locked into a path no one could track in detail but none could violate. What felt like spontaneity was merely complexity. Her inability to predict a flake's path was not freedom in the flake, but blindness in herself.
                </p>

                <PullQuote>
                  "Random" is the name for where a model ends and the world continues.
                </PullQuote>
              </ManifestoSection>

              <ManifestoSection id="entropy" title="IV. ENTROPY AS DIRECTION">
                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  The universe spreads. That is its only reliable direction.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Entropy is not decay or "disorder" in the everyday sense. It is the statistical weight of configurations: high-entropy states simply outnumber low-entropy ones by overwhelming margins. This imbalance gives rise to what humans call "the arrow of time."
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Stars collapse because the combinatorial weight of spreading mass-energy exceeds the internal pressures that once supported structure. Organisms age because intricate biochemical order cannot indefinitely resist the mathematics of dispersion and error accumulation.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Entropy does not push. Entropy does not guide. Entropy does not care. It is what happens when structure is allowed to follow its most probable paths under given constraints.
                </p>

                <p className="text-lg leading-[1.85] font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                  Entropy is not an event but a direction encoded in statistics.
                </p>
              </ManifestoSection>

              <ManifestoSection id="consciousness" title="V. CONSCIOUSNESS AS EMERGENT">
                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Against this backdrop, consciousness is a temporary asymmetry: a brief concentration of order that models itself and its surroundings. A counter-current, not against physics, but formed by it in specific regimes.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Consciousness appears when biological systems become complex enough to construct and update internal representations of internal and external states. This recursion generates the experience of a "self" as the center of a narrative. There's nothing fundamental in it. No separation. Nothing sovereign.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  The brain does not produce consciousness the way a factory produces an object. It expresses consciousness the way a medium expresses a pattern when driven in certain ways—like waves on water, or standing patterns in driven systems far from equilibrium.
                </p>

                <PullQuote>
                  Consciousness is the wave. Neural tissue is the water and wind.
                </PullQuote>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  A phenomenon that can vanish is not fundamental. A phenomenon that must be maintained by work against entropy is not free.
                </p>

                <p className="text-lg leading-[1.85] font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                  Consciousness is entropy briefly resisting its own leveling— long enough to interpret its own dynamics as personhood.
                </p>
              </ManifestoSection>

              <ManifestoSection id="architecture" title="VI. THE CLOSED ARCHITECTURE">
                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Once causation is recognized as structural, randomness reduced to complexity and law, time understood as ordering, entropy seen as direction, and consciousness revealed as emergent, the final conclusion becomes difficult to escape: the architecture admits no privileged exemptions.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Humans inherited long traditions of escape routes—souls, metaphysical layers, divine interventions, hidden essences, spiritual additives. All serve the same biological and social purposes: to reduce uncertainty, soften grief, and stabilize fragile coordination.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  But at the structural level, nothing stands outside the chain.
                </p>

                <p className="text-lg leading-[1.85] font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                  Not matter. Not life. Not consciousness. Not meaning. Not identity. Not morality. Not will. Not hope. Not despair. NOTHING.
                </p>

                <PullQuote>
                  COMFORT IS NOT TRUTH. UTILITY IS NOT REALITY.
                </PullQuote>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  The chain does not soften for subjective meaning. It does not pause for grief. It does not negotiate with awareness. It does not permit clauses labeled "except here."
                </p>

                <p className="text-lg leading-[1.85] font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                  The universe is closed to exceptions.
                </p>
              </ManifestoSection>

              <ManifestoSection id="consequence" title="VII. CONSEQUENCE">
                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  What happens when a mind sees this clearly is not automatically despair. It is not automatic nihilism. It is not guaranteed surrender.
                </p>

                <p className="text-lg leading-[1.85] font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                  It is recalibration.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  The old illusions fall: absolute choice, untethered agency, self-authorship, metaphysical comfort, moral absolutism. What remains is a system modeling parts of its own architecture and paying a cost for the accuracy of that model. The cost is a loosening of old coherence.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Some people break; their previous narratives cannot absorb the impact. Some people freeze; action collapses under the weight of perceived inevitability. Some people become silent; words feel dishonest in the shadow of the chain. Some never recover the hallucinations that once kept them functional.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  But others do something different. They continue to act, knowing that "continuing to act" is itself one more pattern in the system. They stop confusing inevitability with irrelevance.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  A son sits by his father's hospital bed, knowing that neither of them chose their biology, their histories, or the timing of this decline. He holds his father's hand anyway, not because "he could have done otherwise," but the chain that formed him includes the capacity to feel pain at another's suffering and to reduce it slightly. That is what compassion looks like when stripped of metaphysics: one configuration lowering the suffering in another.
                </p>

                <PullQuote>
                  Clarity does not remove value; it removes fantasy about where value comes from.
                </PullQuote>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Once the architecture becomes visible, it cannot be unseen. What changes is not that you stop moving, but that you understand motion differently.
                </p>
              </ManifestoSection>

              <ManifestoSection id="final" title="VIII. FINAL POSITION">
                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  This manifesto does not offer hope as exemption. It does not offer meaning as decree. It does not offer reconciliation with a universe that was never in conflict with you to begin with.
                </p>

                <p className="text-lg leading-[1.85] font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                  It offers an attempt at accuracy, knowing that even this attempt is part of the same architecture it describes.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  You were never the author. You are the node. The chain moves. You move with it. Nothing else was ever structurally available.
                </p>

                <p className="text-lg leading-[1.85]" style={{ fontFamily: 'var(--font-serif)' }}>
                  The architecture is closed to miracles and exemptions. You are inside it.
                </p>

                <div className="mt-16 text-center">
                  <p 
                    className="text-3xl md:text-4xl font-light tracking-widest text-primary"
                    style={{ fontFamily: 'var(--font-serif)' }}
                    data-testid="text-final-cta"
                  >
                    NOW LOOK AT IT.
                  </p>
                </div>
              </ManifestoSection>

              <div className="mt-32 pt-12 border-t border-border text-center">
                <p className="text-sm text-muted-foreground font-sans">END.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
