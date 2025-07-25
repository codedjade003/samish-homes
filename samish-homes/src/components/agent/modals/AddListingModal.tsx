import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faDollarSign,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { XMarkIcon } from '@heroicons/react/24/solid';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddListingModal({ isOpen, onClose }: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4 text-center">
            <Dialog.Panel className="relative bg-white rounded-lg text-left shadow-xl transform transition-all sm:max-w-xl w-full">
              <div className="bg-white px-6 pt-6 pb-4 sm:px-8 sm:pt-8 sm:pb-6">
                {/* Header */}
                <div className="sm:flex sm:items-start gap-4 mb-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
                    <FontAwesomeIcon icon={faHome} className="text-indigo-600" />
                  </div>
                  <div className="text-left">
                    <Dialog.Title className="text-xl font-semibold text-gray-900">
                      Add New Listing
                    </Dialog.Title>
                    <p className="mt-1 text-sm text-gray-500">
                      Fill out the form below to add a new property listing.
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form className="space-y-6 text-sm">
                  {/* Property Address */}
                  <div>
                    <label htmlFor="address" className="block font-medium text-gray-700 mb-1">
                      Property Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="e.g., 123 Banana Island Rd, Ikoyi"
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Type and Price */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="type" className="block font-medium text-gray-700 mb-1">
                        Property Type
                      </label>
                      <select
                        id="type"
                        name="type"
                        className="block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Land</option>
                        <option>Industrial</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="price" className="block font-medium text-gray-700 mb-1">
                        Asking Price (₦)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                          <FontAwesomeIcon icon={faDollarSign} />
                        </div>
                        <input
                          type="text"
                          id="price"
                          name="price"
                          placeholder="120,000,000"
                          className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Beds, Baths, Plot Size */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                    <label htmlFor="beds" className="block font-medium text-gray-700 mb-1">
                    Bedrooms
                    </label>
                    <input
                    type="number"
                    id="beds"
                    name="beds"
                    placeholder="e.g. 4"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="baths" className="block font-medium text-gray-700 mb-1">
                    Bathrooms
                    </label>
                    <input
                    type="number"
                    id="baths"
                    name="baths"
                    placeholder="e.g. 3"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="area" className="block font-medium text-gray-700 mb-1">
                    Plot Size (sqft)
                    </label>
                    <input
                    type="number"
                    id="area"
                    name="area"
                    placeholder="e.g. 3500"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      placeholder="Short description of the property..."
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Owner Info */}
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">Owner Information</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <input
                          type="email"
                          placeholder="Email"
                          className="pl-10 pr-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full"
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                          <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="pl-10 pr-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full"
                        />
                      </div>
                    </div>
                  </div>       
                    <div className="sm:col-span-6">
                        <label htmlFor="propertyDoc" className="block text-sm font-medium text-gray-700 mb-1">
                            Attach Property Document (optional)
                        </label>
                        <input
                            type="file"
                            name="propertyDoc"
                            id="propertyDoc"
                            accept=".pdf,.doc,.docx,.txt"
                            className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm file:mr-4 file:py-2 file:px-4
                                    file:rounded-md file:border-0 file:text-sm file:font-semibold
                                    file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                        />
                        <p className="mt-1 text-xs text-gray-500">Supported formats: PDF, DOCX, TXT</p>
                    </div>
                </form>
              </div>

              {/* Footer Buttons */}
              <div className="bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white rounded-md font-medium shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save Listing
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>

              {/* Optional close icon top right */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
