'use client'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import {Flex , Box , Code, Text , Heading , Button , Stack , Link} from '@chakra-ui/react'
import Splash from '@/components/Splash'
import Head from 'next/head'


export default function Home() {
  return (<div>
    <Head>
      <title>Daniel Zhao&apos;s Site</title>
      <meta name="description" content="Daniel Zhao&apos;s Site" />
    </Head>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar></NavBar>
      <Flex direction="column" align="center" justify="center" flex="1">
        
        <Splash></Splash>
        
      </Flex>
    </main>
    </div>
  )
}
