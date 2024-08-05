import { useState } from 'react'

import Header from './components/Header'
import IntroPersonalInfoForm from './components/personal-info/intro/IntroPersonalInfoGroup'
import Resume from './components/Resume'
import exampleData from './exampleData'

import 'font-awesome/css/font-awesome.min.css'
import './App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)
  function handleIntroPersonalInfo(e) {
    const { key } = e.target.dataset
    setPersonalInfo({ ...personalInfo, [key]: e.target.value })
  }

  return (
    <>
      <Header />
      <IntroPersonalInfoForm
        onChange={handleIntroPersonalInfo}
        profilePic={personalInfo.profilePicUrl}
        fullName={personalInfo.fullName}
        currPos={personalInfo.currentPosition}
        abtSelf={personalInfo.aboutSelf}

      />
      <Resume
        personalInfo={personalInfo}
      />
    </>
  )
}

export default App
