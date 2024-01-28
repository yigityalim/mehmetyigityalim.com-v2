import React from 'react'
import HeroSection from '@/components/Sections/Hero'
import NavigationSection from '@/components/Sections/Navigation'
import ProjectSection from '@/components/Sections/Projects'
import BlogSection from '@/components/Sections/Blog'
import ContactSection from '@/components/Sections/Contact'
import PlansSection from '@/components/Sections/Plans'
import ReferencesSection from '@/components/Sections/References'
import Footer from '@/components/Sections/Footer'

export default function Sections() {
    return (
        <main className='md:no-scrollbar container relative z-10 mx-auto h-dvh max-w-xl snap-y snap-mandatory overflow-y-auto overflow-x-hidden md:snap-none'>
            <HeroSection />
            <NavigationSection />
            <ContactSection />
            <PlansSection />
            <ReferencesSection />
            <ProjectSection />
            <BlogSection />
            <Footer />
        </main>
    )
}
