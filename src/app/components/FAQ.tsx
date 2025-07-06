import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "./Container"

const FAQ = () => {
    const faqs = [
        {
            question: "Como posso abrir uma conta?",
            answer: "Você pode abrir uma conta online em poucos minutos. Basta ter seus documentos em mãos (RG, CPF e comprovante de renda) e seguir nosso processo digital seguro."
        },
        {
            question: "Quais são as taxas e tarifas?",
            answer: "Oferecemos contas com zero taxa de manutenção e tarifas competitivas. Consulte nossa tabela completa de tarifas ou fale com nossos consultores para mais detalhes."
        },
        {
            question: "Como funciona o internet banking?",
            answer: "Nosso internet banking é seguro e fácil de usar. Você pode acessar sua conta 24h por dia, fazer transferências, pagar contas e muito mais através do nosso site ou aplicativo móvel."
        },
        {
            question: "Vocês oferecem cartão de crédito?",
            answer: "Sim, oferecemos diversos tipos de cartões de crédito com benefícios exclusivos, cashback e programas de pontos. A aprovação depende da análise de crédito."
        },
        {
            question: "Como entrar em contato com o suporte?",
            answer: "Você pode nos contatar através do telefone 1-800-SECURE-1 (24h), email support@securebank.com ou chat online em nosso site."
        },
        {
            question: "Meus dados estão seguros?",
            answer: "Absolutamente. Utilizamos criptografia de 256-bit SSL, somos certificados PCI DSS e seguimos todos os protocolos de segurança bancária. Seus dados são protegidos com a mais alta tecnologia."
        }
    ]

    return (
        <section className="py-3 bg-white">
            <Container>
                <div className="flex flex-col w-full">
                    <div className="text-center mb-3">
                        <span className="block primary-orange text-sm font-bold uppercase mb-9">Ajuda.</span>

                        <h2 className="primary-gray text-[56px] font-bold leading-tight mb-6">
                            Alguma dúvida?
                        </h2>
                        <p className="text-lg mb-16 second-gray">Se a sua dúvida não estiver nas perguntas frequentes, fala com a gente!</p>

                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg text-slate-800 [&>svg]:text-orange-500">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-lg leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </Container>



        </section>
    )
}

export default FAQ
