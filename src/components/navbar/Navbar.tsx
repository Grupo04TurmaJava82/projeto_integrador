import { Link } from "react-router-dom"


function Navbar() {

      return (
        <div className='w-full flex justify-center py-4  bg-[#00335F] text-white'>

            <div className="container flex justify-between text-lg"> 
                
                <Link to="/" className="text-[#FF5D00] text-2xl font-extrabold text-center">GYMBRO</Link>

                <div className='flex gap-4'>
                    <Link to="/listaexercicios" className="px-4 py-2 rounded-xl hover:bg-[#FF5D00] transition duration-300">Exercícios</Link>
                    <Link to="/formexercicio" className="px-4 py-2 rounded-xl hover:bg-[#FF5D00] transition duration-300">Cadastrar Exercícios</Link>
                    <Link to="/sobre" className="px-4 py-2 rounded-xl hover:bg-[#FF5D00] transition duration-300">Sobre</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar 

