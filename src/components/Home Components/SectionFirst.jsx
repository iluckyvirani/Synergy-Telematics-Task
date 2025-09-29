// SectionFirst.jsx

import investor from "../../assets/images/investor.png";
import approval from "../../assets/images/approval.png";
import landbank from "../../assets/images/landbank.png";

export default function SectionFirst() {
  return (
    <section className="section-first py-2.5 bg-[linear-gradient(90deg,rgba(194,54,101,1)-110%,rgba(27,30,111,1)_30%)]">
      <div className="container-fluid w-full mx-auto relative px-3">
        <ul className="bner-link flex flex-wrap justify-end m-0 p-0 list-none">
          <li className="w-1/4 px-4 box-border group">
            <a
              href="https://upgis2023.in/investorcrm/welcome/registration"
              target="_blank"
              rel="noopener noreferrer"
              className="linkbtn table w-full no-underline transition duration-300"
            >
              <span className="icon table-cell align-middle">
                <img src={investor} alt="Investor" className="rounded-[50%] border-2 border-white w-full p-1.5 group-hover:border-[#f4c619]"/>
              </span>
              <span className="table-cell align-middle pl-4 font-semibold text-[1.2em] text-white group-hover:text-[#f4c619]">
                Nivesh Sarathi <br />
                (Investor Relationship)
              </span>
            </a>
          </li>
          <li className="w-1/4 px-4 box-border group">
            <a
              href="Wizard.aspx"
              className="linkbtn table w-full text-white no-underline transition duration-300"
            >
              <span className="icon table-cell align-middle">
                <img src={approval} alt="Approval" className="rounded-[50%] border-2 border-white w-full p-1.5 group-hover:border-[#f4c619]"/>
              </span>
              <span className="table-cell align-middle pl-4 font-semibold text-[1.2em] text-white group-hover:text-[#f4c619]">
                Know Your Approvals & Incentives Wizard
              </span>
            </a>
          </li>
          <li className="w-1/4 px-4 box-border group">
            <a
              href="LandBank.aspx"
              className="linkbtn table w-full text-white no-underline transition duration-300"
            >
              <span className="icon table-cell align-middle">
                <img src={landbank} alt="Land Bank" className="rounded-[50%] border-2 border-white w-full p-1.5 group-hover:border-[#f4c619]"/>
              </span>
              <span className="table-cell align-middle pl-4 font-semibold text-[1.2em] text-white group-hover:text-[#f4c619]">Land Bank</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
