import { FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdDelete, MdEdit } from 'react-icons/md';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* CTA section */}
      <div className="px-6 pt-14 lg:px-8">
        <div className="max-w-2xl py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to Vaultly
            </h1>
            <h2 className="mt-6 text-2xl text-gray-700">
              The Simplest Way to Manage Your Data
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform how you handle information with our intuitive CRUD app. Vaultly
              makes it easy to Create, Read, Update, and Delete data with just a few
              clicks.
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <Link
                to="/register"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-all"
              >
                Get started
              </Link>

              <a
                href="#features"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <section className="text-gray-600" id="features">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:h-32 sm:mr-10">
              <MdAddCircleOutline className="size-10 sm:size-16" />
            </div>
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                Create
              </h2>
              <p className="text-base leading-relaxed">
                Effortlessly add new data entries with our intuitive creation tools.
                Whether you're inputting new records or generating content, our
                streamlined process ensures accuracy and efficiency.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">Read</h2>
              <p className="text-base leading-relaxed">
                Quickly access and review existing information with our powerful search
                and filter options. Our user-friendly interface provides clear, organized
                views of your data, making it easy to find exactly what you need.
              </p>
            </div>
            <div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
              <FaList className="size-10 sm:size-16" />
            </div>
          </div>

          <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:h-32 sm:mr-10">
              <MdEdit className="size-10 sm:size-16" />
            </div>
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                Update
              </h2>
              <p className="text-base leading-relaxed">
                Keep your data current with simple, effective editing capabilities. Update
                records or modify content in real time, ensuring your information remains
                relevant and accurate.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mx-auto lg:w-3/5 sm:flex-row">
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                Delete
              </h2>
              <p className="text-base leading-relaxed">
                Easily remove outdated or incorrect data with our secure deletion process.
                Maintain the integrity of your dataset while ensuring that obsolete
                entries are efficiently cleared away.
              </p>
            </div>
            <div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
              <MdDelete className="size-10 sm:size-16" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                <p className="leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                  quidem veritatis exercitationem corporis perferendis fugiat culpa omnis
                  enim, maiores ab, totam minima, magnam temporibus facere fuga! Error
                  atque incidunt culpa.
                </p>
                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded" />
                <h2 className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font">
                  Jessica M.
                </h2>
                <p className="text-gray-500">Project Manager</p>
              </div>
            </div>

            <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                <p className="leading-relaxed">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                  dolore labore commodi ipsam adipisci saepe, quas quibusdam minus magni
                  facere nisi corrupti cumque eligendi laborum sequi? Iste, sunt? Aut,
                  saepe!
                </p>
                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded" />
                <h2 className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font">
                  David R
                </h2>
                <p className="text-gray-500">Small Business Owner</p>
              </div>
            </div>

            <div className="p-4 lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi neque
                  repellendus praesentium aliquam illo quam fugiat esse tenetur aperiam
                  eaque deleniti molestias exercitationem laborum, excepturi assumenda ea
                  cupiditate, nisi vitae.
                </p>
                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded" />
                <h2 className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font">
                  Emma L.
                </h2>
                <p className="text-gray-500">Freelancer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="relative text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              Contact Us
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Our support team is here for you. Reach out to us with any questions or
              feedback.
            </p>
          </div>
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <div className="flex flex-wrap -m-2">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label htmlFor="email" className="text-sm leading-7 text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label htmlFor="message" className="text-sm leading-7 text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <button className="flex px-8 py-2 mx-auto text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
