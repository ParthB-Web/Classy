import ReadingProgress from '../ReadingProgress';

export default function ReadingProgressExample() {
  return (
    <div>
      <ReadingProgress />
      <div className="p-6">
        <p>Scroll down to see the progress bar</p>
        <div className="h-[200vh]"></div>
      </div>
    </div>
  );
}
