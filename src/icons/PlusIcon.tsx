interface Props {
  className?: string;
}

export const PlusIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="36"
      height="30"
      viewBox="0 0 36 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="18.2559" cy="15" rx="17.5833" ry="15" fill="#FFCE7F" />
      <path
        d="M17.0837 14V8H19.4281V14H26.4614V16H19.4281V22H17.0837V16H10.0503V14H17.0837Z"
        fill="white"
      />
    </svg>
  );
};
