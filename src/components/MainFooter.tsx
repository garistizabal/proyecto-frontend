import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const MainFooter = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-screen-xl px-4 pt-10 pb-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:gap-32">
          <div className="max-w-sm mx-auto lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              Experience the simplicity and efficiency of Vaultly. Sign up now to start
              managing your data like never before!
            </p>

            <div className="flex justify-center gap-4 mt-6 lg:justify-start">
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>

                <FaFacebook className="size-6" />
              </a>

              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>

                <FaInstagram className="size-6" />
              </a>

              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>

                <FaXTwitter className="size-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
            <div>
              <strong className="font-medium text-gray-900"> About </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    Careers
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    History
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    Our Team
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Support </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    FAQs
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    Contact
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Legal </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-16 border-t border-gray-100">
          <p className="text-center text-gray-500 text-xs/relaxed">
            © Vaultly {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
