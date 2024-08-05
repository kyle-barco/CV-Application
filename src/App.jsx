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

  function handleIntroPersonalInfoPic(e) {
    setPersonalInfo({
      ...personalInfo,
      profilePicUrl: URL.createObjectURL(e.target.files[0])
    })
  }

  return (
    <>
      <Header />
      <IntroPersonalInfoForm
        data={personalInfo}
        pictureUpload={handleIntroPersonalInfoPic}
        handleData={handleIntroPersonalInfo}

      />
      <Resume
        personalInfo={personalInfo}
      />
    </>
  )
}

export default App
