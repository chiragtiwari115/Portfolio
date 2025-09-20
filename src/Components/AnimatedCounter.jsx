import { counterItems } from '../Constants/Index'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
  return (
    <div className="padding-x-lg xl:mt-0 mt-32">
        <div className="mx-auto grid-3-cols">
        {counterItems.map((item) => (
            <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-centre">
                <div key={counterItems.lable} className="counter-number text-white text-5xl font-bold mb-2">
                <CountUp suffix={item.suffix} end={item.value} />
                </div>
                <div className='text-white-50 text-lg '>{item.label}</div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default AnimatedCounter