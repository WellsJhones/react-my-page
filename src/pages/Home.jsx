import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
return (
    <div>
        {/* Your page content here */}
        {/* Make sure to fix HTML to JSX issues */}
        <header>
            <section id="navbar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                  <img src="/assets/images/terminal-solid.svg" alt="" /> Wells Jhones
                </Link>
                        </li>
                    
                        <li><Link to="/About">Sobre</Link></li>
                        
                        <li>
                            <a href="https://br.linkedin.com/in/welingtonpk7/">
                                <img
                                    className="fab"
                                    src="assets/images/linkedin.svg"
                                    aria-hidden="true"
                                    alt=""
                                />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.github.com/WellsJhones" target="_blank" rel="noreferrer">
                                <img
                                    className="fab fa-linkedin"
                                    src="assets/images/github-alt.svg"
                                    aria-hidden="true"
                                    alt=""
                                />
                                <span className="sr-only">github</span>
                            </a>
                        </li>
                        {/* <li><a href="./assets/pages/curriculum.html" className="button">Curriculo</a></li> */}
                    </ul>
                </nav>
            </section>
        </header>
        <main>
            <section id="intro">
                <p className="name">
                    Hiiii, I'm<span>Wells Jhones.</span>
                </p>
                <h2>Eu sou um estudante</h2>
                <p>
                    Estou estudando para ser um desenvolvedor front-end, e estou interessado em aprender mais sobre o desenvolvimento de software.
                </p>
                <p>
                    Este e um portifolio criado com base no curso de Frontend na plataforma Frontend Masters.
                    <a href="https://frontendmasters.com" target="_blank" rel="noreferrer">
                        frontend Masters
                    </a>
                </p>
                <p>
                    Finalizei o curso One next Education 6º edition da Oracle em parceria com Alura, em Backend.
                    <a href="https://www.oracle.com/br/education/oracle-next-education/">
                        Oracle-Alura
                    </a>
                </p>
                {/* section of the project */}
                {/* contact me section */}
            </section>
            <div className="gradiente"></div>
            <div className="section-dkblue">
                <section id="projects">
                    <h2>Projeto</h2>
                    <article>
                        <div className="text">
                            <h3>VueJs app api tempo</h3>
                            <p className="blackbox">
                                este foi meu portifolio em VueJs publicado no git e deployed na mesma plataforma
                                <a href="https://wellsjhones.github.io/project-app/">aqui</a> e confira
                            </p>
                            <h4>Tecnologia usada:</h4>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                                <li>VueJs</li>
                                <li>jsx</li>
                            </ul>
                        </div>
                        <img
                            src="assets/images/project app.png"
                            alt="Screenshot of the Wall of Wonder."
                        />
                    </article>
                    <article className="reverse">
                        <div className="text">
                            <h4>Ultimo projeto</h4>
                            <h3>Encriptador de texto</h3>
                            <p className="blackbox">
                                Este projeto foi feito para encriptar e desencriptar texto,
                                trocando as letras: <br />
                                As "chaves" de criptografia que utilizaremos são: A letra "e" é
                                convertida para "enter" A letra "i" é convertida para "imes" A
                                letra "a" é convertida para "ai" A letra "o" é convertida para
                                "ober" A letra "u" é convertida para "ufat" <br />
                                para saber mais
                                <a href="https://wellsjhones.github.io/challenge-encriptador/">aqui</a>
                            </p>
                            <h4>Tecnologia usada:</h4>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SVG</li>
                                <li>JAVASCRIPT</li>
                            </ul>
                        </div>
                        <img
                            src="assets/images/Screenshot 2024-02-01 022841.png"
                            alt="Screenshot of the Wall of Wonder."
                        />
                    </article>
                    <article>
                        <div className="text">
                            <h3>Adivinhe o numero</h3>
                            <p className="blackbox">
                                Este e um jogo de adivinhação, onde o jogador tem que adivinhar um numero click
                                <a href="https://jogo-do-numero-secreto-flax-sigma.vercel.app/">aqui</a> e confira
                            </p>
                            <h4>Tecnologia usada:</h4>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SVG</li>
                                <li>JAVASCRIPT</li>
                            </ul>
                        </div>
                        <img
                            src="assets/images/Screenshot 2024-02-01 220055.png"
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
);
}

export default Home
