import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Home() {
	return (
		<Fragment>
			<div className="flex flex-col items-center justify-center min-h-screen py-2">
				<Head>
					<title>Workcation || Book Your Escape</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full">
					<div className="xl:max-w-xl">
						<img className="h-10" src="/img/logo.svg" alt="workcation logo" />
						<img
							className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"
							src="/img/beach-work.jpg"
							alt="Woman workcation on the beach"
						/>
						<h1 className="mt-6 sm:mt-8 text-2xl sm:text-4xl font-bold text-gray-900">
							You can work from anywhere. <br className="hidden lg:inline" />{' '}
							<span className="text-indigo-500">Take advantage of it.</span>
						</h1>
						<h1 className="mt-6 sm:mt-8 text-2xl sm:text-4xl font-bold text-gray-900">
							You can work from anywhere. <br className="hidden lg:inline" />{' '}
							<span className="text-indigo-500">Take advantage of it.</span>
						</h1>
						<h1 className="mt-6 sm:mt-8 text-2xl sm:text-4xl font-bold text-gray-900">
							You can work from anywhere. <br className="hidden lg:inline" />{' '}
							<span className="text-indigo-500">Take advantage of it.</span>
						</h1>
						<p className="mt-2 text-gray-600 sm:mt-6 sm:text-xl sm:tracking-wider">
							Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
							nice weather even when you're not on vacation.
						</p>
						<div className="mt-4">
							<button className=" inline-block px-5 py-3 bg-indigo-600 text-white rounded-lg shadow-lg tracking-wider text-sm font-semibold uppercase">
								Book Your Escape
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden lg:block h-full bg-indigo-500">
				<img
					className="h-full object-cover object-center"
					src="/img/beach-work.jpg"
					alt="Woman workcation on the beach"
				/>
			</div>
		</Fragment>
	);
}
