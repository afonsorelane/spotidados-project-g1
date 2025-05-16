   import { AiTwotoneMail } from "react-icons/ai";
   import { AiFillLinkedin } from "react-icons/ai";
   import { FaFacebook } from "react-icons/fa";
   import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-violet-400  text-white flex justify-between px-10 py-10">
      <div >
        <p>&copy; The Spotidados, {new Date().getFullYear()}</p>
        <p>Termos de uso | Musica | Dados</p>
      </div>
      <div className="flex gap-4 items-center">
        <AiTwotoneMail  size="2em" color="white" />
        <AiFillLinkedin size="2em" color="white"/>
        <FaFacebook size="2em" color="white"/>
        <FaXTwitter size="2em" color="white"/>
        </div>
    </footer>
  );
};
