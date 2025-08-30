'use client'
import clsx from 'clsx'
import React, { JSX } from 'react'

// NOTE: add isLoading in props if you need loading button state

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	className?: string
	title?: string
	icon?: JSX.Element
	isLoading?: boolean
	loadingColor?: string
	type?: 'button' | 'submit'
	changeToSuffix?: boolean
}

export const Button: React.FC<Props> = ({
	title,
	className,
	icon,
	isLoading = false,
	loadingColor,
	type = 'button',
	changeToSuffix = false,
	...props
}) => {
	return (
		<button
			disabled={isLoading}
			type={type}
			{...props}
			className={clsx(
				'bg-squirrel-200 px-6 border border-squirrel-300 h-[44px] text-[16px] rounded-lg text-white cursor-pointer w-full font-medium flex items-center justify-center',
				className,
				{
					'!opacity-70': isLoading,
				}
			)}
		>
			{isLoading ? (
				''
			) : (
				<div
					className={clsx('flex items-center', {
						'flex-row-reverse': changeToSuffix,
					})}
				>
					<div>{icon && icon}</div>
					<span
						className={clsx('', {
							'mr-2': changeToSuffix && icon,
							'ml-2': !changeToSuffix && icon,
						})}
					>
						{title}
					</span>
				</div>
			)}
		</button>
	)
}
