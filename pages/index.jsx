import config from '../config.json';
import styled from 'styled-components';

function HomePage() {
  const mensagem = "Bem vindo ao AluraTube";
  const style = { backgroundColor: "red" };
  return (
    <div style={style}>
      <Menu />
      <Header />
      <Timeline playlists={config.playlists}>
        Conteúdo
      </Timeline>
    </div>
  );
}

function Menu() {
  return (
    <div>Menu</div>
  );
}

const StyledHeader = styled.header`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src="banner" alt="" />
      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} alt="Avatar Angela Caldas" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
      Cargo
    </StyledHeader>
  );
}

function Timeline(props) {
  const playlistNames = Object.keys(props.playlists);
  return (
    <section>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map(video => {
                return (
                  <a href={video.url}>
                    <img src={video.thumbnail} />
                    <span>
                      {video.title}
                    </span>
                  </a>);
              })};
            </div>
          </section>
        );
      })}
    </section>
  );
}

export default HomePage;