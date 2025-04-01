
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechGrowth Inc.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "AccessMart Solutions transformed our online presence completely. Their team delivered a website that not only looks fantastic but has significantly improved our conversion rates. Their strategic approach to digital marketing has helped us reach new audiences and grow our business.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "Innovate Labs",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content: "Working with AccessMart Solutions has been a game-changer for our startup. Their expertise in app development and UI/UX design helped us create an intuitive and engaging product that our users love. Their team is responsive, professional, and truly cares about our success.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Manager",
      company: "Global Services Ltd.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      content: "The consulting services provided by AccessMart Solutions helped us navigate a complex digital transformation. Their insights and strategic guidance were invaluable, and they were with us every step of the way. I highly recommend their services to any business looking to grow.",
      rating: 4,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with AccessMart Solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < testimonials[currentTestimonial].rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-primary-500 text-center">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-600 text-center">
                  {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                </p>
              </div>
              <div className="md:w-2/3">
                <blockquote>
                  <p className="text-gray-600 text-lg italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                </blockquote>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-primary-50 text-gray-600 hover:text-primary-500 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-primary-50 text-gray-600 hover:text-primary-500 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
