/* eslint-disable arrow-parens */
import React, { Fragment, ReactNode, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// Icons
import { XMarkIcon } from '@heroicons/react/24/outline';

// Types
type AppModalProps = {
  open: boolean;
  onClose: Function;
  children: ReactNode;
  width?: string;
  overflowClosed?: boolean;
  xIcon?: boolean;
  headerBgColor?: string;
  headerColor?: string;
  headerText?: string;
  IconHeader?: any;
};
// "w-1/5" | "w-1/4" | "w-1/3" | "w-1/2" | "w-4/6" | "w-9/12" | "w-4/5" | "w-10/12";
const AppModal = ({
  xIcon,
  IconHeader,
  headerText,
  headerBgColor,
  headerColor,
  open,
  onClose,
  children,
  width,
  overflowClosed,
}: AppModalProps) => {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-[900] inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={overflowClosed ? e => onClose(e) : () => {}}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-primary bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={`inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle ${
                headerText ? 'p-0' : 'p-4 md:p-6'
              } ${width}`}
            >
              {/* Header */}
              {headerText && (
                <div className={`h-14 p-4 ${headerBgColor} ${headerColor} w-full flex gap-2`}>
                  {IconHeader ? <IconHeader className="w-5" /> : null}
                  <span>{headerText}</span>
                </div>
              )}

              {/* XIcon */}
              {xIcon && (
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className={` ${
                      headerText
                        ? `bg-transparent ${headerColor}`
                        : 'bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none'
                    } `}
                    onClick={e => onClose(e)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              )}
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

AppModal.defaultProps = {
  headerBgColor: 'bg-secondary',
  headerColor: 'text-white',
  width: 'lg:w-1/4 md:w-1/2 sm:w-1/2 w-full',
  overflowClosed: false,
  xIcon: true,
  IconHeader: '',
  headerText: '',
};

export default AppModal;
