"use client";

import React, { useState, useEffect, useCallback } from "react";
import TitleWithSub from "../ui/title";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FormInput from "../ui/input/input";
import { Buttons } from "../ui/buttons";
import { RealTimeClock } from "@/libs/datetime";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const Contact = () => {
  const [datetime, setDatetime] = useState(RealTimeClock.getCurrentDateTime());
  const [sending, setSending] = useState(false);
  const [emailError, setEmailError] = useState("");

  const publicKey = process.env.NEXT_PUBLIC_USER_ID;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailValidation = (e) => {
    const { value } = e.target;

    setEmailError(
      !validateEmail(value) ? "Please enter a valid email" : ""
    );
  };

  const sendEmail = useCallback(
    async (e) => {
      e.preventDefault();
      const { fullname, email, message } = e.target;

      try {
        setSending(true);
        disableFormFields([fullname, email, message]);

        const templateParams = {
          from_name: email.value,
          user_name: fullname.value,
          user_email: email.value,
          to_name: "iqblfrdsyh@gmail.com",
          message: message.value,
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        showSuccessAlert();
      } catch (error) {
        console.log(error);

        showErrorAlert();
      } finally {
        setSending(false);
        enableFormFields([fullname, email, message]);
        e.target.reset();
      }
    },
    [publicKey, serviceId, templateId]
  );

  const disableFormFields = (fields) =>
    fields.forEach((field) => {
      if (field) field.disabled = true;
    });

  const enableFormFields = (fields) =>
    fields.forEach((field) => {
      if (field) field.disabled = false;
    });

  const showSuccessAlert = () =>
    showAlert(
      "Success!",
      "Your message has been sent successfully.",
      "success"
    );

  const showErrorAlert = () =>
    showAlert(
      "Error!",
      "Oops, something went wrong. Please try again.",
      "error"
    );

  const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
    });
  };

  useEffect(() => {
    RealTimeClock.startClock(setDatetime);
  }, []);

  return (
    <section id="contact">
      <TitleWithSub title={"Contact"} subtitle={"Let's work together"} />
      <div className="sm:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-14 sm:gap-0 sm:justify-between flex-col sm:flex-row items-start">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Do you want to connect with me?
                </h2>
                <h3 className="text-xl mb-4">Feel free to contact me</h3>
                <p className="text-gray-600 mb-6">
                  I&apos;m looking for freelance opportunities or internships in
                  startups, agencies, or companies.
                </p>
              </div>

              <form className="space-y-4" onSubmit={sendEmail}>
                <FormInput.GeneralInput
                  type="text"
                  name="fullname"
                  label="Fullname"
                  placeholder="Input your name"
                  required
                  disabled={sending}
                />
                <FormInput.GeneralInput
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Input your email"
                  isInvalid={!!emailError}
                  errorMessage={emailError}
                  onChange={handleEmailValidation}
                  required
                  disabled={sending}
                />
                <FormInput.InputTextArea
                  name="message"
                  label="Message"
                  placeholder="Type your message"
                  required
                  disabled={sending}
                />
                <Buttons.CTA
                  color="primary"
                  radius="sm"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Message"}
                </Buttons.CTA>
              </form>
            </div>

            <div className="space-y-8 sm:-translate-x-20">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Details</h3>
                <p className="text-gray-600">iqblfrdsyh@gmail.com</p>
                <p className="text-gray-600">+62 838-3239-7149</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">My Social Media</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/i.frdsyh"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://github.com/iqblfrdsyh"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/iqblfrdsyh"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://x.com/iqblfrdsyh"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaXTwitter size={24} />
                  </a>
                </div>
              </div>

              <div className="w-[200px]">
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <p className="text-gray-600 my-2">Cibiru, Bandung</p>
                <p className="text-gray-600 text-sm tracking-[2px]">
                  {datetime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
