import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { NewsCard } from '../NewsCard';
import { db } from '../../firebase';

export function NewsCardContainer() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const newsTemp = [];
      const querySnapshot = await getDocs(collection(db, 'news'));
      querySnapshot.forEach(
        (doc) => newsTemp.push(
          { ...doc.data(), date: doc.data().date.toDate().toDateString(), id: doc.id },
        ),
      );
      setNews(newsTemp);
    };
    getNews();
  }, []);
  console.log(news);
  return (
    <Box sx={{
      width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}
    >
      {
        news.length > 0
          ? (news.map((data) => (
            <NewsCard
              key={data.id}
              title={data.title}
              subtitle={data.date}
              content={data.body}
            />
          )))
          : (
            <Box className="not-found-container">
              <Typography variant="h2" color="secondary" sx={{ pt: '200px', textAlign: 'center' }}>Aún no hay noticias disponibles</Typography>
            </Box>
          )
            }
    </Box>
  );
}
