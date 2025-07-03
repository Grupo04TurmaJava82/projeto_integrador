import { Flame, Timer } from "lucide-react";

interface Exercicio {
  imagem: string;
  nome: string;
  duracao: string;
  intensidade: string;
  descricao: string;
}

interface CardExercicioProps {
  exercicio: Exercicio;
}

function CardExercicio({ exercicio }: CardExercicioProps) {
  return (
    <div className="border-3 border-transparent rounded-lg overflow-hidden shadow-md bg-slate-200 
                   transition-all duration-300 hover:shadow-xl hover:border-orange-500">
      
      {/* Imagem do Topo */}
      <img className="w-full h-90 object-cover" src={exercicio.imagem} alt={`Imagem do exercício ${exercicio.nome}`} />

      {/* Banner Amarelo com o Título */}
      <div className="bg-orange-500 p-4 text-center">
        <h3 className="text-xl font-bold uppercase text-white tracking-wider">{exercicio.nome}</h3>
      </div>
      
      {/* Seção de Informações (Duração e Intensidade) */}
      <div className="p-6">
        <div className="flex justify-around text-center mb-4">
          
          <div className="flex flex-col items-center gap-1">
            <Timer size={32} className="text-orange-500" />
            <span className="font-bold">Duração</span>
            <span className="text-stone-900">{exercicio.duracao}</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Flame size={32} className="text-orange-500" />
            <span className="font-bold">Intensidade</span>
            <span className="text-stone-900">{exercicio.intensidade}</span>
          </div>

        </div>

        {/* Descrição do Exercício */}
        <p className="text-stone-900 text-center mb-6">
          {exercicio.descricao}
        </p>
        
        <div className="text-center">
          <a href="#" className="font-bold text-orange-500 hover:underline">
            Saiba Mais
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardExercicio;