import config from '../config.json';
import styled from 'styled-components';

import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

function HomePage() {
  const mensagem = "Bem vindo ao AluraTube";
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}

const StyledHeader = styled.header`
  .banner {
    width: 100%;
    height: auto;
    min-height: 200px;
    max-height: 25vw;
    object-fit: cover;
    margin-top: 50px;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
    & .user-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img className='banner' src="/banner.png" alt="" aria-hidden='true' />
      <section className='user-info'>
        <img class="user-avatar" src={`https://github.com/${config.github}.png`} alt="Avatar Angela Caldas" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(props) {
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.map(video => {
                return (
                  <a href={video.url} key={video.title}>
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
    </StyledTimeline>
  );
}

export default HomePage;