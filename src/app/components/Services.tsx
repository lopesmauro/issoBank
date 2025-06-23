import { Container } from "./Container"
import phoneIcon from "@/assets/icon-phone.svg"
import soluctionsIcon from "@/assets/icon-solutions.svg"
import optionIcon from "@/assets/icon-options.svg"
import cardIcon from "@/assets/icon-card.svg"
import phoneImage from "@/assets/phone.png"
import Image from "next/image"

export function Services () {
    return (
        <section className=" relative w-full h-[965px]">
            <Container>
                <div className="flex-1 max-w-[594px] pt-32">
                    <span className="block primary-orange text-sm font-bold uppercase mb-9">Serviços exclusivos.</span>
                    <h2 className="primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa.</h2>
                    <p className="text-lg max-w-[554px] mb-16 second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida, e o melhor, no conforto da sua casa.</p>
                    <ul className="flex flex-col items-start gap-9">
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-primary-gray">
                            <div className="w-7 h-7 flex items-center justify-center" >
                                <Image src={phoneIcon} alt="Ícone de telefone"/>
                            </div>
                            <p className="flex-1 txt-gray pr-2">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-primary-gray">
                            <div className="w-7 h-7 flex items-center justify-center" >
                                <Image src={soluctionsIcon} alt="Ícone de soluções"/>
                            </div>
                            <p className="flex-1 txt-gray pr-2">Soluções de empréstimos e renegociação para organizar suas finanças</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-primary-gray">
                            <div className="w-7 h-7 flex items-center justify-center" >
                                <Image src={optionIcon} alt="Ícone de opções"/>
                            </div>
                            <p className="flex-1 txt-gray pr-2">Diversas opções de investimentos, de acordo com o seu perfil de investidor</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-primary-gray">
                            <div className="w-7 h-7 flex items-center justify-center" >
                                <Image src={cardIcon} alt="Ícone de cartão"/>
                            </div>
                            <p className="flex-1 txt-gray pr-2">Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual</p>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className="h-full w-[32%] flex items-center absolute top-0 right-0">
                <Image src={phoneImage} alt="" className="translate-x-[-50%]"/>
            </div>
        </section>
    )
}


