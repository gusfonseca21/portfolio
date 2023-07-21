export const formatDate = (date: string) => {
  const newDate = new Date(`${date}-01`);

  const formatter = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return formatter.format(newDate);
};
