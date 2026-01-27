import Image from "next/image";
import Calendar from "@/components/feature/calendar/Calendar";
import { DevideBar } from "./components/DevideBar";

export default function Reservation() {
  return (
    <section className="mt-section-sm-top lg:mt-section-lg-top">
      <div className="m-auto w-full max-w-[700px]">
        <p className="text-md font-bold md:text-xl lg:text-2xl">예약하기</p>
        <div className="bg-main-100 mt-7 flex items-center gap-7 rounded-md px-4 py-7">
          <Image src="/image/page/reservation-img.png" alt="" width={50} height={50}></Image>
          <p className="md:text-md text-base font-semibold">
            사장님이 예약 확정 시 약속한 날짜에 이용 가능합니다. <br />
            매장에 도착해서 “OOO(닉네임)으로 예약했어요.”라고 말해주세요!
          </p>
        </div>
        <DevideBar />
        <div>
          <div className="flex items-center gap-4">
            <Image src="/image/page/reservation-img2.png" alt="" width={38} height={33}></Image>
            <p className="md:text-md text-base font-semibold">날짜와 시간을 선택해 주세요.</p>
          </div>
          <div className="mt-9">
            <Calendar />
          </div>
        </div>
      </div>
    </section>
  );
}
