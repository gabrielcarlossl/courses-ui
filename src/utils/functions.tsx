import { format, parseISO } from 'date-fns'

export const FormatDate = (date: string) => {

  return format(parseISO(date), 'MMM dd')
}
