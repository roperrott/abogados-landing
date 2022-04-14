/* eslint-disable no-nested-ternary */
import {
  Box, Button, CircularProgress, Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import {
  getDocs, collection, orderBy, query, limit, startAfter,
} from 'firebase/firestore';
import { NewsCard } from '../NewsCard';
import { db } from '../../firebase';

export function NewsCardContainer() {
  const [news, setNews] = useState([]);
  const [lastNews, setLastNews] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const newsTemp = [];
      try {
        const querySnapshot = await getDocs(query(collection(db, 'news'), orderBy('date', 'desc'), limit(5)));
        querySnapshot.forEach(
          (doc) => newsTemp.push(
            { ...doc.data(), date: doc.data().date.toDate().toLocaleString('es-AR', options), id: doc.id },
          ),
        );
        const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

        setLastNews(lastVisible);
        setNews(newsTemp);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, []);

  const fetchMore = async () => {
    const newsTemp = [];
    setLoadingMore(true);
    try {
      const querySnapshot = await getDocs(query(collection(db, 'news'), orderBy('date', 'desc'), startAfter(lastNews), limit(5)));
      querySnapshot.forEach(
        (doc) => newsTemp.push(
          { ...doc.data(), date: doc.data().date.toDate().toLocaleString('es-AR', options), id: doc.id },
        ),
      );
      const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

      setLastNews(lastVisible);
      setNews([...news, ...newsTemp]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <Box sx={{
      width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}
    >
      { loading
        ? (<CircularProgress color="success" size={30} sx={{ m: '24vh auto' }} />)
        : news.length > 0
          ? (news.map((data) => (
            <NewsCard
              key={data.id}
              title={data.title}
              subtitle={data.date}
              content={data.body}
            />
          ))
          )
          : (
            <Box className="not-found-container">
              <Typography variant="h2" color="secondary" sx={{ pt: '140px', textAlign: 'center' }}>Aún no hay noticias disponibles</Typography>
            </Box>
          )}
      { loadingMore
        ? (<CircularProgress color="success" size={20} sx={{ m: '12px auto' }} />)
        : !!news.length > 0 && (
          <Button
            variant="text"
            size="small"
            style={{
              fontSize: 16, padding: '0px 24px', borderRadius: 28, margin: 12, color: '#333333',
            }}
            onClick={fetchMore}
            disabled={loadingMore}
          >
            Ver más
          </Button>
        )}
    </Box>
  );
}
