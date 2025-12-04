import { useState, useEffect } from "react";
import { Instagram, Facebook, Linkedin, PhoneCall, MessagesSquare } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/icons";

const Topbar = () => {
  const socialLinks = [
    {
      icon: <Instagram size={18} />,
      title: "Instagram",
      href: import.meta.env.VITE_SOCIAL_INSTAGRAM,
    },
    {
      icon: <Facebook size={18} />,
      title: "Facebook",
      href: import.meta.env.VITE_SOCIAL_FACEBOOK,
    },
    {
      icon: <Linkedin size={18} />,
      title: "LinkedIn",
      href: import.meta.env.VITE_SOCIAL_LINKEDIN,
    },
    {
      icon: <WhatsappIcon title="WhatsApp" color="#fff" size="18px" />,
      title: "WhatsApp",
      href: `https://wa.me/91${import.meta.env.VITE_PHONE_NUMBER}`,
    },
    {
      icon: <PhoneCall size={18} />,
      text: `+91 ${import.meta.env.VITE_PHONE_NUMBER}`,
      title: "Call",
      href: `tel:+91${import.meta.env.VITE_PHONE_NUMBER}`,
    },
  ];
  return (
    <div className="transition-all duration-300 bg-primary">
      <div className="container mx-auto py-1 px-4 sm:px-6 lg:px-8 flex justify-end items-center">
        <div className="flex items-center gap-4">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:scale-105 transition flex items-center gap-1 font-medium hover:underline"
            >
              {item.icon}
              {item.text ?? ""}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
