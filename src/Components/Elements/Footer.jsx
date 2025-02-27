import React from "react";
import Logo from "./Logo";
import LicenceLogo from "./LicenceLogo";
function Footer() {
  const footerItems = [
    {
      heading: "Mortgage",
      para: "We can't wait to say “Welcome home.” Apply 100% online, with expert customer support.",
    },
    {
      heading: "Real Estate",
      para: "Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.",
    },
    {
      heading: "Cover",
      para: "Shop, bundle, and save on insurance coverage for home, auto, life, and more.",
    },
    {
      heading: "Inspect",
      para: "Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.",
    },
    {
      heading: "Settlement Service",
      para: "Get transparent rates when you shop for title insurance all in one convenient place.",
    },
  ];
  const footerResource = [
    "Home affordability calculator",
    "Mortgage calculator",
    "Free mortgage calculator",
    "Mortgage calculator with taxes",
    "Mortgage calculator with PMI",
    "Rent vs buy calculator",
    "HELOC payment calculator",
    "HELOC vs cash-out refinance calculator",
    "Buy a home",
    "Sell a home",
    "Get home inspection",
  ];
  const company = [
    "About Us",
    "Careers",
    "Media",
    "Partner With Us",
    "Learning center",
    "FAQs",
    "Investor Relations",
  ];
  const contactUs = ["hello@better.com", "415-523-8837", "FAQ", "Glossary"];
  const legal = [
    "NMLS Consumer Access",
    "Privacy Policy",
    "Terms of Use",
    "Disclosures & Licensing",
    "Affiliated Business",
    "Browser Disclaimer",
  ];
  const longPara = [
    {
      main: "Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See",
      link: "One Day Mortgage™ Terms and Conditions.",
    },
    {
      main: "Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See ",
      link: "One Day Heloc™ Terms and Conditions.",
    },
    {
      main: "Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.",
    },
  ];
  const lastParaGroup = [
    "© 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.",
    "Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access",
    "Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.",
    "New York State Housing and Anti-Discrimination Notice",
    "New York Standard Operating Procedures",
    "Texas Real Estate Commission: Information About Brokerage Services | Consumer Protection Notice",
    "Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.",
    "Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.",
    "Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s license numbers.",
    "Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.",
    "Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.",
  ];
  return (
    <footer className="mt-[4rem] lg:mx-[4rem]">
      <Logo currentColor={"#017747"} w="85px" h="35px" />
      <p className="text-[15px] text-gray-600">
        Better is a family of companies serving all your homeownership needs.
      </p>
      <div className=" mt-[1.2rem] mb-[2rem] grid gap-[.5rem]">
        {footerItems.map((each) => (
          <div key={each.heading}>
            <h1 className="grid grid-cols-[70px_auto] gap-[.3rem] items-center mt-[.5rem]">
              <Logo currentColor={"#017747"} h="22.16px" w="70px" />
              <span className="text-gray-500 text-[22px]">{each.heading}</span>
            </h1>
            <p className="text-[15px] text-gray-600">{each.para}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-[.8rem] mb-[2rem]">
        <h1 className="font-semibold text-[17px] mb-[.4rem]">Resources</h1>
        {footerResource.map((each) => (
          <h1 key={each} className="text-[17px] font-light">
            {each}
          </h1>
        ))}
      </div>
      <div className="grid gap-[.8rem] mb-[2rem]">
        <h1 className="font-semibold text-[17px] mb-[-.6rem]">Company</h1>
        {company.map((each) => (
          <h1 key={each} className="text-[17px] font-light">
            {each}
          </h1>
        ))}
      </div>
      <div className="grid gap-[.8rem] mb-[2rem]">
        <h1 className="font-semibold text-[17px] mb-[-.6rem]">Contact Us</h1>
        {contactUs.map((each) => (
          <h1 key={each} className="text-[17px] font-light">
            {each}
          </h1>
        ))}
      </div>
      <div className="grid gap-[.8rem] mb-[2rem]">
        <h1 className="font-semibold text-[17px] ">Legal</h1>
        {legal.map((each) => (
          <h1 key={each} className="text-[17px] font-light">
            {each}
          </h1>
        ))}
      </div>
      <LicenceLogo />
      <div className="grid gap-[1rem] mb-[2rem]">
        {longPara.map((each, index) => (
          <p key={each + index} className="text-[13px] text-gray-700">
            <sup>{index + 1}</sup>
            {each.main}
            <span className="underline hover:cursor-pointer">{each.link}</span>
          </p>
        ))}
      </div>
      <hr className="mx-[-1.5rem] mb-[2rem]" />
      <div className="grid gap-[1rem] mb-[1rem]">
        {lastParaGroup.map((each) => (
          <p key={each} className="text-[13px] text-gray-700">
            {each}
          </p>
        ))}
      </div>
    </footer>
  );
}
export default Footer;
