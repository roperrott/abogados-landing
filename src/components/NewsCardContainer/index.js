/* eslint-disable no-nested-ternary */
import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  getDocs, collection, orderBy, query, limit,
} from 'firebase/firestore';
import { NewsCard } from '../NewsCard';
import { db } from '../../firebase';

export function NewsCardContainer() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const newsTemp = [];
      try {
        const querySnapshot = await getDocs(query(collection(db, 'news'), orderBy('date', 'desc'), limit(5)));
        querySnapshot.forEach(
          (doc) => newsTemp.push(
            { ...doc.data(), date: doc.data().date.toDate().toDateString(), id: doc.id },
          ),
        );
        setNews(newsTemp);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, []);

  return (
    <Box sx={{
      width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}
    >
      { loading
        ? (<CircularProgress color="success" sx={{ m: '35vh auto' }} />)
        : news.length > 0
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
          )}
    </Box>
  );
}
