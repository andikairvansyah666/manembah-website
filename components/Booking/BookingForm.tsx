'use client';

import { useState } from 'react';
import { CustomSelect } from '@/components/ui/custom-select';

const BookingForm = () => {
  const [category, setCategory] = useState('');
  const [stayType, setStayType] = useState('');
  const [priceList, setPriceList] = useState('');

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
            <CustomSelect
              name="category"
              value={category}
              onChange={setCategory}
              placeholder="Select category"
              options={[
                { label: 'Villa', value: 'villa' },
                { label: 'Guest House', value: 'guesthouse' },
              ]}
            />
          </div>
          <div className='w-full space-y-3 relative'>
            <label
              htmlFor='stayType'
              className='block mb-2 text-base font-medium text-black dark:text-white'
            >
              Stay Type
            </label>
            <CustomSelect
              name="stayType"
              value={stayType}
              onChange={setStayType}
              placeholder="Select your stay"
              options={[
                { label: 'Short Term', value: 'short-term' },
                { label: 'Long Term', value: 'long-term' },
              ]}
            />
          </div>
          <div className='w-full space-y-3 relative'>
            <label
              htmlFor='priceList'
              className='block mb-2 text-base font-medium text-black dark:text-white'
            >
              Price List
            </label>
            <CustomSelect
              name="priceList"
              value={priceList}
              onChange={setPriceList}
              placeholder="IDR / Night"
              options={[
                { label: 'Low', value: 'low' },
                { label: 'High', value: 'high' },
              ]}
            />
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
