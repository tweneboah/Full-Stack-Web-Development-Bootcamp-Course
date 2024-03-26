import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const tiers = [
  {
    name: "Free",
    id: "Free",
    href: "checkout",
    price: "$0.00/month",
    amount: 0,
    description: "The essentials to provide your best work for clients.",
    features: ["5 Credits", "1 User", "Basic Support"],
    mostPopular: false,
  },

  {
    name: "Basic",
    id: "Basic",
    href: "checkout",
    price: "$20/month",
    amount: 20,
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "50 Credits",
      "5 Users",
      "Priority Support",
      "Content generation history",
    ],
    mostPopular: true,
  },
  {
    name: "Premium",
    id: "Premium",
    href: "checkout",
    price: "$50/month",
    amount: 50,
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "100 Credits",
      "10 Users",
      "Priority Support",
      "Content generation history",
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handleSlect = (plan) => {
    setSelectedPlan(plan);
    console.log(selectedPlan);
    if (plan?.id === "Free") {
      navigate("/free-plan");
    } else {
      //make the actual for payment
      navigate(`/checkout/${plan?.id}?amount=${plan?.amount}`);
    }
  };

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-white/5 ring-2 ring-indigo-500"
                  : "ring-1 ring-white/10",
                "rounded-3xl p-8 xl:p-10"
                //  selected plan
              )}
              onClick={() => handleSlect(tier)}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className="text-lg font-semibold leading-8 text-white"
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {tier.price}
                </span>
              </p>
              <a
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-500 cursor-pointer text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                )}
              >
                Buy plan
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-white"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
