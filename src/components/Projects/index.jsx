import ocuparBanner from '../../assets/ocupar-banner.png'
import materiaisBanner from '../../assets/materiais-didaticos-banner.png'
import bancoBanner from '../../assets/banco-de-provas-banner.png'
import manSmiling from '../../assets/manSmiling.avif'

const Projects = () => {
    return (
        <section id='acoes' className='flex flex-col gap-20 items-center justify-center mt-20 relative h-auto lg:max-w-[1100px] sm:max-w-[20rem] mx-auto'>
             <h1 className='lg:border-l-[10px] lg:border-l-[#F09048] pl-5 text-3xl text-[#F09048] font-bold sm:text-center'>Conheça nossas ações</h1>
            <section className='flex flex-col items-center gap-10'>
                <section className='flex flex-col gap-28 my-20'>
                    <section className='flex lg:flex-row sm:flex-col-reverse gap-24'>
                        <div className='flex items-center  justify-center lg:flex-col sm:flex-col gap-10'>
                            <img src={ocuparBanner} className='w-80 object-contain text-center'></img>
                            <div className='flex flex-col gap-5'>
                                <p className='text-xl text-[#909090] w-[20em] sm:text-justify'>O nosso objetivo é te ajudar a chegar a esses lugares que parecem tão distantes, e tudo isso através da informação, acolhimento e apoio. Você pode conhecer as universidades por nossos videos no Instagram.</p>
                                <div className='flex justify-center items-center bg-[#F09048] w-full p-3 text-white rounded-lg'>Acesse nosso perfil </div>
                            </div>
                            {/* <ul className='flex gap-5'>
                                <li className='shadow w-32'>Letras - UFRJ</li>
                                <li>Medicina - UFRJ</li>
                                <li>Jornalismo UERJ</li>
                            </ul> */}
                        </div>
                        <div className='bg-[#F09048] lg:w-[40em] lg:h-[40em] justify-between bg-no-repeat bg-cover bg-x rounded-lg' style={{backgroundImage: `url(${manSmiling})`, backgroundPositionX: '-200px'}}>
                        </div>       
                    </section>
                    <section className='flex lg:flex-row sm:flex-col gap-24'>
                        <img src={materiaisBanner} className='w-80 object-contain'></img>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-2xl font-bold text-[#F09048]'>Materiais Didáticos</h2>
                            <p className='text-xl text-[#909090] sm:text-justify'>O nosso objetivo é te ajudar a chegar a esses lugares que parecem tão distantes, e tudo isso através da informação, acolhimento e apoio.</p>
                            <div className='flex justify-center items-center bg-[#F09048] w-fit p-3 text-white rounded-lg'>Acesse nosso drive</div>
                        </div>
                    </section>
                    <section className='flex lg:flex-row sm:flex-col gap-24'>
                        <img src={bancoBanner} className='w-80 object-contain'></img>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-2xl font-bold text-[#F09048]'>Banco de Provas</h2>
                            <p className='text-xl text-[#909090] sm:text-justify'>O nosso objetivo é te ajudar a chegar a esses lugares que parecem tão distantes, e tudo isso através da informação, acolhimento e apoio.</p>
                            <section className='flex gap-5 lg:flex-row sm:flex-col'>
                                <p className='text-[#909090]  font-bold'>Clique para acessar </p>
                                <div className='flex lg:flex-row sm:flex-col gap-5'>
                                    <div className='flex justify-center items-center w-fit  text-[#F09048] rounded-lg font-bold'>ENEM</div>
                                    <div className='flex justify-center items-center  w-fit  text-[#F09048] rounded-lg font-bold'>UERJ</div>
                                    <div className='flex justify-center items-center  w-fit text-[#F09048] rounded-lg font-bold'>CEDERJ</div>
                                    <div className='flex justify-center items-center  w-fit text-[#F09048] rounded-lg font-bold'>IFF</div>
                                </div>
                            </section>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Projects;