import LabIntegra from '../../assets/labintegra.png'

const Footer = () => {
    return (
        <footer className="flex items-center justify-around  text-[#7a7a7a] mb-20 lg:mt-10 py-5 ">
            <section className='flex lg:flex-row sm:flex-col lg:items-center sm:gap-5 justify-between lg:max-w-[1100px] sm:w-full sm:px-5 lg:mx-auto sm:my-10 lg:m-auto'>
                <section className='flex flex-column'>
                    <ul className='flex lg:items-center justify-center gap-3 lg:flex-row sm:flex-col  '>
                        <li>© 2024 Projeto Ocupar</li>
                        <li className='lg:block sm:hidden'>•</li>
                        <li>Site feito com ❤ por Matheus Oliveira</li>
                    </ul>
                </section>
                <section>
                    <img src={LabIntegra} alt="Logo do Lab Integra" className='w-[5rem]'/>
                </section>
            </section>
        </footer>
    )
}
// max-w-[1100px] mx-auto
export default Footer;