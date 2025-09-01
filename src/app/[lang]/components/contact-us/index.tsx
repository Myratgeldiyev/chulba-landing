'use client'
import { Container } from '@/shared/ui/container'
import { useState } from 'react'

export const ContactUs = () => {
	const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>(
		'idle'
	)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget
		const formData = new FormData(form)

		try {
			setStatus('loading')
			await new Promise(r => setTimeout(r, 1000))
			setStatus('sent')
			form.reset()
		} catch (err) {
			console.error(err)
			setStatus('error')
		}
	}

	return (
		<Container>
			<div id='contact' className='w-full  max-w-3xl mx-auto py-16 px-4'>
				<div className='text-center mb-10'>
					<h2 className='text-[32px] text-squirrel-900 font-semibold mt-6'>
						Biz bilen habarlasyn
					</h2>
					<p className='text-[15px] text-gray-500 max-w-md mx-auto mt-2'>
						Soraglaryňyz barmy? Formy dolduryň, biz size tiz wagtda jogap
						bereris.
					</p>
				</div>

				<form
					onSubmit={handleSubmit}
					className='rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-6'
				>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						<label className='flex flex-col gap-2'>
							<span className='text-sm font-medium text-squrrel-900'>
								Adyňyz <span className='text-red-600'> *</span>
							</span>
							<input
								name='name'
								required
								placeholder='Adyňyzy giriziň'
								className='w-full rounded-xl px-3 py-2 border border-squirrel-300 bg-gray-50 text-squirrel-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-squirrel-400 focus:border-[#625752] transition'
							/>
						</label>

						<label className='flex flex-col gap-2'>
							<span className='text-sm font-medium text-squrrel-900'>
								E-poçta <span className='text-red-600'> *</span>
							</span>
							<input
								type='email'
								name='email'
								required
								placeholder='email@example.com'
								className='w-full rounded-xl px-3 py-2 border border-squirrel-300 bg-gray-50 text-squirrel-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-squirrel-400 focus:border-[#625752] transition'
							/>
						</label>
					</div>

					<label className='flex flex-col gap-2'>
						<span className='text-sm font-medium text-squrrel-900'>Tema</span>
						<input
							name='subject'
							placeholder='Mesele / tema'
							className='w-full rounded-xl px-3 py-2 border border-squirrel-300 bg-gray-50 text-squirrel-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-squirrel-400 focus:border-[#625752] transition'
						/>
					</label>

					<label className='flex flex-col gap-2'>
						<span className='text-sm font-medium text-squrrel-900'>
							Hatyňiz <span className='text-red-600'> *</span>
						</span>
						<textarea
							name='message'
							required
							rows={5}
							placeholder='Soragyňyzy ýa-da islegiňizi ýazyn...'
							className='w-full rounded-xl px-3 py-2 border border-squirrel-300 bg-gray-50 text-squirrel-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-squirrel-400 focus:border-[#625752] transition resize-y'
						/>
					</label>

					<label className='flex items-start gap-3 text-sm text-gray-600'>
						<input
							type='checkbox'
							name='consent'
							required
							className='mt-1 rounded border-gray-400'
						/>
						<span>
							Ugratmak bilen, maglumatlaryňyzyň gaýtadan işlenmegine razylyk
							berýärsiňiz.
						</span>
					</label>

					<button
						type='submit'
						disabled={status === 'loading'}
						className='relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium text-white bg-gradient-to-r from-squirrel-500 to-squirrel-700 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg transition'
					>
						{status === 'loading'
							? 'Ugratylýar…'
							: status === 'sent'
							? 'Ugradyldy ✓'
							: 'Formy ugrat'}
					</button>

					{status === 'error' && (
						<p className='text-sm text-red-500'>
							Bir näsazlyk ýüze çykdy. Az wagtdan gaýtadan synanyşyp görüň.
						</p>
					)}
					{status === 'sent' && (
						<p className='text-sm text-green-600'>
							Hatyňyz üstünlikli ugradyldy, tiz wagtda jogap bereris!
						</p>
					)}
				</form>

				<p className='text-xs text-gray-400 mt-4'>* Hökmany meýdançalar</p>
			</div>
		</Container>
	)
}
