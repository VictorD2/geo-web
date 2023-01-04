import React from "react";
import { BorderStyle, FontSizeText, Shadow } from "@shared/types";

type InputAttributes = React.InputHTMLAttributes<HTMLInputElement>;

interface AppInputTextProps extends InputAttributes {
  width?: string;
  label?: string;
  labelColor?: string;
  labelFontSize?: FontSizeText;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: BorderStyle;
  hoverBorderColor?: string;
  focusBorderColor?: string;
  orientation?: "horizontal" | "vertical";
  helpText?: string;
  helpTextColor?: string;
  helpTextClassname?: string;
  bgColor?: string;
  textColor?: string;
  shadow?: Shadow;
  shadowColor?: string;
  remixicon?: string;
  responsiveIcon?: string;
  eventResponsiveIcon?: () => void;
}

const AppInputText: React.FC<AppInputTextProps> = (props) => {
  const {
    value,
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
    borderColor = "",
    borderWidth = "border",
    borderStyle = "border-solid",
    hoverBorderColor = "hover:border-primary",
    focusBorderColor = "focus:border-primary",
    orientation = "vertical",
    bgColor = "bg-white",
    textColor = "text-black",
    remixicon,
    helpText = "",
    helpTextColor = "text-red-600",
    helpTextClassname = "",
    responsiveIcon,
    disabled,
    eventResponsiveIcon,
    ...rest
  } = props;

  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(" ");
  };

  const handleEventResponsiveIcon = () => {
    if (eventResponsiveIcon) {
      eventResponsiveIcon();
    }
  };

  const isRow = orientation === "horizontal";

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
            "w-full flex flex-nowrap rounded-md flex-row",
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
          <div className="w-full flex flex-nowrap relative">
            <input
              className={classNames(
                className,
                disabled ? "bg-gray-300" : bgColor,
                textColor,
                "px-3 py-1 focus:outline-none appearance-none w-full",
                remixicon ? "rounded-l-md" : "rounded-md"
              )}
              value={value}
              name={name}
              id={id}
              disabled={disabled}
              type="text"
              {...rest}
            />
            <i
              onClick={handleEventResponsiveIcon}
              className={classNames(
                "w-1 absolute lg:hidden md:hidden my-auto top-[5px] right-6",
                responsiveIcon ? responsiveIcon : ""
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

export default AppInputText;
