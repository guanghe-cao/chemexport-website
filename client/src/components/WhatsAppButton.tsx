const WHATSAPP_NUMBER = "15653883028";
const DEFAULT_MESSAGE = encodeURIComponent(
  "Hello, I'm interested in your chemical export products."
);

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#128C7E] hover:shadow-xl"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M12.04 2.01c-5.52 0-10 4.48-10 10 0 1.77.47 3.49 1.36 5l-1.45 5.3 5.43-1.43c1.44.79 3.06 1.2 4.69 1.2 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.2c-1.46 0-2.89-.38-4.14-1.11l-.3-.18-3.22.85.86-3.15-.2-.32a8.26 8.26 0 0 1-1.25-4.35c0-4.57 3.72-8.29 8.29-8.29 4.57 0 8.29 3.72 8.29 8.29 0 4.57-3.72 8.29-8.29 8.29zm4.74-5.62c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.03-.15.18-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.29-.78-.7-1.3-1.55-1.45-1.8-.15-.26-.02-.39.11-.52.11-.11.26-.28.39-.42.13-.14.17-.25.26-.41.09-.17.04-.31-.02-.44-.07-.13-.58-1.41-.8-1.93-.21-.49-.42-.42-.58-.43-.15-.01-.33-.01-.49-.01-.17 0-.45.06-.69.31-.24.26-.9.89-.9 2.17 0 1.28.92 2.53 1.05 2.7.13.17 1.82 2.82 4.41 3.95.62.27 1.1.43 1.48.55.62.2 1.18.17 1.63.1.5-.07 1.53-.63 1.75-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
