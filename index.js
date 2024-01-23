const calculate = async () => {
  const male = document.getElementById("male").value;
  const female = document.getElementById("female").value;
  let API_URL = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${male}&fname=${female}`;

  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f8a4c39446msh2f923d1752dc846p113b0fjsn6d01f8fcb5f8",
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      },
    });

    const data = await response.json();
    document.getElementById("percentage").innerText =
      data.percentage + "%" + "💕";

    // console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const btn = document.getElementById("calculateBtn");
btn.addEventListener("click", calculate);
