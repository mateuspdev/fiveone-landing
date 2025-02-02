import "./Hero.css";

interface HeroProps {
  onScrollClick: () => void;
}

const icons = [
  "/src/assets/images/icons/apostolo.png",
  "/src/assets/images/icons/profeta.png",
  "/src/assets/images/icons/evangelista.png",
  "/src/assets/images/icons/pastor.png",
  "/src/assets/images/icons/mestre.png",
];

const IconColumn = ({
  icons,
  className,
}: {
  icons: string[];
  className: string;
}) => (
  <div className={`icon-column ${className}`}>
    <div className="icon-scroll">
      {icons.map((icon, index) => (
        <img
          key={`${className}-1-${index}`}
          src={icon}
          alt=""
          className="floating-icon"
          draggable="false"
        />
      ))}
    </div>
    <div className="icon-scroll">
      {icons.map((icon, index) => (
        <img
          key={`${className}-2-${index}`}
          src={icon}
          alt=""
          className="floating-icon"
          draggable="false"
        />
      ))}
    </div>
  </div>
);

const Hero = ({ onScrollClick }: HeroProps) => {
  return (
    <section className="hero" id="logo">
      <IconColumn icons={icons} className="left" />

      <div className="content-container">
        <img
          src="/src/assets/images/logo-fiveone-white.png"
          alt="Five One Logo"
          className="hero-logo"
          draggable="false"
        />
        <h1 className="hero-title">Bem-vindo ao Five One</h1>
        <p className="hero-subtitle">
          Venha trilhar seu caminho ministerial com a Escola Five One! Escolha
          entre uma das 5 Trilhas Ministeriais:
        </p>
        <p className="hero-subtitle">
          Apóstolo, Profeta, Evangelista, Pastor ou Mestre
        </p>
        <button onClick={onScrollClick}>
          CLIQUE AQUI E CONHEÇA NOSSAS TRILHAS MINISTERIAIS
        </button>
      </div>

      <IconColumn icons={[...icons].reverse()} className="right" />
    </section>
  );
};

export default Hero;
