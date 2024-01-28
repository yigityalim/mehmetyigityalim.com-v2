import React from 'react'
import SectionWrapper from '@/components/Sections/SectionWrapper'
import { Mail, Linkedin, Phone, MapPin, BookOpen, User } from 'lucide-react'
import Section from './Section'

export default function ContactSection(): React.ReactElement {
    return (
        <SectionWrapper id='contact' title='İletişim'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <Section icon={<Mail size={20} />} title='E-Posta'>
                    <a href='mailto:mehmetyigityalim@gmail.com' className='text-blue-500 hover:underline'>
                        mehmetyigityalim@gmail.com
                    </a>
                </Section>
                <Section icon={<Linkedin size={20} />} title='LinkedIn'>
                    <a href='https://linkedin.com/in/yigityalim' className='text-blue-500 hover:underline'>
                        linkedin.com/in/yigityalim
                    </a>
                </Section>
                <Section icon={<Phone size={20} />} title='Telefon'>
                    <a href='tel:+905000000000' className='text-blue-500 hover:underline'>
                        +90 500 000 00 00
                    </a>
                </Section>
                <Section icon={<MapPin size={20} />} title='Konum'>
                    Ankara, Turkey | Muğla, Turkey
                </Section>
                <Section icon={<BookOpen size={20} />} title='Eğitim'>
                    Başkent University, Management Information Systems
                </Section>
                <Section icon={<User size={20} />} title='Pozisyon'>
                    Freelancer
                </Section>
            </div>
        </SectionWrapper>
    )
}
