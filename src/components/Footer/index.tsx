import Icons from '@/assets/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 bg-primary flex flex-col md:flex-row items-center justify-around text-center mt-auto gap-4">
      <p className="text-brand-white text-sm md:text-base">
        Desenvolvido por <b>Brenno Gomes Breda</b>
      </p>

      <div className="flex items-center gap-5">
        <a
          href="https://github.com/brenno1206"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-white hover:opacity-80 transition-opacity"
          aria-label="Acessar GitHub"
        >
          <Icons.Github size={24} />
        </a>
        <a
          href="mailto:brenno.breda@icloud.com"
          className="text-brand-white hover:opacity-80 transition-opacity"
          aria-label="Enviar Email"
        >
          <Icons.Mail size={24} />
        </a>
      </div>

      <p className="text-brand-white text-sm">
        Todos os direitos reservados &copy; {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
