import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-7xl font-bold text-brand-black dark:text-brand-white ">
        404
      </h1>

      <h2 className="text-2xl font-semibold mt-4 text-brand-black dark:text-brand-white ">
        Página não encontrada
      </h2>

      <p className="mt-2 text-zinc-500 dark:text-zinc-400 max-w-md">
        O conteúdo de estudo que você está procurando não existe ou foi movido.
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-primary hover:bg-primary-light text-brand-white font-medium rounded-lg transition-colors duration-200"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
