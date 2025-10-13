import { Facebook, Linkedin, Twitter, Mail, Phone, Clock } from "lucide-react";

export function SiteFooter(){
  return (
    <footer className="mt-8 bg-[#111513] text-slate-200">
      <div className="container-section grid gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-extrabold"><span className="rounded-md bg-[#0c693c] px-2 py-1 text-white">fin</span>point</div>
          <button className="mt-6 rounded-md border border-slate-500 px-4 py-2 text-sm">CAREER WITH US</button>
        </div>
        <div>
          <div className="font-semibold">LINKS</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>About us</li><li>Expert Team</li><li>Pricing Package</li><li>FAQs</li><li>Blog / News</li><li>Contact us</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">OUR SERVICES</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>Quality Assurance Consulting</li><li>Regulatory Affairs Consulting</li><li>Finance Affairs Consulting</li><li>Talent Acquisition and Recruiting</li><li>Auditing and Gap Assessments</li>
          </ul>
        </div>
        <div className="space-y-6">
          <div>
            <div className="font-semibold">CERTIFICATES</div>
            <div className="mt-3 grid gap-3">
              <div className="rounded-md bg-white p-3 text-slate-900 text-xs"><div className="text-slate-500">REGISTRATION NUMBER</div><div className="font-bold">CA127/89123</div></div>
              <div className="rounded-md bg-white p-3 text-slate-900 text-xs"><div className="text-slate-500">REGISTRATION NUMBER</div><div className="font-bold">BT12/000569</div></div>
            </div>
          </div>
          <div>
            <div className="font-semibold">SOCIAL NETWORK</div>
            <div className="mt-3 flex gap-3 text-slate-400">
              <Facebook className="h-4 w-4" /><Linkedin className="h-4 w-4" /><Twitter className="h-4 w-4" />
            </div>
          </div>
          <div className="space-y-2 text-sm text-slate-400">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@medpoint.com</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> 844-633-7846</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Mon–Fri 9am–5pm</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">NEWSLETTER</div>
            <div className="mt-2 flex rounded-md bg-white/10 p-1">
              <input className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400" placeholder="Enter your email to subscribe" />
              <button className="rounded-md bg-[#0c693c] px-4 py-2 text-sm text-white">→</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
