import { useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'
import Header from './components/Header'
import IntroPersonalInfoForm from './components/personal-info/intro/IntroPersonalInfoForm'
import AddEducation from './components/personal-info/education/AddEducation'
import Resume from './components/Resume'
import exampleData from './exampleData'
import uniqid from "uniqid"

import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import AddExperience from './components/personal-info/experience/AddExperience'

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)
  const [sections, setSections] = useState(exampleData.sections)
  const [sectionOpen, setSectionOpen] = useState(null)
  // Store prevState to revert changes when user clicks "cancel"
  const [prevState, setPrevState] = useState(null);
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
        if (obj.id === id) {
          obj[key] = inputValue
        }
        return obj
      })
    })
  }

  function createForm(arrayName, object) {
    setPrevState(null)
    const section = structuredClone(sections[arrayName])
    section.push(object)
    setSections({ ...sections, [arrayName]: section })
  }

  function createEducationForm() {
    createForm("educations", {
      schoolName: "",
      degree: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      id: uniqid()
    })
  }

  function createExperienceForm() {
    createForm("experiences", {
      companyName: "",
      degree: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      id: uniqid()
    })
  }

  const setOpen = (sectionName) => setSectionOpen(sectionName)

  function removeForm(e) {
    const form = e.target.closest(".section-form")
    const { arrayName } = form.dataset
    const section = sections[arrayName]
    const { id } = form

    setSections({
      ...sections,
      [arrayName]: section.filter(item => item.id !== id)
    })
  }

  function cancelForm(e) {
    if (prevState === null) {
      removeForm(e)
      return
    }
  }

  function toggleValue(e, key) {
    const sectionForm = e.target.closest(".section-form")
    const { id } = sectionForm
    const { arrayName } = sectionForm.dataset
    const section = sections[arrayName]

    setSections({
      ...sections,
      [arrayName]: section.map(form => {
        if (form.id === id) {
          setPrevState(Object.assign({}, form));
          form[key] = !form[key]
        }
        return form
      })
    })

  }

  const toggleCollapsed = (e) => toggleValue(e, "isCollapsed")

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${personalInfo.fullName}'s Resume`
  })


  return (
    <div className='container'>
      <Header handlePrint={handlePrint} />

      <div className="resume-edit-section">

        <aside className='forms'>

          <IntroPersonalInfoForm
            data={personalInfo}
            pictureUpload={handleIntroPersonalInfoPic}
            handleData={handleIntroPersonalInfo}
          />

          <AddEducation
            educations={sections.educations}
            isOpen={sectionOpen === "Education"}
            onChange={handleSectionChange}
            createForm={createEducationForm}
            setOpen={setOpen}
            onCancel={cancelForm}
            toggleCollapsed={toggleCollapsed}
            onRemove={removeForm}
          />

          <AddExperience
            experiences={sections.experiences}
            isOpen={sectionOpen === "Experience"}
            onChange={handleSectionChange}
            createForm={createExperienceForm}
            setOpen={setOpen}
            onCancel={cancelForm}
            toggleCollapsed={toggleCollapsed}
            onRemove={removeForm}
          />

        </aside>

        <Resume
          reference={componentRef}
          personalInfo={personalInfo}
          sections={sections}
        />
      </div>
    </div>
  )
}

export default App
