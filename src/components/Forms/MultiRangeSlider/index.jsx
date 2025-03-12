import React, { useCallback, useEffect, useState, useRef } from "react";
import "./MultiRangeSlider.css";
import { numberWithComma } from "../../../helpers/numberComma";
import { useSelector } from "react-redux";
import {
  selectCurrentCurrency,
  selectCurrentUnit,
} from "../../../redux/websiteSettings.slice";
import CustomInput from "../CustomInput";

const MultiRangeSlider = ({
  min,
  max,
  minVal,
  setMinVal,
  maxVal,
  setMaxVal,
  textColor,
  unit,
  price,
}) => {
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  const currentCurrency = useSelector(selectCurrentCurrency);
  const currentUnit = useSelector(selectCurrentUnit);
  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className="flex items-center justify-center relative">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb z-20"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb z-20"
      />

      <div className="relative w-[200px]">
        <div className="absolute rounded-sm h-[5px] z-10 bg-[#ced4da] w-full" />
        <div
          ref={range}
          className="absolute rounded-sm h-[5px] bg-secondary z-10"
        />
        <div
          className={`absolute ${
            textColor ?? "text-primary"
          } text-[14px] mt-5 left-[6px]`}
        >
          <CustomInput
            type="number"
            containerStyle={"max-w-[95px] bg-primary/60 text-white !p-0"}
            value={minVal}
            onChange={(e) => {
              const val = e.target.value;

              if (val > max) {
                setMinVal(max);
                minValRef.current = max;
              } else if (val < min) {
                setMinVal(min);
                minValRef.current = min;
              } else {
                setMinVal(val);
                minValRef.current = val;
              }
            }}
          />
          {/* {price
            ? numberWithComma(minVal * currentCurrency.conversionRate)
            : unit
            ? numberWithComma(minVal * currentUnit.conversionRate)
            : minVal} */}
        </div>
        <div
          className={`absolute ${
            textColor ?? "text-primary"
          } text-[14px] mt-5 -right-1`}
        >
          <CustomInput
            type="number"
            containerStyle={"max-w-[95px] bg-primary/60 text-white !p-0"}
            value={maxVal}
            onChange={(e) => {
              const val = e.target.value;

              if (val > max) {
                setMaxVal(max - 1);
                maxValRef.current = max - 1;
              } else if (val < min) {
                setMaxVal(min - 1);
                maxValRef.current = min - 1;
              } else {
                setMaxVal(val);
                maxValRef.current = val;
              }
            }}
          />
          {/* {price
            ? numberWithComma(maxVal * currentCurrency.conversionRate)
            : unit
            ? numberWithComma(maxVal * currentUnit.conversionRate)
            : maxVal} */}
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
