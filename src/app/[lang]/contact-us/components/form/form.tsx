'use client'
import { useState } from 'react'
import { Container } from '../../../../../shared/ui/container/index'

export const Form = () => {
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
			<div id='contact' className='w-full max-w-3xl mx-auto py-16 px-4'>
				<div className='text-center mb-12 mt-9'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
						Biz bilen habarlasyn
					</h2>
					<p className='text-gray-500 mt-2 max-w-md mx-auto'>
						Soraglaryňyz barmy? Formy dolduryň, biz size tiz wagtda jogap
						bereris.
					</p>
				</div>

				<form
					onSubmit={handleSubmit}
					className='bg-white rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col gap-6 transition-all duration-300'
				>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						<label className='flex flex-col gap-2'>
							<span className='text-sm font-medium text-gray-800'>
								Adyňyz <span className='text-red-600'>*</span>
							</span>
							<input
								name='name'
								required
								placeholder='Adyňyzy giriziň'
								className='w-full rounded-xl px-4 py-3 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition duration-300 shadow-sm hover:shadow-md'
							/>
						</label>

						<label className='flex flex-col gap-2'>
							<span className='text-sm font-medium text-gray-800'>
								E-poçta <span className='text-red-600'>*</span>
							</span>
							<input
								type='email'
								name='email'
								required
								placeholder='email@example.com'
								className='w-full rounded-xl px-4 py-3 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition duration-300 shadow-sm hover:shadow-md'
							/>
						</label>
					</div>

					<label className='flex flex-col gap-2'>
						<span className='text-sm font-medium text-gray-800'>Tema</span>
						<input
							name='subject'
							placeholder='Mesele / tema'
							className='w-full rounded-xl px-4 py-3 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition duration-300 shadow-sm hover:shadow-md'
						/>
					</label>

					<label className='flex flex-col gap-2'>
						<span className='text-sm font-medium text-gray-800'>
							Hatyňiz <span className='text-red-600'>*</span>
						</span>
						<textarea
							name='message'
							required
							rows={5}
							placeholder='Soragyňyzy ýa-da islegiňizi ýazyn...'
							className='w-full rounded-xl px-4 py-3 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition duration-300 shadow-sm hover:shadow-md resize-y'
						/>
					</label>

					<label className='flex items-start gap-3 text-sm text-gray-600'>
						<input
							type='checkbox'
							name='consent'
							required
							className='mt-1 rounded border-gray-400 focus:ring-indigo-400'
						/>
						<span>
							Ugratmak bilen, maglumatlaryňyzyň gaýtadan işlenmegine razylyk
							berýärsiňiz.
						</span>
					</label>

					<button
						type='submit'
						disabled={status === 'loading'}
						className='relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium text-white bg-gradient-to-r from-indigo-500 to-indigo-700 hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg transition duration-300'
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
