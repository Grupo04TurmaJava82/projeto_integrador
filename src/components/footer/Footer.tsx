import { FacebookLogo, GithubLogoIcon, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <div className="flex justify-center bg-[#00335F] text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            GymBro | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                   
                        <a href="https://github.com/Grupo04TurmaJava82" target='_blank'>
                        <GithubLogoIcon size={48} weight='bold' />
                        </a>

                        <LinkedinLogo size={48} weight='bold' />
                        <FacebookLogo size={48} weight='bold' />
                        
                        
                    </div>
                </div>
            </div>
    )
}

export default Footer