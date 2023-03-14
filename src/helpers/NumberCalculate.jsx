export const NumberCalculate = ({ number }) => {
  // Sayıyı virgül ve noktalı formata dönüştürmek için Intl.NumberFormat kullanıyoruz
  // Sayıyı ülke kodu ve stil parametreleri ile birlikte veriyoruz
  const formattedNumber = new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: 3,
  }).format(number);

  // Virgül ile nokta arasındaki boşluğu ekleyerek çıktıyı formatlıyoruz
  return formattedNumber
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
