'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';

const TestimonialForm = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <form className='w-full'>
      <div className='flex flex-col gap-8'>
        {/* Name and Email Row */}
        <div className='flex flex-col lg:flex-row gap-6 w-full'>
          <div className='w-full space-y-3'>
            <label
              htmlFor='username'
              className='text-base font-medium text-black dark:text-white'
            >
              Name
            </label>
            <input
              type='text'
              name='username'
              id='username'
              autoComplete='username'
              placeholder='Enter your full name'
              required
              className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50'
            />
          </div>
          <div className='w-full space-y-3'>
            <label
              htmlFor='email'
              className='text-base font-medium text-black dark:text-white'
            >
              Email Address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              autoComplete='email'
              placeholder='Enter your email address'
              required
              className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50'
            />
          </div>
        </div>

        {/* Category and Stay Type Row */}
        <div className='flex flex-col lg:flex-row gap-6 w-full'>
          <div className='w-full space-y-3 relative'>
            <label
              htmlFor='category'
              className='text-base font-medium text-black dark:text-white'
            >
              Category
            </label>
            <div className='relative'>
              <select
                name='category'
                id='category'
                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full bg-transparent text-black dark:text-white appearance-none cursor-pointer'
                defaultValue=''
              >
                <option value='' disabled className='text-black/50'>
                  Select category
                </option>
                <option value='villa' className='text-black'>Villa</option>
                <option value='guesthouse' className='text-black'>Guest House</option>
              </select>
              <div className='absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-black/50 dark:text-white/50'>
                <Icon icon='ph:caret-down' width={20} height={20} />
              </div>
            </div>
          </div>
          <div className='w-full space-y-3 relative'>
            <label
              htmlFor='stayType'
              className='text-base font-medium text-black dark:text-white'
            >
              Stay Type
            </label>
            <div className='relative'>
              <select
                name='stayType'
                id='stayType'
                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full bg-transparent text-black dark:text-white appearance-none cursor-pointer'
                defaultValue=''
              >
                <option value='' disabled className='text-black/50'>
                  Select your stay
                </option>
                <option value='short-term' className='text-black'>Short Term</option>
                <option value='long-term' className='text-black'>Long Term</option>
              </select>
              <div className='absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-black/50 dark:text-white/50'>
                <Icon icon='ph:caret-down' width={20} height={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className='space-y-3'>
          <label className='text-base font-medium text-black dark:text-white'>
            Rating
          </label>
          <div className='flex gap-2'>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type='button'
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className='focus:outline-none transition-colors duration-200'
              >
                <Icon
                  icon='ph:star-fill'
                  width={32}
                  height={32}
                  className={
                    star <= (hoverRating || rating)
                      ? 'text-[#FFE500]'
                      : 'text-[#E6E6E6] dark:text-white/20'
                  }
                />
              </button>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className='space-y-3'>
          <label
            htmlFor='testimonial'
            className='text-base font-medium text-black dark:text-white'
          >
            Testimonial
          </label>
          <textarea
            rows={8}
            name='testimonial'
            id='testimonial'
            placeholder='Share your experience during your stay'
            required
            className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline w-full bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 resize-none'
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className='px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-fit hover:cursor-pointer hover:bg-dark duration-300'>
          Submit Testimonial
        </button>
      </div>
    </form>
  );
};

export default TestimonialForm;
