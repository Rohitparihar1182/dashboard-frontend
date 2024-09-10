export default function InitialLoader(){
    return (
        <div className='p-4 md:p-6 lg:p-8'>
				<div className='grid md:grid-cols-2 gap-8 animate-pulse'>
					<div className='animate-pulse'>
						<div className='flex justify-end'>
							<div className="bg-[#222] w-36 h-10 lg:h-16 rounded mb-4"></div>
						</div>
						<div className="bg-[#222] h-60 lg:h-96 rounded mb-4">
							<div></div>
						</div>
					</div>
					<div className='animate-pulse'>
						<div className='flex justify-end gap-4'>
							<div className="bg-[#222] w-36 h-10 lg:h-16 rounded mb-4"></div>
							<div className="bg-[#222] w-36 h-10 lg:h-16 rounded mb-4"></div>
						</div>
						<div className="bg-[#222] h-60 lg:h-96 rounded mb-4">
							<div></div>
						</div>
					</div>
				</div>
				<div className='mt-16' />
				<div>
					<div className='animate-pulse'>
						<div className="bg-[#222] h-10 lg:h-16 rounded mb-4"></div>
					</div>
					<div className='animate-pulse'>
						<div className="bg-[#222] h-60 lg:h-96 rounded mb-4"></div>
					</div>
				</div>
			</div>
    )
}