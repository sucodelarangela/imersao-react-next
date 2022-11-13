import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from '@supabase/supabase-js';

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
      let src;
      if (values.url.startsWith('https://youtu.be/')) {
        src = values.url.split('be/')[1];
      } else {
        let imgUrl = values.url.split('?v=');
        src = imgUrl[1].split('&')[0];
      }
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

// SUPABASE CLIENT
const PROJECT_URL = 'https://gfpeazzijxwpjymtssze.supabase.co';
const PUBLIC_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmcGVhenppanh3cGp5bXRzc3plIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyOTU2MzMsImV4cCI6MTk4Mzg3MTYzM30.AGA-9Gzh9hj01SSfL9noAxRQWLh91EoSpHkeoBn7Mko';
const supabase = createClient(PROJECT_URL, PUBLIC_ANON_KEY);

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
          supabase.from('video').insert({
            // o supabase converte automaticamente para json
            title: formRegister.values.title,
            url: formRegister.values.url,
            thumbnail: `https://i.ytimg.com/vi/${formRegister.values.img}/hqdefault.jpg`,
            playlist: 'Front-End (React)'
          })
            .then((oqueveio) => {
              console.log(oqueveio);
            })
            .catch((err) => {
              console.log(err);
            });
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
            {formRegister.values.img ? <img src={`https://i.ytimg.com/vi/${formRegister.values.img}/hqdefault.jpg`} alt="" /> : <img src='https://t.ctcdn.com.br/8Q_WlNjbkUhra-4MBBWOIzAo0g0=/512x288/smart/filters:format(webp)/i533291.png' alt="" />
            }
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
};
