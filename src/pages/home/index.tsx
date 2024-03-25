import '../../styles/home.css'
import { useAppSelector } from '@/configs/redux/hooks'
import Layout from '@/layouts/layout'
import { selectHomeContent } from '@/stores/home/home.selector'
import * as React from 'react'
import { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { HEAD } from '@/constants/seo/head'
import About from '@/components/home/About'
import Donors from '@/components/home/Donors'
import Product from '@/components/home/Product'
import Brand from '@/components/home/Brand'
import Video from '@/components/home/Video'

export default function Home() {
  const data = useAppSelector(selectHomeContent)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <Layout>
      <NextSeo 
        title={HEAD.HOME.TITLE}
        description={HEAD.HOME.DESCRIPTION}
        openGraph={{
          images: [
            {
              url: 'https://www.example.ie/og-image.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt'
            }
          ],
        }}
      />
      <About/>
      <Donors/>
      <Product/>
      <Brand/>
      <Video/>
    </Layout>
  )
}
