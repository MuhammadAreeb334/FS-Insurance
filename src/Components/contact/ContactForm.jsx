import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { formVariants, inputVariants } from "./data";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const ContactForm = () => {
  const formRef = useRef(null);
  const formElementRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    setErrorMessage("");

    try {
      // Prepare email template parameters
      const templateParams = {
        to_email: "muhammadareeb334@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        reply_to: formData.email,
        subject: `New Contact Form Submission from ${formData.name}`,
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      if (result.status === 200) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitError(true);
      setErrorMessage(
        "Failed to send message. Please try again or call us directly.",
      );
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Full width background
    <section className="w-full py-8 bg-gray-50" id="contact-form">
      {/* Only changed the container width - kept original form width */}
      <div className="max-w-screen-3xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={formRef}
            variants={formVariants}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
          >
            {/* Success Message */}
            {submitSuccess && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-8 p-4 bg-green-100 border border-green-400 rounded-xl text-green-700 text-center"
              >
                <CheckCircle2 className="inline-block w-5 h-5 mr-2" />
                Thank you! Your message has been sent. We'll get back to you soon.
              </motion.div>
            )}

            {/* Error Message */}
            {submitError && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-8 p-4 bg-red-100 border border-red-400 rounded-xl text-red-700 text-center"
              >
                <XCircle className="inline-block w-5 h-5 mr-2" />
                {errorMessage}
              </motion.div>
            )}

            <form
              ref={formElementRef}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#171818] mb-6 text-center">
                Send Us a Message
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Enter Name */}
                <motion.div
                  custom={0}
                  variants={inputVariants}
                  initial="hidden"
                  animate={isFormInView ? "visible" : "hidden"}
                  className="space-y-2"
                >
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <User size={16} className="text-[#171818]" />
                    Enter Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                  />
                </motion.div>

                {/* Enter Email */}
                <motion.div
                  custom={1}
                  variants={inputVariants}
                  initial="hidden"
                  animate={isFormInView ? "visible" : "hidden"}
                  className="space-y-2"
                >
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Mail size={16} className="text-[#171818]" />
                    Enter Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your e-mail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                  />
                </motion.div>

                {/* Enter Phone */}
                <motion.div
                  custom={2}
                  variants={inputVariants}
                  initial="hidden"
                  animate={isFormInView ? "visible" : "hidden"}
                  className="space-y-2 md:col-span-2"
                >
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Phone size={16} className="text-[#171818]" />
                    Enter Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                  />
                </motion.div>

                {/* Enter Message */}
                <motion.div
                  custom={3}
                  variants={inputVariants}
                  initial="hidden"
                  animate={isFormInView ? "visible" : "hidden"}
                  className="space-y-2 md:col-span-2"
                >
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <MessageSquare size={16} className="text-[#171818]" />
                    Enter Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all resize-none"
                  />
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.div
                custom={4}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="mt-8"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#171818] hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </motion.div>

              <motion.p
                custom={5}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="text-center text-xs text-gray-400 mt-6"
              >
                By submitting this form, you agree to our terms and conditions.
                Your information is secure and will only be used to respond to
                your inquiry.
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ContactForm);