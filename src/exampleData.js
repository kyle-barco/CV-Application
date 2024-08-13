import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "Kyle Barco",
    currentPosition: "Sofware Developer",
    aboutSelf: "pogi",
    profilePicUrl: "https://avatars.githubusercontent.com/u/101305133?v=4",
    email: "kb@example.com",
    phoneNumber: "+44 3245 5521 5521",
    facebookAcc: "Kyle Barco",
    websiteUrl: "example.com",
    address: "Manila, Philippines",
  },

  sections: {
    educations: [
      {
        degree: "BS Information Technology",
        schoolName: "Polytechnic University Of The Philippines",
        location: "Sta. Mesa Manila, Philippines",
        startDate: "08/2024",
        endDate: "present",
        isCollapsed: true,
        id: uniqid(),
      },
      {
        degree: "Master's Degree in Math",
        schoolName: "Hidden University",
        location: "New York City, US",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
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
        isCollapsed: true,
        id: uniqid(),
      },
      {
        companyName: "Black Mesa Labs",
        positionTitle: "UX Research Assistant",
        location: "Berlin, Germany",
        description: "Nag reresearch",
        startDate: "04/2018",
        endDate: "02/2019",
        isCollapsed: true,
        id: uniqid(),
      },
    ],
  },
};

export default exampleData;
