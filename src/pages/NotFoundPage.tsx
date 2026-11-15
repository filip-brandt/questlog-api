import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center bg-[#171a21] rounded-2xl p-10 shadow-lg border border-[#2b3747]">
        <h1 className="text-6xl font-black text-[#d946ef] mb-4">404</h1>
        <p className="text-2xl font-semibold text-[#c7d5e0] mb-6">Page not found</p>
        <Link
          to="/"
          className="inline-block bg-[#22d3ee] text-black font-bold px-6 py-3 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] transition"
        >
          Back to Questlog
        </Link>
      </div>
    </div>
  );
}