function Metodologia() {
  return (
    <div className="bg-[#00478f]">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
        {/* Título */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-[#ff5d00] font-bold text-2xl md:text-4xl md:leading-tight">
            Nossa metodologia
          </h2>
          <p className="mt-2 text-[#d8e1e7]">
            Cada treino, cada recurso do nosso app, e cada funcionalidade foi
            pensada para te ajudar a atingir seu máximo potencial — de forma
            simples, eficiente e motivadora.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          {/* Imagem */}
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
            <img
              className="w-full object-cover rounded-xl shadow-lg"
              src="https://ik.imagekit.io/eduardotosta/fitness_spring/87aa1ccc-45c3-469e-bda4-4fc37f98635a.png?updatedAt=1751546907774"
              alt="Logo GYMBRO"
            />
          </div>

          {/* Timeline */}
          <div>
            {/* Subtítulo */}
            <div className="mb-4">
              <h3 className="text-[#d8e1e7] text-xs font-semibold uppercase tracking-wide">
                Etapas
              </h3>
            </div>

            {/* Etapas */}
            {[
              {
                num: "1",
                title: "Avaliação Inicial:",
                text: "Entenda seu nível atual de preparo físico com base em dados e preferências.",
              },
              {
                num: "2",
                title: "Plano Personalizado:",
                text: "Criamos treinos e rotinas de acordo com seus objetivos.",
              },
              {
                num: "3",
                title: "Acompanhamento Contínuo:",
                text: "Progresso registrado, dicas e ajustes em tempo real.",
              },
              {
                num: "4",
                title: "Resultados Visíveis:",
                text: "Alcance suas metas com constância, motivação e clareza.",
              },
            ].map(({ num, title, text }) => (
              <div className="flex gap-x-5 ms-1" key={num}>
                {/* Ícone */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-[#d8e1e7]/30">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-[#d8e1e7]/30 text-[#ff5d00] font-semibold text-xs rounded-full">
                      {num}
                    </span>
                  </div>
                </div>
                {/* Conteúdo */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-[#d8e1e7]">
                    <span className="text-white font-semibold">{title}</span>{" "}
                    {text}
                  </p>
                </div>
              </div>
            ))}

            {/* Botão */}
            <a
              href="#"
              className="group inline-flex items-center gap-x-2 py-2 px-4 bg-[#ff5d00] font-medium text-sm text-white rounded-full hover:brightness-90 transition"
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 6.18 2 2 0 0 1 4.11 4h3a2 2 0 0 1 2 1.72c.09.94.31 1.87.7 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.94.39 1.87.61 2.81.7A2 2 0 0 1 22 16.92z" />
                <path
                  className="opacity-0 group-hover:opacity-100 transition"
                  d="M14.05 2a9 9 0 0 1 8 7.94"
                />
                <path
                  className="opacity-0 group-hover:opacity-100 transition"
                  d="M14.05 6A5 5 0 0 1 18 10"
                />
              </svg>
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metodologia;
