import { useState } from "react";
import ImageModal from "../../ImageModal/ImageModal";
import "./Platform.css";

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

const Platform = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev" | null>(
    null
  );

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
    <section className="platform-section">
      <div className="content-container">
        <h2>Escola Five One</h2>
        <p className="platform-description">
          A Escola Five One tem uma plataforma online dedicada a ajudar cada
          pessoa a descobrir e desenvolver seu dom ministerial, preparando-a
          para atuar de forma plena e significativa em seu chamado. Além de uma
          formação ministerial, o aluno também terá uma formação teológica
          completa, os alunos têm a oportunidade de aprender com professores
          especializados em diferentes dons ministeriais, garantindo uma
          abordagem diversificada e rica no ensino. A escola desenvolve aulas ao
          vivo e incentiva a construção de uma comunidade sólida através de
          grupos no Discord e WhatsApp, onde os alunos podem compartilhar
          experiências, crescer juntos e se apoiar mutuamente em sua jornada de
          aprendizado e crescimento espiritual.
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
    </section>
  );
};

export default Platform;
