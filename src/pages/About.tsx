import { useState } from "react";
import InfoCard from "../components/InfoCard/InfoCard";
import ImageModal from "../components/ImageModal/ImageModal";
import "./About.css";
import TrilhaMinisterial from "../components/sections/TrilhaMinisterial/TrilhaMinisterial";

const About = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev" | null>(
    null
  );

  const infoCards = [
    {
      title: "Nossa Missão",
      content:
        "Capacitar cada cristão a descobrir e exercer seu papel único no Corpo de Cristo, desenvolvendo um ministério eficaz que fortaleça a Igreja e expanda o Reino de Deus na Terra.",
    },
    {
      title: "Nossa Visão",
      content:
        "Oferecer formação ministerial robusta, através de ensino teológico prático e bíblico, mentorias e discipulado, utilizando métodos inovadores que incentivem o crescimento espiritual e ministerial.",
    },
    {
      title: "Nosso Propósito",
      content:
        "Capacitar e equipar os cristãos para que cresçam em maturidade espiritual, firmes na verdade e no amor de Cristo. Nosso objetivo é ajudar cada pessoa a desenvolver plenamente o seu Dom e cumprir seu papel no Corpo de Cristo, contribuindo para que a Igreja seja ajustada, unida e edificada em amor, conforme cada membro realiza sua função, de acordo com a liderança de Cristo, que é a cabeça.",
    },
  ];

  const platformImages = [
    {
      src: "/src/assets/images/plataforma1.png",
      alt: "Plataforma Five One - Página Inicial",
    },
    {
      src: "/src/assets/images/plataforma2.png",
      alt: "Plataforma Five One - Conteúdo do Curso",
    },
    {
      src: "/src/assets/images/plataforma3.png",
      alt: "Plataforma Five One - Aulas",
    },
  ];

  const values = [
    {
      title: "Bíblia como a Palavra de Deus",
      content:
        "Acreditamos que as Escrituras Sagradas são a revelação reguladora e inspirada de Deus, a autoridade em nossa fé e prática, servindo como base para todas as nossas ações e doutrinas.",
    },
    {
      title: "Cristo como Centro",
      content:
        "Cremos que Jesus Cristo é o fundamento de toda a nossa fé e o centro de tudo o que fazemos. Ele é a pedra angular sobre a qual a Igreja é edificada, e todas as nossas atividades e ensinamentos apontam para Ele.",
    },
    {
      title: "Espírito Santo como Pessoa e Deus",
      content:
        "Afirmamos que o Espírito Santo é plenamente Deus, uma pessoa da Trindade que atua de forma viva e presente em nossas vidas. Ele guia, conforta e capacita os crentes para viverem de acordo com a vontade de Deus. Cremos também em Sua atuação através dos dons espirituais vigentes nos dias atuais descritos em 1 Coríntios 12, que são distribuídos à igreja para edificação, fortalecimento e manifestação do poder de Deus. Esses dons são essenciais para a vivência cristã plena e para a edificação do Corpo de Cristo, demonstrando a presença ativa do Espírito Santo entre nós.",
    },
    {
      title: "Atuação Plena dos 5 Ministérios",
      content:
        "Cremos que a plena atuação dos 5 ministérios descritos em Efésios 4 — apóstolos, profetas, evangelistas, pastores e mestres — é fundamental para a edificação e maturidade da igreja. Esses dons foram dados a toda a igreja, e não apenas à liderança, para que cada membro descubra e viva plenamente o seu chamado. Somente por meio dessa colaboração e participação de todos podemos alcançar a unidade da fé e o crescimento em direção à estatura de Cristo.",
    },
    {
      title: "Liderança Plural de Presbíteros",
      content:
        "Cremos na liderança plural de presbíteros, que é unico modelo bíblico de governo. Acreditamos que presbíteros e pastores NÃO são sinônimos; enquanto o pastor é um dom ministerial, o presbítero é um líder que faz parte de um corpo de liderança coletiva. Nesse modelo, todos os presbíteros têm igual autoridade e peso de palavra, e nenhum possui a palavra final sobre os demais. Não existe a figura de um presbítero sênior ou presidente",
    },
    {
      title: "Igreja nas Casas",
      content:
        "Cremos que a igreja está vivenciando uma terceira reforma, uma transformação das estruturas tradicionais que a leva a retornar às casas. Entendemos que cada casa deve ter seu próprio presbítero, que atua como líder local e parte de uma rede maior de comunhão. Essa rede de casas é composta por presbíteros que se discipulam mutuamente e são mentorados pelos 5 ministérios. Dessa forma, a igreja se expande de maneira orgânica, mantendo a essência do discipulado, fortalecendo a unidade e a edificação do Corpo de Cristo.",
    },
  ];

  const directors = [
    {
      name: "SUENIA KARCIA",
      role: "Diretora Executiva",
      image: "/src/assets/images/people/suenia.jpeg",
      description:
        "Historiadora e mestranda em História com ênfase no ensino da História da Igreja, atua com dedicação na área acadêmica e na formação de novos olhares sobre a fé e a tradição religiosa. Com uma trajetória que une pesquisa e ensino, busca enriquecer a compreensão sobre o papel da igreja ao longo da história.",
    },
    {
      name: "MARCELO JUNIOR",
      role: "CEO",
      image: "/src/assets/images/people/marcelo.jpeg",
      description:
        "Pós-graduado em Educação Cristã pelo Instituto Reformado de São Paulo e em Ciências da Religião pela Faculdade Batista Ipemig, Marcelo Junior dedica sua vida ao ensino sobre os 5 Ministérios de Efésios 4. Com uma paixão profunda pela formação ministerial, ele busca capacitar seus alunos a descobrirem e desenvolverem seus dons para o serviço e edificação da igreja.",
    },
    {
      name: "RODOLFO HENNER",
      role: "Diretor Acadêmico",
      image: "/src/assets/images/people/rodolfo.jpeg",
      description:
        "Atua no ministério de ensino há mais de 10 anos, servindo à Igreja Batista Memorial e à igreja brasileira como um todo.",
    },
  ];

  const testimonials = [
    {
      content:
        "A Escola Five One me ajudou a crescer espiritualmente e a descobrir meu chamado ministerial. Recomendo a todos!",
      author: "João Silva",
    },
    {
      content:
        "As aulas são ricas em conteúdo e os professores são inspiradores. Aprendi muito sobre meu papel no Corpo de Cristo.",
      author: "Maria Oliveira",
    },
  ];

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < platformImages.length - 1) {
      setSlideDirection("next");
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSlideDirection("prev");
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleImageClick = (index: number) => {
    setSlideDirection(null);
    setSelectedIndex(index);
  };

  return (
    <>
      <section className="about-section">
        <div className="content-container">
          <h1>Quem Somos</h1>
          <div className="info-cards">
            {infoCards.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="platform-section">
        <div className="content-container">
          <h2>Escola Five One</h2>
          <p className="platform-description">
            A Escola Five One tem uma plataforma online dedicada a ajudar cada
            pessoa a descobrir e desenvolver seu dom ministerial, preparando-a
            para atuar de forma plena e significativa em seu chamado. Além de
            uma formação ministerial, o aluno também terá uma formação teológica
            completa, os alunos têm a oportunidade de aprender com professores
            especializados em diferentes dons ministeriais, garantindo uma
            abordagem diversificada e rica no ensino. A escola desenvolve aulas
            ao vivo e incentiva a construção de uma comunidade sólida através de
            grupos no Discord e WhatsApp, onde os alunos podem compartilhar
            experiências, crescer juntos e se apoiar mutuamente em sua jornada
            de aprendizado e crescimento espiritual.
          </p>
          <div className="platform-screenshots">
            {platformImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="content-container">
          <h2>Nossos Valores</h2>
          <p className="values-subtitle">(Nossos Pilares de Fé)</p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="directors-section">
        <div className="content-container">
          <h2>DIRETORES DA ESCOLA FIVE ONE</h2>
          <div className="directors-grid">
            {directors.map((director, index) => (
              <div key={index} className="director-card">
                <div className="director-image">
                  <img src={director.image} alt={director.name} />
                </div>
                <h3>{director.name}</h3>
                <span className="director-role">{director.role}</span>
                <p>{director.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="content-container">
          <h2>O que dizem nossos alunos</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p>{testimonial.content}</p>
                <span className="testimonial-author">
                  - {testimonial.author}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrilhaMinisterial />

      {selectedIndex !== null && (
        <ImageModal
          src={platformImages[selectedIndex].src}
          alt={platformImages[selectedIndex].alt}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={selectedIndex < platformImages.length - 1}
          hasPrev={selectedIndex > 0}
          direction={slideDirection}
        />
      )}
    </>
  );
};

export default About;
