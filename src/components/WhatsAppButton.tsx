'use client'
import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';

interface WhatsAppButtonProps {}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = () => {
  return (
    <a
      href="https://wa.me/+573105787397"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-md transition-colors duration-200 z-20"
        aria-label="WhatsApp"
    >
      <RiWhatsappFill size={24} />
    </a>
  );
};

export default WhatsAppButton;