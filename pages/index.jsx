import Head from 'next/head';
import { useState } from 'react';
import config from '../config.json';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from './theme';

import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

function HomePage() {
  const [filterValue, setFilterValue] = useState('');
  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme ? lightMode : darkMode}>
      <Head>
        <title>AluraTube</title>
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <CSSReset />
      <div>
        <Menu filterValue={filterValue} setFilterValue={setFilterValue} theme={theme} setTheme={setTheme} />
        <Header />
        <Timeline searchValue={filterValue} playlists={config.playlists}>
          Conteúdo
        </Timeline>
      </div>
    </ThemeProvider >
  );
};

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  color: ${({ theme }) => theme.textColorBase};
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

const StyledBanner = styled.div`
  background: url(${config.bg}) center;
  background-size: cover;
  min-height: 230px;
  height: 25vw;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner />
      {/* <img className='banner' src="/banner.png" alt="" aria-hidden='true' /> */}
      <section className='user-info'>
        <img className="user-avatar" src={`https://github.com/${config.github}.png`} alt="Avatar Angela Caldas" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {
                videos.filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                }).map(video => {
                  return (
                    <a href={video.url} key={video.title} target="_blank">
                      <img src={video.thumbnail} />
                      <span>
                        {video.title}
                      </span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

export default HomePage;