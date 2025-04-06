import { Phone } from "lucide-react";

export default function PhoneMockup() {
  return (
    <div className="relative w-[280px] h-[560px] bg-slate-200 rounded-[40px] shadow-xl overflow-hidden border-[14px] border-slate-300">
      {/* Phone notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-slate-300 rounded-b-xl z-10"></div>

      {/* Phone screen */}
      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white">
          <Phone className="w-16 h-16 mx-auto mb-4 text-white/80" />
          <h3 className="text-xl font-bold">New Device</h3>
          <p className="text-sm mt-2 text-white/80">Revolutionary Design</p>
        </div>
      </div>
    </div>
  );
}
