import React from 'react'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'

export default function App() {

  // const data = [{ name: "Evyatar Bem Ami", description: "I'm 26 years old and live in Rehovot", color: "blue", image: "https://cdn.vectorstock.com/i/750p/13/04/man-profile-picture-vector-2041304.avif" },
  // { name: "Evyatar Bem Ami", description: "I'm 26 years old and live in Rehovot", color: "green", image: "https://cdn.vectorstock.com/i/750p/13/04/man-profile-picture-vector-2041304.avif" },
  // { name: "Evyatar Bem Ami", description: "I'm 26 years old and live in Rehovot", color: "purple", image: "https://cdn.vectorstock.com/i/750p/13/04/man-profile-picture-vector-2041304.avif" }]

  return (
    <div>
      <Header />
      <ProfileCard name="Evyatar Bem Ami" description="I'm 26 years old, living in Rehovot, married to Stav, studying programming in IDF" color="blue" image="https://cdn.vectorstock.com/i/750p/13/04/man-profile-picture-vector-2041304.avif" />
      <ProfileCard name="Evyatar Bem Ami" description="I'm 26 years old, living in Rehovot, married to Stav, studying programming in IDF" color="green" image="https://cdn.vectorstock.com/i/750p/13/04/man-profile-picture-vector-2041304.avif" />
      <ProfileCard name="Evyatar Bem Ami" description="I'm 26 years old, living in Rehovot, married to Stav, studying programming in IDF" color="purple" image="https://cdn.vectorstock.com/i/750p/13/04/man-profile-picture-vector-2041304.avif" />
      <Footer />
    </div>
  )
}