import React, { useState } from "react";
import { motion } from "framer-motion";

function LastContent() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [notif, setNotif] = useState(false);

  const validate = () => {
    const newError = {};
    let isValid = true;
    if (name.trim() === "") {
      newError.name = "Name Can not Be Empty";
      isValid = false;
    }
    setErrors(newError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setNotif(true);
        setTimeout(() => {
          setNotif(false);
        }, 2000);
        setName("");
      }, 1000);
    }
  };
  return (
    <>
      <motion.div
        className="gap-9 flex justify-center items-center flex-row flex-wrap p-28 max-sm:p-6 max-md:px-20"
        initial={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-7xl max-sm:text-5xl font-bold">
          Stay Connected With Me
        </h1>
        <h1>
          Join the creative Portofolio by subscribing to my newsletter. Let the
          inspiration rain on you.
        </h1>
        <div className="flex w-[100%] flex-row flex-wrap justify-center gap-3">
          <input
            required
            type="email"
            placeholder="Name@gmail.com"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input border-black input-bordered w-full max-w-xs"
          />
          {!loading ? (
            <>
              <button
                onClick={handleSubmit}
                className="w-auto bg-black text-white btn btn-outline "
              >
              Subscribe
                {notif ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 ml-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </>
                ) : (
                  ""
                )}
              
              </button>
            </>
          ) : (
            <>
              <button className="w-auto bg-black text-white" disabled>
                Subscribe
                <svg
                  className="bg-white animate-spin h-5 w-5 ml-3 ..."
                  viewBox="0 0 24 24"
                ></svg>
              </button>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default LastContent;
