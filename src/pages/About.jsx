import React from 'react'
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

function About() {
  usePageTitle('Sobre');
  return (
    <>
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

              <li>
                <a href="https://br.linkedin.com/in/welingtonpk7/">
                  <img
                    className="fab"
                    src="/assets/images/linkedin.svg"
                    aria-hidden="true"
                    alt="LinkedIn"
                  />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.github.com/WellsJhones"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="fab fa-linkedin"
                    src="/assets/images/github-alt.svg"
                    aria-hidden="true"
                    alt=""
                  />
                  <span className="sr-only">github</span>
                </a>
              </li>
              <li><Link to="/curriculum" className="button">Currículo</Link></li>
            </ul>
          </nav>
        </section>
      </header>
      <div className="gradiente"></div>
      <main>
        <div className="section-dkblue">
          <section id="projects">
            <h2>Sobre mim</h2>
            <article>
              <div className="text">
                <h3>Sou entusiasta por tecnologia 👌</h3>
                <p className="blackbox">
                  Sou um estudante de Sistemas para Internet, apaixonado por
                  tecnologia e tudo que ela oferece. Estou sempre em busca de
                  novos conhecimentos e desafios. Atualmente estou estudando
                  Java e Linux, e estou sempre em busca de novos conhecimentos.
                </p>
                <h4>Oque eu uso atualmente:</h4><br />
                <ul>
                  <li>AWS Academy</li>
                  <li>Fedora</li>
                  <li>Java</li>
                  <li>VsCode</li>
                  <li>Git</li>
                  <li>NeoVim</li>
                  <li>Linux</li>
                  <li>Oracle OCI</li>
                </ul>
              </div>
              <img
                src="/assets/images/me.jpg"
                alt="Screenshot of me"
              />
            </article>
          </section>
        </div>
      </main>
    </>
  )
}

export default About
