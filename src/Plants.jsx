import first from './assets/first.jpg'
import second from './assets/second.jpg'
import third from './assets/third.jpg'
import fourth from './assets/fourth.jpg'
import fifth from './assets/fifth.jpg'
import sixth from './assets/sixth.jpg'
import seventh from './assets/seventh.jpg'
import eighth from './assets/eighth.jpg'
import nineth from './assets/nineth.jpg'
import tenth from './assets/tenth.jpg'
import eleventh from './assets/eleventh.jpg'

function Pictures() {

    const images = [first, second, third, fourth, fifth, sixth, seventh, eighth, nineth, tenth, eleventh];
    return (
        <div className='flex'>
            <h3>Here is the progress of my plant!</h3>
            <img className='picture' src={images[0]} alt="" />
            <img className='picture' src={images[1]} alt="" />
            <img className='picture' src={images[2]} alt="" />
            <img className='picture' src={images[3]} alt="" />
            <img className='picture' src={images[4]} alt="" />
            <img className='picture' src={images[5]} alt="" />
            <img className='picture' src={images[6]} alt="" />
            <img className='picture' src={images[7]} alt="" />
            <img className='picture' src={images[8]} alt="" />
            <img className='picture' src={images[9]} alt="" />
            <img className='picture' src={images[10]} alt="" />
            <img className='picture' src={images[11]} alt="" />
        </div>
    )
}

export default Pictures;