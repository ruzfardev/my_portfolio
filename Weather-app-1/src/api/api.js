export const makeApiCall = async (value) => {
  try {
    const countryName =
      value.country !== undefined ? value.country : 'uzbekistan';
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=metric&appid=937baab680701220667de612cec76331`
    );
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error('Something went wrong. Please check spelling');
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchWeeklyData = async ({ lat, lon }) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=937baab680701220667de612cec76331`
    );
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error('Something went wrong.');
    }
  } catch (error) {
    throw new Error(error);
  }
};
