import dayjs from 'dayjs';

function dayjs2string(date?: string | number | dayjs.Dayjs | Date | null): string {
  return !!date
    ? dayjs(date)
        .toDate()
        .toLocaleString('hu-HU', { year: 'numeric', month: '2-digit', day: '2-digit' })
        .replaceAll('.', '')
        .replaceAll(' ', '-')
    : '';
}

export default dayjs2string;
