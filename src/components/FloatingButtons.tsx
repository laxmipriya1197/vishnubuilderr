import { Instagram } from 'lucide-react';

export function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/919566714471?text=Hello%20Vishnu%20Builderr%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn whatsapp"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.486 1.332 5.002L2 22l5.149-1.347a9.984 9.984 0 0 0 4.862 1.258h.005c5.507 0 9.99-4.479 9.99-9.985 0-2.667-1.039-5.176-2.929-7.066A9.927 9.927 0 0 0 12.012 2zm0 1.8c2.186 0 4.241.85 5.786 2.396A8.136 8.136 0 0 1 20.19 11.98c0 4.516-3.674 8.19-8.19 8.19a8.14 8.14 0 0 1-3.987-1.042l-.286-.17-2.964.776.79-2.888-.186-.296a8.163 8.163 0 0 1-1.25-4.385c0-4.516 3.674-8.19 8.19-8.19zm-3.52 4.41c-.194 0-.505.073-.77.365-.264.292-1.01 1.01-1.01 2.463 0 1.452 1.057 2.855 1.205 3.05.147.195 2.08 3.177 5.04 4.455.704.304 1.254.486 1.683.622.707.225 1.35.193 1.858.117.568-.085 1.75-.715 1.996-1.404.247-.688.247-1.278.173-1.403-.074-.125-.265-.195-.558-.342-.293-.146-1.73-.854-1.998-.95-.268-.098-.464-.146-.66.146-.195.292-.76.95-.933 1.146-.173.195-.347.219-.64.073-.293-.146-1.237-.456-2.356-1.453-.87-.775-1.457-1.732-1.628-2.025-.17-.292-.018-.45.129-.596.132-.132.293-.341.44-.512.146-.17.195-.292.292-.487.098-.195.049-.365-.024-.512-.073-.146-.66-1.585-.904-2.17-.238-.57-.481-.493-.66-.502l-.56-.008z" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/vishnubuilderr?igsh=dmkyeG00cmhuYmJx"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn instagram"
        aria-label="Follow us on Instagram"
        title="Follow on Instagram"
      >
        <Instagram size={24} />
      </a>
    </div>
  );
}
