function FormExercicio() {
    return (
        // Container com background de imagem
        <div
            className="relative min-h-screen flex items-center justify-center bg-center bg- py-16 px-6 sm:px-10 lg:px-16 bg-[#003461] bg-no-repeat bg-cover relative items-center"
        >
            {/* Sobreposição preta para escurecer o fundo */}
            <div className="absolute inset-0 z-0"></div>
            {/* Card maior */}
            <div className="max-w-2xl w-full space-y-12 p-14 bg-white rounded-2xl shadow-2xl z-10">
                {/* Grid para organizar o conteúdo */}
                <div className="grid gap-12 grid-cols-1">
                    <div className="flex flex-col ">
                        {/* Cabeçalho do formulário */}
                        <div className="flex flex-col sm:flex-row items-center">
                            <h2 className="font-bold text-3xl mr-auto">Exercícios</h2>
                            <div className="w-full sm:w-auto sm:ml-auto mt-4 sm:mt-0"></div>
                        </div>
                        <div className="mt-8">
                            {/* Início do formulário */}
                            <div className="form">
                                {/* Inputs */}

                                {/* Input de Nome */}
                                <div className="md:flex flex-row md:space-x-6 w-full text-base">
                                    <div className="mb-5 space-y-2 w-full text-base">
                                        <label className="font-semibold text-gray-700 py-2 text-lg">
                                            Nome
                                        </label>
                                        <input
                                            placeholder="Escreva o nome do exercício"
                                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-xl h-14 px-6 text-lg"
                                            required
                                            type="text"
                                            name="nome"
                                            id="nome"
                                        />
                                    </div>
                                </div>

                                {/* Input de Carga */}
                                <div className="md:flex flex-row md:space-x-6 w-full text-base">
                                    <div className="mb-5 space-y-2 w-full text-base">
                                        <label className="font-semibold text-gray-700 py-2 text-lg">
                                            Carga
                                        </label>
                                        <input
                                            placeholder="Escreva a quantidade de carga"
                                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-xl h-14 px-6 text-lg"
                                            required
                                            type="text"
                                            name="carga"
                                            id="carga"
                                        />
                                    </div>
                                </div>

                                <div className="md:flex flex-row md:space-x-6 w-full text-base">
                                    {/* Input de Repetições */}
                                    <div className="mb-5 space-y-2 w-full text-base">
                                        <label className="font-semibold text-gray-700 py-2 text-lg">
                                            Repetições
                                        </label>
                                        <input
                                            value={12}
                                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-xl h-14 px-6 text-lg"
                                            required
                                            type="number"
                                            name="repeticoes"
                                            id="repeticoes"
                                            min={1}
                                        />
                                    </div>
                                    {/* Input de Séries */}
                                    <div className="mb-5 space-y-2 w-full text-base">
                                        <label className="font-semibold text-gray-700 py-2 text-lg">
                                            Séries
                                        </label>
                                        <input
                                            value={3}
                                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-xl h-14 px-6 text-lg"
                                            required
                                            type="number"
                                            name="series"
                                            id="series"
                                            min={1}
                                        />
                                    </div>
                                </div>

                                {/* Botões de ação */}
                                <div className="mt-8 text-right md:space-x-6 md:block flex flex-col-reverse">
                                    <button className="mb-3 md:mb-0 bg-red-500 px-8 py-3 text-lg shadow-md font-semibold tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600 transition-all duration-200">
                                        Cancelar
                                    </button>
                                    <button className="mb-3 md:mb-0 bg-[#00478f] px-8 py-3 text-lg shadow-md font-semibold tracking-wider text-white rounded-full hover:shadow-lg hover:bg-[#003366] transition-all duration-200">
                                        Cadastrar
                                    </button>
                                </div>
                                {/* Fim do formulário */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormExercicio;
