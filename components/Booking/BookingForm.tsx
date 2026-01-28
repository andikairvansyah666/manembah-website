'use client';

import { Icon } from '@iconify/react';

const BookingForm = () => {
  return (
    <form className='w-full'>
      <div className='flex flex-col gap-8'>
        {/* Full Name and Email Address */}
        <div className='flex flex-col lg:flex-row gap-6 w-full'>
          <div className='w-full space-y-3'>
            <label
              htmlFor='fullName'
              className='block mb-2 text-base font-medium text-black dark:text-white'
            >
              Full Name
            </label>
            <input
              type='text'
              name='fullName'
              id='fullName'
              placeholder='Enter your full name'
              className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50'
            />
          </div>
          <div className='w-full space-y-3'>
            <label
              htmlFor='email'
              className='block mb-2 text-base font-medium text-black dark:text-white'
            >
              Email Address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email address'
              className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50'
            />
          </div>
        </div>

        {/* Phone Number and Number of Guests */}
        <div className='flex flex-col lg:flex-row gap-6 w-full'>
          <div className='w-full space-y-3'>
            <label
              htmlFor='phoneNumber'
              className='block mb-2 text-base font-medium text-black dark:text-white'
            >
              Phone Number
            </label>
            <input
              type='tel'
              name='phoneNumber'
              id='phoneNumber'
              placeholder='Enter your phone number *'
              required
              className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50'
            />
          </div>
          <div className='w-full space-y-3'>
            <label
              htmlFor='guests'
              className='block mb-2 text-base font-medium text-black dark:text-white'
            >
              Number of Guests
            </label>
            <input
              type='number'
              name='guests'
              id='guests'
              placeholder='Enter total number of guests'
              className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50'
            />
          </div>
        </div>

        {/* Check-in and Check-out Date */}
        <div className='flex flex-col lg:flex-row gap-6 w-full'>
          <div className='w-full space-y-3'>
            <label
              htmlFor='checkIn'
              className='block mb-2 text-base font-medium text-black dark:text-white'
            >
              Check-in Date
            </label>
            <input
              type='date'
              name='checkIn'
              id='checkIn'
              placeholder='Select your check-in date'
              className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50'
            />
          </div>
          <div className='w-full space-y-3'>
            <label
              htmlFor='checkOut'
              className='block mb-2 text-base font-medium text-black dark:text-white'
            >
              Check-out Date
            </label>
            <input
              type='date'
              name='checkOut'
              id='checkOut'
              placeholder='Select your check-out date'
              className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50'
            />
          </div>
        </div>

        {/* Category, Stay Type, Price List */}
        <div className='flex flex-col lg:flex-row gap-6 w-full'>
          <div className='w-full space-y-3 relative'>
            <label
              htmlFor='category'
              className='block mb-2 text-base font-medium text-black dark:text-white'
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
              className='block mb-2 text-base font-medium text-black dark:text-white'
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
          <div className='w-full space-y-3 relative'>
            <label
              htmlFor='priceList'
              className='block mb-2 text-base font-medium text-black dark:text-white'
            >
              Price List
            </label>
            <div className='relative'>
              <select
                name='priceList'
                id='priceList'
                className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full bg-transparent text-black dark:text-white appearance-none cursor-pointer'
                defaultValue=''
              >
                <option value='' disabled className='text-black/50'>
                  IDR / Night
                </option>
                 {/* Placeholder options */}
                <option value='low' className='text-black'>Low</option>
                <option value='high' className='text-black'>High</option>
              </select>
              <div className='absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-black/50 dark:text-white/50'>
                <Icon icon='ph:caret-down' width={20} height={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Special Request */}
        <div className='space-y-3'>
          <label
            htmlFor='specialRequest'
            className='block mb-2 text-base font-medium text-black dark:text-white'
          >
            Special Request
          </label>
          <input
            type='text'
            name='specialRequest'
            id='specialRequest'
            placeholder='Enter your special request (optional)'
            className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50'
          />
        </div>

        {/* Additional Notes */}
        <div className='space-y-3'>
          <label
            htmlFor='additionalNotes'
            className='block mb-2 text-base font-medium text-black dark:text-white'
          >
            Additional Notes
          </label>
          <textarea
            rows={8}
            name='additionalNotes'
            id='additionalNotes'
            placeholder='Write additional notes or information (optional)'
            className='px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline w-full bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 resize-none'
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className='px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-fit hover:cursor-pointer hover:bg-dark duration-300'>
          Send message
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
