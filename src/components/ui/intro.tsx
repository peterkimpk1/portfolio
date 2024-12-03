import Image from 'next/image'
import authorImage from '@/../public/images/authors/peter.png';
const Intro = () => {
  return (
    <section>
        <Image className='rounded-lg grayscale'
        src={authorImage}
        alt='Peter Kim'
        width={175}
        height={175}
        priority
        />
    </section>
  )
}

export default Intro
