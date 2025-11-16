import SectionNav from '../SectionNav';

export default function SectionNavExample() {
  const sections = [
    { id: "world", title: "I. The World as Relaxation" },
    { id: "time", title: "II. Time as Ordering" },
    { id: "law", title: "III. Law, Complexity, and Randomness" }
  ];

  return (
    <div className="p-6 max-w-xs">
      <SectionNav sections={sections} />
    </div>
  );
}
