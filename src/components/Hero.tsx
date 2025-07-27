import { Star, Users, Calendar, Award } from "lucide-react";

const Hero = () => {
  const handleBookAppointment = () => {
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/media/reception-area.png"
          alt="Modern Dental Clinic Reception"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-40 right-20 w-12 h-12 bg-white/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-40 left-10 w-16 h-16 bg-white/15 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Perfect Smile
              <span className="block text-white/90">Starts Here</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Experience world-class dental care with Dr. Malvika Trivedi at The Tooth Co. in
              Vadodara. Modern techniques, personalized treatment, and a commitment to your oral
              health.
            </p>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Users className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">5000+</div>
                <div className="text-white/80 text-sm">Happy Patients</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Star className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">5.0</div>
                <div className="text-white/80 text-sm">Star Rating</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Calendar className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Award className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-white/80 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
