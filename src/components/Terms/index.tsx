import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const TermsSection = ({ title }: { title: string }) => {
  const ListItem = ({ text }: { text: string }) => (
    <p className="text-body-color mb-4 flex items-start text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md mt-1">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="terms" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">{title}</h1>
              <h2 className="text-xl text-gray-400 mb-4">Please read carefully before submitting any service request. Following these rules ensures smooth processing and approval for all event-related services.</h2>
            </div>

            {/* Two-column grid for terms */}
            <div className="w-full px-4 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-4">1. Request Procedure</h3>
                <ListItem text="All event service requests (Video Production, Backscreen Management, Stage Lighting) must be submitted through the official web form, at least 7 days ahead of the event." />
                <ListItem text="Once submitted, the system will generate a PDF request form with a unique Job ID and all filled requirements." />
                <ListItem text="The printed PDF must be signed by the responsible persons (event organizers/teachers-in-charge) and handed over to the Computer Society." />
                <ListItem text="Only after handover of the signed request letter will the job be considered for approval." />

                <h3 className="text-xl font-semibold mt-8 mb-4">2. Approval & Confirmation</h3>
                <ListItem text="Within 24 hours of receiving the signed letter, the Computer Society will issue an official confirmation message through the society's official WhatsApp number." />

                <h3 className="text-xl font-semibold mt-8 mb-4">3. Content & Material Submission</h3>
                <ListItem text="All content (images, logos, names, schedules, scripts, sponsor details) must be submitted at least 3 days before the event." />
                <ListItem text="Organizers are fully responsible for providing accurate and verified details." />
                <ListItem text="The Computer Society will not accept responsibility for errors caused by incorrect or late submissions." />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">4. Technical Responsibilities</h3>
                <ListItem text="The Computer Society team will handle only the requested services (video, backscreen, stage lighting)." />
                <ListItem text="Organizers must ensure availability of required equipment (LED screens, projectors, sound systems, stage power supply)." />
                <ListItem text="The Computer Society will not be held responsible for failures caused by third-party equipment or venue limitations." />

                <h3 className="text-xl font-semibold mt-8 mb-4">5. Event Day Protocol</h3>
                <ListItem text="The service team must be granted venue access at least 1.5 hours before the event for setup and testing." />
                <ListItem text="Only authorized Computer Society members may operate the systems." />
                <ListItem text="Any last-minute changes must be communicated only to the team lead." />

                <h3 className="text-xl font-semibold mt-8 mb-4">6. Final Authority</h3>
                <ListItem text="The Computer Society reserves the right to reject or withdraw services at any point if these rules are violated." />
                <ListItem text="All service-related decisions made by the Service Team are final." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
