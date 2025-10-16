import { Mail, Phone, Clock, Facebook, Linkedin, Twitter } from "lucide-react";

export function TopBar(){
  return (
    <div className="hidden border-b border-slate-200 text-xs text-slate-700 md:block">
      <div className="container-section flex h-10 items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /><span>stacygrau@designinnovationlab.com</span></div>
          <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /><span>011-112-8596</span></div>
          <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /><span>Mon–Fri 9am–5pm</span></div>
        </div>
        <div className="flex items-center gap-4">
          <Facebook className="h-3.5 w-3.5" />
          <Linkedin className="h-3.5 w-3.5" />
          <Twitter className="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
}
