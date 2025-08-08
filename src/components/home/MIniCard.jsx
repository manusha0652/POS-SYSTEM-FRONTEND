import React from 'react'

const MIniCard = ({title,icon,number,footnum,iconBg,changeColor}) => {


return (
    <div className={`bg-[#1a1a1a] p-6 rounded-xl border border-[#262626]`}>
        <div className='flex items-center justify-between mb-4'>
            <span className='text-gray-400'>{title}</span>
            <div className={`w-8 h-8 ${iconBg} rounded-full flex items-center justify-center`}>
                <span className='text-white text-lg'>{icon}</span>
            </div>
        </div>
        <div className='text-3xl font-bold text-white mb-2'>{number}</div>
        <div className={`${changeColor} text-sm`}>{footnum}% than yesterday</div>
    </div>
);
}

export default MIniCard
