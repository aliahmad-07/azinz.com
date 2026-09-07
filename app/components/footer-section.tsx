import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const practitionerLinks = {
  title: "Quick Navigation Links\nFor Practitioners:",
  links: ["Features", "Pricing", "Book a Demo", "Log In / Sign Up"],
};

const patientLinks = {
  title: "For Patients",
  links: ["Patient Portal", "How It Works", "Support"],
};

const customerCareLinks = {
  title: "Customer Care",
  links: [
    "Contact Us",
    "Privacy Policy",
    "Terms of Service",
    "Data Processing Agreement",
    "GDPR / HIPAA Compliance Statement",
    "Cookie Policy",
  ],
};

const socialLinks = [
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaYoutube, href: "#", label: "YouTube" },
  { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#011118] px-4 sm:px-6 lg:px-21 pt-10 sm:pt-14 lg:pt-21 pb-[23px]">
      <div className="max-w-400 mx-auto flex flex-col gap-8 lg:gap-6">

        {/* Main Footer Content */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap justify-between gap-10">

          {/* Logo + Contact + Social */}
          <div className="flex w-full sm:col-span-2 lg:col-span-1 lg:max-w-116.5 flex-col gap-8">

            <div className="flex items-center">
              <Image
                src="/white-text-logo.png"
                alt="Azina Health"
                width={309}
                height={28}
                className="w-auto"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400">
                enquiries@azinahealth.com
              </p>

              <p className="text-sm font-normal leading-[100%] text-gray-400">
                Registered as Azina Health Ltd.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 opacity-[0.32]">
              {socialLinks.map((social) => {
                const SocialIcon = social.Icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    <SocialIcon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Practitioner Links */}
          <div className="flex w-full lg:w-57.75 flex-col gap-2">
            <h4 className="whitespace-pre-line text-lg lg:text-[20px] font-semibold text-white">
              {practitionerLinks.title}
            </h4>

            <hr className="w-full border-t border-white/10" />

            <ul className="flex flex-col gap-2">
              {practitionerLinks.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Links */}
          <div className="flex w-full lg:w-55 flex-col gap-2">
            <h4 className="text-lg lg:text-[20px] font-semibold text-white">
              {patientLinks.title}
            </h4>

            <hr className="w-full border-t border-white/10" />

            <ul className="flex flex-col gap-2">
              {patientLinks.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="flex w-full lg:w-64.75 flex-col gap-2">
            <h4 className="text-lg lg:text-[20px] font-semibold text-white">
              {customerCareLinks.title}
            </h4>

            <hr className="w-full border-t border-white/10" />

            <ul className="flex flex-col gap-4">
              {customerCareLinks.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mx-auto w-full max-w-126 border-t border-white/10" />

        {/* Copyright */}
        <p className="mx-auto max-w-126 text-center text-sm lg:text-[14px] text-white px-4">
          © Azina Health 2025 – All Right Reserved.
        </p>
      </div>
    </footer>
  );
}