"use client";

import { motion } from "framer-motion";
import "./styles/testimonial.css"; // Import CSS

const testimonials = [
  {
    name: "Amit Verma",
    role: "Founder, TechNova",
    image: "https://www.wovlene.com/cm-admin/uploads/image/testimonial-2.jpg",
    feedback:
      "CrowdHiveAI helped us raise $500K in funding. Their AI-driven approach is a game-changer!",
  },
  {
    name: "Sarah Khan",
    role: "CEO, GreenFuture",
    image: "https://www.wovlene.com/cm-admin/uploads/image/testimonial-1.jpg",
    feedback:
      "The platform streamlined our fundraising process, connecting us with the right investors.",
  },
  {
    name: "James Patel",
    role: "CTO, AI Innovations",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8nhmPLODZMAsgvT9UON9aS4AvgqsmB1iiw7QycUBhF67yIKBmkW3OrWIg7bMh18dTBBo&usqp=CAU",
    feedback:
      "Exceptional experience! We secured seed funding within a month. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Success Stories & Testimonials</h2>
        <p className="testimonials-subtitle">
          See how our platform has transformed startups worldwide.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="testimonial-card"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <span className="testimonial-role">{testimonial.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
