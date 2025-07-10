
import { MapPin, Shield, Coffee } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our BnB</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect blend of comfort, convenience, and hospitality in Eldoret
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Home in Elgon View, Eldoret
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Located in the peaceful Elgon View neighborhood, our beautiful 2-bedroom BnB 
              offers the perfect retreat for travelers seeking comfort and convenience. 
              Whether you're visiting for business or leisure, our thoughtfully designed 
              space provides everything you need for a memorable stay.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our property features modern amenities, comfortable furnishings, and a 
              welcoming atmosphere that makes every guest feel at home. We're conveniently 
              located near major attractions, shopping centers, and the vibrant heart of Eldoret.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Prime Location</h4>
                <p className="text-sm text-gray-600">Elgon View, Eldoret</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Safe & Secure</h4>
                <p className="text-sm text-gray-600">24/7 Security</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Coffee className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Hospitality</h4>
                <p className="text-sm text-gray-600">Warm Welcome</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&q=80"
              alt="Comfortable bedroom"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-sm font-semibold">★★★★★</p>
              <p className="text-xs">Rated by guests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
