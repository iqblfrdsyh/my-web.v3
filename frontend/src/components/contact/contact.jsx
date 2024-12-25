import React, { useState, useEffect } from "react";
import TitleWithSub from "../ui/title";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import FormInput from "../ui/input/input";
import { Buttons } from "../ui/buttons";
import { RealTimeClock } from "@/libs/datetime";

const Contact = () => {
  const [datetime, setDatetime] = useState(RealTimeClock.getCurrentDateTime());

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

              <form className="space-y-4">
                <FormInput.GeneralInput
                  type={"text"}
                  label={"Fullname"}
                  placeholder={"Input your name"}
                />
                <FormInput.GeneralInput
                  type={"email"}
                  label={"Email"}
                  placeholder={"Input your email"}
                />
                <FormInput.InputTextArea
                  label={"Message"}
                  placeholder={"Type your message"}
                />
                <Buttons.CTA color="primary" radius="sm">
                  Send Message
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
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>

              <div className="w-[200px]">
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <p className="text-gray-600 my-2">Soreang, Bandung</p>
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
