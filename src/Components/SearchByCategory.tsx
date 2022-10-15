import { Select, MenuItem} from '@mui/material';
import {store} from '../store/index';

const SearchByCategory = () => {

    const {category} = store;

    return(
        <>
            <Select
                fullWidth
                value={category}
                onChange={(e) => store.searchByCategory(e.target.value)}
            >
                <MenuItem value=""><em>Select category</em></MenuItem>
                <MenuItem value="programming">Programming</MenuItem>
                <MenuItem value="psychology">Psychology</MenuItem>
                <MenuItem value="detective">Detective</MenuItem>
                <MenuItem value="humor">Humor</MenuItem>
            </Select>
        </>
    )
}

export default SearchByCategory;
