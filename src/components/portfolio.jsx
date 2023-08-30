import { useState , useEffect} from 'react'
import transition from '../utils/transition'
import ProjectCard from './projectCard';
function Portfolio() {
    const projects = [
        {
          id: 1,
          title: 'Real-Time Weather App',
          description: 'This application provides real-time weather information for cities around the world. With a simple and sleek design, users can quickly access accurate weather data by entering the name of their desired city. The app fetches the latest weather information from a reliable API source and presents it in an easy-to-understand format.',
          technologies: ['Flutter', 'API Integration'],
          imageUrl: 'https://i.imgur.com/l59lmwz.jpg',
        },
        {
          id: 2,
          title: 'Poultry House Management System',
          description: 'Poultry House Management System is a powerful web application designed to streamline the management of temperature and intake data for chicken houses. This innovative solution empowers administrators to efficiently monitor and control the environment of poultry houses, ensuring optimal conditions for the well-being and productivity of the chickens. Built using Flutter and powered by the Provider package, this responsive app seamlessly adapts to both mobile and laptop devices, offering convenience and flexibility for users on the go.',
          technologies: ['Flutter', 'Provider Package'],
          imageUrl: 'https://i.imgur.com/WDJYQTc.jpg',
        },
        {
          id: 3,
          title: 'SecureChat Messaging App',
          description: "SecureChat is a cutting-edge messaging app that empowers users to connect with friends and loved ones in a secure and seamless environment. With a focus on privacy and convenience, users can log in using their email and password, which is securely stored on Firebase, a trusted cloud-based platform. Whether you're catching up with friends, making plans, or sharing exciting news, SecureChat ensures your conversations are safe, private, and easily accessible.",
          technologies: ['Flutter', 'Firebase Authentication'],
          imageUrl: 'https://i.imgur.com/2MEh7wL.jpg',
        },
        {
          id: 4,
          title: 'BMI Tracker App',
          description: 'This app is designed to be user-friendly and accessible, making it easy for you to keep track of your BMI over time. With just a few taps, you can access your BMI and make informed decisions about your health.',
          technologies: ['Flutter'],
          imageUrl: 'https://i.imgur.com/lQV9hDg.jpg',
        },
      ];
      
  return (
    <>
    <h1 className="text-4xl text-center mt-10">
        projects
    </h1>
    <div className="w-11/12 mx-auto mt-10">
    <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center p-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
    </>
  )
}

export default transition(Portfolio) ;