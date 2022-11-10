import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

export const RegisterVideo = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormIsVisible(true)}>+</button>
      {formIsVisible ? (
        <form action="">
          <div>
            <button className="close-modal" onClick={() => setFormIsVisible(false)}>X</button>
            <input type="text" placeholder="Título do vídeo" />
            <input type="text" placeholder="URL" />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
};
