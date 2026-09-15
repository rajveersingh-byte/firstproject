import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Home() {

  const [men, SetMen] = useState([]);

  console.log(men);

  let ProductFetch = async () => {
    await axios.get('https://www.wscubetech.co/new-commerce-api/products')
      .then((res) => {
        SetMen(res.data.data)
      })
  }

  useEffect(() => {
    ProductFetch();
  }, [])



  return (
    <>

      <div className="max-w-[1320px] mx-auto">

        <div className="row">
          <h2 className='text-center py-5 text-4xl font-bold'>Men's Category</h2>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>

            {men.length > 0 ?

              (
                men.map((v, i) => {
                  return (

                    <>
                      <article className="group border p-2">
                        <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-[#e4e8e1]">
                          <img src={v.image} alt={v.name} />

                          <span className="absolute left-3 top-3 bg-[#f8f7f3] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#18352f]">New</span>

                          <button className="absolute right-3 top-3 rounded-full bg-[#f8f7f3] p-3 text-[#18352f]" aria-label="Add linen shirt to wishlist"><FaHeart /></button>

                        </div>

                        <div className="flex items-start justify-between gap-3"><div>

                          <p className="mb-1 text-xs uppercase tracking-[0.14em] text-[#8c938c]">{v.category_name}</p>

                          <Link to={'/product-details/' + v.id}>
                            <h3 className="font-serif text-xl font-bold text-[#18352f]">
                              {v.name}
                            </h3>
                          </Link>

                          <p className="mt-1 text-sm text-[#6d756e]">{v.description}</p>

                        </div>

                          <p className="font-semibold text-[#18352f]">₹. {v.price}</p></div>

                        <div className="mt-3 flex items-center gap-1 text-xs text-[#d36f4a]">
                          {/* </FaHeart> */}
                          <span className="text-[#6d756e]">{v.rating} (32)</span>
                        </div>

                        <button className='w-full border border-1 mt-3 py-2 rounded-2xl'>Add to Cart</button>

                      </article>
                    </>



                  )
                })

              )

              : (
                <p>No Product</p>
              )

            }





          </div>
        </div>



        <div className="row">
          <h2 className='text-center py-5 text-4xl font-bold'>Women Category</h2>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>

            <div className="bg-neutral-primary-soft block max-w-sm p-5 border border-default rounded-base shadow-xs">
              <a href="#">
                <div className='h-[300px] overflow-hidden rounded-base'>
                  <img className="h-full w-full object-cover" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32195288/2025/1/4/b1839143-3c8b-4a2e-afcf-b6d8b298dbbd1735986832793MarksSpencerMenPocketsT-shirt1.jpg" alt="Marks & Spencer men's regular fit pique polo shirt" />
                </div>

              </a>
              <a href="#">
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                  Marks & Spencer
                </h5>
              </a>
              <p className="mb-6 text-body">
                Ultimate Regular Fit Pique Polo Shirt
              </p>

              <div className='flex justify-between'>
                <p>₹ 1799 <del>₹ 2000 /-</del></p>
                <p>Rating : 4.5</p>
              </div>


              <button className='w-full bg-blue-700 text-white py-3 mt-5 rounded-3xl cursor-pointer'>Add to Cart</button>
            </div>

            <div className="bg-neutral-primary-soft block max-w-sm p-5 border border-default rounded-base shadow-xs">
              <a href="#">
                <div className='h-[300px] overflow-hidden rounded-base'>
                  <img className="h-full w-full object-cover" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32195288/2025/1/4/b1839143-3c8b-4a2e-afcf-b6d8b298dbbd1735986832793MarksSpencerMenPocketsT-shirt1.jpg" alt="Marks & Spencer men's regular fit pique polo shirt" />
                </div>

              </a>
              <a href="#">
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                  Marks & Spencer
                </h5>
              </a>
              <p className="mb-6 text-body">
                Ultimate Regular Fit Pique Polo Shirt
              </p>

              <div className='flex justify-between'>
                <p>₹ 1799 <del>₹ 2000 /-</del></p>
                <p>Rating : 4.5</p>
              </div>


              <button className='w-full bg-blue-700 text-white py-3 mt-5 rounded-3xl cursor-pointer'>Add to Cart</button>
            </div>

            <div className="bg-neutral-primary-soft block max-w-sm p-5 border border-default rounded-base shadow-xs">
              <a href="#">
                <div className='h-[300px] overflow-hidden rounded-base'>
                  <img className="h-full w-full object-cover" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32195288/2025/1/4/b1839143-3c8b-4a2e-afcf-b6d8b298dbbd1735986832793MarksSpencerMenPocketsT-shirt1.jpg" alt="Marks & Spencer men's regular fit pique polo shirt" />
                </div>

              </a>
              <a href="#">
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                  Marks & Spencer
                </h5>
              </a>
              <p className="mb-6 text-body">
                Ultimate Regular Fit Pique Polo Shirt
              </p>

              <div className='flex justify-between'>
                <p>₹ 1799 <del>₹ 2000 /-</del></p>
                <p>Rating : 4.5</p>
              </div>


              <button className='w-full bg-blue-700 text-white py-3 mt-5 rounded-3xl cursor-pointer'>Add to Cart</button>
            </div>

            <div className="bg-neutral-primary-soft block max-w-sm p-5 border border-default rounded-base shadow-xs">
              <a href="#">
                <div className='h-[300px] overflow-hidden rounded-base'>
                  <img className="h-full w-full object-cover" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32195288/2025/1/4/b1839143-3c8b-4a2e-afcf-b6d8b298dbbd1735986832793MarksSpencerMenPocketsT-shirt1.jpg" alt="Marks & Spencer men's regular fit pique polo shirt" />
                </div>

              </a>
              <a href="#">
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                  Marks & Spencer
                </h5>
              </a>
              <p className="mb-6 text-body">
                Ultimate Regular Fit Pique Polo Shirt
              </p>

              <div className='flex justify-between'>
                <p>₹ 1799 <del>₹ 2000 /-</del></p>
                <p>Rating : 4.5</p>
              </div>


              <button className='w-full bg-blue-700 text-white py-3 mt-5 rounded-3xl cursor-pointer'>Add to Cart</button>
            </div>


          </div>
        </div>
      </div>

    </>
  )
}
