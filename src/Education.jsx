import PolyU_Logo from './assets/svgs/PolyU-Logo.svg'

export default function Education() {
  return(
    <div className="container font-creato px-10">
      <h1 className="text-4xl font-bold py-3">Education</h1>
      <hr />
      <img className="h-18" src={PolyU_Logo} alt="HKPolyU Logo"/> 
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h1 className="italic text-2xl">The Hong Kong Polytechnic University</h1>
        <h2 className="flex-shrink-0">Graduated at 30 September 2021 </h2>
      </div>
      <p className="">Bachelor of Science, specialized in Geo-Informatics</p>
      <p className="">Courses : Geomatics Algorithms and Programming (Grade: A) - authorized a localized asset management GIS System of PolyU Campus from scratch using Java </p>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 gap-2 mt-4">
        <h1 className="italic text-2xl">RMIT University, Melbourne, Australia </h1>
        <h2 className="flex-shrink-0">February - June 2019 </h2>
      </div>
      <p className="">Study Abroad Program in Surveying and Geospatial Science. </p>
      <ul>
        <li className="">Constructed a photorealistic model of the Melborne Old Gaol main gate using Structure-from-Motion (SfM) </li>
        <li className=""></li>
      </ul>
    </div>
  );
}
