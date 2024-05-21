export interface DayValues {
  completed: number;
  planned: number;
}

export interface QuotaTopic {
  name: string;
  daysValues: DayValues[];
  icon: string;
  quota: number;
  weekComment?: string; // Optional property
}