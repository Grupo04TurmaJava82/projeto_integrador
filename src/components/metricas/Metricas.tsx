function Metricas() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-12 lg:gap-8">
        {/* Estatística 1 */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-[#2a231f]">
            Aderência ao Treino
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-[#ff5d00]">
            98%
          </p>
          <p className="mt-1 text-[#2a231f]/70">
            dos usuários seguem seus treinos semanais
          </p>
        </div>

        {/* Estatística 2 */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-[#2a231f]">
            Comunidade Ativa
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-[#ff5d00]">
            +3.500
          </p>
          <p className="mt-1 text-[#2a231f]/70">
            usuários treinando com o Gymbro
          </p>
        </div>

        {/* Estatística 3 */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-[#2a231f]">
            Nível de Satisfação
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-[#ff5d00]">
            92%
          </p>
          <p className="mt-1 text-[#2a231f]/70">recomendam o app para amigos</p>
        </div>
      </div>
      {/* End Grid */}
    </div>
  );
}

export default Metricas;
