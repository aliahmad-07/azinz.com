

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
    <footer className="relative w-full overflow-hidden bg-[#011118] px-8 py-20">
      {/* Background watermark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-32"
        style={{
          backgroundImage: "url('/logo-watermark.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "160px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-400 flex-col gap-12">
        
        <div className="flex flex-wrap justify-between gap-10">
          
          <div className="flex w-full max-w-116.5 flex-col gap-8">
            
            <div className="flex items-center gap-2">
              <Image
                src="/white-text-logo.png"
                alt="Azina Health"
                width={309}
                height={28}
                className=" w-auto"
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

            
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <social.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          
          <div className="flex w-57.75 flex-col gap-4">
            <h4 className="whitespace-pre-line text-[20px] font-semibold text-white">
              {practitionerLinks.title}
            </h4>
            <hr className="w-full border-t border-white/10" />

            <ul className="flex flex-col gap-4">
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
          <div className="flex w-55 flex-col gap-4">
            <h4 className="text-[20px] font-semibold text-white">
              {patientLinks.title}
            </h4>
            <hr className="w-full border-t border-white/10" />

            <ul className="flex flex-col gap-4">
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

          {/* Customer Care Links */}
          <div className="flex w-64.75 flex-col gap-4">
            <h4 className="text-[20px] font-semibold text-white">
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

       
        <hr className="mx-auto w-full max-w-126 border-t border-white/10" />

      
        <p className="mx-auto max-w-126 text-center text-[14px] text-white">
          © Azina Health 2025 – All Right Reserved.
        </p>
      </div>
    </footer>
  );
}