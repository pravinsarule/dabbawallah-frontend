import Card from '../components/Card';

const WhoAreWe = ({ title, subtitle, description, emoji, image1, image2 }) => {
  return (
    <Card
      subtitle={subtitle}
      title={title}
      emoji={emoji}
      description={description}
      image1={image1}
      image2={image2}
    />
  );
};

export default WhoAreWe;