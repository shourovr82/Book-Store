import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card/Card';
import Filter from '../components/Filter/Filter';
import { useGetBooksQuery } from '../features/api/apiSlice';

const Home = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery();

    const { filter, search } = useSelector(state => state.filter);

    let content = null;
    if (isLoading) content = <div>Loading...</div>;

    if (!isLoading && isError) content = <div>There is an error occured</div>;

    if (!isLoading && !isError && books?.length === 0) {
        content = <div>No books available now!</div>;
    }

    if (!isLoading && !isError && books?.length > 0) {
        content = books?.filter(book => (filter === 'all' ? true : book?.featured)).filter(book => book?.name.toLowerCase().includes(search.toLowerCase())).map(book => <Card key={Math.random()} book={book} id={book.id} />)
    }


    return (
        <main className="py-12 px-6 2xl:px-6 container">
            <div className="order-2 xl:-order-1">
                <Filter />
                <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* <!-- Card 1 --> */}

                    {content}
                </div>
            </div>
        </main>
    );
};

export default Home;