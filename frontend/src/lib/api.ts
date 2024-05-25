export async function getHotelList() {
  const data = await fetch("http://127.0.0.1:8000/api/v1/hotels/", {
    cache: "no-store",
  });
  var hotelData = data.json();
  return hotelData;
}
