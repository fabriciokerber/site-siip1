import React, { useEffect, useState } from "react";
import { WhatsAppOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Steps, Input, Button, Spin, Carousel } from "antd";
import axios from "axios";
import "antd/dist/reset.css";

import logo_top from './assets/siip_white_retangulo.png';

const { Header, Content, Footer } = Layout;
const services = [
  { title: "Análise de Dados Inteligente", description: "Transformamos dados em insights acionáveis com ferramentas de análise preditiva e machine learning." },
  { title: "Automação de Processos", description: "Otimizamos operações com sistemas automatizados que reduzem custos e aumentam a eficiência." },
  { title: "Soluções Personalizadas em IA", description: "Desenvolvemos modelos de IA sob medida para resolver problemas específicos do seu negócio." },
  { title: "Consultoria em Transformação Digital", description: "Ajudamos sua empresa a adotar tecnologias emergentes e se preparar para o futuro." },
  { title: "Expertise em IA", description: "Nossa equipe é composta por especialistas em inteligência artificial, machine learning e ciência de dados." },
  { title: "Inovação Contínua", description: "Estamos sempre à frente das tendências tecnológicas para oferecer o que há de mais moderno." }
];

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const LandingPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [randomPhrase, setRandomPhrase] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submissionResponse, setSubmissionResponse] = useState<string | null>(null);

  useEffect(() => {
    axios.get("https://n8n.siip.com.br/webhook/eab92511-77f6-4fab-9d57-3c413a157b57").then((response) => {
      setRandomPhrase(response.data.content);
      setLoading(false);
    });
  }, []);

  const validateEmail = (email: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^\+55\d{2}9\d{8}$/.test(phone);
  };

  const isNextDisabled = () => {
    if (currentStep === 0) return formData.name.trim() === "";
    if (currentStep === 1) return !validateEmail(formData.email) || !validatePhone(formData.phone);
    if (currentStep === 2) return formData.message.trim() === "";
    return false;
  };

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post("https://n8n.siip.com.br/webhook/eab92511-77f6-4fab-9d57-3c413a157b57", formData);
      setSubmissionResponse(response.data.content);
      handleNext();
    } catch (error) {
      setSubmissionResponse("Erro ao enviar os dados");
    }
    setIsSubmitting(false);
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#222840", color: "#fff" }}>
      <Header style={{ background: "#000", padding: "10px 20px", height: 100 }}>
        <img src={logo_top} alt="SIIP Logo" style={{ height: 50 }} />
      </Header>
      <Content style={{ padding: "50px", textAlign: "center" }}>
        <section style={{ marginBottom: "50px", color: "#fff" }}>
          {loading ? <Spin size="large" /> : <h1 dangerouslySetInnerHTML={{ __html: randomPhrase }}></h1>}
        </section>
        
        <section style={{ marginBottom: "50px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto", color:"#fff" }}>
          <Carousel autoplay style={{ padding: "20px", background: "#364d79", borderRadius: "10px", color:"#fff",  textAlign: "center" }}>
            {services.map((service, index) => (
              <div key={index} style={{ padding: "20px", background: "#364d79", borderRadius: "10px", color:"#fff",  textAlign: "center" }}>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            ))}
          </Carousel>
        </section>
        
        
  
        <section style={{ background: "#fff", padding: "30px", borderRadius: "10px", color: "#000" }}>
          <Steps current={currentStep} labelPlacement="vertical" items={[
            { title: "Nome", icon: <UserOutlined style={{ color: "#e18b36" }} /> },
            { title: "Contato", icon: <WhatsAppOutlined style={{ color: "#e18b36" }} /> },
            { title: "Necessidade", icon: <SolutionOutlined style={{ color: "#e18b36" }} /> },
            { title: "Resumo", icon: <SmileOutlined style={{ color: "#e18b36" }} /> }
          ]} />
          <div style={{ marginTop: "20px" }}>
            {currentStep === 0 && <Input name="name" placeholder="Digite seu nome" value={formData.name} onChange={handleChange} />}
            {currentStep === 1 && (
              <>
                <Input name="email" placeholder="Digite seu email" value={formData.email} onChange={handleChange} style={{ marginBottom: "10px" }} />
                <Input name="phone" placeholder="Digite seu telefone no formato +55DD9XXXXXXXX" value={formData.phone} onChange={handleChange} />
              </>
            )}
            {currentStep === 2 && (
              <>
                <p>Descreva sua necessidade, problema ou dúvida para que possamos ajudar da melhor forma possível.</p>
                <Input.TextArea name="message" placeholder="Descreva sua necessidade, problema ou dúvida" value={formData.message} onChange={handleChange} rows={4} />
              </>
            )}
            {currentStep === 3 && <div dangerouslySetInnerHTML={{ __html: submissionResponse || "Processando..." }} />}
          </div>
          <div style={{ marginTop: "20px" }}>
            {currentStep > 0 && currentStep < 3 && (
              <Button style={{ marginRight: "10px" }} onClick={handlePrev}>Voltar</Button>
            )}
            {currentStep < 2 && (
              <Button style={{ background: "#e18b36", border: "none" }} type="primary" onClick={handleNext} disabled={isNextDisabled()}>
                Próximo
              </Button>
            )}
            {currentStep === 2 && (
              <Button style={{ background: "#e18b36", border: "none" }} type="primary" onClick={handleSubmit} disabled={isNextDisabled() || isSubmitting}>
                {isSubmitting ? <Spin size="small" /> : "Enviar"}
              </Button>
            )}
          </div>
        </section>
      </Content>
      <Footer style={{ background: "#e18b36", textAlign: "center", color: "#fff" }}>SIIP@2025</Footer>
    </Layout>
  );
};

export default LandingPage;
