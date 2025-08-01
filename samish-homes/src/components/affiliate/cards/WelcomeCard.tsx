import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCopy } from '@fortawesome/free-solid-svg-icons';

export default function WelcomeCard() {
  const [copied, setCopied] = useState(false);
  const affiliateLink = 'https://samishrealty.com/ref/abc123';

  const handleCopy = () => {
    navigator.clipboard.writeText(affiliateLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mb-10">
      <div className="bg-gradient-to-r from-samish-primary to-samish-secondary rounded-2xl p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, Michael!</h1>
            <p className="mb-4">
              Share your affiliate link and earn 1% commission on every successful purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={affiliateLink}
                  readOnly
                  className="w-full bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-3 px-4 pr-12 text-white placeholder-white placeholder-opacity-70 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
                <button
                  onClick={handleCopy}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-40 rounded-md p-2 transition"
                >
                  <FontAwesomeIcon icon={faCopy} className="text-white" />
                </button>
                {copied && <span className="text-sm text-white mt-1">Copied!</span>}
              </div>
              <button className="bg-white text-samish-primary font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition whitespace-nowrap">
                View Affiliate Dashboard
              </button>
            </div>
          </div>

          {/* Social buttons */}
          <div className="mt-6 md:mt-0 flex space-x-3">
            <button className="social-share bg-white text-samish-primary w-12 h-12 rounded-full flex items-center justify-center text-xl transition">
              <FontAwesomeIcon icon={faFacebookF as any} />
            </button>
            <button className="social-share bg-white text-samish-primary w-12 h-12 rounded-full flex items-center justify-center text-xl transition">
              <FontAwesomeIcon icon={faTwitter as any} />
            </button>
            <button className="social-share bg-white text-samish-primary w-12 h-12 rounded-full flex items-center justify-center text-xl transition">
              <FontAwesomeIcon icon={faWhatsapp as any} />
            </button>
            <button className="social-share bg-white text-samish-primary w-12 h-12 rounded-full flex items-center justify-center text-xl transition">
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
