import { WhatsappIcon } from "@/components/ui/icons";

const WhatsappWidget = () => {
  const phone = "91" + import.meta.env.VITE_PHONE_NUMBER;
  const prefilled = encodeURIComponent(
    "Hello Dr. Malvika Trivedi. I'm contacting you through your website. I'd like to schedule an appointment."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${prefilled}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 p-2 right-4 bg-gradient-to-br from-green-400 to-green-500 shadow-lg shadow-black/30
                 rounded-[30px_30px_30px_5px] hover:scale-110 transition z-50"
    >
      <WhatsappIcon color="#fff" size="40px" />
    </a>
  );
};

export default WhatsappWidget;
