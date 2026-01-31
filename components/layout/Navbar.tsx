"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Facebook, X, Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 1. Lógica de Scroll (Transparente -> Sólido)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Lógica de Scroll Lock (Bloqueia o fundo quando o menu abre)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Aulas", href: "/aulas" },
    { name: "Equipa", href: "/equipa" },
    { name: "Preços", href: "/precos" },
    { name: "Contactos", href: "/contactos" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 flex items-center ${
        isScrolled ? "bg-brand-black/90 backdrop-blur-md h-16 border-b border-white/5" : "bg-transparent h-20"
      }`}>
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-display font-black text-2xl italic tracking-tighter">
            ACTIVE<span className="text-brand-yellow">CLUB</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium uppercase text-sm tracking-widest">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-brand-yellow transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(true)} className="md:hidden text-brand-yellow">
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* 3. Mobile Menu (Slide-in) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" onClick={() => setIsOpen(false)} />
      )}

      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-brand-grey z-[70] transform transition-transform duration-500 ease-out p-8 flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <button onClick={() => setIsOpen(false)} className="self-end text-brand-yellow mb-8">
          <X size={32} />
        </button>

        <Link href="/horarios" onClick={() => setIsOpen(false)} className="bg-brand-yellow text-brand-black font-display font-black text-center py-4 rounded italic uppercase mb-10">
          Horários de Treino
        </Link>

        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="font-display font-black text-3xl uppercase italic border-b border-white/5 pb-2">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contactos Minimalistas */}
        <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
          <a href="#" className="flex items-center gap-3 group">
            <MessageCircle size={24} className="text-brand-yellow" />
            <span className="font-bold text-lg">WhatsApp</span>
          </a>
          <a href="#" className="flex items-center gap-3 group">
            <Facebook size={24} className="text-brand-yellow" />
            <span className="font-bold text-lg">Facebook</span>
          </a>
        </div>
      </div>
    </>
  );
}