interface propsCard {
  inventoryNumber: number;
  descriptionCard: string;
  name: string;
  isVisible: string;
}

const CardBack: React.FC<propsCard> = ({
  name,
  inventoryNumber,
  isVisible,
  descriptionCard,
}) => {
  console.log(inventoryNumber);
  return (
    <div className={`flex items-center flex-col gap-14 ${isVisible} `}>
      <div className="text-center">
        <h1 className="font-bold uppercase text-[20px]">{name}</h1>
        <p className="text-[15px]">{descriptionCard}</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <button
          onClick={() => {
            alert("adicionado");
          }}
          className="font-semibold bg-buttonPurple hover:bg-primary p-4 rounded-lg text-white shadow-sm shadow-black/80 transition-all"
        >
          Adicionar ao carrinho (0)
        </button>
        <label className="text-[15px] font-light">
          em estoque: {inventoryNumber}
        </label>
      </div>
    </div>
  );
};

export default CardBack;
