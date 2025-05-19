
 type FilterType = "day" | "week" | "month";

 interface FilterProps {
  active: FilterType;
  setActive: (filter: FilterType) => void;
}


export { FilterType, FilterProps };