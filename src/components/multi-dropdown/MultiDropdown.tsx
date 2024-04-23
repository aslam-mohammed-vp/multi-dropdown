import { useEffect, useRef, useState } from "react";
import "./MultiDropDown.css";
import { states } from "./States";

const MultiDropdown = () => {
  const [isDropDownDisplayed, setIsDropdownDisplayed] = useState(false);
  const [selectedState, setSelectedState] = useState<Record<string, boolean>>(
    states.reduce((obj, state) => ({ ...obj, [state.abbreviation]: false }), {})
  );

  const numberofStateSelected =
    Object.values(selectedState).filter(Boolean).length;

  const dropdownRef = useRef(null);

  const onClick = (e: any) => {
    if (e.target !== dropdownRef.current) {
      setIsDropdownDisplayed(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <fieldset className="dropdown">
      <button
        onClick={(e) => {
          setIsDropdownDisplayed((preState) => !preState);
          e.stopPropagation();
        }}
      >
        {numberofStateSelected > 0
          ? `${numberofStateSelected} state selected`
          : "Select your states"}
      </button>
      {isDropDownDisplayed && (
        <div
          className="panel"
          ref={dropdownRef}
          onClick={(e) => e.stopPropagation()}
        >
          {states.map((state) => (
            <fieldset
              key={state.abbreviation}
              className={selectedState[state.abbreviation] ? "selected" : ""}
            >
              <input
                id={`input-${state.abbreviation}`}
                type="checkbox"
                onChange={(e) =>
                  setSelectedState({
                    ...selectedState,
                    [state.abbreviation]: e.target.checked,
                  })
                }
                checked={selectedState[state.abbreviation]}
              />
              <label htmlFor={`input-${state.abbreviation}`}>
                {state.name}
              </label>
            </fieldset>
          ))}
        </div>
      )}
    </fieldset>
  );
};

export default MultiDropdown;
