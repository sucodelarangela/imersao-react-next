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
    handleImage() {
      let imgUrlPattern = new RegExp('(?<=v=)(.*?)(?=&ab)');
      let src = values.url.match(imgUrlPattern);
      setValues({ ...values, img: src });
    },
    clearForm() {
      setValues({
        title: '',
        url: '',
        img: ''
      });
    }
  };
};

export const RegisterVideo = () => {
  const formRegister = useForm({
    initialValues: { title: '', url: '', img: '' }
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
            <button type='button' className="view-thumb" onClick={formRegister.handleImage}>Ver thumbnail</button>
            <button type="submit">Cadastrar</button>
            {formRegister.values.img ? <img src={`https://i.ytimg.com/vi/${formRegister.values.img[0]}/hqdefault.jpg`} alt="" /> : ''
            }
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
};
