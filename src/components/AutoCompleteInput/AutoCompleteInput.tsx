import { useState } from "react";
import { BusStop } from "../../store/slice";

import "./AutoCompleteInput.css";

interface AutoCompleteInputProps {
  placeholder: string;
  list: BusStop[];
  selectedStopId: string;
  onChange: (item: string) => void;
}

const AutoCompleteInput = (props: AutoCompleteInputProps) => {
  const [value, setValue] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const filterFunction = (inputValue: string) => {
    return props.list.filter(
      (value) =>
        value.name.toLocaleLowerCase().indexOf(inputValue.toLocaleLowerCase()) >
        -1
    );
  };

  const onSelectItem = (event: React.MouseEvent<HTMLLIElement>, id: string) => {
    setValue(event.currentTarget.textContent ?? "");
    props.onChange(id);
    setShowSuggestion(false);
  };

  const getSuggestionList = () => {
    if (showSuggestion) {
      const filteredItems = filterFunction(value);
      return (
        <ul className="suggestions">
          {filteredItems.map((item) => {
            return (
              <li
                className="suggestionItem"
                key={item.id}
                onClick={(event) => {
                  onSelectItem(event, item.id);
                }}
              >{`${item.name} - ${item.localizedName}`}</li>
            );
          })}
        </ul>
      );
    } else {
      return <div></div>;
    }
  };

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    setValue(inputValue);
    setShowSuggestion(inputValue.length > 0);
  };

  return (
    <div className="AutoCompleteInput">
      <input
        type="search"
        className="AutoCompleteInput-Input"
        placeholder={props.placeholder}
        value={value}
        onChange={onInputChange}
      />
      {getSuggestionList()}
    </div>
  );
};

export default AutoCompleteInput;
