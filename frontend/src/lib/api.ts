const API_BACKEND = process.env.NEXT_PUBLIC_API_URL;
const BASE_URL = `${API_BACKEND}/api/v1`;

export async function getHotelList() {
  const data = await fetch(`${BASE_URL}/hotels/`, {
    cache: "no-store",
  });
  var hotelData = data.json();
  return hotelData;
}
