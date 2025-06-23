import { Container } from "./Container"
import imgGooglePlay from "@/assets/btn-google-play.svg"
import imgAppleStore from "@/assets/btn-apple-store.svg"
import imgArrow from "@/assets/arrow-explorer.svg"
import womanImage from "@/assets/woman.png"

import Image from "next/image"

export function Hero() {
    return (
        <section className="w-full h-[704px] bg-[url(../assets/bg-hero.jpg)] bg-cover bg-no-repeat bg-center">
            <Container>
                <div className="flex-1 max-w-[500px]">
                    <h1 className="text-white text-7xl font-bold mb-4">Tenha seu banco na palma da mão.</h1>
                    <p className="text-white text-xl max-w-[408px] mb-8">Todas as operações que você precisa em um só lugar. Simples, completo e feito pra você.</p>
                    <div className="flex gap-4 mb-24">
                        <button>
                            <Image src={imgAppleStore} alt="Botão da Apple Store" />
                        </button>
                        <button>
                            <Image src={imgGooglePlay} alt="Botão do Google Play" />
                        </button>
                    </div>
                    <button className="flex items-center gap-3 ">
                        <Image src={imgArrow} alt="Seta para a direita" />
                        <span className="text-white text-sm font-bold">Continue explorando</span>
                    </button>
                </div>
                <Image src={womanImage} alt="" className="mr-[-41px]" />
            </Container>
        </section>
    )
}
    