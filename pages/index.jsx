import { useEffect, useState } from 'react';
import config from '../config.json';
import styled from 'styled-components';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';
import { supabase, videoService } from '../src/services/videoService';
import { DeleteButton } from '../src/components/Alert';
import { Footer } from '../src/components/Footer';

function HomePage() {
  const service = videoService();
  const [filterValue, setFilterValue] = useState('');
  const [playlists, setPlaylists] = useState({});


  useEffect(() => {
    service.getAllVideos()
      .then((response) => {
        const newPlaylists = { ...playlists };
        response.data.forEach((video) => {
          if (!newPlaylists[video.playlist]) {
            newPlaylists[video.playlist] = [];
          }
          newPlaylists[video.playlist].push(video);
        });
        setPlaylists(newPlaylists);
      });
  }, []);

  return (
    <div>
      <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
      <Header />
      <Timeline searchValue={filterValue} playlists={playlists} setPlaylists={setPlaylists} />
    </div>
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
    & > div {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
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
      <section className='user-info'>
        <img className="user-avatar" src={`https://github.com/${config.github}.png`} alt="Avatar Angela Caldas" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
          <Footer />
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists);
  const [videos, setVideos] = useState([]);
  const service = videoService();

  function update() {
    supabase.from('video')
      .select('*')
      .then(response => {
        setVideos(response.data);
      });
  }

  useEffect(() => {
    update();
  }, []);

  function handleDelete(id) {
    service.deleteVideo(id);
  }

  supabase
    .channel('*')
    .on('postgres_changes', { event: '*', schema: '*' }, update)
    .subscribe();

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div className='video-container'>
              {
                videos.filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                }).map(video => {
                  if (video.playlist === playlistName) {
                    return (
                      <div key={video.title} >
                        <a href={video.url} target="_blank">
                          <img src={video.thumbnail} />
                          <span>
                            {video.title}
                          </span>
                        </a>
                        <DeleteButton handleDelete={() => handleDelete(video.id)} />
                      </div >
                    );
                  }
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

export default HomePage;