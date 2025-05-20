import {
  EnvelopeSimple,
  LinkedinLogo,
  FacebookLogo,
  X
} from "phosphor-react";

export const Footer = () => {
  return (
    <footer className="bg-violet-400  text-white flex justify-between">
      <div>
        <p>&copy; The Spotidados, {new Date().getFullYear()}</p>
        <p>Termos de uso | Musica | Dados</p>
      </div>
      <div className="flex gap-4 items-center">
        <EnvelopeSimple size={32} color="black" weight="fill" />
        <LinkedinLogo size={32} color="black" weight="fill" />
        <FacebookLogo size={32} color="black" weight="fill" />
        <X size={32} color="black" weight="fill" />
      </div>
    </footer>
  );
};
