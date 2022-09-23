import { useState } from "react";
import { Select, SelectOption } from "./Select";

const selectOptions = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 },
  { label: "Four", value: 4 },
  { label: "Five", value: 5 },
  { label: "Six", value: 6 },
  { label: "Seven", value: 7 },
  { label: "Eight", value: 8 },
  { label: "Nine", value: 9 },
  { label: "Ten", value: 10 },
  { label: "Eleven", value: 11 },
  { label: "Twelve", value: 12 },
  { label: "Thirteen", value: 13 },
];

function App() {
  const [value, setValue] = useState<SelectOption | undefined>(
    selectOptions[0]
  );
  const [altValue, setAltValue] = useState<SelectOption[]>([selectOptions[0]]);

  return (
    <>
      <Select
        options={selectOptions}
        value={value}
        onChange={(option) => setValue(option)}
      />
      <Select
        multiple
        options={selectOptions}
        value={altValue}
        onChange={(option) => setAltValue(option)}
      />
    </>
  );
}

export default App;
