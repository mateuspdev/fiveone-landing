import "./TrilhaMinisterial.css";

interface TrilhaCard {
  icon: string;
  title: string;
  description: string;
  alt: string;
}

const trilhas: TrilhaCard[] = [
  {
    icon: "/src/assets/images/cropped/apostolo.png",
    title: "APÓSTOLO",
    description:
      "Nesta trilha exploraremos o apostólico. Das raízes teológicas ao chamado individual.",
    alt: "Apóstolo",
  },
  {
    icon: "/src/assets/images/cropped/profeta.png",
    title: "PROFETA",
    description:
      "Nesta trilha exploraremos o profético. Das raízes teológicas ao chamado individual.",
    alt: "Profeta",
  },
  {
    icon: "/src/assets/images/cropped/evangelista.png",
    title: "EVANGELISTA",
    description:
      "Nesta trilha exploraremos o evangelístico. Das raízes teológicas ao chamado individual.",
    alt: "Evangelista",
  },
  {
    icon: "/src/assets/images/cropped/pastor.png",
    title: "PASTOR",
    description:
      "Nesta trilha exploraremos o pastoral. Das raízes teológicas ao chamado individual.",
    alt: "Pastor",
  },
  {
    icon: "/src/assets/images/cropped/mestre.png",
    title: "MESTRE",
    description:
      "Nesta trilha exploraremos o ensino. Das raízes teológicas ao chamado individual.",
    alt: "Mestre",
  },
];

const TrilhaMinisterial = () => {
  return (
    <section className="trilha-ministerial" id="trilha">
      <div className="content-container">
        <h2>ESCOLHA A SUA TRILHA MINISTERIAL</h2>
        <div className="trilha-cards">
          {trilhas.map((trilha, index) => (
            <div key={index} className="trilha-card">
              <div className="card-icon">
                <img src={trilha.icon} alt={trilha.alt} />
              </div>
              <h3>{trilha.title}</h3>
              <p>{trilha.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrilhaMinisterial;
