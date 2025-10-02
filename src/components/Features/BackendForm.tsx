"use client";

import { useState } from "react";

interface RequestFormProps {
  onClose: () => void;
  title: string;
}

const BackendForm: React.FC<RequestFormProps> = ({ onClose, title }) => {
  const [showLetter, setShowLetter] = useState(false);

  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    society: "",
    venue: "Mainhall",
    otherVenue: "",
    presidentName: "",
    presidentTel: "",
    ticName: "",
    ticTel: "",
    streaming: false,
    projector: false,
    smartboard: false,
    ledwall: false,
    lightings: false,
    videoProduction: false,
    vpCommonFlags: false,
    vpCommonLamp: false,
    vpCommonReligious: false,
    vpScreensaver: false,
    vpLoopsDancing: false,
    vpLoopsMusic: false,
    vpSpeechesPrincipal: false,
    vpSpeechesTIC: false,
    vpSpeechesPresident: false,
    vpSpeechesSecretary: false,
    vpSpeechesVP: false,
    vpSpeechesOthers: "",
    vpVideoOther: "",
    termsAgreed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;

    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAgreed) {
      alert("You must agree to the terms and policies before submitting.");
      return;
    }
    setShowLetter(true);
  };

  const handlePrint = () => {
    const printContents = document.getElementById("printable-letter")?.innerHTML;
    if (!printContents) return;

    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // reload to reset React app state
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 w-[600px] max-h-[85vh] overflow-y-auto rounded-lg p-6 relative mt-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-700 dark:text-gray-300"
          onClick={onClose}
        >
          ✕
        </button>

        {!showLetter ? (
          <>
            <h2 className="text-2xl font-bold mb-6">{`${title} Request`}</h2>
            <h2 className="text-1/2xl text-red-600 mb-6">Kindly note that this is a request form only. Confirmation of the request will be handled by the members of the society.</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Event Name + Date */}
              <div>
                <label className="block text-sm font-medium">Event Name</label>
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>

              {/* Society */}
              <div>
                <label className="block text-sm font-medium">Society</label>
                <input
                  type="text"
                  name="society"
                  value={formData.society}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>

              {/* Venue */}
              <div>
                <label className="block text-sm font-medium">Venue</label>
                <select
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                >
                  <option>Mainhall</option>
                  <option>Auditorium</option>
                  <option>Other</option>
                </select>
                {formData.venue === "Other" && (
                  <input
                    type="text"
                    name="otherVenue"
                    placeholder="Specify venue"
                    value={formData.otherVenue}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2 mt-2"
                  />
                )}
              </div>

              {/* Contacts */}
              <div>
                <p className="font-semibold">President (Name & Number)</p>
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    name="presidentName"
                    placeholder="Name"
                    value={formData.presidentName}
                    onChange={handleChange}
                    className="flex-1 border rounded-md p-2"
                  />
                  <input
                    type="tel"
                    name="presidentTel"
                    placeholder="Number"
                    value={formData.presidentTel}
                    onChange={handleChange}
                    className="flex-1 border rounded-md p-2"
                  />
                </div>
              </div>

              <div>
                <p className="font-semibold">TIC (Teacher-in-Charge)</p>
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    name="ticName"
                    placeholder="Name"
                    value={formData.ticName}
                    onChange={handleChange}
                    className="flex-1 border rounded-md p-2"
                  />
                  <input
                    type="tel"
                    name="ticTel"
                    placeholder="Number"
                    value={formData.ticTel}
                    onChange={handleChange}
                    className="flex-1 border rounded-md p-2"
                  />
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="font-semibold mb-2">Services Requested</p>
                <div className="space-y-2">
                  {/* Streaming */}
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="streaming"
                      checked={formData.streaming}
                      onChange={handleChange}
                      className="accent-blue-600"
                    />
                    <span>Streaming</span>
                  </label>
                  {formData.streaming && (
                    <div className="ml-6 border-l-2 border-gray-300 pl-4 space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="projector"
                          checked={formData.projector}
                          onChange={handleChange}
                          className="accent-blue-600"
                        />
                        <span>Projector</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="smartboard"
                          checked={formData.smartboard}
                          onChange={handleChange}
                          className="accent-blue-600"
                        />
                        <span>Smartboard</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="ledwall"
                          checked={formData.ledwall}
                          onChange={handleChange}
                          className="accent-blue-600"
                        />
                        <span>LED Wall</span>
                      </label>
                    </div>
                  )}

                  {/* Lightings */}
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="lightings"
                      checked={formData.lightings}
                      onChange={handleChange}
                      className="accent-blue-600"
                    />
                    <span>Lightings</span>
                  </label>

                  {/* Video Production */}
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="videoProduction"
                      checked={formData.videoProduction}
                      onChange={handleChange}
                      className="accent-blue-600"
                    />
                    <span>Video Production</span>
                  </label>
                  {formData.videoProduction && (
                    <div className="ml-6 border-l-2 border-gray-300 pl-4 space-y-3">
                      {/* Common Videos */}
                      <div>
                        <p className="font-medium">Common Videos</p>
                        <div className="space-y-1">
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="vpCommonFlags"
                              checked={formData.vpCommonFlags}
                              onChange={handleChange}
                              className="accent-blue-600"
                            />
                            <span>Flags Animation</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="vpCommonLamp"
                              checked={formData.vpCommonLamp}
                              onChange={handleChange}
                              className="accent-blue-600"
                            />
                            <span>Oil Lamp</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="vpCommonReligious"
                              checked={formData.vpCommonReligious}
                              onChange={handleChange}
                              className="accent-blue-600"
                            />
                            <span>Religious Observances</span>
                          </label>
                        </div>
                      </div>

                      {/* Screensaver */}
                      <div>
                        <p className="font-medium">Screensaver</p>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="vpScreensaver"
                            checked={formData.vpScreensaver}
                            onChange={handleChange}
                            className="accent-blue-600"
                          />
                          <span>Screensaver</span>
                        </label>
                      </div>

                      {/* Loops for Entertainment */}
                      <div>
                        <p className="font-medium">Loops for Entertainment</p>
                        <div className="space-y-1">
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="vpLoopsDancing"
                              checked={formData.vpLoopsDancing}
                              onChange={handleChange}
                              className="accent-blue-600"
                            />
                            <span>Dancing</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="vpLoopsMusic"
                              checked={formData.vpLoopsMusic}
                              onChange={handleChange}
                              className="accent-blue-600"
                            />
                            <span>Music</span>
                          </label>
                        </div>
                      </div>

                      {/* Speeches */}
                      <div>
                        <p className="font-medium">Speeches</p>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { name: "vpSpeechesPrincipal", label: "Principal" },
                            { name: "vpSpeechesTIC", label: "Teacher in Charge" },
                            { name: "vpSpeechesPresident", label: "President" },
                            { name: "vpSpeechesSecretary", label: "Secretary" },
                            { name: "vpSpeechesVP", label: "Vice President" },
                          ].map((item) => (
                            <label key={item.name} className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                name={item.name}
                                checked={(formData as any)[item.name]}
                                onChange={handleChange}
                                className="accent-blue-600"
                              />
                              <span>{item.label}</span>
                            </label>
                          ))}

                          {/* Others speech as text input */}
                          <input
                            type="text"
                            name="vpSpeechesOthers"
                            placeholder="Other speeches (specify)"
                            value={formData.vpSpeechesOthers as any}
                            onChange={handleChange}
                            className="border rounded-md p-2 col-span-2"
                          />
                        </div>
                      </div>

                      {/* Other Video Production */}
                      <div>
                        <p className="font-medium">Other Video Production</p>
                        <textarea
                          name="vpVideoOther"
                          placeholder="Explain the requested video in full detail"
                          value={(formData as any).vpVideoOther || ""}
                          onChange={handleChange}
                          className="w-full border rounded-md p-2"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Terms */}
              <label className="block">
                <input
                  type="checkbox"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                />{" "}
                I agree to the terms and policy
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
              >
                Submit & Preview
              </button>
            </form>
          </>
        ) : (
          <>
            {showLetter && (
              <>
                <h2 className="text-2xl font-bold mb-4">Preview Request Letter</h2>
                <div
                  id="printable-letter"
                  className="border p-6 rounded-md bg-gray-50 text-black whitespace-pre-line text-sm leading-relaxed"
                >
                  <p>{`Date: ${new Date().toLocaleDateString()}`}</p>

                  <p className="mt-4">To whom it may concern,</p>

                  <p className="mt-2">
                    We, the {formData.society}, hereby request your assistance and approval to conduct the event "{formData.eventName}" scheduled on {formData.eventDate} at {formData.venue === "Other" ? formData.otherVenue : formData.venue}. The following persons are responsible for this event:
                  </p>

                  <ul className="list-disc ml-6 mt-2">
                    <li>President: {formData.presidentName} ({formData.presidentTel})</li>
                    <li>Teacher-in-Charge: {formData.ticName} ({formData.ticTel})</li>
                  </ul>

                  {/* Services */}
                  <p className="mt-4 font-semibold">Requested Services:</p>
                  <div className="ml-6 space-y-2">
                    {formData.streaming && (
                      <p>
                        <strong>Streaming:</strong>{" "}
                        {["projector", "smartboard", "ledwall"]
                          .filter((s) => (formData as any)[s])
                          .map((s) =>
                            s === "ledwall" ? "LED Wall" : s.charAt(0).toUpperCase() + s.slice(1)
                          )
                          .join(", ")}
                      </p>
                    )}
                    {formData.lightings && <p><strong>Lightings</strong></p>}

                    {formData.videoProduction && (
                      <>
                        <p><strong>Video Production:</strong></p>
                        <div className="ml-4 space-y-1">
                          {formData.vpCommonFlags && <p>- Flags Animation</p>}
                          {formData.vpCommonLamp && <p>- Oil Lamp</p>}
                          {formData.vpCommonReligious && <p>- Religious Observances</p>}
                          {formData.vpScreensaver && <p>- Screensaver</p>}
                          {(formData.vpLoopsDancing || formData.vpLoopsMusic) && (
                            <p>
                              <strong>Entertainment Loops:</strong>{" "}
                              {[formData.vpLoopsDancing && "Dancing", formData.vpLoopsMusic && "Music"]
                                .filter(Boolean)
                                .join(", ")}
                            </p>
                          )}
                          {(formData.vpSpeechesPrincipal || formData.vpSpeechesTIC || formData.vpSpeechesPresident || formData.vpSpeechesSecretary || formData.vpSpeechesVP || formData.vpSpeechesOthers) && (
                            <p>
                              <strong>Speeches:</strong>{" "}
                              {[
                                formData.vpSpeechesPrincipal && "Principal",
                                formData.vpSpeechesTIC && "TIC",
                                formData.vpSpeechesPresident && "President",
                                formData.vpSpeechesSecretary && "Secretary",
                                formData.vpSpeechesVP && "Vice President",
                              ]
                                .filter(Boolean)
                                .join(", ")}
                              {formData.vpSpeechesOthers && `, ${formData.vpSpeechesOthers}`}
                            </p>
                          )}
                          {formData.vpVideoOther && (
                            <p><strong>Other Video:</strong> {formData.vpVideoOther}</p>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  <p className="mt-6">
                    We kindly request your approval and support for this event. Thank you for your consideration.
                  </p>

                  {/* Signature lines */}
                  <div className="mt-8 flex justify-between">
                    <div>
                      <p>_________________________</p>
                      <p>President</p>
                    </div>
                    <div>
                      <p>_________________________</p>
                      <p>Teacher-in-Charge</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <button
                    onClick={handlePrint}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  >
                    Download / Print
                  </button>
                  <button
                    onClick={() => setShowLetter(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BackendForm;

