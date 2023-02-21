// Declare ButtonPropTypes
import { HexColor } from "../../modules/HexColor";

type ButtonPropType = {
  textColor: HexColor;
  backgroundColor: HexColor;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

export default function NaiveButton(NaiveButtonProps: ButtonPropType) {
  return (
    <button
      className={`flex flex-row gap-2 px-4 py-2 rounded-lg text-base font-semibold justify-center items-center`}
      style={{
        backgroundColor: NaiveButtonProps.backgroundColor.color,
        color: NaiveButtonProps.textColor.color,
      }}
      onClick={NaiveButtonProps.onClick}
    >
      {NaiveButtonProps.children}
    </button>
  );
}
