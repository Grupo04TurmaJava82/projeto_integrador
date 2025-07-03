import CardExercicio from "../../components/CardExercicio";

const exerciciosMock = [
  {
    imagem: 'https://i.pinimg.com/736x/fc/18/47/fc1847bd93feab52b03c7be669619f76.jpg',
    nome: 'PUXADA ALTA',
    duracao: '15 min',
    intensidade: 'Alta',
    descricao: 'A puxada alta é um exercício fundamental para desenvolver as costas, especialmente a musculatura do latíssimo do dorso. Utilizando a polia alta, você trabalha força e definição na parte superior do corpo. Ideal para quem busca fortalecer e modelar a região das costas com um treino rápido, mas intenso.'
  },
  {
    imagem: 'https://i.pinimg.com/736x/3f/c8/3f/3fc83fddf9d75a1cd9d8834c67df6084.jpg',
    nome: 'ESTEIRA',
    duracao: '45 min',
    intensidade: 'Moderada',
    descricao: 'A caminhada ou corrida na esteira é uma atividade aeróbica completa, perfeita para queimar calorias, melhorar o sistema cardiovascular e aliviar o estresse. Com intensidade moderada, é ideal tanto para iniciantes quanto para quem busca melhorar o condicionamento físico de forma progressiva.'
  },
  {
    imagem: 'https://i.pinimg.com/736x/e7/e7/78/e7e778a0c38d3f378b17ba30d47a5718.jpg',
    nome: 'REMADA CURVADA COM HALTER',
    duracao: '10 min',
    intensidade: 'Alta',
    descricao: 'A remada curvada com halteres foca no fortalecimento da região lombar, dorsais e bíceps. É um exercício essencial para o desenvolvimento das costas e da postura corporal. Por ser de alta intensidade, ativa diversos grupos musculares em pouco tempo, sendo ideal para treinos rápidos e eficientes.'
  },
//   {
//     imagem: 'https://i.pinimg.com/736x/3f/c8/3f/3fc83fddf9d75a1cd9d8834c67df6084.jpg',
//     nome: 'ESTEIRA',
//     duracao: '45 min',
//     intensidade: 'Moderada',
//     descricao: 'Uma aula que combina posturas de yoga, pilates e tai chi para um corpo mais forte, flexível e equilibrado.'
//   }
];

function ListaExercicios() {
  return (
    // Fundo da página com a cor 'cinza-gymbro'
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-15 text-black">
        Treinos
        </h1>
        
        {/* Usando Grid para alinhar os cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {exerciciosMock.map(exercicio => (
            // Para cada item na nossa lista, criamos um Card
            <CardExercicio key={exercicio.nome} exercicio={exercicio} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaExercicios;