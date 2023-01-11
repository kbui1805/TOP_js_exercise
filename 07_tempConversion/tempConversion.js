const convertToCelsius = function(temp_in_F) {
  let result = Number.parseFloat(((temp_in_F - 32) * 5/9));

  if (result / Math.floor(result) != 0){
    return Number.parseFloat(result.toFixed(1));
  }

  return result;
};  

const convertToFahrenheit = function(temp_in_C) {
  let result = Number.parseFloat(((temp_in_C * 9/5) + 32));

  if (result / Math.floor(result) != 0){
    return Number.parseFloat(result.toFixed(1));
  }

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
