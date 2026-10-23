
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center overflow-hidden bg-[#0D0F0B] px-6 py-16 text-white md:px-12">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <section>
          <span className="inline-flex rounded-full border border-[#C2F800] px-5 py-1.5 font-bold text-[#C2F800]">
            404
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Page <span className="text-[#C2F800]">Not Found</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-400 sm:text-lg">
            The page you are looking for might have been removed,
            had its name changed, or is temporarily unavailable.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#C2F800] px-7 py-4 font-bold text-black transition hover:bg-lime-300"
          >
            <span aria-hidden="true" className="text-2xl">←</span>
            Back to Home
          </Link>
        </section>

        {/* Right Illustration */}
        <section className="relative flex min-h-64 items-center justify-center lg:min-h-110">
          <div className="absolute text-[170px] font-black text-[#1A2312] sm:text-[240px] lg:text-[300px]">
            404
          </div>

          <div className="relative z-10 text-center">
            <div className="text-7xl sm:text-8xl">🏋️</div>
            <p className="mt-5 text-lg font-semibold text-gray-400">
              Looks like you missed a rep!
            </p>
            <p className="mt-2 text-sm text-[#C2F800]">
              Let&apos;s get you back on track.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
