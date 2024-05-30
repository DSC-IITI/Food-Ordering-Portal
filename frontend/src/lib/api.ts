const BASE_URL = "http://127.0.0.1:8000/api/v1";

export async function getHotelList() {
  const data = await fetch(`${BASE_URL}/hotels/`, {
    cache: "no-store",
  });
  var hotelData = data.json();
  return hotelData;
}
