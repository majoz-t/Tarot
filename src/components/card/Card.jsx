const Card = ({ data, index, total, onSelect, isSelected }) => {
  const spread = 60; // apertura total del abanico
  const middle = (total - 1) / 2;

  const rotation = ((index - middle) / middle) * (spread / 2);
  const offsetX = (index - middle) * 32;
  const offsetY = Math.abs(index - middle) * 4;

  return (
    <div
      className={`card ${isSelected ? 'hidden' : ''}`}
      style={{
        transform: `
          translateX(${offsetX}px)
          translateY(${offsetY}px)
          rotate(${rotation}deg)
        `,
        zIndex: index
      }}
      onClick={onSelect}
    >
      <img src={data.reverseImage} alt="Tarot Card Back" />
    </div>
  );
};

export default Card;
