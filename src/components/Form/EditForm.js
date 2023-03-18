import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useEditBookMutation } from '../../features/api/apiSlice';

const EditForm = ({ book }) => {
  const { author, featured, id, name, price, rating, thumbnail } = book;
  const navigate = useNavigate()
  const [editBook, { isLoading, isError, isSuccess }] = useEditBookMutation();

  const { register, handleSubmit, reset } = useForm();

  const handleUpdateBook = (data) => {
    editBook({ id, data })
    navigate('/')
    toast.success('Successfully Edited')
  }

  return (
    <form onSubmit={handleSubmit(handleUpdateBook)} className="book-form">
      <div className="space-y-2">
        <label htmlFor="lws-bookName">Book Name</label>
        <input  {...register("name")} defaultValue={name}
          required className="text-input" type="text" id="lws-bookName" name="name" />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-author">Author</label>
        <input  {...register("author")}
          required className="text-input" defaultValue={author} type="text" id="lws-author" name="author" />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-thumbnail">Image Url</label>
        <input  {...register("thumbnail")}
          required className="text-input" defaultValue={thumbnail} type="text" id="lws-thumbnail" name="thumbnail" />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label htmlFor="lws-price">Price</label>
          <input  {...register("price")} defaultValue={price}
            required className="text-input" type="number" id="lws-price" name="price" />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-rating">Rating</label>
          <input  {...register("rating")} defaultValue={rating}
            required className="text-input" type="number" id="lws-rating" name="rating" min="1"
            max="5" />
        </div>
      </div>

      <div className="flex items-center">
        <input  {...register("featured")}
          id="lws-featured" type="checkbox" defaultChecked={featured} name="featured" className="w-4 h-4" />
        <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
      </div>

      <button type="submit" className="submit" id="lws-submit">Edit Book</button>
    </form>
  );
};

export default EditForm;