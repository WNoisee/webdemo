import ImageFile from './image.mp4'
import './pixel.scss'

const Image = () => {
    return (
        <div className='image'>
            <video width='1000px' height='500px' autoPlay muted loop>
                <source src={ImageFile} type='video/mp4'></source>
            </video>
        </div>
    )
}

export default Image;