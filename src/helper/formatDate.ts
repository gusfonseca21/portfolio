// export const formatDate = (date: string) => {
//   console.log("date", date);
//   const newDate = new Date(date);
//   console.log("newDate", newDate);

//   const formatter = new Intl.DateTimeFormat("pt-BR", {
//     month: "long",
//     year: "numeric",
//   });

//   return formatter.format(newDate);
// };

export const formatDate = (date: string) => {
  try {
    const newDate = new Date(date);
    if (isNaN(newDate.getTime())) {
      throw new Error("Invalid date format");
    }

    const formatter = new Intl.DateTimeFormat("pt-BR", {
      month: "long",
      year: "numeric",
    });

    return formatter.format(newDate);
  } catch (error: any) {
    console.error("Error formatting date:", error.message);
    return "Invalid Date";
  }
};
