import { Phone, MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-6">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919619510906"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle size={28} className="text-white" />
      </a>

      {/* Call */}
      <a
        href="tel:+919619510906"
        aria-label="Call Us"
        className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Phone size={28} className="text-primary-foreground" />
      </a>
    </div>
  );
}
