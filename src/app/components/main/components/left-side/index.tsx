import { Button } from '@/shared/ui/button'

export const LeftSide = () => {
	return (
		<div className='flex flex-col items-center lg:items-start gap-6 w-full lg:w-[50%]'>
			<h1 className='text-[#2b2624] text-center lg:text-left text-[26px] lg:text-[46px] font-extrabold leading-tight'>
				Çulba Hususy Kärhanasy
			</h1>
			<h2 className='text-[#ffffff] bg-[#2b2624] px-4 py-2 rounded-xl text-center lg:text-left text-[22px] lg:text-[36px] font-bold shadow-md'>
				Ähli islegleriňiz bizde
			</h2>

			<div className='flex flex-col lg:flex-row items-center gap-4 w-full mt-[50px]'>
				<Button
					title='About Us'
					className='w-full lg:w-[40%] !bg-[#2b2624] hover:opacity-90 transition-all duration-300 text-white shadow-md rounded-xl'
				/>
				<Button
					title='Contact'
					className='w-full lg:w-[40%] !bg-white !text-[#2b2624] !border-[#2b2624] hover:!bg-[#2b2624] hover:!text-white transition-all duration-300 shadow-md rounded-xl'
				/>
			</div>

			<div className='grid grid-cols-3 gap-6 mt-12 w-full'>
				<div className='flex flex-col items-center lg:items-start gap-1'>
					<p className='text-[#2b2624] font-extrabold text-[28px]'>10M+</p>
					<p className='text-gray-600 text-sm'>Sold Products</p>
				</div>
				<div className='flex flex-col items-center lg:items-start gap-1'>
					<p className='text-[#2b2624] font-extrabold text-[28px]'>8+</p>
					<p className='text-gray-600 text-sm'>Years of Service</p>
				</div>
				<div className='flex flex-col items-center lg:items-start gap-1'>
					<p className='text-[#2b2624] font-extrabold text-[28px]'>2+</p>
					<p className='text-gray-600 text-sm'>Countries</p>
				</div>
			</div>
		</div>
	)
}
