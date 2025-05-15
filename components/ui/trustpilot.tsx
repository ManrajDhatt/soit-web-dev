"use client"
import { FaStar } from "react-icons/fa";

export default function TrustpilotRatingBox() {
  return (
    <div className="w-full max-w-xs px-6 py-1 mb-2 text-center">
      {/* Trustpilot Logo & Stars */}
      <div className="mb-2">
        <span className="text-green-600 font-semibold text-lg">★ Trustpilot</span>
        <div className="flex justify-center mt-1 space-x-1">
          {Array(5).fill(0).map((_, i) => (
            <div
              key={i}
              className="w-6 h-6 bg-green-600 text-white rounded-xs flex items-center justify-center text-xs"
            >
              <FaStar />
            </div>
          ))}
        </div>
      </div>

      {/* Trustscore and Reviews */}
      <div className="text-sm text-gray-700 mt-2">
        Trustscore <strong>4.8</strong> | <u>322 reviews</u>
      </div>
    </div>
  );
}
