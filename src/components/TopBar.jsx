import React from 'react';
import { PhoneCall, Mail } from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './SocialIcons';

export default function TopBar() {
  return (
    <div className="bg-slate-900 dark:bg-black text-white text-[10.5px] sm:text-xs font-semibold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
        <a href="tel:+919999999911" className="flex items-center gap-1.5 text-rose-400 hover:text-rose-300 transition-colors">
          <PhoneCall className="h-3 w-3" />
          <span>Emergency: +91 83847-45785</span>
        </a>

        <div className="hidden sm:flex items-center gap-4">
          <a href="mailto:info@aarogyalife.in" className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-brand transition-colors">
            <Mail className="h-3 w-3" />
            <span>info@aarogyalife.in</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-cyan-brand transition-colors">
              <FacebookIcon className="h-3 w-3" />
            </a>
            <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-cyan-brand transition-colors">
              <TwitterIcon className="h-3 w-3" />
            </a>
            <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-cyan-brand transition-colors">
              <InstagramIcon className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
