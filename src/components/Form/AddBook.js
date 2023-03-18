import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAddBookMutation } from '../../features/api/apiSlice';

const AddBook = () => {
    const [addBook, { isLoading, isSuccess, isError }] = useAddBookMutation();

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()

    const handleAddNewBook = data => {
        addBook(data)
        toast.success('Successfully added a book')
        reset()
        navigate('/')
    };

    return (
        <main className="py-6 2xl:px-6">
            <div className="container">
                <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                    <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
                    <form onSubmit={handleSubmit(handleAddNewBook)}
                        className="book-form">
                        <div className="space-y-2">
                            <label htmlFor="lws-bookName">Book Name</label>
                            <input  {...register("name")}
                                required className="text-input" type="text" id="lws-bookName" name="name" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lws-author">Author</label>
                            <input  {...register("author")}
                                required className="text-input" type="text" id="lws-author" name="author" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lws-thumbnail">Image Url</label>
                            <input  {...register("thumbnail")}
                                required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
                        </div>

                        <div className="grid grid-cols-2 gap-8 pb-4">
                            <div className="space-y-2">
                                <label htmlFor="lws-price">Price</label>
                                <input  {...register("price")}
                                    required className="text-input" type="number" id="lws-price" name="price" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="lws-rating">Rating</label>
                                <input  {...register("rating")}
                                    required className="text-input" type="number" id="lws-rating" name="rating" min="1"
                                    max="5" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input  {...register("featured")}
                                id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" />
                            <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
                        </div>

                        <button type="submit" className="submit" id="lws-submit">Add Book</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default AddBook;