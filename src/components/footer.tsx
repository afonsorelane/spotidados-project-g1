import { LinkedinLogo, X, YoutubeLogo, InstagramLogo} from "phosphor-react";

export const Footer = () => {
  return (
    <footer className="bg-purple-800 text-gray-300 flex flex-col md:flex-row justify-between items-center px-6 py-2">
      <p className="text-sm mb-2 md:mb-0">
        &copy; The Spotidados, {new Date().getFullYear()}
      </p>
      <div className="flex gap-4 items-center">
        <LinkedinLogo size={24} className="hover:text-purple-300 cursor-pointer" />
        <X size={24} className="hover:text-purple-300 cursor-pointer" />
        <InstagramLogo size={24} className="hover:text-purple-300 cursor-pointer" />
        <YoutubeLogo size={24} className="hover:text-purple-300 cursor-pointer" />
      </div>
    </footer>
  );
};
