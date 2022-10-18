import { useEffect, useState } from "react";
import {CircularProgress, Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import { Link, useParams } from "react-router-dom";
import { BookType } from "../store/types";

const BookInfo = () => {
    const [ book, setBook ] = useState<BookType>({} as BookType);
    const {id} = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
            const json = await data.json();
            setBook(json);
        }
        fetchData();
    }, []);
    
    return(
        <>
            {book.volumeInfo
                ? <Card>
                    <CardMedia
                        component="img"
                        height="300"
                        image={book.volumeInfo.imageLinks?.thumbnail}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="center">
                            {book.volumeInfo.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div"  align="center">
                            {book.volumeInfo.subtitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{__html: book.volumeInfo.description}}>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to={`/`} size="small" variant="contained">Back</Button>
                    </CardActions>
                </Card>
                : <CircularProgress />
            }
        </>
    )
}

export default BookInfo;