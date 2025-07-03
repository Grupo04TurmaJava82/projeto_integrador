function FormExercicio() {
	return (
		// Container com background de imagem
		<div
			className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center bg-[url(../../assets/formBackground.jpg)]"
			style={{ backgroundImage: "url('https://ik.imagekit.io/vek/Projeto%20Integrador/Academia/formBackground.png?updatedAt=1751549317948')" }}
		>
			{/* Sobreposição preta para escurecer o fundo */}
			<div className="absolute bg-black opacity-60 inset-0 z-0"></div>
			{/* Card */}
			<div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
				{/* Grid para organizar o conteúdo */}
				<div className="grid gap-8 grid-cols-1">
					<div className="flex flex-col ">
						{/* Cabeçalho do formulário */}
						<div className="flex flex-col sm:flex-row items-center">
							<h2 className="font-semibold text-lg mr-auto">Exercícios</h2>
							<div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
						</div>
						<div className="mt-5">
							{/* Início do formulário */}
							<div className="form">
								{/* Inputs */}

								{/* Input de Nome */}
								<div className="md:flex flex-row md:space-x-4 w-full text-xs">
									<div className="mb-3 space-y-2 w-full text-xs">
										<label className="font-semibold text-gray-600 py-2">
											Nome
										</label>
										<input
											placeholder="Escreva o nome do exercício"
											className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
											required
											type="text"
											name="nome"
											id="nome"
										/>
									</div>
								</div>

								{/* Input de Carga */}
								<div className="md:flex flex-row md:space-x-4 w-full text-xs">
									<div className="mb-3 space-y-2 w-full text-xs">
										<label className="font-semibold text-gray-600 py-2">
											Carga
										</label>
										<input
											placeholder="Escreva a quantidade de carga"
											className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
											required
											type="text"
											name="carga"
											id="carga"
										/>
									</div>
								</div>

								<div className="md:flex flex-row md:space-x-4 w-full text-xs">
									{/* Input de Repetições */}
									<div className="mb-3 space-y-2 w-full text-xs">
										<label className="font-semibold text-gray-600 py-2">
											Repetições
										</label>
										<input
                      value={12}
											className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
											required
											type="number"
											name="repeticoes"
											id="repeticoes"
											min={1}
										/>
									</div>
									{/* Input de Séries */}
									<div className="mb-3 space-y-2 w-full text-xs">
										<label className="font-semibold text-gray-600 py-2">
											Séries
										</label>
										<input
                      value={3}
											className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
											required
											type="number"
											name="series"
											id="series"
											min={1}
										/>
									</div>
								</div>

								{/* Botões de ação */}
								<div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
									<button className="mb-2 md:mb-0 bg-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
										Cancelar
									</button>
									<button className="mb-2 md:mb-0 bg-[#00478f] px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-[#003366]">
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
