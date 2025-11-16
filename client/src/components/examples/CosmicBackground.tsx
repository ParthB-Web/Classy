import CosmicBackground from '../CosmicBackground';

export default function CosmicBackgroundExample() {
  return (
    <div className="relative h-screen w-full">
      <CosmicBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-primary text-2xl">Cosmic background with twinkling stars</p>
      </div>
    </div>
  );
}
