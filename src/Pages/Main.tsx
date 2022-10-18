import { useState, useEffect, useCallback } from "react";
import {observer} from "mobx-react";
import {Grid, CircularProgress, Card, CardActions, CardContent, CardMedia, Button, Typography, Pagination, Stack} from '@mui/material';
import {store} from '../store/index';
import { Link } from "react-router-dom";
import SearchByText from "../Components/SearchByText";
import SearchByCategory from "../Components/SearchByCategory";
import { BookType, BooksListType } from "../store/types";

const Main = () => {

    const { text, category, page } = store;
    const [books, setBooks] = useState<BookType[]>([]);
    const [countBooks, setCountBooks] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            const startIndex = page * 6 - 6;
            const data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(text)}${category && `+incategories:${category}`}&maxResults=6&startIndex=${startIndex}`);
            const result: BooksListType = await data.json();        
            setCountBooks(result.totalItems);
            setBooks(result.items);
        }
        fetchData();
    }, [text, category, page]);

    const changePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        store.nextPage(value);
    }
    
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <SearchByText />
                </Grid>
                <Grid item md={6}>
                    <SearchByCategory />
                </Grid>
            </Grid>

            <div className="books-list">
                {books.length 
                    ? <Grid container spacing={2}>
                        {books && books.map((book:BookType, key) =>
                            <Grid item md={4} key={key}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={book.volumeInfo.imageLinks?.thumbnail}
                                        alt={book.volumeInfo.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {book.volumeInfo.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {book.volumeInfo.subtitle}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button component={Link} to={`/book/${book.id}`} size="small" variant="contained">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                    : <CircularProgress />
                }
            </div>

             <Stack spacing={2} alignItems="center">
                <Pagination 
                    count={Math.floor(countBooks / 6)} 
                    page={page} 
                    onChange={changePagination} 
                    variant="outlined"
                />
            </Stack>
        </div>
    )
}

export default observer(Main);