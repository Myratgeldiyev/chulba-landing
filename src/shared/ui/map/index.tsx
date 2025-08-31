import { Icon } from '../icon'

export const Map = () => {
	return (
		<div className='w-full bg-white border-y-5 border-black  h-[450px] md:h-[600px] lg:h-[700px] overflow-hidden px-6 py-6 '>
			<div className='flex  gap-3 items-center '>
				<div className='flex flex-col gap-3 bg-squirrel-200 w-[50px] h-[50px]  rounded-full items-center justify-center'>
					<Icon className='w-6 h-6' color='#625752' type='location' />
				</div>
				<div className=' flex-col flex  '>
					<h1 className='text-squirrel-900 text-[24px] font-semibold'>
						Location:
					</h1>
					<p className='text-gray-600 '>Abadan, Ashagabat, Turkmenistan</p>
				</div>
			</div>
			<div className='flex  gap-3 items-center mt-6'>
				<div className='flex flex-col gap-3 bg-squirrel-200 w-[50px] h-[50px]  rounded-full items-center justify-center'>
					<Icon className='w-6 h-6' color='#625752' type='mail' />
				</div>
				<div className=' flex-col flex  '>
					<h1 className='text-squirrel-900 text-[24px] font-semibold'>
						Email address:
					</h1>
					<p className='text-gray-600 '>chulbaturkmen@gmail.com</p>
				</div>
			</div>
			<div className='flex  gap-3 items-center mt-6'>
				<div className='flex flex-col gap-3 bg-squirrel-200 w-[50px] h-[50px]  rounded-full items-center justify-center'>
					<Icon className='w-6 h-6' color='#625752' type='phone' />
				</div>
				<div className=' flex-col flex  '>
					<h1 className='text-squirrel-900 text-[24px] font-semibold'>
						Phone number:
					</h1>
					<div className='flex items-center gap-5'>
						<p className='text-gray-600 '>+993(65)53-48-41</p>
						<p className='text-gray-600 '>+993(65)80-22-02</p>
					</div>
				</div>
			</div>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13894.061059087795!2d58.15774405981427!3d38.06163267443155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7aaf5bdb97d875%3A0xfba03b49cec9ad3d!2sAbadan%2C%20Ashgabat%2C%20Turkmenistan!5e0!3m2!1sen!2shk!4v1756628789744!5m2!1sen!2shk'
				width='600'
				className='w-full mt-5'
				height='350'
				style={{ border: 0 }}
				allowFullScreen
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
		</div>
	)
}
