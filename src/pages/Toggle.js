import React from 'react';
import useToggle from '../hooks/useToggle';

const Toggle = () => {
	const [value, toggleValue] = useToggle(false);
	const buttonBg = value ? 'bg-blue-600 w-40 h-20 mb-40 mt-14 rounded-lg text-white' : 'bg-slate-500 w-40 h-20 mb-40 mt-14 rounded-lg text-white';
	return (
		<div>
			<div className={parentDiv}>
				<span className=' text-[4rem] text-blue-900 '>{value.toString()}</span>
				<button className={buttonBg} onClick={toggleValue}>
					{value.toString()}
				</button>
				<button className='bg-slate-500 w-40 h-10 rounded-lg text-white my-1' onClick={() => toggleValue(true)}>
					Make True
				</button>
				<button className='bg-slate-500 w-40 h-10 rounded-lg text-white' onClick={() => toggleValue(false)}>
					Make False
				</button>
			</div>
		</div>
	);
};

const parentDiv = 'h-screen w-full flex flex-col justify-center items-center';
export default Toggle;
