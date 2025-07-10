
import { 
  Wifi, 
  Car, 
  Coffee, 
  Tv, 
  Snowflake, 
  Utensils, 
  Shield, 
  Droplets,
  Bed,
  Users,
  Clock,
  MapPin
} from "lucide-react";

export const Amenities = () => {
  const amenities = [
    { icon: Wifi, title: "Free Wi-Fi", description: "High-speed internet access" },
    { icon: Car, title: "Free Parking", description: "Secure parking space" },
    { icon: Coffee, title: "Breakfast", description: "Complimentary breakfast" },
    { icon: Tv, title: "Smart TV", description: "Cable TV & streaming" },
    { icon: Snowflake, title: "Air Conditioning", description: "Climate control" },
    { icon: Utensils, title: "Full Kitchen", description: "Fully equipped kitchen" },
    { icon: Shield, title: "24/7 Security", description: "Round-the-clock security" },
    { icon: Droplets, title: "Hot Water", description: "24-hour hot water" },
    { icon: Bed, title: "2 Bedrooms", description: "Comfortable bedding" },
    { icon: Users, title: "Up to 4 Guests", description: "Perfect for families" },
    { icon: Clock, title: "Flexible Check-in", description: "Convenient timing" },
    { icon: MapPin, title: "Prime Location", description: "Near city center" },
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Amenities & Features</h2>
          <p className="text-xl text-gray-600">
            Everything you need for a comfortable stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <amenity.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Our BnB?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2">Prime Location</h4>
              <p className="text-green-100">Located in the heart of Eldoret with easy access to attractions</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Modern Comfort</h4>
              <p className="text-green-100">Newly furnished with all modern amenities</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Exceptional Service</h4>
              <p className="text-green-100">Dedicated host ensuring your comfort throughout your stay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
