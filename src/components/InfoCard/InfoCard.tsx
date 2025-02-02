interface InfoCardProps {
  title: string;
  content: string;
  icon?: string;
}

const InfoCard = ({ title, content }: InfoCardProps) => (
  <div className="info-card">
    <div className="card-icon">
      <img src="/src/assets/images/logo-fiveone-white.png" alt={title} />
    </div>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export default InfoCard;
