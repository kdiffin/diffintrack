import React, {
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

//taken from diffinlist
export default function Input(props: InputProps) {
  return (
    <div
      className={
        props.className +
        " flex w-full items-center  gap-2 rounded-sm bg-indigo-900/20  p-2 shadow-[0_0_2px_1px]  shadow-indigo-900 focus-within:bg-indigo-900/30 focus-within:shadow-[0_0_0_2px] focus-within:shadow-indigo-600/50  hover:bg-indigo-900/30  "
      }
    >
      {props.icon ? props.icon : null}
      <input
        value={props.value || ""}
        type={props.type}
        onChange={(e) => props.setValue(e.target.value)}
        defaultValue={props.defaultValue}
        autoComplete="off"
        id={props.id}
        spellCheck="false"
        name={props.name}
        placeholder={props.placeholder}
        className={`flex w-full items-center justify-center  border-none bg-transparent outline-none placeholder:text-sm placeholder:italic`}
      />
    </div>
  );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  //naming this onchange results in an error
  setValue: Function | Dispatch<React.SetStateAction<string>>;
  customFunction?: boolean;
  icon?: ReactNode;
}
