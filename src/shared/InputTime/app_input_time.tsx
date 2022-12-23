import { BorderStyle, Shadow } from "@shared/types";
import React, { useState } from "react";
import ClickOutSideComponent from "../../hooks/useClickOutside";

type DivAttributes = React.HTMLAttributes<HTMLDivElement>;
interface AppInputTimeProps extends DivAttributes {
  label?: string;
  labelColor?: string;
  labelFontSize?: string;
  orientation?: "horizontal" | "vertical";
  bgColor?: string;
  textColor?: string;
  required?: boolean;
  onChangeText?: (time: string) => void;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: BorderStyle;
  hoverBorderColor?: string;
  focusBorderColor?: string;
  helpText?: string;
  helpTextColor?: string;
  helpTextClassname?: string;
  shadow?: Shadow;
  width?: string;
  id?: string;
  shadowColor?: string;
  disabled?: boolean;
}

const AppInputTime: React.FC<AppInputTimeProps> = (props) => {
  const {
    shadow = "shadow",
    shadowColor = "shadow-primary",
    label,
    labelColor = "text-black",
    labelFontSize = "text-sm",
    id,
    borderColor = "",
    borderWidth = "border",
    borderStyle = "border-solid",
    hoverBorderColor = "hover:border-primary",
    focusBorderColor = "focus:border-primary",
    width = "w-full",
    orientation = "vertical",
    bgColor = "bg-white",
    textColor = "text-black",
    helpText = "",
    helpTextColor = "text-red-600",
    helpTextClassname = "",
    disabled = false,
    required = false,
    onChangeText,
  } = props;
  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(" ");
  };

  const getHours = () => {
    const hours: number[] = [];
    for (let i = 0; i < 24; i += 1) {
      hours.push(i);
    }
    return hours;
  };

  const getMinutes = () => {
    const minutes: number[] = [];
    for (let i = 0; i < 60; i += 1) {
      minutes.push(i);
    }
    return minutes;
  };

  const addZero = (item: number) => {
    const numero = String(item);
    return numero.length === 1 ? `0${numero}` : numero;
  };

  const [hour, setHour] = useState<string>("00");
  const [minute, setMinute] = useState<string>("00");
  const [open, setOpen] = useState<boolean>(false);
  const isRow = orientation === "horizontal";
  return (
    <ClickOutSideComponent
      callback={() => setOpen(false)}
      className={classNames(width, "flex flex-col items-start")}
    >
      <div
        className={classNames(
          "w-full flex flex-nowrap justify-start items-start",
          isRow ? "flex-row" : "flex-col"
        )}
      >
        <div className="flex flex-row gap-1 my-1 h-8">
          {label && (
            <label
              className={classNames(
                labelColor,
                labelFontSize,
                isRow ? "w-32" : "",
                "whitespace-nowrap",
                "font-medium"
              )}
              htmlFor={id}
            >
              {label}
              {required && <span className="text-red-600 pl-1">*</span>}
            </label>
          )}
        </div>
        <div className="flex flex-col w-full rounded-md">
          <div
            onClick={() => setOpen(true)}
            className={classNames(
              "w-full flex flex-nowrap rounded-md",
              "transition-all duration-300",
              hoverBorderColor,
              focusBorderColor,
              helpText !== ""
                ? "shadow shadow-red-600 border-red-600 border"
                : classNames(
                    shadow,
                    shadowColor,
                    borderColor,
                    borderStyle,
                    borderWidth
                  )
            )}
          >
            <div className="w-full flex flex-nowrap relative rounded-md">
              <button
                className={classNames(
                  "w-full h-9 rounded-l-md text-left pl-3",
                  disabled ? "bg-gray-300" : bgColor,
                  textColor
                )}
              >
                {hour + " : " + minute}
              </button>
              {open && (
                <div className="w-20 bg-white  absolute right-0 top-[36px] z-[730] rounded-sm shadow-2xl shadow-black flex flex-row">
                  <div className="scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent py-2 pr-2 max-h-64 overflow-y-scroll flex flex-col w-full items-center">
                    {getHours().map((item, i) => {
                      return (
                        <span
                          key={item + i + "hours"}
                          onClick={() => {
                            setHour(addZero(item));
                            if (onChangeText) {
                              onChangeText(`${addZero(item)}:${minute}`);
                            }
                          }}
                          className="hover:bg-gray-300 w-full flex justify-center text-sm"
                        >
                          {addZero(item)}
                        </span>
                      );
                    })}
                  </div>
                  <div className="scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent py-2 pr-2 max-h-64 overflow-y-scroll flex flex-col w-full items-center">
                    {getMinutes().map((item, i) => {
                      return (
                        <span
                          key={item + i + "minutes"}
                          onClick={() => {
                            setMinute(addZero(item));
                            if (onChangeText) {
                              onChangeText(`${hour}:${addZero(item)}`);
                            }
                          }}
                          className="hover:bg-gray-300 w-full flex justify-center text-sm"
                        >
                          {addZero(item)}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="w-10 bg-gray-300 flex items-center justify-center rounded-r-md">
              <i className="ri-time-line" />
            </div>
          </div>
          <div
            className={classNames(
              helpTextColor,
              helpTextClassname,
              "caption mt-1 h-4 font-bold"
            )}
          >
            {helpText}
          </div>
        </div>
      </div>
    </ClickOutSideComponent>
  );
};

export default AppInputTime;
