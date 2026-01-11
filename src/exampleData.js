import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "Kyle Barco",
    currentPosition: "Sofware Developer",
    aboutSelf: "pogi",
    profilePicUrl: "https://avatars.githubusercontent.com/u/101305133?v=4",
    email: "kylebarco04@gmail.com",
    phoneNumber: "095626763614",
    facebookAcc: "Kyle Barco",
    // websiteUrl: "kyleperspectives.pages.dev",
    address: "Manila, Philippines",
  },

  sections: {
    educations: [
      {
        degree: "Diploma in Information Technology",
        schoolName: "Polytechnic University Of The Philippines",
        location: "Sta. Mesa Manila, Philippines",
        startDate: "06/2024",
        endDate: "present",
        isCollapsed: true,
        id: uniqid(),
      },
      {
        degree: "TVL-ICT | Senior High School",
        schoolName: "Cuatro Christian School SHS Dept.",
        location: "Cainta Rizal, Philippines",
        startDate: "08/2021",
        endDate: "07/2023",
        isCollapsed: true,
        id: uniqid(),
      },
      {
        degree: "Junior High School",
        schoolName: "Cuatro Christian School JHS Dept.",
        location: "Cainta Rizal, Philippines",
        startDate: "06/2017",
        endDate: "04/2021",
        isCollapsed: true,
        id: uniqid(),
      },
      {
        degree: "Kindergarden & Elementary",
        schoolName: "Cuatro Christian School Elem Dept.",
        location: "Cainta Rizal, Philippines",
        startDate: "06/2009",
        endDate: "04/2017",
        isCollapsed: true,
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "Lone Wolf Technologies",
        positionTitle: "Quality Assurance - Internship",
        location: "BGC Taguig, Philippines",
        description: "Conduct manual testing to improve software quality.",
        startDate: "03/2023",
        endDate: "06/2023",
        isCollapsed: true,
        id: uniqid(),
      },
      {
        companyName: "Topnoms",
        positionTitle: "Data Entry Operator",
        location: "Cainta Rizal, Philippines",
        description: "Compile and verify data.",
        startDate: "03/2023",
        endDate: "06/2023",
        isCollapsed: true,
        id: uniqid(),
      },
      {
        companyName: "Savemore Primark",
        positionTitle: "Bagger",
        location: "Cainta Rizal, Philippines",
        description: "Pack customers' purchases into bags ",
        startDate: "06/2022",
        endDate: "08/2022",
        isCollapsed: true,
        id: uniqid(),
      },
      {
        companyName: "Palmera Dimsum House",
        positionTitle: "On Call Waiter",
        location: "Tatay Rizal, Philippines",
        description:
          "Served foods and beverages while maintaining high-quality formal table service to over 100+ customers.",
        startDate: "11/2019",
        endDate: "03/2020",
        isCollapsed: true,
        id: uniqid(),
      },
      {
        companyName: "Paul Calvin's Catering",
        positionTitle: "On Call Waiter",
        location: "Tatay Rizal, Philippines",
        description:
          "Served foods and beverages while maintaining high-quality formal table service to over 100+ customers.",
        startDate: "11/2019",
        endDate: "03/2020",
        isCollapsed: true,
        id: uniqid(),
      },
    ],
  },
};

export default exampleData;
