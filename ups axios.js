const key = "EDA8945BB6828E96";
const user = "GRUPO-MAXIMUS";
const pass = "UPSMaximus2021";

const track = "1Z3Y21050452578712"
const url = "https://onlinetools.ups.com/track/v1/details/" + track + "?locale=es_AR"


var config = {
  method: 'get',
  url: url,
  headers: { 
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 
    'Access-Control-Allow-Origin': '*', 
    'Username': user, 
    'Password': pass, 
    'AccessLicenseNumber': key
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});