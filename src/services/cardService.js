import api from "./api";

export const getSakuraCards = async () => {
  const response = await api.get(
    'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/'
  );
console.log(response)
  return response.data.map(card => ({
    id: card.id,
    number: card.cardNumber,
    englishName: card.englishName,
    image: card.sakuraCard,
    reverseImage: card.cardsReverse?.sakuraReverse,
    meaning: card.meaning
  }));
};

export const getSakuraCardById = async (id) => {
  const response = api.get(
    'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/${id}'
  );
  return response.data;
};
