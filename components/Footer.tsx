import {
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#333333] text-gray-200 pt-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-8 md:flex-row md:justify-around">
        {/* Brand and description */}
        <div className="max-w-xs grow-0">
          <div className="flex items-center gap-3 mb-4">
            <img src={"/logo.png"} alt="EYMM logo" className="h-24 w-auto" />
          </div>
          <p className="text-sm leading-relaxed">
            Ethiopian Youth Missions Movement (EYMM) is a mission
            mobilizers&apos; movement, which strives to see all Ethiopian
            believers mobilized to reach the unreached.
          </p>
        </div>

        {/* Company links */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Mission School</li>
            <li>Central Management</li>
            <li>Announcements</li>
          </ul>
        </div>

        {/* Contact + social */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
            Contact Us
          </h4>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex gap-2">
              {/* <HiOutlinePhone /> */}
              <Phone />
              <p> +251-948-244-473</p>
            </div>
            <div className="flex gap-2">
              {/* <CiMail /> */}
              <Mail />
              <p>info@eymm79.org</p>
            </div>
          </div>

          <div className="flex gap-3 text-lg mt-16">
            {/* <TbBrandFacebook />
            <IoLogoInstagram />
            <PiTiktokLogoLight />
            <SlSocialYoutube />
            <TbBrandTelegram />
            <FaXTwitter /> */}
            <Facebook />
            <Instagram />
            <Youtube />
            <MessageCircle />
            <Twitter />
          </div>
        </div>
      </div>

      <div className="bg-[#222222] py-3 text-center">
        <p className="mx-auto max-w-6xl px-6 text-xs text-gray-400">
          Copyrights © 2026 EYMM. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
