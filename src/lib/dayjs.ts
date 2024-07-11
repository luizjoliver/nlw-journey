import "dayjs/locale/pt-BR"
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat"

dayjs.locale('pt-BR')
dayjs.extend(localizedFormat)

export {dayjs}