import React, { useState, useRef } from "react";
import TitleHeader from "../Components/TitleHeader";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const socialImgs = [
  {
    name: "LinkedIn",
    imgPath: "/images/Linkedin.png",
    link: "https://www.linkedin.com/in/chirag-tiwari-9816a02a6/",
  },
  {
    name: "GitHub",
    imgPath: "/images/github.png",
    link: "https://github.com/chiragtiwari115",
  },
  {
    name: "Leetcode",
    imgPath: "/images/LeetCode.png",
    link: "https://leetcode.com/u/chirag1505/",
  },
  {
    name: "Instagram",
    imgPath: "/images/instagram.png",
    link: "https://www.instagram.com/chiragtiwari150/",
  },
  {
    name: "Spotify",
    imgPath: "/images/Spotify.png",
    link: "https://open.spotify.com/user/31zcpqvc74sytkfwho4oyofkzyg4",
  },
  {
    name: "X",
    imgPath: "/images/X.jpg",
    link: "https://x.com/ChiragT03892794",
  },
  {
    name: "Discord",
    imgPath: "/images/discord.webp",
    link: "https://discord.com/channels/1378684263347785958/1378684263347785961",
  },
  {
    name: "Unstop",
    imgPath: "/images/unstop.png",
    link: "https://unstop.com/u/chiratiw4732",
  },
];

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current, // ✅ Pass the form element
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset the form after submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 py-9">
        <TitleHeader title="Get In Touch with Me" sub="Contact Information" />

        <div className="mt-16 grid-12-cols gap-8">
          {/* Contact Form - Left Side */}
          <motion.div
            className="xl:col-span-7"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                    className="w-full p-2.5 rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                    className="w-full p-2.5 rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className="w-full p-2.5 rounded-lg"
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Socials - Right Side */}
          <motion.div
            className="xl:col-span-5 relative flex flex-col items-center justify-center card-border rounded-xl p-10 shadow-lg 
                    backdrop-blur-lg border border-white/10 overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
              <img
                src="/images/bg3.jpg"
                alt="background pattern"
                className="w-full h-full object-cover opacity-10 brightness-75"
              />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-10 w-full">
              {socialImgs.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center aspect-square w-full max-w-[80px]
                    rounded-xl bg-white/10 border border-white/10 hover:border-indigo-400/60
                    hover:bg-gradient-to-br hover:from-indigo-500/80 hover:to-purple-600/80
                    transition-all duration-500 ease-out shadow-md hover:shadow-indigo-500/30
                    transform hover:-translate-y-2 hover:scale-110"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-400/30 to-purple-500/30
                    opacity-0 group-hover:opacity-100 blur-xl transition duration-500"
                  ></span>

                  <img
                    src={social.imgPath}
                    alt={social.name}
                    className="w-10 h-10 relative z-10 opacity-80 group-hover:opacity-100 
                        transition-opacity duration-500 drop-shadow-md"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
