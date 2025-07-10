
import { Button } from "@/components/ui/button";
import { Check, Calendar, Users, Clock } from "lucide-react";

export const Rates = () => {
  const packages = [
    {
      title: "Standard Stay",
      price: "5,000",
      period: "per night",
      description: "Perfect for short visits",
      features: [
        "2 Bedrooms",
        "Up to 4 guests",
        "Free Wi-Fi",
        "Free parking",
        "Basic breakfast"
      ],
      popular: false
    },
    {
      title: "Weekly Stay",
      price: "30,000",
      period: "per week",
      description: "Great value for extended stays",
      features: [
        "All standard features",
        "Daily housekeeping",
        "Laundry service",
        "Airport pickup",
        "Full breakfast"
      ],
      popular: true
    },
    {
      title: "Monthly Stay",
      price: "120,000",
      period: "per month",
      description: "Ideal for long-term visitors",
      features: [
        "All weekly features",
        "Dedicated workspace",
        "Priority support",
        "Flexible check-in/out",
        "Local tour guide"
      ],
      popular: false
    }
  ];

  return (
    <section id="rates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Rates & Packages</h2>
          <p className="text-xl text-gray-600">
            Competitive rates for every type of stay
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                pkg.popular
                  ? "bg-green-600 text-white shadow-2xl scale-105"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-green-800 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-gray-900"}`}>
                  {pkg.title}
                </h3>
                <p className={`mb-4 ${pkg.popular ? "text-green-100" : "text-gray-600"}`}>
                  {pkg.description}
                </p>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${pkg.popular ? "text-white" : "text-green-600"}`}>
                    KES {pkg.price}
                  </span>
                  <span className={`text-lg ${pkg.popular ? "text-green-100" : "text-gray-500"}`}>
                    /{pkg.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`h-5 w-5 mr-3 ${pkg.popular ? "text-green-200" : "text-green-600"}`} />
                    <span className={pkg.popular ? "text-green-100" : "text-gray-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 ${
                  pkg.popular
                    ? "bg-white text-green-600 hover:bg-gray-100"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Booking</h3>
            <p className="text-gray-600">Easy booking with flexible cancellation policy</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Group Discounts</h3>
            <p className="text-gray-600">Special rates for groups and extended stays</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock assistance for all your needs</p>
          </div>
        </div>
      </div>
    </section>
  );
};
