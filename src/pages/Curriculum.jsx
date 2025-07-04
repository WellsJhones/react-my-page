import React from 'react'
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

function Curriculum() {
  usePageTitle('Currículo');
  return (
    <div>
     <header>
      <section id="navbar">
        <nav>
          <ul>
            <li>
             <Link to="/">
                  <img src="/assets/images/terminal-solid.svg" alt="" /> Wells Jhones
                </Link> 
            </li>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/About">Sobre</Link></li>
          
            <li>
              <a href="https://br.linkedin.com/in/welingtonpk7/">
                <img
                  className="fab"
                  src="/assets/images/linkedin.svg"
                  aria-hidden="true"
                  alt="LinkedIn"
                />
                <span class="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.github.com/WellsJhones" target="_blank" rel="noreferrer"
                ><img
                  className="fab fa-linkedin"
                  src="/assets/images/github-alt.svg"
                  aria-hidden="true"
                  alt="GitHub"
                /><span class="sr-only">github</span></a
              >
            </li>
          </ul>
        </nav>
      </section>
    </header> 
    <main>
            <section id="intro">
        <p class="name">Meu nome e <span>Welington</span></p>
        <h2>Sou de Anapolis GO</h2>
        <p/>
            Tenho graduação em Sistemas para Internet pela Unopar (Universidade Norte do Paraná)
         </section>
            <div className="gradiente"></div>
            <div className="section-dkblue">
                <section id="projects">
                    <h2>Certificados/Habilidades</h2>
                    <article className="certificates">
                       <div className="certificate-badges">
                           <img src="https://eu.api.accredible.com/v1/frontend/credential_website_embed_image/badge/15237900" alt="Accredible Certificate Badge" className="certificate-badge" />  
                           <img src="https://eu.api.accredible.com/v1/frontend/credential_website_embed_image/badge/15181114" alt="Accredible Certificate Badge" className="certificate-badge" /> 
                           <img src="https://eu.api.accredible.com/v1/frontend/credential_website_embed_image/badge/15006642" alt="Accredible Certificate Badge" className="certificate-badge" />
                           <img src="https://eu.api.accredible.com/v1/frontend/credential_website_embed_image/badge/14886290" alt="Accredible Certificate Badge" className="certificate-badge" />
                       </div>
                    </article>
                    
          <article>
            <div class="text">
              <h3>certificação Oracle Cloud Infrastructure Foundations</h3>
              <h3>OCI</h3>
              <p class="blackbox">
                perfect for beginners and IT professionals new to cloud computing. It covers the basics of OCI, including architecture, identity and access management (IAM), and networking. You'll also learn about compute services, container orchestration, serverless functions, storage options, database services, and security features. Moreover, the course offers invaluable insights into cost management strategies, empowering you to optimize your cloud expenditures. 
                <a href="https://education.oracle.com/oracle-cloud-infrastructure-2024-foundations-associate/pexam_1Z0-1085-25"
                  > aqui</a
                >
              </p>
              <h4>extra:</h4>
              <ul>
                <li>Fundamentals of OCI</li>
                <li>Networking in OCI</li>
                <li>Compute Services</li>
                <li>Storage Solutions</li>
                <li>Database Services</li>
                
              </ul>
            </div>
            <img
              src="assets/certificados/oci-associate.png"
              alt="Oracle Cloud Infrastructure Foundations Associate"
            />
          </article>
          <h2>AWS Academy </h2>
           <article class="reverse">
            <div class="text">
              <h3>badge AWS Academy Cloud Foundations</h3>
              <p class="blackbox">
               entendimento geral dos conceitos de computação em nuvem, independentemente de funções técnicas específicas. O curso provê uma visão geral detalhada dos conceitos de nuvem, principais serviços AWS, segurança, arquitetura, definição de preço e suporte -
                <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
                  >aqui</a
                > e confira
              </p>
            </div>
            <img
              src="assets/certificados/aws.png"
              alt="Screenshot of the Wall of Wonder."
            />
            
          </article>
          <article>
            <div class="text">
              <h4>Google Cloud</h4>
              <h3>Cloud Computing Introdução</h3>
              <p class="blackbox">
                 criar e conectar uma infraestrutura de nuvem centrada em armazenamento usando os recursos básicos das seguintes tecnologias: Armazenamento em Nuvem, Gerenciamento de Identidade e Acesso, Funções de Nuvem e Pub/Sub, para saber mais click 
                <a href="https://www.cloudskillsboost.google/"
                  > aqui</a
                >
              </p>
              <h4>extra:</h4>
              <ul>
                <li>Terraform</li>
                <li>Vertex AI</li>
                <li>Data ML</li>
                <li>GKE Kubernetes</li>
              </ul>
            </div>
            <img
              src="assets/certificados/Screenshot 2024-02-03 043332.png"
              alt="certificado Google cloud."
            />
          </article>
          <h2>Curso Cloud Associate</h2>
           <article class="reverse">
            <div class="text">
              <h3>Necessario para a certificação Engenheiro associado google cloud</h3>
              <p class="blackbox">
               O Career Readiness Associate Cloud Engineer Learning Path orienta você por uma coleção selecionada de cursos, laboratórios e emblemas de habilidades sob demanda que fornecem experiência prática no mundo real usando tecnologias do Google Cloud essenciais para a função de Engenharia de Nuvem. click 
                <a href="https://www.cloudskillsboost.google/paths/53"
                  >aqui</a
                > e confira
              </p>
            </div>
            <img
              src="assets/certificados/cloud engeer.png"
              alt="Screenshot of the Wall of Wonder."
            />
            
          </article>
                     <article>
            <div class="text">
              <h4>Introdução CSS</h4>
              <h3>curso responsavel pela criacao desta pagina</h3>
              <p class="blackbox">
                Conheça o CSS da maneira certa sem as perrengues. Você vai estilizar texto, criar barras de navegação, cabeçalhos/rodapés, adicionar ícones e muito mais. Você ainda construirá um site de portfólio profissional até o final do curso!, para saber mais click
                <a href="https://www.cloudskillsboost.google/"
                  >aqui</a
                >
              </p>
              <h4>tecnologias:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <img
              src="assets/certificados/frontendmasters.png"
              alt="certificado Google cloud."
            />
          </article >
          <h2>Iniciante em Programação T6 - ONE
          </h2>
           <article class="reverse">
            <div class="text">
              <h3>Oracle Next Education</h3>
              <p class="blackbox">
               O ONE é um programa de educação e empregabilidade com objetivo social de capacitar pessoas em tecnologia e conectá-las com o mercado de trabalho por meio de empresas parceiras.
              </p>
            </div>
            <img
              src="assets/certificados/dev-program.png"
              alt="Screenshot of the Wall of Wonder."
            />
            
          </article>
                </section>
            </div>
            <div className="gradiente"></div>
            <div className="section-plum">
                <section id="contact">
                    <h2>Contact me</h2>
                    <p>
                        Eu sempre interessado em novas tecnologias e oportunidades de trabalho.
                    </p>
                    <p>
                        wellsj_dev@gmail.com
                    </p>
                </section>
            </div>
        </main>
        <div className="gradiente"></div>
    </div>
  )
}

export default Curriculum
