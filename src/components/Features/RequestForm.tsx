"use client";

import { useState } from "react";

interface RequestFormProps {
  onClose: () => void;
  title: string;
}

const RequestForm: React.FC<RequestFormProps> = ({ onClose, title }) => {
  const [formData, setFormData] = useState({
    societyName: "",
    presidentName: "",
    presidentTel: "",
    secretaryName: "",
    secretaryTel: "",
    additionalDetails: "",
  });

  const [showLetter, setShowLetter] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLetter(true);

    console.log("Send to backend:", formData);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 w-[600px] max-h-[85vh] overflow-y-auto rounded-lg p-6 relative"
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name of the Society
                </label>
                <input
                  type="text"
                  name="societyName"
                  value={formData.societyName}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>

              <div>
                <p className="font-semibold">President Details</p>
                <div className="mt-2 space-y-2">
                  <input
                    type="text"
                    name="presidentName"
                    placeholder="Name"
                    value={formData.presidentName}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                  />
                  <input
                    type="tel"
                    name="presidentTel"
                    placeholder="Telephone Number"
                    value={formData.presidentTel}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                  />
                </div>
              </div>

              <div>
                <p className="font-semibold">Secretary Details</p>
                <div className="mt-2 space-y-2">
                  <input
                    type="text"
                    name="secretaryName"
                    placeholder="Name"
                    value={formData.secretaryName}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                  />
                  <input
                    type="tel"
                    name="secretaryTel"
                    placeholder="Telephone Number"
                    value={formData.secretaryTel}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Additional Details
                </label>
                <textarea
                  name="additionalDetails"
                  rows={4}
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-primary/90"
              >
                Generate Letter
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Preview Letter</h2>
            <div className="border p-4 rounded-md bg-gray-50 text-black">
              <p>To whom it may concern,</p>
              <p className="mt-4">
                This is to formally request services on behalf of{" "}
                <strong>{formData.societyName}</strong>.
              </p>
              <p className="mt-2">
                The President of the society is{" "}
                <strong>{formData.presidentName}</strong> (Tel:{" "}
                {formData.presidentTel}), and the Secretary is{" "}
                <strong>{formData.secretaryName}</strong> (Tel:{" "}
                {formData.secretaryTel}).
              </p>
              {formData.additionalDetails && (
                <p className="mt-2">{formData.additionalDetails}</p>
              )}
              <p className="mt-6">Sincerely,</p>
              <p>[Signature]</p>
            </div>

            <div className="mt-6 flex gap-4">
              <button
                onClick={handlePrint}
                className="bg-green-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-700"
              >
                Print / Save as PDF
              </button>
              <button
                onClick={() => setShowLetter(false)}
                className="bg-gray-400 text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-500"
              >
                Back to Edit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RequestForm;
