import { Star, TrendingUp, User, Users } from "lucide-react";
import React from "react";

const page = async (props) => {
  const param = await props.searchParams;
  console.log(param);
  const searchName = param.name;
  const res = await fetch(`https://api.genderize.io/?name=${searchName}`);
  const data = await res.json();
  const isMale = data.gender === "male";
  const cnfiProbability = Math.round(data.probability * 100);
  console.log(data);
  return (
    <div className="min-h-screen flex justify-center items-center font-work">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full relative overflow-hidden p-4">
        <div
          className={`absolute top-0 right-0 w-32 h-32 ${
            isMale ? "bg-blue-100" : "bg-pink-100"
          } rounded-full -translate-y-16 translate-x-16 opacity-50`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-24 h-24 ${
            isMale ? "bg-blue-50" : "bg-pink-50"
          } rounded-full translate-y-12 -translate-x-12 opacity-50`}
        ></div>
        <div className="relative z-10">
          <div className="text-center">
            <div
              className={`w-24 h-24 mx-auto rounded-full flex justify-center items-center mb-4 ${
                isMale
                  ? "bg-gradient-to-br from-blue-400 to-blue-400"
                  : "bg-gradient-to-br from-pink-400 to-pink-600"
              } shadow-lg`}
            >
              <User className="w-12 h-12 text-white" strokeWidth={1.2} />
            </div>
            <div className="text-2xl font-semibold text-gray-800 mb-2 capitalize">
              {data.name}
            </div>
            <div
              className={`inline-flex items-center rounded-full text-sm font-semibold px-3 py-1 ${
                isMale
                  ? "bg-blue-100 text-blue-800 border border-blue-200"
                  : "bg-pink-100 text-pink-800 border border-pink-200"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full mr-2 ${
                  isMale ? "bg-blue-500" : "bg-pink-500"
                }`}
              ></span>
              {data.gender.charAt(0).toUpperCase() +
                data.gender.slice(1).toLowerCase()}
            </div>
          </div>
          {/* status section */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600 flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Confidence
                </span>
                <span className="text-sm font-bold text-gray-800">
                  {cnfiProbability}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-500 ${
                    isMale
                      ? "bg-gradient-to-r from-blue-400 to-blue-600"
                      : "bg-gradient-to-r from-pink-400 to-pink-600"
                  }`}
                  style={{ width: `${cnfiProbability}%` }}
                ></div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Data Sample Size
                </span>
                <span className="text-sm font-bold text-gray-800">
                  {data.count.toLocaleString()}
                </span>
              </div>
            </div>
            <div
              className={`rounded-lg p-2 border-2 ${
                cnfiProbability >= 90
                  ? "bg-green-50 border-green-200 text-green-800"
                  : cnfiProbability >= 70
                  ? "bg-yellow-50 border-yellow-200 text-yellow-800"
                  : "bg-red-50 border-red-200 text-red-800"
              }`}
            >
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <p className="text-sm font-medium">
                  {cnfiProbability >= 90
                    ? "High Accuracy"
                    : cnfiProbability >= 70
                    ? "Moderate Accuracy"
                    : "Low Accuracy"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
