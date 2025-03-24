import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MdClose } from "react-icons/md";
const CustomInput = ({
  icon,
  placeholder,
  type,
  name,
  id,
  value,
  onChange,
  reverseIcon,
  readOnly,
  customStyle,
  options,
  otherOptions,
  select = false,
  setState,
  state,
  containerStyle,
  noInput,
  AdapterOptions,
  AdapterOptionName,
  error,
  errorMessage,
  textArea,
  textAreaRows,
  inputLabel,
  keepOnSelect,
  translatedOptions,
  usestateOption,
}) => {
  const [selectStatus, setSelectStatus] = useState(false);
  const { i18n } = useTranslation();
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSelectStatus(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return (
    <div className="flex flex-col justify-center w-full">
      {inputLabel && (
        <p className="font-semibold leading-3 px-1 py-2">{inputLabel}</p>
      )}
      {/* <div className="flex flex-col justify-center rounded-full"> */}
      <div
        className={`${
          !noInput &&
          `${
            error
              ? "border-red-500 border-[2px]"
              : "border-l-fourth border-[3px]"
          } bg-white w-full h-full`
        }  px-4 py-3 flex w-full items-center relative rounded-lg shadow-md ${containerStyle} ${
          reverseIcon && "flex-row-reverse"
        } ${select && "cursor-pointer"}`}
        onClick={() => {
          !keepOnSelect && select && setSelectStatus(!selectStatus);
        }}
      >
        {icon}
        {textArea ? (
          <textarea
            placeholder={placeholder}
            name={name}
            id={id}
            value={value ?? ""}
            onChange={onChange}
            className={`bg-transparent py-1 px-2 w-full outline-none placeholder:text-white ${customStyle} ${
              select && "cursor-pointer"
            }`}
            rows={textAreaRows ?? 15}
            readOnly={readOnly}
            onClick={() => {
              setSelectStatus(!selectStatus);
            }}
          />
        ) : (
          <input
            type={type}
            //change placeholder color
            className={`bg-transparent py-1 px-2 w-full outline-none placeholder:text-black ${customStyle} ${
              select && "cursor-pointer"
            }`}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            id={id}
            value={value ?? ""}
            readOnly={readOnly}
            onClick={() => {
              setSelectStatus(!selectStatus);
            }}
          />
        )}

        {select && selectStatus && (
          <div
            className="flex justify-end items-center self-center text-med h-[50px] w-[50px]"
            onClick={() => setSelectStatus(false)}
          >
            <MdClose className="hover:rotate-180 hover:scale-125 transition-all duration-300 bg-primary rounded-full p-1" />
          </div>
        )}
        {select && (
          <div
            ref={ref}
            className={`${
              selectStatus ? "scale-100" : "scale-0"
            } z-40 transition-all duration-300 origin-top absolute left-0 top-14 rounded-2xl shadow-2xl drop-shadow-2xl bg-primary backdrop-blur-[21px] text-secondary w-full p-2`}
          >
            {options
              ? options.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-tiny hover:bg-secondary/50 rounded-2xl p-2 transition-all duration-300"
                      onClick={() => {
                        usestateOption
                          ? setState(item)
                          : setState({ ...state, [name]: item });
                      }}
                    >
                      {item}
                    </p>
                  );
                })
              : translatedOptions
              ? translatedOptions.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-tiny hover:bg-secondary/50 rounded-md p-2 transition-all duration-300"
                      onClick={() => {
                        usestateOption
                          ? setState(item)
                          : setState({ ...state, [name]: item.value });
                      }}
                    >
                      {item.lng[i18n.language]}
                    </p>
                  );
                })
              : AdapterOptions
              ? AdapterOptions.ids.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-tiny hover:bg-secondary/50 rounded-md p-2 transition-all duration-300"
                      onClick={() => {
                        usestateOption
                          ? setState(item)
                          : setState({ ...state, [name]: item });
                      }}
                    >
                      {AdapterOptions.entities[item][AdapterOptionName]}
                    </p>
                  );
                })
              : otherOptions}
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default CustomInput;
