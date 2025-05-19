
export type FilterType = "day" | "week" | "month";

export interface FilterProps {
  active: FilterType;
  setActive: (filter: FilterType) => void;
}

