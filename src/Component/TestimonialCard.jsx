import { FaStar } from "react-icons/fa";

function TestimonialCard({ review, name, location, initials, rating }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">

      {/* Stars */}
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} className="text-orange-400 text-sm" />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        "{review}"
      </p>

      {/* User */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-slate-700">
          {initials}
        </div>

        <div>
          <p className="font-semibold text-slate-800 text-sm">
            {name}
          </p>
          <p className="text-xs text-gray-500">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
