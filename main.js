
window.onload = () => {
    const options = {
        method: 'POST',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/v2/list',
        params: {currency: 'TRY', units: 'km', lang: 'tr_TR'},
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'd9d41a4705mshc6ab7dec355f8eap14c383jsn28532e58e580',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
        data: '{"geoId":293928,"checkIn":"2022-03-10","checkOut":"2022-03-15","sort":"PRICE_LOW_TO_HIGH","sortOrder":"asc","filters":[{"id":"deals","value":["1","2","3"]},{"id":"price","value":["31","122"]},{"id":"type","value":["9189","9201"]},{"id":"amenity","value":["9156","9658","21778","9176"]},{"id":"distFrom","value":["2227712","25.0"]},{"id":"rating","value":["40"]},{"id":"class","value":["9572"]}],"rooms":[{"adults":2,"childrenAges":[2]},{"adults":2,"childrenAges":[3]}],"boundingBox":{"northEastCorner":{"latitude":12.248278039408776,"longitude":109.1981618106365},"southWestCorner":{"latitude":12.243407232845051,"longitude":109.1921640560031}},"updateToken":""}'
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}