import { Reference } from '@/components/Sections/References/types'

const references = [
    {
        id: crypto.getRandomValues(new Uint32Array(1))[0],
        name: 'SisaSoft Bilgi Teknolojileri & İnovasyon A.Ş.',
        url: 'https://sisasoft.com',
        tags: ['JavaScript', 'UI', 'AngularJS', 'TypeScript'],
        icon: (
            <svg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0px' y='0px' viewBox='0 0 998.1 382.2'>
                <g>
                    <path
                        fill='#00A3D9'
                        d='M332.9,120.5c-11.1,0-20.1-9-20.1-20.1V20.1c0-11.1,9-20.1,20.1-20.1c11.1,0,20,9,20,20.1v80.4   C352.9,111.5,344,120.5,332.9,120.5z'
                    />
                    <path
                        fill='#00A3D9'
                        d='M332.9,267.8c-11.1,0-20.1-9-20.1-20.1v-80.3c0-11.1,9-20.1,20.1-20.1c11.1,0,20,9,20,20.1v80.3   C352.9,258.8,344,267.8,332.9,267.8z'
                    />
                    <path
                        fill='#00A3D9'
                        d='M280.8,20.1c0-11.1-9-20.1-20-20.1H76.9C34.4,0,0,34.5,0,77v1.3c0,42.5,34.4,77,76.9,77h31.4   c11.1,0,20-9,20-20.1c0-11.1-9-20.1-20-20.1H76.9c-20.3,0-36.8-16.5-36.8-36.8V77c0-20.3,16.5-36.8,36.8-36.8h183.8   C271.8,40.2,280.8,31.2,280.8,20.1z'
                    />
                    <path
                        fill='#00A3D9'
                        d='M0,247.7c0,11.1,9,20.1,20,20.1h183.8c42.4,0,76.9-34.5,76.9-77v1.3c0-42.5-34.4-77-76.9-77h-28.8   c-11.1,0-20.1,9-20.1,20.1c0,11.1,9,20.1,20.1,20.1h28.8c20.3,0,36.8,16.5,36.8,36.8v-1.3c0,20.3-16.5,36.8-36.8,36.8H20   C9,227.7,0,236.6,0,247.7z'
                    />
                    <g>
                        <path
                            fill='#00A3D9'
                            d='M660.4,20.1c0-11.1-9-20.1-20.1-20.1H456.5c-42.4,0-76.9,34.5-76.9,77v1.3c0,42.5,34.4,77,76.9,77H488    c11.1,0,20-9,20-20.1c0-11.1-9-20.1-20-20.1h-31.4c-20.3,0-36.8-16.5-36.8-36.8V77c0-20.3,16.5-36.8,36.8-36.8h183.8    C651.5,40.2,660.4,31.2,660.4,20.1z'
                        />
                        <path
                            fill='#00A3D9'
                            d='M379.7,247.7c0,11.1,9,20.1,20.1,20.1h183.8c42.5,0,76.9-34.5,76.9-77v1.3c0-42.5-34.4-77-76.9-77h-28.8    c-11.1,0-20,9-20,20.1c0,11.1,9,20.1,20,20.1h28.8c20.3,0,36.8,16.5,36.8,36.8v-1.3c0,20.3-16.5,36.8-36.8,36.8H399.7    C388.7,227.7,379.7,236.6,379.7,247.7z'
                        />
                    </g>
                    <linearGradient
                        id='SVGID_1_'
                        gradientUnits='userSpaceOnUse'
                        x1='833.555'
                        y1='238.8299'
                        x2='833.555'
                        y2='-8.034900e-04'
                    >
                        <stop offset='0' style={{ stopColor: '#00A3D9' }} />
                        <stop offset='0.9967' style={{ stopColor: '#00A3D9' }} />
                    </linearGradient>
                    <path
                        style={{ fill: 'url(#SVGID_1_)' }}
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M834.2,0l-0.7,0l-0.7,0c-6.4,0-12.4,3-16.2,8.2L676.4,235.8c-2.5,3.4-3.9,7.6-3.9,11.9c0,11.1,9,20.1,20,20.1   h282.1c11.1,0,20.1-9,20.1-20.1c0-4.3-1.4-8.5-3.9-11.9L850.4,8.2C846.6,3,840.6,0,834.2,0z'
                    />
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        fill='#FFFFFF'
                        d='M773.6,224.4c-2.3,1-5.2,1.5-8.6,1.5c-3.4,0-6.2-0.5-8.4-1.5c-2.3-1-3.3-2.6-3.3-4.8v-4.4   c0-1.2-1.1-1.8-3.2-1.8s-3.2,0.6-3.2,1.8v3.5c0,4.4,1.7,7.7,5.1,9.7c3.4,2,7.7,3.1,13.1,3.1c5.3,0,9.7-1.1,13.3-3.1   c3.5-2,5.3-5.2,5.3-9.7v-7.6c0-2.6-0.4-4.4-1.2-5.7l-1.3-1.9c-0.3-0.5-1-1-2-1.5c-1-0.5-1.8-0.9-2.5-1.3c-0.8-0.4-3.7-1.2-8.8-2.3   l-7.1-1.6c-2.4-0.5-4.1-1.3-5-2.4c-0.9-1.1-1.3-3.1-1.3-6.1v-6.8c0-4.2,3.6-6.3,10.9-6.3c7.3,0,10.9,2.1,10.9,6.3v4.3   c0,1.3,1.1,1.8,3.2,1.8c2.1,0,3.2-0.6,3.2-1.8v-3.5c0-4.4-1.6-7.7-4.8-9.7c-3.2-2-7.4-3-12.6-3c-5.3,0-9.5,1-12.7,3   c-3.2,2-4.8,5.3-4.8,9.7v6.2c0,5.9,1.8,9.8,5.3,11.6c1.7,0.9,4.1,1.8,7.4,2.5l7.1,1.6c3.4,0.8,5.8,1.6,7.2,2.4   c1.4,0.8,2.1,2.1,2.1,3.9v9.1C777.2,221.8,776,223.4,773.6,224.4z'
                    />
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        fill='#FFFFFF'
                        d='M815.5,175.3c8.1,0,12.2,2.1,12.2,6.3v38.1c0,4.2-4,6.2-12.2,6.2c-8.1,0-12.1-2-12.1-6.2v-38.1   C803.4,177.4,807.4,175.3,815.5,175.3z M815.8,169.6c-5.7,0-10.2,1-13.7,3c-3.5,2-5.2,5.3-5.2,9.7v36.4c0,8.5,6.1,12.7,18.3,12.7   c5.6,0,10.2-1,13.7-3c3.4-2,5.2-5.2,5.2-9.7v-36.4C834.1,173.9,828,169.6,815.8,169.6z'
                    />
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        fill='#FFFFFF'
                        d='M875.3,199.7c0-1.9-0.6-2.8-1.6-2.8h-18.4V185c0-3.1,0.5-5.3,1.4-6.6c0.9-1.3,2.6-1.9,4.9-1.9h15.4   c1.1,0,1.6-0.9,1.6-2.8c0-1.9-0.5-2.8-1.6-2.8h-15.4c-4.6,0-7.9,1.1-9.8,3.4c-1.9,2.3-2.9,5.9-2.9,10.8v43.9c0,1.3,1,1.9,3.2,1.9   c2.1,0,3.2-0.6,3.2-1.9v-26.3h18.4C874.7,202.6,875.3,201.6,875.3,199.7z'
                    />
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        fill='#FFFFFF'
                        d='M884.1,173.7c0,1.9,0.5,2.8,1.6,2.8h13.6v52.3c0,1.3,1,1.9,3.2,1.9c2.1,0,3.2-0.6,3.2-1.9v-52.3h13.6   c1.1,0,1.6-0.9,1.6-2.8c0-1.9-0.5-2.8-1.6-2.8h-33.7C884.6,170.9,884.1,171.8,884.1,173.7z'
                    />
                    <g>
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M19,357.9v5.2c0,2.4-2.2,3.6-6.6,3.6H9.5c-1.3,0-2.3-0.3-2.8-1.1c-0.5-0.7-0.8-2-0.8-3.7V342    c0-2.3,2.1-3.6,6.3-3.6c4.2,0,6.3,1.2,6.3,3.6v4.7c0,2.7-1.6,4-4.9,4H8.4c-0.6,0-0.9,0.5-0.9,1.6s0.3,1.6,0.9,1.6h5.7    C17.4,353.9,19,355.2,19,357.9z M19.8,368.1c1.8-1.1,2.8-3,2.8-5.5v-4.8c0-3.1-1.3-5-4-5.6c2.3-0.7,3.5-2.6,3.5-5.5v-4.3    c0-2.5-0.9-4.3-2.7-5.4c-1.8-1.1-4.2-1.7-7.2-1.7c-3.1,0-5.5,0.6-7.3,1.7c-1.8,1.1-2.7,2.9-2.7,5.4v19.4c0,2.9,0.5,4.9,1.6,6.1    c1.1,1.3,2.9,1.9,5.6,1.9h3.1C15.5,369.8,18,369.3,19.8,368.1z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M37.1,335.7c-1.2,0-1.8,0.4-1.8,1v32c0,0.7,0.6,1.1,1.8,1.1c1.2,0,1.8-0.3,1.8-1.1v-32    C39,336,38.3,335.7,37.1,335.7z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M58.1,365.3c-0.5-0.7-0.8-2-0.8-3.7v-24.9c0-0.7-0.6-1-1.8-1c-1.2,0-1.8,0.4-1.8,1v24.9    c0,2.8,0.5,4.9,1.6,6.1c1.1,1.3,2.9,1.9,5.6,1.9h7.4c0.6,0,0.9-0.5,0.9-1.6c0-1-0.3-1.6-0.9-1.6h-7.4    C59.5,366.4,58.6,366.1,58.1,365.3z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M87.8,367.1c-4.6,0-6.9-1.2-6.9-3.6V342c0-2.3,2.2-3.6,6.5-3.6c4.3,0,6.6,1.2,6.6,3.6v2.9c0,0.7,0.6,1,1.8,1    c1.2,0,1.8-0.3,1.8-1v-2.5c0-4.8-3.3-7.2-10-7.2c-3.1,0-5.6,0.6-7.5,1.7c-1.9,1.1-2.8,2.9-2.8,5.4v20.7c0,4.8,3.4,7.2,10.4,7.2    c3.2,0,5.8-0.6,7.7-1.7c2-1.1,3-3,3-5.5v-4c0-2.6-0.6-4.5-1.8-5.6s-3.1-1.6-5.8-1.6h-3.5c-0.6,0-0.9,0.5-0.9,1.6    c0,1.1,0.3,1.6,0.9,1.6h3.5c1.6,0,2.7,0.3,3.2,0.9c0.5,0.6,0.8,1.6,0.8,3.1v4.4C94.7,365.9,92.4,367.1,87.8,367.1z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M112.2,335.7c-1.2,0-1.8,0.4-1.8,1v32c0,0.7,0.6,1.1,1.8,1.1c1.2,0,1.8-0.3,1.8-1.1v-32    C114,336,113.4,335.7,112.2,335.7z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M146,337.5c0,1.1,0.3,1.6,0.9,1.6h7.7v29.7c0,0.7,0.6,1.1,1.8,1.1c1.2,0,1.8-0.3,1.8-1.1v-29.7h7.7    c0.6,0,0.9-0.5,0.9-1.6c0-1.1-0.3-1.6-0.9-1.6h-19.1C146.3,335.9,146,336.5,146,337.5z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M185,353.9h3.9c0.6,0,0.9-0.5,0.9-1.6s-0.3-1.6-0.9-1.6h-3.4c-3.3,0-4.9-1.3-4.9-4V342c0-2.3,2-3.6,5.9-3.6    c3.9,0,5.9,1.2,5.9,3.6v1.1c0,0.7,0.6,1,1.8,1c1.2,0,1.8-0.3,1.8-1v-0.7c0-2.5-0.8-4.3-2.5-5.4c-1.7-1.1-4-1.7-6.8-1.7    c-2.9,0-5.2,0.6-7.1,1.7s-2.8,2.9-2.8,5.4v4.3c0,3,1.2,4.8,3.6,5.5c-2.7,0.7-4,2.5-4,5.6v5.2c0,2.6,0.9,4.4,2.8,5.5    c1.8,1.1,4.3,1.7,7.3,1.7c3,0,5.4-0.6,7.3-1.7c1.8-1.1,2.8-3,2.8-5.5v-2.8c0-0.7-0.6-1-1.8-1s-1.8,0.4-1.8,1v3.3    c0,2.4-2.2,3.6-6.4,3.6c-4.3,0-6.4-1.2-6.4-3.6v-5.7C180.1,355.2,181.7,353.9,185,353.9z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M210.9,335.7c-1.2,0-1.8,0.4-1.8,1v32c0,0.7,0.6,1.1,1.8,1.1c1.2,0,1.8-0.3,1.8-1.1v-32    C212.7,336,212.1,335.7,210.9,335.7z M225.6,355.8c-0.5-1.9-1.4-3.1-2.5-3.7c0.8-0.6,1.5-1.7,1.9-3.1l3.3-12.4    c0-0.6-0.5-0.8-1.6-0.8c-1.1,0-1.7,0.4-1.9,1l-3.3,12.2c-0.3,1.1-0.7,1.8-1.3,2c-0.6,0.3-1.9,0.4-4,0.4h-1.2    c-0.6,0-0.9,0.6-0.9,1.6c0,1.1,0.3,1.6,0.9,1.6h3c1.6,0,2.7,0.2,3.2,0.5c0.5,0.3,0.9,1,1.2,2l3.2,11.7c0.2,0.7,0.8,1.1,1.9,1.1    c1,0,1.6-0.3,1.6-0.8C229.2,368.9,228,364.5,225.6,355.8z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M247.1,339.5c0.3,0.3,0.5,1,0.8,2.1l5.9,23.9c0.4,2,1,3.2,1.8,3.6c0.8,0.5,2.2,0.7,4.3,0.7h1    c1.2,0,1.9-0.2,2.2-0.7c0.3-0.5,0.5-1.4,0.5-2.7V337c0-0.7-0.6-1-1.8-1c-1.2,0-1.8,0.4-1.8,1v29.7h-0.5c-1,0-1.6-0.1-1.8-0.4    s-0.5-1-0.8-2.1l-5.9-23.9c-0.5-1.9-1.1-3.1-1.8-3.6c-0.8-0.5-2.2-0.8-4.3-0.8h-1c-1.2,0-1.9,0.3-2.3,0.7    c-0.3,0.5-0.5,1.4-0.5,2.7v29.5c0,0.7,0.6,1.1,1.8,1.1c1.2,0,1.8-0.3,1.8-1.1v-29.7h0.5C246.2,339.1,246.8,339.3,247.1,339.5z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M288.7,338.4c4.6,0,6.9,1.2,6.9,3.6v21.6c0,2.4-2.3,3.6-6.9,3.6c-4.6,0-6.9-1.2-6.9-3.6V342    C281.9,339.6,284.1,338.4,288.7,338.4z M288.9,335.3c-3.2,0-5.8,0.6-7.7,1.7c-2,1.1-2.9,2.9-2.9,5.4v20.7c0,4.8,3.4,7.2,10.4,7.2    c3.2,0,5.8-0.6,7.7-1.7c2-1.1,3-3,3-5.5v-20.7C299.3,337.6,295.8,335.3,288.9,335.3z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M317.9,365.3c-0.6-0.7-0.8-2-0.8-3.7v-24.9c0-0.7-0.6-1-1.8-1c-1.2,0-1.8,0.4-1.8,1v24.9    c0,2.8,0.5,4.9,1.6,6.1c1.1,1.3,2.9,1.9,5.6,1.9h7.4c0.6,0,0.9-0.5,0.9-1.6c0-1-0.3-1.6-0.9-1.6h-7.4    C319.3,366.4,318.4,366.1,317.9,365.3z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M347.7,338.4c4.6,0,6.9,1.2,6.9,3.6v21.6c0,2.4-2.3,3.6-6.9,3.6c-4.6,0-6.9-1.2-6.9-3.6V342    C340.8,339.6,343.1,338.4,347.7,338.4z M347.8,335.3c-3.2,0-5.8,0.6-7.7,1.7c-2,1.1-2.9,2.9-2.9,5.4v20.7c0,4.8,3.4,7.2,10.4,7.2    c3.2,0,5.8-0.6,7.7-1.7c2-1.1,3-3,3-5.5v-20.7C358.2,337.6,354.7,335.3,347.8,335.3z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M376.6,367.1c-3.4,0-5.1-1.2-5.1-3.6v-6c0-0.7-0.6-1-1.8-1s-1.8,0.4-1.8,1v5.5c0,2.5,0.8,4.4,2.5,5.5    c1.6,1.1,3.7,1.7,6.2,1.7c2.5,0,4.6-0.6,6.3-1.7s2.5-3,2.5-5.5v-26.4c0-0.7-0.6-1-1.8-1c-1.2,0-1.8,0.4-1.8,1v26.8    C381.6,365.9,379.9,367.1,376.6,367.1z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M401.5,335.7c-1.2,0-1.8,0.4-1.8,1v32c0,0.7,0.6,1.1,1.8,1.1s1.8-0.3,1.8-1.1v-32    C403.3,336,402.7,335.7,401.5,335.7z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M422.4,365.3c-0.5-0.7-0.8-2-0.8-3.7v-24.9c0-0.7-0.6-1-1.8-1s-1.8,0.4-1.8,1v24.9c0,2.8,0.5,4.9,1.6,6.1    c1.1,1.3,2.9,1.9,5.6,1.9h7.3c0.6,0,0.9-0.5,0.9-1.6c0-1-0.3-1.6-0.9-1.6h-7.3C423.8,366.4,422.9,366.1,422.4,365.3z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M450.2,353.9h3.9c0.6,0,0.9-0.5,0.9-1.6s-0.3-1.6-0.9-1.6h-3.4c-3.3,0-4.9-1.3-4.9-4V342c0-2.3,2-3.6,5.9-3.6    c3.9,0,5.9,1.2,5.9,3.6v1.1c0,0.7,0.6,1,1.8,1c1.2,0,1.8-0.3,1.8-1v-0.7c0-2.5-0.8-4.3-2.5-5.4c-1.7-1.1-4-1.7-6.8-1.7    c-2.9,0-5.2,0.6-7.1,1.7c-1.8,1.1-2.8,2.9-2.8,5.4v4.3c0,3,1.2,4.8,3.5,5.5c-2.7,0.7-4,2.5-4,5.6v5.2c0,2.6,0.9,4.4,2.8,5.5    c1.8,1.1,4.3,1.7,7.4,1.7c3,0,5.4-0.6,7.3-1.7c1.8-1.1,2.8-3,2.8-5.5v-2.8c0-0.7-0.6-1-1.8-1s-1.8,0.4-1.8,1v3.3    c0,2.4-2.2,3.6-6.4,3.6c-4.3,0-6.4-1.2-6.4-3.6v-5.7C445.3,355.2,446.9,353.9,450.2,353.9z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M479.2,354.4c0,1.1,0.3,1.6,0.9,1.6h4c1.6,0,2.7,0.2,3.2,0.4c0.5,0.3,0.8,1,1.1,2l2.9,10.4    c0.2,0.7,0.8,1.1,1.9,1.1c1.1,0,1.6-0.3,1.6-0.8c0-0.2-1.1-4.1-3.3-11.9c-0.4-1.4-1-2.4-1.6-3.1c2.6-0.7,4-2.4,4-5.3v-6.4    c0-2.5-0.9-4.3-2.7-5.4c-1.8-1.1-4.2-1.7-7.2-1.7c-3,0-5.3,0.6-7.1,1.7c-1.8,1.1-2.7,2.9-2.7,5.4v26.4c0,0.7,0.6,1.1,1.8,1.1    c1.2,0,1.8-0.3,1.8-1.1V342c0-2.3,2.1-3.6,6.2-3.6c4.1,0,6.2,1.2,6.2,3.6v7.2c0,2.3-2.1,3.5-6.2,3.5h-4    C479.5,352.7,479.2,353.3,479.2,354.4z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M508.6,335.7c-1.2,0-1.8,0.4-1.8,1v32c0,0.7,0.6,1.1,1.8,1.1s1.8-0.3,1.8-1.1v-32    C510.5,336,509.8,335.7,508.6,335.7z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M554.7,353.9h8v9.7c0,2.4-2.2,3.6-6.4,3.6c-4.3,0-6.4-1.2-6.4-3.6v-5.7C549.8,355.2,551.4,353.9,554.7,353.9z     M546.6,342.4v4.3c0,3,1.2,4.8,3.5,5.5c-2.7,0.7-4,2.5-4,5.6v5.2c0,2.6,0.9,4.4,2.8,5.5c1.8,1.1,4.3,1.7,7.3,1.7s5.1-0.6,6.4-1.7    v5.3c0,1.3,0.3,2.6,0.8,3.7c0.6,1,1.2,1.6,1.8,1.6c0.4,0,0.8-0.2,1.4-0.6c0.6-0.5,0.9-0.8,0.9-1.2c0,0-0.3-0.5-0.7-1.3    c-0.5-0.8-0.7-1.8-0.7-2.7v-19.5h6.3c0.6,0,0.9-0.5,0.9-1.6s-0.3-1.6-0.9-1.6h-17.5c-3.3,0-4.9-1.3-4.9-4V342c0-2.3,2-3.6,5.9-3.6    c3.9,0,5.9,1.2,5.9,3.6v1.1c0,0.7,0.6,1,1.8,1c1.2,0,1.8-0.3,1.8-1v-0.7c0-2.5-0.8-4.3-2.5-5.4c-1.7-1.1-4-1.7-6.8-1.7    c-2.9,0-5.2,0.6-7.1,1.7C547.5,338.1,546.6,339.9,546.6,342.4z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M605.1,335.7c-1.2,0-1.8,0.4-1.8,1v32c0,0.7,0.6,1.1,1.8,1.1c1.2,0,1.8-0.3,1.8-1.1v-32    C606.9,336,606.3,335.7,605.1,335.7z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M627.5,339.5c0.3,0.3,0.5,1,0.8,2.1l5.9,23.9c0.5,2,1,3.2,1.8,3.6c0.8,0.5,2.2,0.7,4.3,0.7h1    c1.2,0,1.9-0.2,2.2-0.7s0.5-1.4,0.5-2.7V337c0-0.7-0.6-1-1.8-1c-1.2,0-1.8,0.4-1.8,1v29.7h-0.5c-1,0-1.6-0.1-1.8-0.4    s-0.5-1-0.8-2.1l-5.9-23.9c-0.5-1.9-1.1-3.1-1.8-3.6c-0.8-0.5-2.2-0.8-4.3-0.8h-1c-1.2,0-1.9,0.3-2.3,0.7    c-0.3,0.5-0.5,1.4-0.5,2.7v29.5c0,0.7,0.6,1.1,1.8,1.1c1.2,0,1.8-0.3,1.8-1.1v-29.7h0.5C626.6,339.1,627.3,339.3,627.5,339.5z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M669.2,338.4c4.6,0,6.9,1.2,6.9,3.6v21.6c0,2.4-2.3,3.6-6.9,3.6c-4.6,0-6.9-1.2-6.9-3.6V342    C662.3,339.6,664.6,338.4,669.2,338.4z M669.3,335.3c-3.2,0-5.8,0.6-7.7,1.7c-2,1.1-2.9,2.9-2.9,5.4v20.7c0,4.8,3.4,7.2,10.4,7.2    c3.2,0,5.8-0.6,7.7-1.7c2-1.1,3-3,3-5.5v-20.7C679.7,337.6,676.2,335.3,669.3,335.3z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M710.5,364l4.9-26.9c0-0.3,0.1-0.5,0.1-0.6c0-0.6-0.6-0.8-1.7-0.8c-1.2,0-1.8,0.4-1.9,1l-4.9,26.8    c-0.3,1.3-0.6,2.3-1,2.8c-0.5,0.6-1.3,0.8-2.5,0.8s-2.1-0.3-2.6-0.8c-0.5-0.5-0.8-1.4-1-2.8l-4.9-26.8c-0.2-0.7-0.8-1-2-1    c-1.2,0-1.7,0.3-1.7,0.8c0,0.1,0,0.3,0.1,0.6l4.9,26.9c0.4,2.3,1.1,3.9,2.1,4.8c1,0.9,2.6,1.4,5.1,1.4c2.4,0,4-0.5,5-1.4    C709.4,367.9,710.1,366.3,710.5,364z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M736.5,338.4c4.6,0,6.9,1.2,6.9,3.6v11.3h-13.8V342C729.7,339.6,732,338.4,736.5,338.4z M736.8,335.3    c-2.1,0-4,0.3-5.5,0.7c-1.5,0.4-2.8,1.2-3.8,2.3c-1,1.1-1.5,2.5-1.5,4.2v26.4c0,0.7,0.6,1.1,1.8,1.1c1.2,0,1.8-0.3,1.8-1.1v-12.3    h13.8v12.3c0,0.7,0.6,1.1,1.8,1.1c1.2,0,1.8-0.3,1.8-1.1v-26.4C747.1,337.6,743.6,335.3,736.8,335.3z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M774.7,366.3c-1.3,0.6-3,0.8-4.9,0.8c-1.9,0-3.5-0.3-4.8-0.8c-1.3-0.5-1.9-1.5-1.9-2.7v-2.4    c0-0.7-0.6-1-1.8-1c-1.2,0-1.8,0.4-1.8,1v2c0,2.5,1,4.4,2.9,5.5s4.4,1.7,7.4,1.7s5.5-0.6,7.5-1.7c2-1.1,3-3,3-5.5v-4.3    c0-1.4-0.3-2.5-0.7-3.2c-0.3-0.4-0.6-0.8-0.7-1c-0.2-0.3-0.6-0.6-1.1-0.9c-0.5-0.3-1-0.5-1.4-0.8c-0.4-0.2-2.1-0.6-5-1.3l-4.1-0.9    c-1.4-0.3-2.3-0.7-2.8-1.3c-0.5-0.6-0.8-1.8-0.8-3.5V342c0-2.3,2-3.6,6.2-3.6c4.1,0,6.2,1.2,6.2,3.6v2.4c0,0.7,0.6,1,1.8,1    c1.2,0,1.8-0.3,1.8-1v-2c0-2.5-0.9-4.3-2.7-5.4c-1.8-1.1-4.2-1.7-7.1-1.7c-3,0-5.3,0.6-7.1,1.7c-1.8,1.1-2.7,2.9-2.7,5.4v3.5    c0,3.3,1,5.6,3,6.6c0.9,0.5,2.3,1,4.2,1.4l4.1,0.9c1.9,0.5,3.3,1,4.1,1.4c0.8,0.5,1.2,1.2,1.2,2.2v5.1    C776.6,364.8,776,365.7,774.7,366.3z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M803,358.4c1.5-0.2,2.7-0.8,3.5-1.8c0.8-1,1.3-2.4,1.8-4.3l3.5-14c0.3-1,0.4-1.5,0.4-1.7    c0-0.6-0.6-0.8-1.7-0.8c-1.2,0-1.8,0.4-1.9,1l-3.9,15c-0.3,1.3-0.7,2.2-1.2,2.8c-0.5,0.5-1.3,0.8-2.4,0.8c-1.1,0-1.9-0.3-2.4-0.8    c-0.5-0.5-0.8-1.5-1.2-2.8l-3.9-15c-0.2-0.7-0.8-1-1.9-1c-1.2,0-1.7,0.3-1.7,0.8c0,0.2,0.1,0.7,0.4,1.7l3.5,14    c0.5,1.9,1.1,3.4,1.8,4.3c0.8,1,1.9,1.6,3.5,1.8v10.4c0,0.7,0.6,1.1,1.8,1.1c1.2,0,1.8-0.3,1.8-1.1V358.4z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M832.5,338.4c4.6,0,6.9,1.2,6.9,3.6v21.6c0,2.4-2.3,3.6-6.9,3.6c-4.6,0-6.9-1.2-6.9-3.6V342    C825.7,339.6,828,338.4,832.5,338.4z M832.7,335.3c-3.2,0-5.8,0.6-7.7,1.7c-2,1.1-2.9,2.9-2.9,5.4v20.7c0,4.8,3.4,7.2,10.4,7.2    c3.2,0,5.8-0.6,7.7-1.7c2-1.1,3-3,3-5.5v-20.7C843.1,337.6,839.6,335.3,832.7,335.3z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M863.2,339.5c0.3,0.3,0.5,1,0.8,2.1l5.9,23.9c0.5,2,1,3.2,1.8,3.6c0.8,0.5,2.2,0.7,4.3,0.7h1    c1.2,0,1.9-0.2,2.2-0.7c0.3-0.5,0.5-1.4,0.5-2.7V337c0-0.7-0.6-1-1.8-1c-1.2,0-1.8,0.4-1.8,1v29.7h-0.5c-1,0-1.6-0.1-1.8-0.4    s-0.5-1-0.8-2.1l-5.9-23.9c-0.5-1.9-1.1-3.1-1.8-3.6c-0.8-0.5-2.2-0.8-4.3-0.8h-1c-1.2,0-1.9,0.3-2.3,0.7    c-0.3,0.5-0.5,1.4-0.5,2.7v29.5c0,0.7,0.6,1.1,1.8,1.1c1.2,0,1.8-0.3,1.8-1.1v-29.7h0.5C862.3,339.1,862.9,339.3,863.2,339.5z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M926.7,338.4c4.6,0,6.9,1.2,6.9,3.6v11.3h-13.8V342C919.8,339.6,922.1,338.4,926.7,338.4z M927,335.3    c-2.1,0-4,0.3-5.5,0.7c-1.5,0.4-2.8,1.2-3.8,2.3c-1,1.1-1.5,2.5-1.5,4.2v26.4c0,0.7,0.6,1.1,1.8,1.1c1.2,0,1.8-0.3,1.8-1.1v-12.3    h13.8v12.3c0,0.7,0.6,1.1,1.8,1.1c1.2,0,1.8-0.3,1.8-1.1v-26.4C937.2,337.6,933.8,335.3,927,335.3z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M950.6,364.3c-1.3,0-1.9,0.4-1.9,1.1v3.9c0,0.7,0.6,1.1,1.9,1.1c1.3,0,2-0.4,2-1.1v-3.9    C952.5,364.6,951.9,364.3,950.6,364.3z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M978.2,366.3c-1.3,0.6-3,0.8-4.9,0.8c-1.9,0-3.5-0.3-4.8-0.8c-1.3-0.5-1.9-1.5-1.9-2.7v-2.4    c0-0.7-0.6-1-1.8-1s-1.8,0.4-1.8,1v2c0,2.5,1,4.4,2.9,5.5c1.9,1.1,4.4,1.7,7.4,1.7c3,0,5.5-0.6,7.5-1.7c2-1.1,3-3,3-5.5v-4.3    c0-1.4-0.3-2.5-0.7-3.2c-0.3-0.4-0.5-0.8-0.7-1c-0.2-0.3-0.6-0.6-1.1-0.9c-0.5-0.3-1-0.5-1.4-0.8c-0.4-0.2-2.1-0.6-5-1.3l-4-0.9    c-1.4-0.3-2.3-0.7-2.8-1.3s-0.8-1.8-0.8-3.5V342c0-2.3,2-3.6,6.2-3.6c4.1,0,6.2,1.2,6.2,3.6v2.4c0,0.7,0.6,1,1.8,1    c1.2,0,1.8-0.3,1.8-1v-2c0-2.5-0.9-4.3-2.7-5.4c-1.8-1.1-4.2-1.7-7.1-1.7c-3,0-5.3,0.6-7.1,1.7c-1.8,1.1-2.7,2.9-2.7,5.4v3.5    c0,3.3,1,5.6,3,6.6c0.9,0.5,2.3,1,4.2,1.4l4,0.9c1.9,0.5,3.3,1,4.1,1.4c0.8,0.5,1.2,1.2,1.2,2.2v5.1    C980.2,364.8,979.5,365.7,978.2,366.3z'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='#545454'
                            d='M996.1,364.3c-1.3,0-1.9,0.4-1.9,1.1v3.9c0,0.7,0.6,1.1,1.9,1.1c1.3,0,2-0.4,2-1.1v-3.9    C998.1,364.6,997.4,364.3,996.1,364.3z'
                        />
                        <g>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                fill='#535353'
                                d='M37.2,324.3c-1.3,0-1.9,0.4-1.9,1.1v3.9c0,0.7,0.6,1.1,1.9,1.1c1.3,0,2-0.4,2-1.1v-3.9     C39.2,324.6,38.5,324.3,37.2,324.3z'
                            />
                        </g>
                        <g>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                fill='#535353'
                                d='M112.2,324.3c-1.3,0-1.9,0.4-1.9,1.1v3.9c0,0.7,0.6,1.1,1.9,1.1c1.3,0,2-0.4,2-1.1v-3.9     C114.2,324.6,113.5,324.3,112.2,324.3z'
                            />
                        </g>
                        <g>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                fill='#535353'
                                d='M401.2,324.3c-1.3,0-1.9,0.4-1.9,1.1v3.9c0,0.7,0.6,1.1,1.9,1.1c1.3,0,2-0.4,2-1.1v-3.9     C403.2,324.6,402.5,324.3,401.2,324.3z'
                            />
                        </g>
                        <g>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                fill='#535353'
                                d='M605.2,324.3c-1.3,0-1.9,0.4-1.9,1.1v3.9c0,0.7,0.6,1.1,1.9,1.1c1.3,0,2-0.4,2-1.1v-3.9     C607.2,324.6,606.5,324.3,605.2,324.3z'
                            />
                        </g>
                        <g>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                fill='#535353'
                                d='M508.2,324.3c-1.3,0-1.9,0.4-1.9,1.1v3.9c0,0.7,0.6,1.1,1.9,1.1c1.3,0,2-0.4,2-1.1v-3.9     C510.2,324.6,509.5,324.3,508.2,324.3z'
                            />
                        </g>
                        <g>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                fill='#555555'
                                d='M967.9,379.9c0,1.5,0.2,2.3,0.6,2.3h9.5c0.4,0,0.6-0.8,0.6-2.3c0-1.5-0.2-2.3-0.6-2.3h-9.5     C968.1,377.6,967.9,378.4,967.9,379.9z'
                            />
                        </g>
                    </g>
                </g>
            </svg>
        ),
    },
    {
        id: crypto.getRandomValues(new Uint32Array(1))[0],
        name: 'Yenimahalle Belediyesi',
        url: 'https://yenimahalle.bel.tr/',
        tags: ['Donanım', 'Bilgi İşlem', 'Devlet Kurumu'],
    },
] as Reference[]

export default references
