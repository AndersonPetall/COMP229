export interface Event {
  id: number;
  imageUrl: string;
  type: string;
  description: string;
  startDay: string;
  endDay: string;
  contestants: string[];
  last: Boolean;
}
