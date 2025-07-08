import { Container } from "./Container"
import arrow from "@/assets/arrow-down.svg"
import creditCardImage from "@/assets/creditCard.png"
import Image from "next/image"

export function CreditCard() {
    return (
        <section className="relative w-full bg-white pt-32 pb-16">
            <Container>
                <div className="flex items-center justify-between gap-12 flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image
                            src={creditCardImage}
                            alt="Cartão de crédito"
                            className="w-full max-w-[600px] h-auto object-contain"
                            priority
                            unoptimized
                        />
                    </div>

                    <div className="w-full lg:w-1/2 max-w-[594px]">
                        <span className="block primary-orange text-sm font-bold uppercase mb-9">
                            Benefícios do seu cartão.
                        </span>
                        <h2 className="primary-gray text-[56px] font-bold leading-tight mb-6">
                            O cartão ideal para o seu dia a dia.
                        </h2>
                        <p className="text-lg max-w-[554px] mb-5 second-gray">
                            Aproveite todas as vantagens do seu cartão Itaú: controle de gastos pelo app, benefícios exclusivos, segurança em cada compra e praticidade em qualquer lugar. Você pode abrir uma conta gratuitamente e em minutos.
                        </p>
                        <div className="flex items-center gap-2">
                            <a href="" className="txt-gray border-b-2">Saiba mais</a>
                            <span><Image src={arrow} alt="Seta para baixo" />
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
