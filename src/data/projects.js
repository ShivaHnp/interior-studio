// پروژه ۱
import p1_cover from '../assets/project 1/cover.webp'
import p1_2 from '../assets/project 1/photo2.webp'
import p1_3 from '../assets/project 1/photo3.webp'
import p1_4 from '../assets/project 1/photo4.webp'
import p1_5 from '../assets/project 1/photo5.webp'
import p1_6 from '../assets/project 1/photo6.webp'
import p1_7 from '../assets/project 1/photo7.webp'
import p1_8 from '../assets/project 1/photo8.webp'

// پروژه ۲
import p2_cover from '../assets/project 2/cover.webp'
import p2_2 from '../assets/project 2/photo2.webp'
import p2_3 from '../assets/project 2/photo3.webp'
import p2_4 from '../assets/project 2/photo4.webp'
import p2_5 from '../assets/project 2/photo5.webp'
import p2_6 from '../assets/project 2/photo6.webp'
import p2_7 from '../assets/project 2/photo7.webp'

// پروژه ۳
import p3_cover from '../assets/project 3/cover.webp'
import p3_2 from '../assets/project 3/photo2.webp'
import p3_3 from '../assets/project 3/photo3.webp'
import p3_4 from '../assets/project 3/photo4.webp'

// پروژه ۴
import p4_cover from '../assets/project 4/cover.webp'
import p4_2 from '../assets/project 4/photo2.webp'
import p4_3 from '../assets/project 4/photo3.webp'
import p4_4 from '../assets/project 4/photo4.webp'
import p4_5 from '../assets/project 4/photo5.webp'



export const projects = [
    {
        id: 1,
        slug: 'tehran',
        name: 'Influencer Apartment',
        city: 'Tehran',
        category: 'Residential',
        year: '2024',
        area: '120m²',
        cover: p1_cover,
        
        images: [p1_cover, p1_2, p1_3, p1_4, p1_5, p1_6, p1_7, p1_8]
    },
    {
        id: 2,
        slug: 'paris-residential',
        name: 'Natural Design',
        city: 'Paris',
        category: 'Residential',
        year: '2024',
        area: '85m²',
        cover: p2_cover,

        images: [p2_cover, p2_2, p2_3, p2_4, p2_5, p2_6, p2_7]
    },
    {
        id: 3,
        slug: 'japandi-kitchen',
        name: 'Japandi Kitchen',
        city: "Val d'Aosta",
        category: 'Residential',
        year: '2023',
        area: '200m²',
        cover: p3_cover,

        images: [p3_cover, p3_2, p3_3, p3_4]
    },
    {
        id: 4,
        slug: 'brera-loft',
        name: 'Porta Romana',
        city: 'Milan',
        category: 'Residential',
        year: '2023',
        area: '95m²',
        cover: p4_cover,

        images: [p4_cover, p4_2, p4_3, p4_4, p4_5]
    },
]