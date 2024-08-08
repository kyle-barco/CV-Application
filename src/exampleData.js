import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "Kyle Barco",
    currentPosition: "Sofware Developer",
    aboutSelf: "pogi",
    profilePicUrl: "https://avatars.githubusercontent.com/u/101305133?v=4",
    email: "kyle.barco@example.email.com",
    phoneNumber: "+44 3245 5521 5521",
    facebookAcc: "Kyle Barco",
    websiteUrl: "kb.example.com",
    address: "Manila, Philippines",
  },

  sections: {
    educations: [
      {
        degree: "Diploma in Information Technology",
        schoolName: "Polytechnic University Of The Philippines",
        location: "Sta. Mesa Manila, Philippines",
        startDate: "08/2020",
        endDate: "present",
        // isCollapsed: true,
        // isHidden: false,
        id: uniqid(),
      },
      {
        degree: "Master's Degree in Math",
        schoolName: "Hidden University",
        location: "New York City, US",
        startDate: "08/2020",
        endDate: "present",
        // isCollapsed: true,
        // isHidden: true,
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "Savemore Primark",
        positionTitle: "Bagger",
        location: "Rizal, Philippines",
        description: "Bag the customers groceries.",
        startDate: "06/2022",
        endDate: "08/2022",
        // isCollapsed: true,
        // isHidden: false,
        id: uniqid(),
      },
      {
        companyName: "Black Mesa Labs",
        positionTitle: "UX Research Assistant",
        location: "Berlin, Germany",
        description:
          "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
        startDate: "04/2018",
        endDate: "02/2019",
        // isCollapsed: true,
        // isHidden: false,
        id: uniqid(),
      },
    ],
  },
};

export default exampleData;
