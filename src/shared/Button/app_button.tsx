import { Shadow } from "@shared/types";
import React from "react";
import Ripples from "react-ripples";

type ButtonAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface AppButtonProps extends ButtonAttributes {
  height?: string;
  width?: string;
  bgColor?: string;
  textColor?: string;
  text?: string;
  remixicon?: string;
  border?: string;
  borderColor?: string;
  loading?: boolean;
  shadow?: Shadow;
  shadowColor?: string;
  ocult?: string;
}

const AppButton: React.FC<AppButtonProps> = (props) => {
  const {
    height = "h-10",
    width = "w-full",
    bgColor = "bg-primary",
    textColor = "text-black",
    border = "border",
    borderColor = "border-secondary",
    text,
    remixicon,
    disabled,
    shadowColor = "",
    shadow = "",
    loading,
    ocult = "flex",
    ...rest
  } = props;

  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div
      className={classNames(
        height,
        width,
        ocult,
        "items-center justify-center"
      )}
    >
      <Ripples
        className={classNames(
          bgColor,
          border,
          borderColor,
          shadow,
          shadowColor,
          disabled ? "bg-opacity-75" : "hover:opacity-80 cursor-pointer",
          "rounded-md w-full h-full flex items-center justify-center"
        )}
      >
        <button
          disabled={disabled}
          style={{ letterSpacing: "0.0892857143em" }}
          className="flex items-center flex-row flex-nowrap justify-center gap-1 w-full h-full"
          {...rest}
        >
          {!loading && (
            <>
              {remixicon && <i className={classNames(remixicon, textColor)} />}
              {text && <span className={classNames(textColor)}>{text}</span>}
            </>
          )}
          {loading && (
            <i
              className={classNames("ri-loader-5-fill animate-spin", textColor)}
            />
          )}
        </button>
      </Ripples>
    </div>
  );
};

export default AppButton;
