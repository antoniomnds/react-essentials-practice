export default function UserInput({children, ...props}) {
  return (
    <p>
      <label htmlFor={children}>{children}</label>
      <input id={children}
             type="number"
             required
             {...props}
      />
    </p>
  );
}