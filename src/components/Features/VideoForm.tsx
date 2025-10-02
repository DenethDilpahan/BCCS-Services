"use client";

import { useState } from "react";

interface RequestFormProps {
  onClose: () => void;
  title: string;
}

const VideoForm: React.FC<RequestFormProps> = ({ onClose, title }) => {
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
    termsAgreed: false,
    videoSentence: "",
    videoTheme: "",
    videoFullExplanation: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;
    const value = type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
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
    window.location.reload();
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
              {/* Event Info */}
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

              {/* Video Services */}
              <div className="mt-4">
                <p className="font-semibold mb-2">Video Production Details</p>
                <input
                  type="text"
                  name="videoSentence"
                  placeholder="Explain your video in one sentence"
                  value={formData.videoSentence}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 mb-2"
                  required
                />
                <input
                  type="text"
                  name="videoTheme"
                  placeholder="Theme"
                  value={formData.videoTheme}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 mb-2"
                  required
                />
                <textarea
                  name="videoFullExplanation"
                  placeholder="Provide a full explanation of the video"
                  value={formData.videoFullExplanation}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 h-40"
                  required
                />
              </div>

              {/* Terms */}
              <label className="block mt-4">
                <input
                  type="checkbox"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  className="mr-2"
                />
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

                  <p className="mt-4 font-semibold">Video Production Details:</p>
                  <div className="ml-6 space-y-1">
                    <p><strong>One Sentence:</strong> {formData.videoSentence}</p>
                    <p><strong>Theme:</strong> {formData.videoTheme}</p>
                    <p><strong>Full Explanation:</strong> {formData.videoFullExplanation}</p>
                  </div>

                  <p className="mt-6">
                    We kindly request your approval and support for this video production. Thank you for your consideration.
                  </p>

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

export default VideoForm;
