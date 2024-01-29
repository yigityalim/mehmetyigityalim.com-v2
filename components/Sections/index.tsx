import React from 'react'
import HeroSection from './Hero'
import NavigationSection from './Navigation'
import ProjectSection from './Projects'
import BlogSection from './Blog'
import ContactSection from './Contact'
import PlansSection from './Plans'
import ReferencesSection from './References'
import Footer from './Footer'

export default function Sections(): React.ReactElement {
    return (
        <main className='md:no-scrollbar container relative z-10 mx-auto h-dvh max-w-xl snap-y snap-mandatory overflow-y-auto overflow-x-hidden md:snap-none'>
            <HeroSection />
            <NavigationSection />
            <ContactSection />
            <BlogSection />
            <Footer />
        </main>
    )
}
/*

            <PlansSection />
            <ReferencesSection />
            <ProjectSection />
            */
