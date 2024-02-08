export function formatDateToDayMonthYearTime(dataString: string) {
  const data = new Date(dataString);

  // Obter informações da data
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = String(data.getFullYear()).slice(-2);
  const hora = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');

  // Formatar a data no formato desejado
  const dataFormatada = `${dia}/${mes}/${ano} às ${hora}h${minutos}`;

  return dataFormatada;
}
