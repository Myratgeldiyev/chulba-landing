'use client'
import { Container } from '@/shared/ui/container'
import { Icon } from '@/shared/ui/icon'
import { useState } from 'react'

export const Footer = () => {
	const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>(
		'idle'
	)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget
		const formData = new FormData(form)
		const payload = Object.fromEntries(formData.entries())

		try {
			setStatus('loading')
			await new Promise(r => setTimeout(r, 700))
			setStatus('sent')
			form.reset()
		} catch (err) {
			console.error(err)
			setStatus('error')
		}
	}

	return (
		<footer className='w-full bg-[#544c48] mt-[80px] text-white pt-12'>
			<Container>
				<main className='grid grid-cols-1 md:grid-cols-3 gap-10 pb-12'>
					<div className='flex flex-col gap-5'>
						<h1 className='text-[26px] font-bold'>Chulba Hususy Karhanasy</h1>
						<p className='text-[16px] font-medium text-gray-300'>
							Protecting sulphuric acid plants worldwide with innovative
							corrosion-resistant equipment and engineering excellence since
							1987.
						</p>
						<div className='flex gap-2 items-center'>
							<Icon type='call' color='white' className='w-6 h-6' />
							<p className='text-[16px]'>+993 00 00 00</p>
						</div>
						<div className='flex gap-2 items-center'>
							<Icon type='mail' color='white' className='w-6 h-6' />
							<p className='text-[16px]'>chulba@gmail.com</p>
						</div>
						<div className='flex gap-2 items-center'>
							<Icon type='location' color='white' className='w-6 h-6' />
							<p className='text-[16px]'>Ashgabat, Turkmenistan</p>
						</div>
					</div>

					<div className='flex flex-col gap-5'>
						<h2 className='text-[22px] font-semibold'>Quick Links</h2>
						<nav className='grid grid-cols-1 gap-3 text-gray-200'>
							<a href='#about' className='hover:text-white transition'>
								About Us
							</a>
							<a href='#products' className='hover:text-white transition'>
								Products
							</a>
							<a href='#services' className='hover:text-white transition'>
								Services
							</a>
							<a href='#news' className='hover:text-white transition'>
								News
							</a>
							<a href='#contact' className='hover:text-white transition'>
								Contact
							</a>
						</nav>
					</div>

					<div id='contact' className='flex flex-col gap-4'>
						<h2 className='text-[22px] font-semibold'>Biz bilen habarlasyn</h2>
						<p className='text-[15px] text-gray-200'>
							Soraglaryňyz barmy? Formy dolduryň, biz size tiz wagtda jogap
							bereris.
						</p>

						<form
							onSubmit={handleSubmit}
							className='bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-5 flex flex-col gap-4'
						>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								<label className='flex flex-col gap-2'>
									<span className='text-sm text-gray-200'>Adyňyz *</span>
									<input
										name='name'
										required
										placeholder='Ady '
										className='w-full rounded-xl px-3 py-2 bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/60'
									/>
								</label>

								<label className='flex flex-col gap-2'>
									<span className='text-sm text-gray-200'>E-poçta *</span>
									<input
										type='email'
										name='email'
										required
										placeholder='email@example.com'
										className='w-full rounded-xl px-3 py-2 bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/60'
									/>
								</label>

								<label className='flex flex-col gap-2 sm:col-span-2'>
									<span className='text-sm text-gray-200'>Tema</span>
									<input
										name='subject'
										placeholder='Mesele/tema'
										className='w-full rounded-xl px-3 py-2 bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/60'
									/>
								</label>

								<label className='flex flex-col gap-2 sm:col-span-2'>
									<span className='text-sm text-gray-200'>Hatyňiz *</span>
									<textarea
										name='message'
										required
										rows={5}
										placeholder='Soragyňyzy ýa-da islegiňizi ýazyn...'
										className='w-full rounded-xl px-3 py-2 bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/60 resize-y'
									/>
								</label>
							</div>

							<label className='flex items-start gap-3 text-sm text-gray-200'>
								<input
									type='checkbox'
									name='consent'
									required
									className='mt-1'
								/>
								<span>
									Ugratmak bilen, maglumatlaryňyzyň gaýtadan işlenmegine razylyk
									berýärsiňiz.
								</span>
							</label>

							<button
								type='submit'
								disabled={status === 'loading'}
								className='relative inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium bg-white text-[#544c48] hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg'
							>
								{status === 'loading'
									? 'Ugratylýar…'
									: status === 'sent'
									? 'Ugradyldy ✓'
									: 'Formy ugrat'}
							</button>

							{status === 'error' && (
								<p className='text-sm text-red-200'>
									Bir näsazlyk ýüze çykdy. Az wagtdan gaýtadan synanyşyp görüň.
								</p>
							)}
						</form>

						{/* Small legal / note */}
						<p className='text-xs text-gray-300 mt-1'>* Hökmany meýdançalar</p>
					</div>
				</main>

				{/* Bottom bar */}
				<div className='border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-200'>
					<p>© {new Date().getFullYear()} Chulba HK — All rights reserved.</p>
					<div className='flex items-center gap-4'>
						<a href='#' aria-label='LinkedIn' className='hover:text-white'>
							<Icon type='linkedin' color='white' className='w-5 h-5' />
						</a>
						<a href='#' aria-label='Facebook' className='hover:text-white'>
							<Icon type='facebook' color='white' className='w-5 h-5' />
						</a>
						<a href='#' aria-label='X' className='hover:text-white'>
							<Icon type='x' color='white' className='w-5 h-5' />
						</a>
					</div>
				</div>
			</Container>
		</footer>
	)
}
