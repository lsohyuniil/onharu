import { NearbyStore } from "@/app/nearby/type/type";
import { MarkerCustom } from "./markerCustom";
import { RiCloseLine } from "@remixicon/react";

export function NearbyStoreMarker(
  map: kakao.maps.Map,
  stores: NearbyStore[] | null,
  markersRef: React.MutableRefObject<kakao.maps.Marker[]>,
  overLayRef: React.MutableRefObject<kakao.maps.CustomOverlay[]>
) {
  if (!stores) return;

  markersRef.current.forEach(marker => marker.setMap(null));
  markersRef.current = [];

  overLayRef.current.forEach(overlay => overlay.setMap(null));
  overLayRef.current = [];

  stores.forEach(store => {
    const position = new kakao.maps.LatLng(store.lat, store.lng);
    const CustomMarkers = MarkerCustom(store.category);
    const content = `
      <div class="customoverlay">
        <div>
          <p>${store.name}</p>
          <div class="btn_wrap">
          <button class="info_btn">정보 보기</button>
          <button class="close_btn">닫기</button>
          </div>
          <div class="arrow"></div>
        </div>
      </div>
    `;

    const marker = new kakao.maps.Marker({
      map,
      position,
      image: CustomMarkers,
      title: store.name,
    });

    const customOverlay = new kakao.maps.CustomOverlay({
      position,
      content: content,
      yAnchor: 1,
    });

    kakao.maps.event.addListener(marker, "click", () => {
      overLayRef.current.forEach(overlay => overlay.setMap(null));
      customOverlay.setMap(map);
    });

    markersRef.current.push(marker);
    overLayRef.current.push(customOverlay);
  });
}
