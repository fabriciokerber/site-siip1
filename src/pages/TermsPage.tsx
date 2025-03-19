import React from "react";
import { Layout } from "antd";
import "antd/dist/reset.css";

import logo_top from "../assets/siip_white_retangulo.png";

const { Header, Content, Footer } = Layout;

const TermsPage: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#222840", color: "#fff" }}>
      <Header style={{ background: "#000", padding: "10px 20px", height: 100 }}>
        <img src={logo_top} alt="SIIP Logo" style={{ height: 50 }} />
      </Header>
      <Content style={{ padding: "50px", textAlign: "left", maxWidth: "800px", margin: "0 auto", color: "#fff" }}>
        <h1>TERMOS E CONDIÇÕES DE USO DO APLICATIVO SIIP</h1>
        
        <h2>1. Introdução</h2>
        <p>Bem-vindo ao aplicativo da SIIP. Estes Termos e Condições de Uso regulam o uso do aplicativo para comunicação entre empresas e seus clientes, exclusivamente por meio de integrações com sistemas, bots e atendentes humanos. Ao utilizar o aplicativo, você concorda com os termos aqui estabelecidos.</p>
        
        <h2>2. Objetivo do Aplicativo</h2>
        <p>O aplicativo da SIIP é projetado exclusivamente para permitir a comunicação entre empresas e seus clientes através de integrações automatizadas e/ou interações com atendentes humanos. O aplicativo não pode ser utilizado para finalidades ilícitas, não autorizadas ou que violem os termos das plataformas integradas.</p>
        
        <h2>3. Uso de Dados e Privacidade</h2>
        <p><strong>3.1.</strong> A SIIP valoriza a privacidade dos usuários e garante que os dados tratados dentro do aplicativo sejam utilizados exclusivamente para os fins de comunicação mencionados neste documento.</p>
        <p><strong>3.2.</strong> Nenhuma informação coletada, armazenada ou processada pelo aplicativo é compartilhada com terceiros ou empresas externas, salvo quando necessário para cumprimento de obrigações legais ou regulatórias.</p>
        <p><strong>3.3.</strong> Os dados são protegidos por medidas de segurança adequadas, garantindo a integridade, confidencialidade e proteção contra acessos não autorizados.</p>
        
        <h2>4. Responsabilidades do Usuário</h2>
        <p><strong>4.1.</strong> O usuário é responsável por utilizar o aplicativo conforme os presentes Termos e Condições, respeitando todas as normas aplicáveis e boas práticas de segurança da informação.</p>
        <p><strong>4.2.</strong> É vedado o uso do aplicativo para envio de mensagens não solicitadas, spam, fraudes, conteúdos ofensivos, ilegais ou que violem direitos de terceiros.</p>
        
        <h2>5. Modificações nos Termos e Condições</h2>
        <p>A SIIP reserva-se o direito de modificar estes Termos e Condições a qualquer momento. As alterações entrarão em vigor após sua publicação no aplicativo. O uso contínuo do aplicativo após as modificações implica na aceitação dos novos termos.</p>
        
        <h2>6. Disposições Gerais</h2>
        <p><strong>6.1.</strong> Caso qualquer disposição destes Termos seja considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito.</p>
        <p><strong>6.2.</strong> Estes Termos e Condições são regidos pelas leis brasileiras. Quaisquer disputas decorrentes do uso do aplicativo serão resolvidas nos tribunais competentes.</p>
        
        <p>Ao utilizar o aplicativo SIIP, você declara estar ciente e concorda com todos os termos aqui estabelecidos.</p>
      </Content>
      <Footer style={{ background: "#e18b36", textAlign: "center", color: "#fff" }}>SIIP@2025</Footer>
    </Layout>
  );
};

export default TermsPage;
