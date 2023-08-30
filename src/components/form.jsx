import { Link } from "react-router-dom";

const Form = ({formData , handleChange , handleSubmit}) => {
    return ( 
        <div className="max-w-md mx-auto mt-8 p-6 rounded md:shadow-md lg:shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-inherit mt-1 px-4 py-2 w-full border border-black rounded-md focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-inherit mt-1 px-4 py-2 w-full border border-black rounded-md focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-inherit mt-1 px-4 py-2 w-full border border-black rounded-md focus:ring focus:ring-blue-200"
            rows="4"
            required
          ></textarea>
        </div>
        <Link
          to={'/'}
          type="submit"
          className="justify-center flex w-full btn border border-gray-700 text-gray-700 px-4 py-2 rounded mr-4"
        >
          Send Email
        </Link>
      </form>
    </div>
     );
}
 
export default Form;