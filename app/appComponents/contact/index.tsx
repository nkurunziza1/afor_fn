import React from "react";
import { Send } from "lucide-react";


const Contact = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg">
          <h1 className="text-2xl font-bold sm:text-3xl">Get in Touch</h1>
          <p className="mt-4 text-gray-500">
            Fill out the form to send us a message.
          </p>

          <form action="#" className="mt-8 space-y-4">
            <div>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="tel"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                rows={4}
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className=" flex text-xl  items-center gap-4 rounded-lg w-[50%] bg-primary px-5 py-3  font-serif font-medium text-white"
            >
              Message us <Send />
            </button>
          </form>
        </div>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Contact;
