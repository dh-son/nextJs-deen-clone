import type { IconBaseProps } from "react-icons";

type Props = {
  icon: React.ReactElement<IconBaseProps>;
  onClickIcon?: () => void;
};

export function IconButton({ icon, onClickIcon }: Props) {
  return (
    <div
      className="flex justify-center items-center w-[36px] h-[36px] hover:opacity-45 rounded-full cursor-pointer"
      onClick={onClickIcon}
    >
      {icon}
    </div>
  );
}
