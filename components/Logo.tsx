import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-[#EE2F2F] flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-white" />
      </div>

      <div className="flex gap-1 font-bold text-[#EE2F2F] text-2xl uppercase">
        <span className="relative">S</span>
        <span className="relative">
          O
          <span className="absolute left-0 top-1/2 w-full h-1 bg-yellow-200 -translate-y-1/2 rotate-[115deg]"></span>
        </span>
        <span>F</span>
        <span>T</span>
        <span className="ml-2 relative">P</span>
        <span className="relative">
          O
          <span className="absolute left-0 top-1/2 w-full h-1 bg-yellow-200 -translate-y-1/2 rotate-[115deg]"></span>
        </span>
        <span>I</span>
        <span>N</span>
        <span>T</span>
      </div>
    </Link>
  );
};

export default Logo;
