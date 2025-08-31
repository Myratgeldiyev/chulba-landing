import { Icon } from '../icon'

export const Map = () => {
	return (
		<div className='w-[80%] bg-white border-y-3 border-black  h-[450px] md:h-[600px] lg:h-[700px] overflow-hidden'>
			<div className='flex  gap-3 items-center'>
				<div className='flex flex-col gap-3 rounded-full items-center justify-center'>
					<Icon className='' color='black' type='location' />
				</div>
				<div className=' flex-col flex  p-8'>
					<h1 className='text-squirrel-900 text-[24px] font-semibold'>
						Location
					</h1>
					<p className='text-gray-600 '>Abadan, Ashagabat, Turkmenistan</p>
				</div>
			</div>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13894.061059087795!2d58.15774405981427!3d38.06163267443155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7aaf5bdb97d875%3A0xfba03b49cec9ad3d!2sAbadan%2C%20Ashgabat%2C%20Turkmenistan!5e0!3m2!1sen!2shk!4v1756628789744!5m2!1sen!2shk'
				width='600'
				className='w-full'
				height='350'
				style={{ border: 0 }}
				allowFullScreen
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
		</div>
	)
}
