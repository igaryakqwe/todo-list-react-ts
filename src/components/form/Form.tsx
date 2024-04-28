import { FC, useState } from 'react';

interface FormProps {
  addTodo: (text: string) => void;
}

const Form: FC<FormProps> = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const trimmedValue = value.trim();
    if (trimmedValue) {
      addTodo(trimmedValue);
      setValue('');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setValue(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange}/>
    </form>
  )
}

export default Form;