import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import PropertyGallery from '../cards/property/PropertyGallery.tsx';
import PropertyDetails from '../cards/property/PropertyDetails.tsx';
import PropertyContactForm from '../cards/property/PropertyContactForm.tsx';
import PropertyShare from '../cards/property/PropertyShare.tsx';
import PropertyReferral from '../cards/property/PropertyReferral.tsx';
import PropertyAmenities from '../cards/property/PropertyAmenities.tsx';
import PropertyLocation from '../cards/property/PropertyLocation.tsx';
import type { Property } from '../types/Property.ts';

type PropertyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  property: Property;
};

const PropertyModal = ({ isOpen, onClose, property }: PropertyModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
              <div className="px-6 py-4">
                <div className="flex justify-between items-start mb-6">
                  <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900">
                    {property.title}
                  </Dialog.Title>
                  <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Main Content */}
                  <div className="md:col-span-2 space-y-6">
                    <PropertyGallery />
                    <PropertyDetails />
                    {property.documentUrl && (
                      <a
                        href={property.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline text-sm mt-2 inline-block"
                      >
                        📄 View Property Document
                      </a>
                    )}
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-4">
                    <PropertyAmenities />
                    <PropertyLocation />
                    <PropertyContactForm />
                    <PropertyShare />
                    <PropertyReferral />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row-reverse gap-2">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
                  Generate Proposal
                </button>
                <button
                  className="w-full sm:w-auto bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 text-sm"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PropertyModal;
