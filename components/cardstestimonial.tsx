
"use client";

import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    id: 1,
    name: "Humera",
    role: "Founder",
    feedback: "Had an informative and helpful session.",
    rating: 5,
    userImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    mentorName: "Sunny Wadhwani",
    mentorRole: "Growpreneur",
    mentorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
  },
  {
    id: 2,
    name: "Naveen",
    role: "BNK PRODUCTS",
    feedback: "I like the suggestions from the mentor.",
    rating: 4,
    userImage:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
    mentorName: "Naveen Kumar Bandaru",
    mentorRole: "BNK PRODUCTS AND SERVICES",
    mentorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
  {
    id: 3,
    name: "Krishnendu",
    role: "Client",
    feedback: "Great interaction with the mentor!!",
    rating: 5,
    userImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    mentorName: "Chinmay Shah",
    mentorRole: "Crescent Electronics Pvt. Ltd.",
    mentorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
  },
  {
    id: 4,
    name: "Humera",
    role: "Founder",
    feedback: "Had an informative and helpful session.",
    rating: 5,
    userImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    mentorName: "Sunny Wadhwani",
    mentorRole: "Growpreneur",
    mentorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
  },
  {
    id: 5,
    name: "Naveen",
    role: "BNK PRODUCTS",
    feedback: "I like the suggestions from the mentor.",
    rating: 4,
    userImage:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
    mentorName: "Naveen Kumar Bandaru",
    mentorRole: "BNK PRODUCTS AND SERVICES",
    mentorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
  {
    id: 6,
    name: "Krishnendu",
    role: "Client",
    feedback: "Great interaction with the mentor!!",
    rating: 5,
    userImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    mentorName: "Chinmay Shah",
    mentorRole: "Crescent Electronics Pvt. Ltd.",
    mentorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
  },
  {
    id: 7,
    name: "Humera",
    role: "Founder",
    feedback: "Had an informative and helpful session.",
    rating: 5,
    userImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    mentorName: "Sunny Wadhwani",
    mentorRole: "Growpreneur",
    mentorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
  },
  {
    id: 8,
    name: "Naveen",
    role: "BNK PRODUCTS",
    feedback: "I like the suggestions from the mentor.",
    rating: 4,
    userImage:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
    mentorName: "Naveen Kumar Bandaru",
    mentorRole: "BNK PRODUCTS AND SERVICES",
    mentorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
  {
    id: 9,
    name: "Krishnendu",
    role: "Client",
    feedback: "Great interaction with the mentor!!",
    rating: 5,
    userImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    mentorName: "Chinmay Shah",
    mentorRole: "Crescent Electronics Pvt. Ltd.",
    mentorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
  },
  {
    id: 10,
    name: "Humera",
    role: "Founder",
    feedback: "Had an informative and helpful session.",
    rating: 5,
    userImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    mentorName: "Sunny Wadhwani",
    mentorRole: "Growpreneur",
    mentorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
  },
  {
    id: 11,
    name: "Naveen",
    role: "BNK PRODUCTS",
    feedback: "I like the suggestions from the mentor.",
    rating: 4,
    userImage:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
    mentorName: "Naveen Kumar Bandaru",
    mentorRole: "BNK PRODUCTS AND SERVICES",
    mentorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
  {
    id: 12,
    name: "Krishnendu",
    role: "Client",
    feedback: "Great interaction with the mentor!!",
    rating: 5,
    userImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    mentorName: "Chinmay Shah",
    mentorRole: "Crescent Electronics Pvt. Ltd.",
    mentorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
  },
  {
    id: 13,
    name: "Humera",
    role: "Founder",
    feedback: "Had an informative and helpful session.",
    rating: 5,
    userImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    mentorName: "Sunny Wadhwani",
    mentorRole: "Growpreneur",
    mentorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
  },
  {
    id: 14,
    name: "Naveen",
    role: "BNK PRODUCTS",
    feedback: "I like the suggestions from the mentor.",
    rating: 4,
    userImage:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
    mentorName: "Naveen Kumar Bandaru",
    mentorRole: "BNK PRODUCTS AND SERVICES",
    mentorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
  {
    id: 15,
    name: "Krishnendu",
    role: "Client",
    feedback: "Great interaction with the mentor!!",
    rating: 5,
    userImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    mentorName: "Chinmay Shah",
    mentorRole: "Crescent Electronics Pvt. Ltd.",
    mentorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
  }
] as const;

const testimonialsecond = [
    {
      id: 1,
      name: "Humera",
      role: "Founder",
      feedback: "Had an informative and helpful session.",
      rating: 5,
      userImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      mentorName: "Sunny Wadhwani",
      mentorRole: "Growpreneur",
      mentorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    },
    {
      id: 2,
      name: "Naveen",
      role: "BNK PRODUCTS",
      feedback: "I like the suggestions from the mentor.",
      rating: 4,
      userImage:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
      mentorName: "Naveen Kumar Bandaru",
      mentorRole: "BNK PRODUCTS AND SERVICES",
      mentorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    },
    {
      id: 3,
      name: "Krishnendu",
      role: "Client",
      feedback: "Great interaction with the mentor!!",
      rating: 5,
      userImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      mentorName: "Chinmay Shah",
      mentorRole: "Crescent Electronics Pvt. Ltd.",
      mentorImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    },
    {
      id: 4,
      name: "Humera",
      role: "Founder",
      feedback: "Had an informative and helpful session.",
      rating: 5,
      userImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      mentorName: "Sunny Wadhwani",
      mentorRole: "Growpreneur",
      mentorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    },
    {
      id: 5,
      name: "Naveen",
      role: "BNK PRODUCTS",
      feedback: "I like the suggestions from the mentor.",
      rating: 4,
      userImage:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
      mentorName: "Naveen Kumar Bandaru",
      mentorRole: "BNK PRODUCTS AND SERVICES",
      mentorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    },
    {
      id: 6,
      name: "Krishnendu",
      role: "Client",
      feedback: "Great interaction with the mentor!!",
      rating: 5,
      userImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      mentorName: "Chinmay Shah",
      mentorRole: "Crescent Electronics Pvt. Ltd.",
      mentorImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    },
    {
      id: 7,
      name: "Humera",
      role: "Founder",
      feedback: "Had an informative and helpful session.",
      rating: 5,
      userImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      mentorName: "Sunny Wadhwani",
      mentorRole: "Growpreneur",
      mentorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    },
    {
      id: 8,
      name: "Naveen",
      role: "BNK PRODUCTS",
      feedback: "I like the suggestions from the mentor.",
      rating: 4,
      userImage:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
      mentorName: "Naveen Kumar Bandaru",
      mentorRole: "BNK PRODUCTS AND SERVICES",
      mentorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    },
    {
      id: 9,
      name: "Krishnendu",
      role: "Client",
      feedback: "Great interaction with the mentor!!",
      rating: 5,
      userImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      mentorName: "Chinmay Shah",
      mentorRole: "Crescent Electronics Pvt. Ltd.",
      mentorImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    },
    {
      id: 10,
      name: "Humera",
      role: "Founder",
      feedback: "Had an informative and helpful session.",
      rating: 5,
      userImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      mentorName: "Sunny Wadhwani",
      mentorRole: "Growpreneur",
      mentorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    },
    {
      id: 11,
      name: "Naveen",
      role: "BNK PRODUCTS",
      feedback: "I like the suggestions from the mentor.",
      rating: 4,
      userImage:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
      mentorName: "Naveen Kumar Bandaru",
      mentorRole: "BNK PRODUCTS AND SERVICES",
      mentorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    },
    {
      id: 12,
      name: "Krishnendu",
      role: "Client",
      feedback: "Great interaction with the mentor!!",
      rating: 5,
      userImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      mentorName: "Chinmay Shah",
      mentorRole: "Crescent Electronics Pvt. Ltd.",
      mentorImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    },
    {
      id: 13,
      name: "Humera",
      role: "Founder",
      feedback: "Had an informative and helpful session.",
      rating: 5,
      userImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      mentorName: "Sunny Wadhwani",
      mentorRole: "Growpreneur",
      mentorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    },
    {
      id: 14,
      name: "Naveen",
      role: "BNK PRODUCTS",
      feedback: "I like the suggestions from the mentor.",
      rating: 4,
      userImage:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
      mentorName: "Naveen Kumar Bandaru",
      mentorRole: "BNK PRODUCTS AND SERVICES",
      mentorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    },
    {
      id: 15,
      name: "Krishnendu",
      role: "Client",
      feedback: "Great interaction with the mentor!!",
      rating: 5,
      userImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      mentorName: "Chinmay Shah",
      mentorRole: "Crescent Electronics Pvt. Ltd.",
      mentorImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    }
  ] as const;

const CardTestimonial = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
                  <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900 mb-10">Mentees Absolutely Love <span className="text-[#1e3a8a]"> Our Mentors</span></h2>
      <div className="flex w-full scrollbar-hide pb-4 ">
        <Marquee direction="left" autoFill pauseOnHover>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="md:w-[500px] w-[360px] bg-[#2e67ff1a] mx-4 p-6 rounded-xl shadow-lg inline-block flex-none"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.userImage}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{testimonial.feedback}</p>

              <div className="pt-[20px]">
                <div className="flex items-center justify-between mt-4 px-4 py-2 bg-gray-50 rounded-[50px]">
                    <div className="flex items-center">
                  <img
                    src={testimonial.mentorImage}
                    alt={testimonial.mentorName}
                    className="w-[45px] h-[45px] rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h4 className="font-semibold">{testimonial.mentorName}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.mentorRole}
                    </p>
                  </div>
                  </div>
                  <div className="">
                  <button className="relative  px-[6px] py-[4px] rounded-[6px] text-[#ffffff] overflow-hidden group bg-[#1e3a8a]">
                    <span className="absolute w-0 group-hover:w-full transition-all duration-500 h-full bg-blue-600 left-0 top-0"></span>
                    <span className="absolute w-0 group-hover:w-full transition-all duration-500 h-full bg-blue-600 right-0 top-0"></span>

                    <div className="relative text-[10px]">
                      Mentor
                    </div>
                  </button>
                </div>
                </div>
               
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="flex w-full mx-auto flex-col ">
        <Marquee direction="right" autoFill pauseOnHover>
          {testimonialsecond.map((testimonial) => (
            <div
              key={testimonial.id}
              className="md:w-[500px] w-[360px] mx-4 bg-[#2e67ff1a] p-6 rounded-xl shadow-lg inline-block flex-none"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.userImage}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{testimonial.feedback}</p>

              <div className="pt-[20px]">
                <div className="flex items-center justify-between mt-4 px-4 py-2 bg-gray-50 rounded-[50px]">
                    <div className="flex items-center">
                  <img
                    src={testimonial.mentorImage}
                    alt={testimonial.mentorName}
                    className="w-[45px] h-[45px] rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h4 className="font-semibold">{testimonial.mentorName}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.mentorRole}
                    </p>
                  </div>
                  </div>
                  <div className="">
                  <button className="relative  px-[6px] py-[4px] rounded-[6px] text-[#ffffff] overflow-hidden group bg-[#1e3a8a]">
                    <span className="absolute w-0 group-hover:w-full transition-all duration-500 h-full bg-blue-600 left-0 top-0"></span>
                    <span className="absolute w-0 group-hover:w-full transition-all duration-500 h-full bg-blue-600 right-0 top-0"></span>

                    <div className="relative text-[10px]">
                      Mentor
                    </div>
                  </button>
                </div>
                </div>
               
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default CardTestimonial;
