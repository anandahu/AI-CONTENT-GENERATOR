// app/billing/page.tsx
import React from "react";

const plans = [
  {
    title: "Free",
    price: "0$",
    period: "/month",
    features: [
      "10,000 Words/Month",
      "50+ Content Templates",
      "Unlimited Download & Copy",
      "1 Month of History",
    ],
    button: {
      text: "Currently Active Plan",
      disabled: true,
    },
  },
  {
    title: "Monthly",
    price: "9.99$",
    period: "/month",
    features: [
      "1,00,000 Words/Month",
      "50+ Template Access",
      "Unlimited Download & Copy",
      "1 Year of History",
    ],
    button: {
      text: "Get Started",
      disabled: false,
    },
  },
];

export default function BillingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        Upgrade With Monthly Plan
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {plans.map((plan, idx) => (
          <div
            key={plan.title}
            className="bg-white rounded-2xl shadow-lg px-8 py-8 flex flex-col items-center w-80"
          >
            <h2 className="font-semibold text-lg mb-4">{plan.title}</h2>
            <div className="flex items-end mb-6">
              <span
                className={`text-3xl font-extrabold ${
                  plan.title === "Monthly"
                    ? "bg-blue-100 text-blue-700 px-2 rounded"
                    : "text-gray-800"
                }`}
              >
                {plan.price}
              </span>
              <span className="ml-1 text-gray-500 text-base mb-1">
                {plan.period}
              </span>
            </div>
            <ul className="mb-8 w-full">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 mb-2 text-gray-700">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              disabled={plan.button.disabled}
              className={`w-full py-3 rounded-full font-semibold transition
                ${
                  plan.button.disabled
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white"
                }
              `}
            >
              {plan.button.text}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
