import { FiArrowUp } from "react-icons/fi";

const socialLinks = [
  { label: "LI", href: "https://www.linkedin.com/in/karan-dugar-680b81237/" },
  { label: "IG", href: "https://www.instagram.com/karanxm__" },
  { label: "GIT", href: "https://github.com/karannfr" },
  { label: "MAIL", href: "mailto:karandugar27@gmail.com" }
];

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-start py-16 px-6 sm:px-12 md:px-16 gap-6">
        <div className="text-xl sm:text-xl md:text-2xl font-semibold flex-1">Contact Me</div>
        <div className="flex flex-col items-start md:items-end gap-6 sm:gap-8">
          <div className="text-lg sm:text-xl md:text-2xl font-semibold">
            Got an Idea? Hola at me, let's talk!!
          </div>
          <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold break-words">
            karandugar27@gmail.com
          </div>

          <div className="flex items-center flex-wrap gap-10 sm:gap-14 md:gap-16 text-lg sm:text-xl md:text-2xl font-semibold">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-purple-500 cursor-[url(/hover.svg),_pointer]"
              >
                {label}
                <FiArrowUp className="transition-transform duration-300 ease-in-out group-hover:rotate-45" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='w-screen flex justify-center py-8 border-t border-t-white/10 text-sm sm:text-base'>
        &copy; Karan Dugar 2025
      </div>
    </div>
  );
};

export default Footer;
