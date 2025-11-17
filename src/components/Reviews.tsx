import { Star } from "lucide-react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import { Button } from "./ui/button";

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in mx-auto p-8 md:p-12">
          <h2 className="text-4xl font-bold text-center mb-4">Patient Reviews</h2>
          <p className="text-center text-muted-foreground mb-12">
            What our patients say about the best dental clinic in Vadodara
          </p>
          <div className="google-reviews">
            <ReactGoogleReviews
              featurableId={import.meta.env.VITE_GOOGLE_WIDGET_ID}
              layout="carousel"
            />
          </div>

          <div className="text-center">
            <Button
              variant="dental"
              onClick={() =>
                window.open(
                  "https://search.google.com/local/writereview?placeid=ChIJW-728BzqgCwRQpHWSQyJ3Eo",
                  "_blank"
                )
              }
              className="text-white bg-dark"
            >
              Review us on Google
              <Star className="w-4 h-4 fill-[#f8af0d]" color="#f8af0d" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
