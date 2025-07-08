import { Container } from "./Container"
import Image from "next/image"
import bankIcon from "@/assets/bank.svg"
import moneyIcon from "@/assets/money.svg"
import clientsIcon from "@/assets/clients.svg"
import certifiedIcon from "@/assets/certified.svg"

const Stats = () => {
    const stats = [
        {
            number: "1M+",
            label: "Clientes Ativos",
            icon: <div className="w-12 h-12 flex items-center justify-center">
                    <Image src={clientsIcon} alt="Ícone de telefone" />
                </div>
        },
        {
            number: "R$ 10B+",
            label: "Patrimônio Administrado",
            icon: 
                <div className="w-12 h-12 flex items-center justify-center">
                    <Image src={moneyIcon} alt="Ícone de telefone" />
                </div>
        },
        {
            number: "500+",
            label: "Agências no Brasil",
            icon: <div className="w-12 h-12 flex items-center justify-center">
                    <Image src={bankIcon} alt="Ícone de telefone" />
                </div>
        },
        {
            number: "15 Anos",
            label: "de Experiência",
            icon: <div className="w-12 h-12 flex items-center justify-center">
                    <Image src={certifiedIcon} alt="Ícone de telefone" />
                </div>
        }

    ]

    return (
        <section className="pb-16 mt-56 bg-primary-orange">

            <Container>
                <div className="bg-primary-foreground pt-12 flex flex-col w-full -mt-50">
                    <div className="text-center mb-5">
                        <span className="block text-sm font-bold uppercase primary-orange mb-6">
                            Nossos resultados.
                        </span>

                        <h2 className="primary-gray text-[56px] font-bold leading-tight mb-6">
                            Números que impressionam.
                        </h2>
                        <p className="text-lg mb-16 second-gray">
                            Confiança construída com resultados sólidos
                        </p>

                    </div>

                    <div className="pb-12 grid grid-cols-2 md:grid-cols-4 gap-20">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center flex flex-col items-center">
                                <div className="mb-3">{stat.icon}</div>
                                <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-1">
                                    {stat.number}
                                </div>
                                <div className="txt-gray text-base md:text-lg font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Stats
