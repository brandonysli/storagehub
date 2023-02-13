// Declare ButtonPropTypes
type ButtonPropType = {
    radius: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    color: 'red' | 'orange' | 'yellow' | 'blue';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
  };

export default function Button(ButtonProps: ButtonPropType) {

  // flexibility in client button (cornerRadius, buttonColor)
  let cornerRadius = `rounded-${ButtonProps.radius}`
  let buttonColor = `bg-${ButtonProps.color}-200`

  return (
    <button 
      className={`flex flex-row gap-2 w-min px-2 py-1 ${cornerRadius} ${buttonColor}`} 
      onClick={ButtonProps.onClick}>
          {ButtonProps.children}
    </button>
  )
}