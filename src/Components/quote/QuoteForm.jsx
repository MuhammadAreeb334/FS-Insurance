// components/quote/QuoteForm.jsx
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  CheckCircle2,
  XCircle,
  Send,
  User,
  Building2,
  MapPin,
  Smartphone,
  Briefcase,
  Shield,
  DollarSign,
  Mail,
  CreditCard,
  Clock,
  Calendar,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { states, formVariants, inputVariants } from "./data";

// Use import.meta.env for Vite
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID;

const QuoteForm = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const formElementRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    corporationName: "",
    state: "",
    phone: "",
    businessType: "",
    currentInsurance: "",
    currentPremium: "",
    email: "",
    city: "",
    zip: "",
    fax: "",
    hoursOfOperation: "",
    expirationDate: "",
    hasClaims: "",
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
        corporation_name: formData.corporationName,
        state: formData.state,
        business_type: formData.businessType,
        current_insurance: formData.currentInsurance || "Not provided",
        current_premium: formData.currentPremium || "Not provided",
        city: formData.city,
        zip: formData.zip,
        fax: formData.fax || "Not provided",
        hours_of_operation: formData.hoursOfOperation || "Not provided",
        expiration_date: formData.expirationDate || "Not provided",
        has_claims: formData.hasClaims || "Not provided",
        message: formData.message || "No message provided",
        subject: `New Quote Request from ${formData.corporationName} (${formData.businessType})`,
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
        setFormData({
          name: "",
          corporationName: "",
          state: "",
          phone: "",
          businessType: "",
          currentInsurance: "",
          currentPremium: "",
          email: "",
          city: "",
          zip: "",
          fax: "",
          hoursOfOperation: "",
          expirationDate: "",
          hasClaims: "",
          message: "",
        });
        setTimeout(() => {
          setSubmitSuccess(false);
          navigate("/");
        }, 3000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitError(true);
      setErrorMessage(
        "Failed to submit quote request. Please try again or call us directly.",
      );
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-gray-50" id="quote-form">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
              Thank you! Your quote request has been submitted. We'll contact
              you soon.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Enter Your Name */}
              <motion.div
                custom={0}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <User size={16} className="text-[#171818]" />
                  Enter Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                />
              </motion.div>

              {/* Enter Corporation's Name */}
              <motion.div
                custom={1}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Building2 size={16} className="text-[#171818]" />
                  Enter Corporation's Name{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="corporationName"
                  required
                  value={formData.corporationName}
                  onChange={handleChange}
                  placeholder="ABC Corporation"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                />
              </motion.div>

              {/* Enter State */}
              <motion.div
                custom={2}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <MapPin size={16} className="text-[#171818]" />
                  Enter State <span className="text-red-500">*</span>
                </label>
                <select
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Enter Phone # */}
              <motion.div
                custom={3}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Smartphone size={16} className="text-[#171818]" />
                  Enter Phone # <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 555-5555"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                />
              </motion.div>

              {/* Enter Type of Your Business */}
              <motion.div
                custom={4}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Briefcase size={16} className="text-[#171818]" />
                  Enter Type of Your Business{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  placeholder="e.g., Gas Station, Restaurant, Convenience Store"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                />
              </motion.div>

              {/* Enter Your Current Insurance Company */}
              <motion.div
                custom={5}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Shield size={16} className="text-[#171818]" />
                  Enter Your Current Insurance Company
                </label>
                <input
                  type="text"
                  name="currentInsurance"
                  value={formData.currentInsurance}
                  onChange={handleChange}
                  placeholder="Insurance Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                />
              </motion.div>

              {/* Enter Current Premium ($) */}
              <motion.div
                custom={6}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <DollarSign size={16} className="text-[#171818]" />
                  Enter Current Premium ($)
                </label>
                <input
                  type="number"
                  name="currentPremium"
                  value={formData.currentPremium}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                />
              </motion.div>

              {/* Enter your email */}
              <motion.div
                custom={7}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Mail size={16} className="text-[#171818]" />
                  Enter your email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                />
              </motion.div>

              {/* Enter City */}
              <motion.div
                custom={8}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  Enter City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Los Angeles"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                />
              </motion.div>

              {/* Enter Zip */}
              <motion.div
                custom={9}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <CreditCard size={16} className="text-[#171818]" />
                  Enter Zip <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="zip"
                  required
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="90210"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                />
              </motion.div>

              {/* Enter Fax # */}
              <motion.div
                custom={10}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  Enter Fax #
                </label>
                <input
                  type="text"
                  name="fax"
                  value={formData.fax}
                  onChange={handleChange}
                  placeholder="(555) 555-5555"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                />
              </motion.div>

              {/* Enter Your Hours of Operation */}
              <motion.div
                custom={11}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Clock size={16} className="text-[#171818]" />
                  Enter Your Hours of Operation
                </label>
                <input
                  type="text"
                  name="hoursOfOperation"
                  value={formData.hoursOfOperation}
                  onChange={handleChange}
                  placeholder="Mon-Fri: 9am-6pm"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                />
              </motion.div>

              {/* Expiration Date */}
              <motion.div
                custom={12}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Calendar size={16} className="text-[#171818]" />
                  Expiration Date
                </label>
                <input
                  type="date"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all"
                />
              </motion.div>

              {/* Do You Have Claim or Losses */}
              <motion.div
                custom={13}
                variants={inputVariants}
                initial="hidden"
                animate={isFormInView ? "visible" : "hidden"}
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <AlertCircle size={16} className="text-[#171818]" />
                  Do You Have Claim or Losses
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasClaims"
                      value="yes"
                      checked={formData.hasClaims === "yes"}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#171818]"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasClaims"
                      value="no"
                      checked={formData.hasClaims === "no"}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#171818]"
                    />
                    <span>No</span>
                  </label>
                </div>
              </motion.div>
            </div>

            {/* Enter Your Message */}
            <motion.div
              custom={14}
              variants={inputVariants}
              initial="hidden"
              animate={isFormInView ? "visible" : "hidden"}
              className="mt-6 space-y-2"
            >
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <MessageSquare size={16} className="text-[#171818]" />
                Enter Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us more about your insurance needs..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#171818] focus:border-transparent outline-none transition-all resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              custom={15}
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
                    Submitting...
                  </>
                ) : (
                  <>
                    Get a Quote
                    <Send size={18} />
                  </>
                )}
              </button>
            </motion.div>

            <motion.p
              custom={16}
              variants={inputVariants}
              initial="hidden"
              animate={isFormInView ? "visible" : "hidden"}
              className="text-center text-xs text-gray-400 mt-6"
            >
              By submitting this form, you agree to our terms and conditions.
              Your information is secure and will only be used to provide you
              with insurance quotes.
            </motion.p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(QuoteForm);
