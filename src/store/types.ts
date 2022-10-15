export type BooksListType = {
    totalItems: number,
    items: BookType[]
}

export type BookType = {
    id: string,
    volumeInfo: {
        title: string,
        subtitle: string,
        description: string,
        imageLinks?: {
            thumbnail: string
        }
    }
}