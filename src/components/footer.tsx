import { EnvelopeSimple, LinkedinLogo, FacebookLogo, X } from "phosphor-react";

export const Footer = () => {
  return (
    <footer className=" bg-purple-800  text-white flex justify-between">
      <div>
        <p>&copy; The Spotidados, {new Date().getFullYear()}</p>
      </div>
      <div className="flex gap-4 items-center">
        <EnvelopeSimple size={32} color="white" weight="fill" />
        <LinkedinLogo size={32} color="white" weight="fill" />
        <FacebookLogo size={32} color="white" weight="fill" />
        <X size={32} color="white" weight="fill" />
      </div>
    </footer>
  );
};
