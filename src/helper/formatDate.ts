export const formatDate = (date: string) => {
  const newDate = new Date(date);

  const formatter = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return formatter.format(newDate);
};
