import { useState } from 'react'

import Header from './components/Header'
import IntroPersonalInfoForm from './components/personal-info/intro/IntroPersonalInfoForm'
import EducationInfoForm from './components/personal-info/education/EducationInfoForm'
import ExperienceInfoForm from './components/personal-info/experience/ExperienceInfoForm'
import Resume from './components/Resume'
import exampleData from './exampleData'

import 'font-awesome/css/font-awesome.min.css'
import './App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)
  const [sections, setSections] = useState(exampleData.sections)

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

  function handleSectionChange(e) {
    const { key } = e.target.dataset
    const inputValue = e.target.value
    const form = e.target.closest(".section-form")
    const { id } = form
    const { arrayName } = form.dataset
    const section = sections[arrayName]
    setSections({
      ...sections,
      [arrayName]: section.map((obj) => {
        // if (obj.id === id) {
        //   obj[key] = inputValue
        // } 
        obj[key] = inputValue
        return obj
      })
    })
  }

  return (
    <>
      <Header />
      <aside className='forms'>

        <IntroPersonalInfoForm
          data={personalInfo}
          pictureUpload={handleIntroPersonalInfoPic}
          handleData={handleIntroPersonalInfo}
        />
        <EducationInfoForm
          handleData={handleSectionChange}
          data={sections}
        />
        <ExperienceInfoForm
          handleData={handleSectionChange}
          data={sections}
        />
      </aside>

      <Resume
        personalInfo={personalInfo}
        sections={sections}
      />
    </>
  )
}

export default App
