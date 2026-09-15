import { FaChevronDown, FaHeart, FaSliders, FaStar } from 'react-icons/fa6'
import Header from '../comman/Header'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductListing() {

  const [Category, SetCategory] = useState([]);
  const [slug, SetSlug] = useState('');
  const [min, SetMin] = useState('');
  const [max, Setmax] = useState('');
  const [totalReacode, SettotalReacode] = useState('');

  // console.log(totalReacode)


  const [men, SetMen] = useState([]);


  let ProductFetch = async () => {

    if (slug) {
      await axios.get(`https://dummyjson.com/products/category/${slug}`)
        .then((res) => {
          SetMen(res.data.products)
        })
    }
    else {
      await axios.get('https://www.wscubetech.co/new-commerce-api/products')
        .then((res) => {
          SetMen(res.data.data)
          SettotalReacode(res.data.total_records);
        })
    }


  }

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => {
        SetCategory(res.data)
      })

    ProductFetch();
  }, [slug])


  let handelPrice = (curremin, currenmax) => {


    SetMin(curremin)
    Setmax(currenmax);


  }

  return (
    <>
      <main className="mx-auto max-w-7xl px-5 pb-20 pt-10 lg:px-8 lg:pt-14">
        <div className="mb-10 flex flex-col gap-5 border-b border-[#dedbd3] pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#d36f4a]">The edit / 01</p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-[#18352f] md:text-5xl">Shop all pieces</h1>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[#6d756e]">Thoughtful essentials for a considered everyday wardrobe.</p>
          </div>
          <div className="flex items-center justify-between gap-5 text-sm text-[#53605a] md:justify-end">
            <span>{men.length} pieces</span>
            <button className="flex items-center gap-3 border-b border-[#18352f] pb-2 font-semibold text-[#18352f]" aria-label="Sort products">Sort: featured <FaChevronDown className="text-xs" /></button>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          <aside className="self-start lg:sticky lg:top-6" aria-label="Product filters">
            <div className="mb-7 flex items-center justify-between lg:block">
              <div className="flex items-center gap-3"><FaSliders className="text-[#d36f4a]" /><h2 className="font-serif text-2xl font-bold text-[#18352f]">Filter by</h2></div>
              <button className="text-xs font-bold uppercase tracking-[0.16em] text-[#d36f4a]">Clear all</button>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:block">

              <fieldset className="border-t border-[#dedbd3] pt-5 lg:mb-8"><legend className="mb-4 text-sm font-bold text-[#18352f]">Category</legend><div className="space-y-3 text-sm text-[#6d756e]">

                {Category.map((v, i) => {
                  return (

                    <label className="flex items-center gap-3" key={i}>
                      <input type="checkbox" onClick={() => SetSlug(v.slug)} className="accent-[#d36f4a]" />{v.name}</label>
                  )

                })}


              </div></fieldset>

              <fieldset className="border-t border-[#dedbd3] pt-5 lg:mb-8"><legend className="mb-4 text-sm font-bold text-[#18352f]">Brand</legend><div className="space-y-3 text-sm text-[#6d756e]"><label className="flex items-center gap-3"><input type="checkbox" className="accent-[#d36f4a]" /> Morrow</label><label className="flex items-center gap-3"><input type="checkbox" className="accent-[#d36f4a]" /> Assembly</label><label className="flex items-center gap-3"><input type="checkbox" className="accent-[#d36f4a]" /> Form &amp; Fold</label><label className="flex items-center gap-3"><input type="checkbox" className="accent-[#d36f4a]" /> Lune Studio</label></div></fieldset>


              <fieldset className="col-span-2 border-t border-[#dedbd3] pt-5 sm:col-span-1">
                <legend className="mb-4 text-sm font-bold text-[#18352f]">Price range</legend>

                <label className="flex items-center gap-3 py-2">
                  <input type="checkbox" className="accent-[#d36f4a]" onClick={() => handelPrice(0, 1000)} /> ₹ 0 Rs - ₹ 1000 Rs</label>

                <label className="flex items-center gap-3 py-2">
                  <input type="checkbox" className="accent-[#d36f4a]" onClick={() => handelPrice(1000, 10000)} /> ₹ 1000 Rs - ₹ 10000 Rs</label>

                <label className="flex items-center gap-3 py-2">
                  <input type="checkbox" className="accent-[#d36f4a]" onClick={() => handelPrice(10000, 100000)} /> ₹ 10000 Rs - ₹ 100000 Rs</label>

                <p className="mt-4 text-sm text-[#6d756e]">Under $180</p></fieldset>
            </div>
          </aside>

          <section aria-label="Product collection">
            <div className="mb-5 flex items-center justify-between"><p className="text-sm text-[#6d756e]">Showing <span className="font-semibold text-[#18352f]">{men.length} of {totalReacode}</span></p><button className="flex items-center gap-2 text-sm font-semibold text-[#18352f] lg:hidden"><FaSliders className="text-[#d36f4a]" /> Filters</button></div>
            <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">

              {men.length > 0 ?

                (
                  men.map((v, i) => {
                    return (

                      <>
                        <article className="group border p-2" key={i}>
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
          </section>
        </div>
      </main>
    </>
  )
}
