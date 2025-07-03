import Metodologia from "../../components/metodologia/Metodologia";
import Metricas from "../../components/metricas/Metricas";

function Introducao() {
  return (
    <>
      {/* Seção principal de introdução */}
      <section className="bg-[#d8e1e7] flex justify-center py-12 px-4">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Imagem com bordas decorativas */}
          <div className="relative w-full flex justify-center">
            <div className="relative z-10">
              <img
                src="https://ik.imagekit.io/eduardotosta/fitness_spring/87aa1ccc-45c3-469e-bda4-4fc37f98635a.png?updatedAt=1751546907774"
                alt="Logo Gymbro"
                className="w-80 h-auto object-contain"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="text-[#2a231f]">
            <p className="text-lg text-[#00478f] font-medium mb-2">Sobre Nós</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              SOMOS O <span className="text-[#ff5d00]">GYMBRO</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              O Gymbro nasceu com a missão de trazer motivação, desempenho e
              transformação para todos os níveis de treino...
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Nossa plataforma foi pensada para quem deseja treinar com
              propósito...
            </p>

            <button className="mt-6 bg-[#ff5d00] text-white px-6 py-2 rounded font-semibold hover:brightness-90 transition">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

      {/* Seções adicionais incluídas na página de introdução */}
      <Metodologia />
      <Metricas />
    </>
  );
}

export default Introducao;
