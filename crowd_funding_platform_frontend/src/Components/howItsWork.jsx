import { motion } from "framer-motion";
import { FaRocket, FaHandHoldingUsd, FaChartLine } from "react-icons/fa";
import "./styles/howItsWork.css"; // Importing the CSS file

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaRocket size={40} className="icon-blue" />,
      title: "Launch Your Idea",
      description: "Submit your AI-driven startup for funding and gain access to investors."
    },
    {
      icon: <FaHandHoldingUsd size={40} className="icon-green" />,
      title: "Secure Investments",
      description: "Investors review your project and fund the most promising ideas."
    },
    {
      icon: <FaChartLine size={40} className="icon-purple" />,
      title: "Achieve Growth",
      description: "Use funding to scale your AI startup and disrupt the industry."
    }
  ];

  return (
    <div className="how-it-works">
      <h2 className="title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="step-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
