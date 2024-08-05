const IntroPersonalInfoForm = ({ data, pictureUpload, handleData }) => {

  return (
    <form action="" className="intro-personal" >
      <h2>Personal Information</h2>
      <div className="intro">
        <h3>Introduction</h3>
        <div className="profile-pic">
          <input
            onChange={pictureUpload}
            type="file" />
        </div>
        <div className="fullName">
          <input
            placeholder="Enter Full Name"
            value={data.fullName}
            data-key="fullName"
            onChange={handleData}
            type="text" />
        </div>
        <div className="current-position">
          <input
            placeholder="Enter Your current position/job/state"
            value={data.currentPosition}
            data-key="currentPosition"
            onChange={handleData}
            type="text" />
        </div>
        <div className="bio">
          <textarea
            placeholder="Tell something about yourself..."
            value={data.aboutSelf}
            onChange={handleData}
            data-key="aboutSelf"
            name="" id=""></textarea>
        </div>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <div className="email">
          <input
            onChange={handleData}
            value={data.email}
            data-key="email"
            type="email" />
        </div>
      </div>
    </form>
  )

}

export default IntroPersonalInfoForm
