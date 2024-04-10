export interface Location {
  id: number;
  titles: string;
  content: string;
  opened: boolean;
  mask: string;
  towel: string;
  foutain: string;
  locker_room: string;
  schedules: Schedules[]
}

interface Schedules {
  weekdays: string;
  hour: string
}
