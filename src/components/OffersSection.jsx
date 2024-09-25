import React from "react";
import { motion } from "framer-motion"; 
import laptopImage from '../assets/images/laptop-image.jpg';
import shoesImage from '../assets/images/shoes-image2.jpg';
import fashionImage from '../assets/images/fashion-image.jpg';

export default function OffersSection() {
  const offers = [
    {
      title: "50% Off on Electronics",
      description:
        "Get the best deals on all electronic items, including phones, laptops, and accessories.",
      img: laptopImage, 
      link: "/shop/electronics",
    },
    {
      title: "Buy 1 Get 1 Free on Shoes",
      description:
        "Exclusive offers on our latest collection of shoes. Limited time only!",
      img: shoesImage,
      link: "/shop/shoes",
    },
    {
      title: "Up to 70% Off on Fashion",
      description:
        "Shop the latest trends with discounts up to 70%. Don't miss out!",
      img: fashionImage,
      link: "/shop/fashion",
    },
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-6 text-center">
        {/* Updated Colorful Heading */}
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
          Exclusive Offers
        </h2>
        <p className="text-lg mb-8 text-gray-700 tracking-wide">
          Unlock unbeatable deals on the latest trends and products!
        </p>

        {/* Flexbox Layout with Animated Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }} // Fixed Animation Timing
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col max-w-xs w-full transform transition duration-300 ease-in-out hover:shadow-2xl"
            >
              {/* Offer Image */}
              <img
                className="w-full h-48 object-cover"
                src={offer.img}
                alt={offer.title}
              />

              {/* Offer Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                {/* Colorful Offer Title */}
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>

                {/* Call to Action Button */}
                <a
                  href={offer.link}
                  className="mt-auto inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 transition duration-300 transform hover:scale-105"
                >
                  Shop Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}