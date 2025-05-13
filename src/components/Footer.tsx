import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#22292F] border-t border-[#6FCF97]/40 py-8 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Image
            src="/ecofilament-logo.png"
            alt="EcoFilament logo"
            width={200}
            height={58}
            loading="lazy"
          />
        </div>
        <div className="text-white text-sm text-center">
          © {new Date().getFullYear()} EcoFilament. All rights reserved.
          <br />
          Made with ♻️ and passion from Chile.
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="#"
            className="text-[#6FCF97] hover:underline text-sm"
          >
            Contact
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6FCF97] hover:underline text-sm"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
