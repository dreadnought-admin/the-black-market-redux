import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spotify from 'react-spotify-embed';
import { RecordsContext } from '../global/RecordsProvider';
import { Record as RecordType } from '../types';

const RecordDetail: React.FC = () => {

  const { records, setRecords } = useContext(RecordsContext);

  const [recordDetail, setRecordDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/records/${id}`)
    .then((r) => r.json())
    .then((details) => {
      setRecordDetail(details)
    })
  }, [])

  const { user, genre_id, album_name, 
    artist_name, album_cover, condition, 
    release_date, release_description, record_labels, 
    spotify_link, price } = recordDetail


  return (
    <section>
      <img alt="album cover" height="400" width="400px" src={album_cover}/>
      <h2>{album_name}</h2>
      <h3>{artist_name}</h3>
      <div>
        <p>{release_description}</p>
        <p>${price}</p>
      </div>
    </section>
  )
}

export default RecordDetail