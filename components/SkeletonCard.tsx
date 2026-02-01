export default function SkeletonCard() {
  return (
    <div className="animate-pulse border border-gray-800 p-3 rounded-xl">
      <div className="bg-gray-800 h-40 w-full rounded-lg mb-3"></div>
      <div className="bg-gray-800 h-4 w-3/4 mb-2 rounded"></div>
      <div className="bg-gray-800 h-4 w-1/2 rounded"></div>
      <div className="bg-gray-800 h-8 w-full mt-3 rounded"></div>
    </div>
  );
}