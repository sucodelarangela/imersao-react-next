import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(formProps) {
  const [values, setValues] = useState(formProps.initialValues);

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({ ...values, [name]: value });
    },
    clearForm() {
      setValues({
        title: '',
        url: ''
      });
    }
  };
};

export const RegisterVideo = () => {
  const formRegister = useForm({
    initialValues: { title: '', url: '' }
  });
  const [formIsVisible, setFormIsVisible] = useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormIsVisible(true)}>+</button>
      {formIsVisible ? (
        <form onSubmit={(e) => {
          e.preventDefault();
          // Aqui faremos o cadastro do vídeo
          setFormIsVisible(false);
          formRegister.clearForm();
        }}>
          <div>
            <button type='button' className="close-modal" onClick={() => setFormIsVisible(false)}>X</button>
            <input
              type="text"
              placeholder="Título do vídeo"
              name='title'
              value={formRegister.values.title}
              onChange={formRegister.handleChange}
              required
            />
            <input
              type="text"
              placeholder="URL"
              name='url'
              value={formRegister.values.url}
              onChange={formRegister.handleChange}
              required
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
};
