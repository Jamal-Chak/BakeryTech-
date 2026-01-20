import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Construction } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand Section */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-primary p-1.5 rounded-lg">
                            <Construction className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            BakeTech<span className="text-primary">Solutions</span>
                        </span>
                    </Link>
                    <p className="text-gray-400 leading-relaxed">
                        Professional Bakery Equipment Maintenance & Supply. Keeping South African bakeries running at peak performance.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></Link>
                        <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
                        <Link href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-b border-primary/30 pb-2 inline-block">Quick Links</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="/equipment" className="hover:text-white transition-colors">Equipment</Link></li>
                        <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-b border-primary/30 pb-2 inline-block">Services</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li>Prevention Maintenance</li>
                        <li>Emergency Repairs</li>
                        <li>Equipment Installation</li>
                        <li>Spare Parts Supply</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-b border-primary/30 pb-2 inline-block">Contact Us</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex gap-3">
                            <Phone size={20} className="text-primary shrink-0" />
                            <span>+27 (0) XX XXX XXXX</span>
                        </li>
                        <li className="flex gap-3">
                            <Mail size={20} className="text-primary shrink-0" />
                            <span>info@baketechsolutions.co.za</span>
                        </li>
                        <li className="flex gap-3">
                            <MapPin size={20} className="text-primary shrink-0" />
                            <span>Cape Town, South Africa</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} BakeTech Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
}
