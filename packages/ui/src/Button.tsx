interface Props {
  primary?: boolean;
  size?: 'small' | 'large';
  label?: string;
}

export const Button = ({
  primary = false,
  label = 'Boop',
  size = 'small',
}: Props) => {
  return (
    <button
      className={`
        ${primary ? 'ui-bg-red-500' : 'ui-bg-blue-500'}
        ${size === 'large' ? 'text-lg' : 'text-base'}
      `}
    >
      {label}
    </button>
  );
};
