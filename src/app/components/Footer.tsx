import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Shield,
  Lock,
  CreditCard
} from "lucide-react"
import { Container } from "./Container"

const Footer = () => {
  return (
    <footer className="mt-32 py-16 bg-primary-orange text-white">
      <Container>
        <div>
            {/* Conteúdo principal do rodapé */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Informações da empresa */}
            <div className="space-y-6">
                <div>
                <h3 className="text-2xl font-bold mb-4 text-white">IssoBank</h3>
                <p className="text-slate-100 leading-relaxed">
                    Seu parceiro financeiro de confiança, oferecendo soluções bancárias inovadoras com segurança intransigente e um serviço excepcional.
                </p>
                </div>
                <div className="flex space-x-4">
                <a href="#" className="text-slate-200">
                    <Facebook size={20} />
                </a>
                <a href="#" className="text-slate-200">
                    <Twitter size={20} />
                </a>
                <a href="#" className="text-slate-200">
                    <Linkedin size={20} />
                </a>
                <a href="#" className="text-slate-200">
                    <Instagram size={20} />
                </a>
                </div>
            </div>

            {/* Serviços */}
            <div>
                <h4 className="text-lg font-semibold mb-6 text-white">Serviços Bancários</h4>
                <ul className="space-y-3">
                <li><a href="#" className="text-slate-100">Conta Pessoal</a></li>
                <li><a href="#" className="text-slate-100">Conta Empresarial</a></li>
                <li><a href="#" className="text-slate-100">Serviços de Investimento</a></li>
                <li><a href="#" className="text-slate-100">Empréstimos e Financiamentos</a></li>
                <li><a href="#" className="text-slate-100">Cartões de Crédito</a></li>
                <li><a href="#" className="text-slate-100">Banco Online</a></li>
                </ul>
            </div>

            {/* Suporte e Jurídico */}
            <div>
                <h4 className="text-lg font-semibold mb-6 text-white">Suporte e Jurídico</h4>
                <ul className="space-y-3">
                <li><a href="#" className="text-slate-100">Atendimento ao Cliente</a></li>
                <li><a href="#" className="text-slate-100">Central de Segurança</a></li>
                <li><a href="#" className="text-slate-100">Política de Privacidade</a></li>
                <li><a href="#" className="text-slate-100">Termos de Serviço</a></li>
                <li><a href="#" className="text-slate-100">Acessibilidade</a></li>
                <li><a href="#" className="text-slate-100">Mapa do Site</a></li>
                </ul>
            </div>

            {/* Contato */}
            <div>
                <h4 className="text-lg font-semibold mb-6 text-white">Fale Conosco</h4>
                <div className="space-y-4">
                <div className="flex items-start space-x-3">
                    <Phone size={18} className="text-slate-100 mt-1 flex-shrink-0" />
                    <div>
                    <p className="text-white font-medium">Atendimento 24 horas</p>
                    <p className="text-slate-50">1-800-SEGURANÇA-1</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <Mail size={18} className="text-slate-100 mt-1 flex-shrink-0" />
                    <div>
                    <p className="text-white font-medium">Suporte por E-mail</p>
                    <p className="text-slate-50">suporte@issobank.com</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <MapPin size={18} className="text-slate-100 mt-1 flex-shrink-0" />
                    <div>
                    <p className="text-white font-medium">Sede</p>
                    <p className="text-slate-50">123 Distrito Financeiro<br />Manaus AM 10005</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Certificados e selos de segurança */}
            <div className="border-t border-zinc-100/40 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <div className="flex items-center space-x-2 text-slate-100">
                    <Shield size={20} className="primary-blue" />
                    <span className="text-sm">Segurado pelo FDIC</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-100">
                    <Lock size={20} className="primary-blue" />
                    <span className="text-sm">Criptografia SSL de 256 bits</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-100">
                    <CreditCard size={20} className="primary-blue" />
                    <span className="text-sm">Conformidade com PCI DSS</span>
                </div>
                </div>
                <div className="text-slate-100 text-sm">
                Membro FDIC • Igualdade de Oportunidade de Habitação
                </div>
            </div>
            </div>

            {/* Direitos autorais */}
            <div className="border-t border-zinc-100/40 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-slate-100 text-sm">
                <p>&copy; 2024 IssoBank. Todos os direitos reservados.</p>
                <p>Licenciado pelo Escritório do Controlador da Moeda</p>
            </div>
            </div>
        </div>
      </Container>



    </footer>
  );
};

export default Footer
