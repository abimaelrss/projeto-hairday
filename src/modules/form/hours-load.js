import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora
    const [schedulesHour] = hour.split(":");

    // Adiciona a hora na data e verifica se ela está no passado
    const isHourPast = dayjs(date).add(schedulesHour, "hour").isAfter(dayjs());

    // Define se o horário está disponível
    return {
      hour,
      available: isHourPast,
    };
  });

  console.log(opening);
}
