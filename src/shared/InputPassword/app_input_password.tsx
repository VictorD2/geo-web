import React, { useState } from "react";
import { BorderStyle, FontSizeText, Shadow } from "../types";

type InputAttributes = React.InputHTMLAttributes<HTMLInputElement>;

interface AppInputPasswordProps extends InputAttributes {
  width?: string;
  label?: string;
  labelColor?: string;
  labelFontSize?: FontSizeText;
  borderColor?: string;
  hoverBorderColor?: string;
  focusBorderColor?: string;
  borderWidth?: string;
  borderStyle?: BorderStyle;
  orientation?: "horizontal" | "vertical";
  helpText?: string;
  helpTextColor?: string;
  helpTextClassname?: string;
  bgColor?: string;
  textColor?: string;
  shadow?: Shadow;
  shadowColor?: string;
  remixicon?: string;
  eyeColor?: string;
}
const AppInputPassword: React.FC<AppInputPasswordProps> = (props) => {
  const {
    value,
    eyeColor = "text-secondary",
    required,
    name,
    id,
    width = "w-full",
    className = "",
    shadow = "shadow",
    shadowColor = "shadow-primary",
    labelColor = "text-black",
    label,
    labelFontSize = "text-sm",
    orientation = "vertical",
    bgColor = "bg-white",
    textColor = "text-black",
    remixicon,
    helpText = "",
    helpTextColor = "text-red-600",
    helpTextClassname = "",
    borderColor = "",
    borderWidth = "border",
    borderStyle = "border-solid",
    hoverBorderColor = "hover:border-primary",
    focusBorderColor = "focus:border-primary",
    disabled,
    ...rest
  } = props;

  const [type, setType] = useState<"password" | "text">("password");

  const handleChangeTypeInput = () => {
    setType(isPassword ? "text" : "password");
  };

  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(" ");
  };

  const isRow = orientation === "horizontal";
  const isPassword = type === "password";

  return (
    <div
      className={classNames(
        width,
        "flex flex-nowrap justify-start items-start",
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
      <div className="flex flex-col w-full">
        <div
          className={classNames(
            "flex flex-row w-full flex-nowrap rounded-md",
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
          <div className="relative flex w-full">
            <input
              className={classNames(
                className,
                hoverBorderColor,
                focusBorderColor,
                bgColor,
                textColor,
                disabled ? "bg-gray-300" : bgColor,
                remixicon ? "rounded-l-md" : "rounded-md",
                "px-3 py-1 w-full focus:outline-none appearance-none"
              )}
              value={value}
              name={name}
              id={id}
              type={type}
              disabled={disabled}
              {...rest}
            />
            <i
              onClick={handleChangeTypeInput}
              className={classNames(
                "w-1 absolute my-auto top-[5px] right-6",
                eyeColor,
                isPassword ? "ri-eye-line" : "ri-eye-off-line"
              )}
            />
          </div>
          {remixicon && (
            <div className="w-10 bg-gray-300 flex items-center justify-center rounded-r-md">
              <i className={remixicon} />
            </div>
          )}
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
  );
};

export default AppInputPassword;
