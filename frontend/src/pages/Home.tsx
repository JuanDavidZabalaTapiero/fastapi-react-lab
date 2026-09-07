function Home() {
  return (
    <section className="space-y-4">
      <header className="border-b border-neutral-800 pb-4">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-100">
          Inicio
        </h1>
        <p className="text-sm text-neutral-400 mt-1">
          Bienvenido al panel principal de la aplicación.
        </p>
      </header>

      <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800/80 text-sm text-neutral-300 leading-relaxed">
        El sistema está listo para gestionar usuarios de forma rápida y
        sencilla.
      </div>
    </section>
  );
}

export default Home;
