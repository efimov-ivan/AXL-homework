import { useState, useEffect } from 'react';
import {TextField} from '@mui/material';
import {store} from '../store/index';

const SearchByText = () => {

    const [text, setText] = useState<string>('');

    useEffect(() => {
        const delayDebouns = setTimeout(() => {
            store.searchByText(text);
        }, 500);
    
        return () => {clearTimeout(delayDebouns)}
    }, [text]);

    return(
        <>
            <TextField
                fullWidth
                id="outlined-basic"
                label="Book search"
                variant="outlined"
                placeholder="React"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </>
    )
}

export default SearchByText;
