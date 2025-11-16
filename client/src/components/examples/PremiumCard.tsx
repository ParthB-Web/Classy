import PremiumCard from '../PremiumCard';

export default function PremiumCardExample() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <PremiumCard
        title="Watcher: The Cost of Coherence"
        description="A document shaped by accuracy rather than performance. A quiet examination of what truth demands."
        linkText="Read the Book"
        href="#"
      />
    </div>
  );
}
