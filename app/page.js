import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full h-full p-0 m-0'>
      <div className='h-full w-3/4 m-auto p-1 flex flex-col justify-center items-center md:h-screen md:flex-row md:justify-start md:items-center'>
        <div className='p-4 text-center space-y-6 flex flex-col justify-center items-center md:justify-start md:items-start md:text-left'>
          <h1 className='font-semibold text-6xl'>Create instant surveys with AI.</h1>
          <span className='text-2xl text-muted-foreground'>Short description of the AI SaaS.</span>
          <div className='flex space-x-4 w-full items-center justify-center md:justify-start md:items-start'>
            <Button size="lg">Get Started</Button>
            <Button size="lg" className="bg-orange-500">Sign In</Button>
          </div>
        </div>
        <Image
          src={'/girl-rocket.png'}
          height={600}
          width={600}
          objectFit='fill'
        />
      </div>
    </div>
      )
}
