export const posts = [
    {
      id: "3e7c3f6d-bdf5-46ae-8d90-181401g28ae2",
      name: "GARCH Models in python",
      subject: "Timeseries volatility analysis",
      text: "Delve into Bitcoin price dynamics with this Google Colab notebook!",
      date: "2024-03-10T11:45:00",
      read: true,
      labels: ["Visualization", "Predictive analysis", "Analytics", "Bitcoin", "Python"],
      href: "/finance-garch-bitcoin",
      type: "analytics",
    },
    {
      id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
      name: "Analyzing bitcoin prices",
      subject: "APIs and visualization",
      text: "Delve into Bitcoin price dynamics for backtesting strategies! Utilize Pandas, Plotly, and TA-Lib for thorough analysis and visualization.",
      date: "2023-04-10T11:45:00",
      read: true,
      labels: ["Visualization", "Analytics", "Plotly", "Bitcoin", "Python", "Backtesting"],
      href: "/bitcoin-analysis",
      type: "analytics",
    },
    {
      id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
      name: "Web scrapping with Python",
      subject: "Data acquisition",
      text: "Embark on a journey of data acquisition through web scraping. In this notebook, I&apos;ll guide you through the process of extracting valuable data from the web using powerful Python libraries.",
      date: "2023-10-22T09:00:00",
      read: true,
      labels: ["Python", "Selenium", "Beautiful Soup"],
      href: "/web-scrapping",
      type: "analytics",
    },
    // {
    //   id: "61c35085-72d7-42b4-8d62-738f700d4b92",
    //   name: "Linear regression for predicting house prices.",
    //   subject: "Linear Regression",
    //   text: "Dive into the realm of real estate valuation as you harness the power of data to predict house prices. Gain insights into the intricate relationship between various factors such as location, size, and amenities, and their impact on property values.\n\n By leveraging linear regression, explore the factors influencing house prices and make informed predictions.",
    //   date: "2023-03-25T13:15:00",
    //   read: false,
    //   labels: ["analytics", "budget"],
    //   href: "/linear-regression",
    //   type: "machinelearning",
    // },
    
    // {
    //   id: "17c0a96d-4415-42b1-8b4f-764efab57f66",
    //   name: "The AI stack",
    //   subject: "New Project Idea",
    //   text: "",
    //   date: "2023-01-28T17:45:00",
    //   read: false,
    //   labels: ["meeting", "work", "important"],
    //   type: "machinelearning",
    // },
  ]
  
  export type Analytics = (typeof posts)[number]
  
  export const contacts = [
    {
      name: "Emma Johnson",
      email: "emma.johnson@example.com",
    },
    {
      name: "Liam Wilson",
      email: "liam.wilson@example.com",
    },
    {
      name: "Olivia Davis",
      email: "olivia.davis@example.com",
    },
    {
      name: "Noah Martinez",
      email: "noah.martinez@example.com",
    },
    {
      name: "Ava Taylor",
      email: "ava.taylor@example.com",
    },
    {
      name: "Lucas Brown",
      email: "lucas.brown@example.com",
    },
    {
      name: "Sophia Smith",
      email: "sophia.smith@example.com",
    },
    {
      name: "Ethan Wilson",
      email: "ethan.wilson@example.com",
    },
    {
      name: "Isabella Jackson",
      email: "isabella.jackson@example.com",
    },
    {
      name: "Mia Clark",
      email: "mia.clark@example.com",
    },
    {
      name: "Mason Lee",
      email: "mason.lee@example.com",
    },
    {
      name: "Layla Harris",
      email: "layla.harris@example.com",
    },
    {
      name: "William Anderson",
      email: "william.anderson@example.com",
    },
    {
      name: "Ella White",
      email: "ella.white@example.com",
    },
    {
      name: "James Thomas",
      email: "james.thomas@example.com",
    },
    {
      name: "Harper Lewis",
      email: "harper.lewis@example.com",
    },
    {
      name: "Benjamin Moore",
      email: "benjamin.moore@example.com",
    },
    {
      name: "Aria Hall",
      email: "aria.hall@example.com",
    },
    {
      name: "Henry Turner",
      email: "henry.turner@example.com",
    },
    {
      name: "Scarlett Adams",
      email: "scarlett.adams@example.com",
    },
  ]
  
  export type Contact = (typeof contacts)[number]